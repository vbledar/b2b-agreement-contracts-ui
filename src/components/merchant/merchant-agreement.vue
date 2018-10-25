<template>
  <v-layout row wrap>
    <v-flex xs12>
      <p class="subheading">
        Merchant Agreement
      </p>
    </v-flex>
    <v-flex xs12>
      <v-divider class="mb-3"></v-divider>
    </v-flex>
    <v-flex xs12 v-if="!wallet">
      <p class="body-1">
        Please, create a wallet to request Merchant Agreements
      </p>
    </v-flex>
    <v-flex xs12 v-if="wallet">
      <v-btn flat small @click="createMerchantAgreement">
        <v-icon left>add_circle</v-icon>
        Request Merchant Agreement
      </v-btn>
    </v-flex>
    <v-flex xs12>
      <p class="body-1 mt-3">
        Merchant Agreements List
      </p>
    </v-flex>
    <v-flex xs12>
      <v-data-table :headers="headers" :items="merchantAgreements" class="elevation-1">
        <template slot="headerCell" slot-scope="props">
          <v-tooltip bottom>
        <span slot="activator">
          {{ props.header.text }}
        </span>
            <span>
          {{ props.header.text }}
        </span>
          </v-tooltip>
        </template>
        <template slot="items" slot-scope="props">
          <td>{{ props.item.mrcAddr }}</td>
          <td>{{ props.item.prvAddr }}</td>
          <td>{{ props.item.mrcAgrAddr }}</td>
          <td>{{ props.item.fee }}</td>
          <td>{{ props.item.state }}</td>
          <td>
            <v-tooltip bottom>
              <v-btn slot="activator" v-if="props.item.state === 'PROPOSED'" flat icon color="primary" @click="startProposalAcceptance(props.item)">
                <v-icon>insert_drive_file</v-icon>
              </v-btn>
              <span>Accept proposal</span>
            </v-tooltip>
          </td>
        </template>
      </v-data-table>

      <merchant-acceptance
        v-if="acceptanceProcessStarted"
        v-bind:merchantAgreement="merchantAgreementSelected"
        v-on:proposalAcceptanceCancelled="proposalAcceptanceCancelled"
        v-on:acceptanceProcessFinished="acceptanceProcessFinished"
      ></merchant-acceptance>
    </v-flex>
  </v-layout>
</template>

<script>
  import Web3 from 'web3'
  import { mapGetters } from 'vuex'
  import MerchantAcceptance from "./merchant-acceptance";
  export default {
    name: "merchant-agreement",
    components: {MerchantAcceptance},
    computed: {
      ...mapGetters({
        'wallet': 'merchant/getWallet',
        'mrcAgrIdxAddr': 'contracts/getMrcAgrIdxAddr',
        'mrcAgrIdxCnt': 'contracts/getMrcAgrIdxCnt',
        'mrcAgrCnt': 'contracts/getMrcAgrCnt',
        'mrcIdxAddr': 'contracts/getMrcIdxAddr',
        'mrcIdxCnt': 'contracts/getMrcIdxCnt',
        'mrcCnt': 'contracts/getMrcCnt'
      })
    },
    watch: {
      wallet: function (newValue, oldValue) {
        if (newValue !== oldValue) {
          this.loadMerchantAgreements()
        }
      }
    },
    data: () => {
      return {
        merchantAgreements: [],
        headers: [
          { text: 'Merchant', align: 'left', sortable: false, value: 'mrcAddr' },
          { text: 'Provider', align: 'left', sortable: false, value: 'prvAddr' },
          { text: 'Contract', align: 'left', sortable: false, value: 'mrcAgrAddr' },
          { text: 'Fee', align: 'left', sortable: false, value: 'fee' },
          { text: 'State', align: 'left', sortable: false, value: 'state' },
          { text: '', value: '' }
        ],
        acceptanceProcessStarted: false,
        merchantAgreementSelected: null
      }
    },
    methods: {
      createMerchantAgreement: function () {
        let cmp = this
        let web3 = new Web3('http://localhost:8545')
        let mrcAgrIdxInstance = new web3.eth.Contract(cmp.mrcAgrIdxCnt, cmp.mrcAgrIdxAddr)
        mrcAgrIdxInstance.methods.registerMerchantAgreement().send({
          from: cmp.wallet.address,
          gasPrice: '0x2000000000',
          gas: 6721975
        })
          .on('receipt', function (receipt) {
            // create merchant agreement record
            var mrcAgrRecord = {
              mrcAddr: receipt.events.MerchantAgreementRequested.returnValues._merchant,
              mrcAgrAddr: receipt.events.MerchantAgreementRequested.returnValues._merchantAgreementAddress,
              state: 'REQUESTED'
            }
            // retrieve state of merchant agreement
            let mrcAgrInstance = new web3.eth.Contract(cmp.mrcAgrCnt, mrcAgrRecord.mrcAgrAddr)
            let state = mrcAgrInstance.methods.state().call({
              from: cmp.wallet.address
            }, function (error, result) {
              if (!error) {
                mrcAgrRecord.state = result == 0 ? 'REQUESTED' : (result == 1 ? 'PROPOSED' : (result == 2 ? 'ACCEPTED' : 'UNKNOWN'))
                cmp.merchantAgreements.unshift(mrcAgrRecord)
              }
            })
          })
      },
      loadMerchantAgreements: function () {
        let cmp = this
        cmp.merchantAgreements = []
        let web3 = new Web3('http://localhost:8545')
        let mrcAgrIdxInstance = new web3.eth.Contract(cmp.mrcAgrIdxCnt, cmp.mrcAgrIdxAddr)
        mrcAgrIdxInstance.methods.getMerchantAgreementsOfMerchant(cmp.wallet.address).call({
          from: cmp.wallet.address
        }, function (error, result) {
          for (let address of result) {
            let mrcAgrInstance = new web3.eth.Contract(cmp.mrcAgrCnt, address)
            let data = mrcAgrInstance.methods.getData().call({
              from: cmp.wallet.address
            }, function (error, result) {
              if (!error) {
                var mrcAgrRecord = {
                  mrcAddr: result[0],
                  prvAddr: result[1],
                  state: result[2] == 0 ? 'REQUESTED' : (result[2] == 1 ? 'PROPOSED' : (result[2] == 2 ? 'ACCEPTED' : 'UNKNOWN')),
                  fee: result[3],
                  mrcAgrAddr: address
                }
                cmp.merchantAgreements.unshift(mrcAgrRecord)
              }
            })
          }
        })
      },
      startProposalAcceptance: function (address) {
        let cmp = this
        cmp.merchantAgreementSelected = address
        cmp.acceptanceProcessStarted = true
      },
      acceptanceProcessFinished: function () {
        let cmp = this
        cmp.merchantAgreementSelected = null
        cmp.acceptanceProcessStarted = false
        this.loadMerchantAgreements()
      },
      proposalAcceptanceCancelled: function () {
        let cmp = this
        cmp.merchantAgreementSelected = null
        cmp.acceptanceProcessStarted = false
      }
    },
    created: function () {
      if (this.wallet) {
        this.loadMerchantAgreements()
      }
    }
  }
</script>

<style scoped>

</style>

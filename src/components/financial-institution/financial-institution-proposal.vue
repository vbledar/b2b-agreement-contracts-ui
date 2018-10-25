<template>
  <v-container outline>
    <p class="body-1">
      Proposal Submission
    </p>
    <v-divider class="mb-3"></v-divider>

    <v-layout row wrap>
      <v-flex xs12>
        <v-layout row wrap>
          <v-flex xs12>
            <v-text-field label="Merchant Name" v-model="mrcName" readonly></v-text-field>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex xs12>
            <v-text-field label="Merchant Registration Number" v-model="mrcRegistrationNumber" readonly></v-text-field>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex xs12>
            <v-text-field label="Proposed Fee" v-model="fee" type="number"></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-btn flat small @click="submitProposal" color="primary">
              <v-icon>done</v-icon> Submit Proposal
            </v-btn>
            <v-btn flat small @click="proposalProcessCancelled" color="error">
              <v-icon>cancel</v-icon> Cancel
            </v-btn>
          </v-flex>
        </v-layout>

      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import Web3 from 'web3'
  import { mapGetters } from 'vuex'
  export default {
    name: "financial-institution-proposal",
    props: [
      'merchantAgreement'
    ],
    computed: {
      ...mapGetters({
        'wallet': 'provider/getWallet',
        'mrcAgrIdxAddr': 'contracts/getMrcAgrIdxAddr',
        'mrcAgrIdxCnt': 'contracts/getMrcAgrIdxCnt',
        'mrcAgrCnt': 'contracts/getMrcAgrCnt',
        'mrcIdxAddr': 'contracts/getMrcIdxAddr',
        'mrcIdxCnt': 'contracts/getMrcIdxCnt',
        'mrcCnt': 'contracts/getMrcCnt'
      })
    },
    data: () => {
      return {
        fee: 5,
        mrcName: null,
        mrcRegistrationNumber: null
      }
    },
    methods: {
      submitProposal: function () {
        let cmp = this
        let web3 = new Web3('http://localhost:8545')
        let mrcAgrIdxInstance = new web3.eth.Contract(cmp.mrcAgrIdxCnt, cmp.mrcAgrIdxAddr)
        mrcAgrIdxInstance.methods.providerProposal(
          cmp.wallet.address,
          cmp.fee,
          cmp.merchantAgreement.mrcAgrAddr
        ).send({
          from: cmp.wallet.address,
          gasPrice: '0x2000000000',
          gas: 6721975
        })
          .on('receipt', function (receipt) {
            cmp.$emit('proposalProcessFinished')
          })
      },
      proposalProcessCancelled: function () {
        this.$emit('proposalProcessCancelled')
      },
      loadMerchantInfo: function () {
        let cmp = this
        let web3 = new Web3('http://localhost:8545')
        let mrcIdxInstance = new web3.eth.Contract(cmp.mrcIdxCnt, cmp.mrcIdxAddr)
        mrcIdxInstance.methods.getMerchantContractListForMerchant(cmp.merchantAgreement.mrcAddr).call({
          from: cmp.wallet.address
        })
          .then(function (result) {
            let address = result[result.length - 1]
            let mrcInstance = new web3.eth.Contract(cmp.mrcCnt, address)
            mrcInstance.methods.name().call({
              from: cmp.wallet.address
            })
              .then(function (result) {
                cmp.mrcName = result
                return mrcInstance.methods.registrationNumber().call({
                  from: cmp.wallet.address
                })
              })
              .then(function (result) {
                cmp.mrcRegistrationNumber = result
              })
            // cmp.mrcName = result
            // return mrcInstance.registrationNumber().call({
            //   from: cmp.wallet.address
            // })
          })
          // .then(function (result) {
          //   cmp.mrcRegistrationNumber = result
          // })
      }
    },
    created: function () {
      this.loadMerchantInfo()
    }
  }
</script>

<style scoped>

</style>

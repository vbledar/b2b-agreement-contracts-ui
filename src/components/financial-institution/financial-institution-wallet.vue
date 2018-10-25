<template>
  <v-layout row wrap>
    <v-flex xs12>
      <p class="subheading">Wallet Management</p>
    </v-flex>
    <v-flex xs12>
      <v-divider class="mb-3"></v-divider>
    </v-flex>
    <v-flex xs12>
      <v-layout row wrap>
        <v-flex xs12 v-if="!wallet">
          <v-text-field label="Name" v-model="name"></v-text-field>
        </v-flex>
        <v-flex xs12 v-if="!wallet">
          <v-text-field label="Registration Number" v-model="registrationNumber"></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex xs12>
          <v-btn flat small @click="createWallet" v-if="!wallet">
            <v-icon left>add_circle</v-icon> Create Wallet
          </v-btn>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex xs12 v-if="wallet">
      <v-text-field label="Wallet Address" v-model="wallet.address.toUpperCase()"></v-text-field>
    </v-flex>
    <v-flex xs12 v-if="wallet">
      <v-text-field label="Wallet Private" v-model="wallet.privateKey.toUpperCase()"></v-text-field>
    </v-flex>
  </v-layout>
</template>

<script>
  import Web3 from 'web3'
  import { mapGetters } from 'vuex'
  export default {
    name: "financial-institution-wallet",
    computed: {
      ...mapGetters({
        'wallet': 'provider/getWallet',
        'finInsIdxAddr': 'contracts/getFinInsIdxAddr',
        'finInsIdxCnt': 'contracts/getFinInsIdxCnt'
      })
    },
    data: () => {
      return {
        name: 'Financial Institution',
        registrationNumber: '987654321DJU'
      }
    },
    methods: {
      createWallet: function () {
        let cmp = this
        let web3 = new Web3('http://localhost:8545')
        let wallet = web3.eth.accounts.wallet.add('0x4ef99e6244254f4a440f8566e690a3e1aa6d36733b43de4940a9c04a69a829e6')
        let finInsIdxInstance = new web3.eth.Contract(cmp.finInsIdxCnt, cmp.finInsIdxAddr)
        const legalInformation = [
          web3.utils.utf8ToHex(cmp.name),
          web3.utils.utf8ToHex(cmp.registrationNumber)
        ]
        finInsIdxInstance.methods.registerPaymentProvider(legalInformation).send({
          from: wallet.address,
          gasPrice: '0x2000000000',
          gas: 6721975
        })
          .on('receipt', function (receipt) {
            cmp.$store.dispatch('provider/setWallet', wallet)
          })
      }
    }
  }
</script>

<style scoped>

</style>

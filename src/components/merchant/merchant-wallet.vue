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
    name: "merchant-wallet",
    computed: {
      ...mapGetters({
        'wallet': 'merchant/getWallet',
        'mrcIdxAddr': 'contracts/getMrcIdxAddr',
        'mrcIdxCnt': 'contracts/getMrcIdxCnt'
      })
    },
    data: () => {
      return {
        name: 'Merchant',
        registrationNumber: '1234567890AD'
      }
    },
    methods: {
      createWallet: function () {
        let cmp = this
        let web3 = new Web3('http://localhost:8545')
        let wallet = web3.eth.accounts.wallet.add('0xfaa8c76d67f4ba69c57bf32acb77687a641b57aec35d7f2124b168a408f4f151')
        let mrcIdxInstance = new web3.eth.Contract(cmp.mrcIdxCnt, cmp.mrcIdxAddr)
        mrcIdxInstance.methods.registerMerchant(cmp.name, cmp.registrationNumber).send({
          from: wallet.address,
          gasPrice: '0x2000000000',
          gas: 6721975
        })
          .on('receipt', function (receipt) {
            cmp.$store.dispatch('merchant/setWallet', wallet)
          })
      }
    }
  }
</script>

<style scoped>

</style>

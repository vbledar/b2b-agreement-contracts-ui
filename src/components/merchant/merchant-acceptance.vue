<template>
  <v-container outline>
    <p class="body-1">
      Proposal Acceptance
    </p>
    <v-divider class="mb-3"></v-divider>

    <v-layout row wrap>
      <v-flex xs12>

        <v-layout row wrap>
          <v-flex xs12>
            <v-text-field label="Proposed Fee" v-model="fee" type="number" readonly></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-btn flat small @click="acceptProposal" color="primary">
              <v-icon>done</v-icon> Accept Proposal
            </v-btn>
            <v-btn flat small @click="proposalAcceptanceCancelled" color="error">
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
    name: "merchant-acceptance",
    props: [
      'merchantAgreement'
    ],
    computed: {
      ...mapGetters({
        'wallet': 'merchant/getWallet',
        'mrcAgrIdxAddr': 'contracts/getMrcAgrIdxAddr',
        'mrcAgrIdxCnt': 'contracts/getMrcAgrIdxCnt',
        'mrcAgrCnt': 'contracts/getMrcAgrCnt',
      })
    },
    data: () => {
      return {
        fee: 5
      }
    },
    methods: {
      acceptProposal: function () {
        let cmp = this
        let web3 = new Web3('http://localhost:8545')
        let mrcAgrInstance = new web3.eth.Contract(cmp.mrcAgrCnt, cmp.merchantAgreement.mrcAgrAddr)
        mrcAgrInstance.methods.merchantAccepted().send({
          from: cmp.wallet.address,
          gasPrice: '0x2000000000',
          gas: 6721975
        })
          .on('receipt', function (receipt) {
            console.log(receipt)
            cmp.$emit('acceptanceProcessFinished')
          })
      },
      proposalAcceptanceCancelled: function () {
        this.$emit('proposalAcceptanceCancelled')
      }
    }
  }
</script>

<style scoped>

</style>

<template>
    <v-container fluid>
      <merchant-wallet></merchant-wallet>

      <v-layout>
        <v-flex xs12 class="mt-5 mb-5"></v-flex>
      </v-layout>

      <merchant-agreement></merchant-agreement>
    </v-container>
</template>

<script>
  import MerchantWallet from "./merchant-wallet";
  import MerchantAgreement from "./merchant-agreement";
  export default {
    name: "merchant",
    components: {MerchantAgreement, MerchantWallet}
  }
</script>

<style scoped>

</style>

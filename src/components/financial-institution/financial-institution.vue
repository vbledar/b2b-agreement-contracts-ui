<template>
  <v-container fluid>
    <financial-institution-wallet></financial-institution-wallet>

    <v-layout>
      <v-flex xs12 class="mt-5 mb-5"></v-flex>
    </v-layout>

    <financial-institution-agreement></financial-institution-agreement>
  </v-container>
</template>

<script>
  import FinancialInstitutionWallet from "./financial-institution-wallet";
  import FinancialInstitutionAgreement from "./financial-institution-agreement";
  export default {
    name: "financial-institution",
    components: {FinancialInstitutionAgreement, FinancialInstitutionWallet}
  }
</script>

<style scoped>

</style>

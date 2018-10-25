<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-text-field label="WT Index Address" v-model="wtIdxAddr"></v-text-field>
      </v-flex>
      <v-flex xs12>
        <v-textarea outline name="wtIndexContract" label="WT Index Contract ABI" v-model="JSON.stringify(wtIdxCnt)"
        ></v-textarea>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12>
        <v-text-field label="Merchant Index Address" v-model="mrcIdxAddr"></v-text-field>
      </v-flex>
      <v-flex xs12>
        <v-textarea outline name="merchantIndexContract" label="Merchant Index Contract ABI" v-model="JSON.stringify(mrcIdxCnt)"
        ></v-textarea>
      </v-flex>
      <v-flex xs12>
        <v-textarea outline name="merchantContract" label="Merchant Contract ABI" v-model="JSON.stringify(mrcCnt)"
        ></v-textarea>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12>
        <v-text-field label="Financial Institution Index Address" v-model="finInsIdxAddr"></v-text-field>
      </v-flex>
      <v-flex xs12>
        <v-textarea outline name="financialInstitutionIndexContract" label="Financial Institution Contract ABI" v-model="JSON.stringify(finInsIdxCnt)"
        ></v-textarea>
      </v-flex>
      <v-flex xs12>
        <v-textarea outline name="financialInstitutionContract" label="Financial Institution Contract ABI" v-model="JSON.stringify(finInsCnt)"
        ></v-textarea>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12>
        <v-text-field label="Merchant Agreement Index Address" v-model="mrcAgrIdxAddr"></v-text-field>
      </v-flex>
      <v-flex xs12>
        <v-textarea outline name="merchantAgreementIndexContract" label="Merchant Agreement Index Contract ABI" v-model="JSON.stringify(mrcAgrIdxCnt)"
        ></v-textarea>
      </v-flex>
      <v-flex xs12>
        <v-textarea outline name="merchantAgreementContract" label="Merchant Agreement Contract ABI" v-model="JSON.stringify(mrcAgrCnt)"
        ></v-textarea>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import { mapGetters } from 'vuex';
  export default {
    name: "contract-admin",
    computed: {
      ...mapGetters({
        wtIdxCnt: 'contracts/getWtIdxCnt',
        wtIdxAddr: 'contracts/getWtIdxAddr',
        mrcIdxCnt: 'contracts/getMrcIdxCnt',
        mrcIdxAddr: 'contracts/getMrcIdxAddr',
        mrcCnt: 'contracts/getMrcCnt',
        finInsIdxCnt: 'contracts/getFinInsIdxCnt',
        finInsIdxAddr: 'contracts/getFinInsIdxAddr',
        finInsCnt: 'contracts/getFinInsCnt',
        mrcAgrIdxCnt: 'contracts/getMrcAgrIdxCnt',
        mrcAgrIdxAddr: 'contracts/getMrcAgrIdxAddr',
        mrcAgrCnt: 'contracts/getMrcAgrCnt'
      })
    }
  }
</script>

<style scoped>

</style>

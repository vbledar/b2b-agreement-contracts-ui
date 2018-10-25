import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import ContractAdministration from '@/components/admin/contract-admin'
import Merchant from '@/components/merchant/merchant'
import FinancialInstitution from '@/components/financial-institution/financial-institution'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/admin/contracts',
      name: 'ContractAdministration',
      component: ContractAdministration
    },
    {
      path: '/merchant',
      name: 'Merchant',
      component: Merchant
    },
    {
      path: '/finins',
      name: 'FinIns',
      component: FinancialInstitution
    }
  ]
})

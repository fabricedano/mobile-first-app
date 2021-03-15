import Vue from 'vue'
import Router from 'vue-router'
import Accueil from '../accueil/accueil.vue'
import EssentialData from '../essentialData/essentialData.vue'
import DetailTable from '../detailTable/detailTable.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'accueil',
      component: Accueil
    },
    {
      path: '/essentialData',
      name: 'essentialData',
      component: EssentialData
    },
    {
      path: '/detailTable',
      name: 'detailTable',
      component: DetailTable
    },
  ]
})
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Board from '@/components/Board'
import ContentDetail from '@/components/ContentDetail'
import Create from '@/components/Create'
import Guide1 from '@/components/Guide1'
import Guide2 from '@/components/Guide2'
import Guide3 from '@/components/Guide3'
import Guide4 from '@/components/Guide4'
import Guide5 from '@/components/Guide5'
import Guide6 from '@/components/Guide6'
import Guide7 from '@/components/Guide7'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/board/free',
      name: 'Board',
      component: Board
    },
    {
      path: '/board/free/detail/:id',
      name: 'ContentDetail',
      component: ContentDetail
    },
    {
      path: '/board/free/create/:id?',
      name: 'Create',
      component: Create
    },
    {
      path: '/guide1',
      name: 'Guide1',
      component: Guide1
    },
    {
      path: '/guide2',
      name: 'Guide2',
      component: Guide2
    },
    {
      path: '/guide3',
      name: 'Guide3',
      component: Guide3
    },
    {
      path: '/guide4',
      name: 'Guide4',
      component: Guide4
    },
    {
      path: '/guide5',
      name: 'Guide5',
      component: Guide5
    },
    {
      path: '/guide6',
      name: 'Guide6',
      component: Guide6
    },
    {
      path: '/guide7',
      name: 'Guide7',
      component: Guide7
    },
  ]
})

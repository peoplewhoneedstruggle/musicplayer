import Vue from 'vue'
import Router from 'vue-router'
import Recommend from 'components/recommend/recommend'
import Singer from 'components/song-list/song-list'
import Rank from 'components/rank/rank'
import Search from 'components/search/search'
import RankDetail from 'components/rank-detail/rank-detail'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/recommend'
  }, {
    path: '/recommend',
    name: '',
    component: Recommend,
    meta: {
      title: '推荐页面',
      show: true
    }
  }, {
    path: '/song-list',
    name: '',
    component: Singer,
    meta: {
      title: '歌单页面',
      show: true
    }
  }, {
    path: '/rank',
    name: '',
    component: Rank,
    meta: {
      title: '排行榜',
      show: true
    },
    children: [{
      path: ':id',
      component: RankDetail,
      meta: {
        title: '歌单详情',
        show: false
      }
    }]
  }, {
    path: '/search',
    name: '',
    component: Search,
    meta: {
      title: '搜索页面',
      show: true
    }
  }]
})

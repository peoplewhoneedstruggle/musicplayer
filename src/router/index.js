import Vue from 'vue'
import Router from 'vue-router'
import Recommend from 'components/recommend/recommend'
import Singer from 'components/song-list/song-list'
import Rank from 'components/rank/rank'
import Search from 'components/search/search'
import RankDetail from 'components/rank-detail/rank-detail'
import User from 'components/user/user'
import Login from 'components/login/login'
import PlayPage from 'components/play-page/play-page'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/user'
  }, {
    path: '/recommend',
    name: '',
    component: Recommend,
    meta: {
      title: '推荐页面',
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
    path: '/song-list',
    name: '',
    component: Singer,
    meta: {
      title: '歌单页面',
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
  }, {
    path: '/user',
    name: '',
    component: User,
    meta: {
      title: '用户界面',
      show: false
    }
  }, {
    path: '/login',
    name: '',
    component: Login,
    meta: {
      title: '登录页面',
      show: false
    }
  }, {
    path: '/play-page',
    name: '',
    component: PlayPage,
    meta: {
      title: '播放详情页',
      show: false
    },
    children: [{
      path: ':id',
      meta: {
        title: '歌单详情',
        show: false
      }
    }]
  } ]
})

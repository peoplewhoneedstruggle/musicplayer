<template>
  <div  class="parent-dom">
    <vue-scroll :ops="ops" >
      <div class="child-dom">
        <router-link to="/rank/2131">
        <div v-for="item in rank" class="rank" :key="item.id" @click=getListDetail(item.id) v-show="toggleShow">
          <img v-lazy="item.coverImgUrl" class="rank__img" alt="排行榜图片">
          <span class="singer__List animated">{{item.description||item.name}}</span>
        </div>
        </router-link>
        <keep-alive>
          <transition leave-active-class="animated bounceOutRight">
          <router-view></router-view>
          </transition>
        </keep-alive>
      </div>
    </vue-scroll>
  </div>
</template>
<script>
export default {
  mounted () {
    this.getRank()
  },
  data () {
    return {
      rank: [],
      ops: {
        vuescroll: {
          mode: 'native',
          sizeStrategy: 'percent',
          detectResize: true
        },
        scrollPanel: {
          scrollingX: false
        },
        rail: {},
        bar: {}
      }
    }
  },
  methods: {
    getRank () {
      this.axios.get('http://localhost:3000/toplist/detail').then(response => {
        this.rank = [...response.data.list]
      })
      console.log(this)
    },
    getListDetail (id) {
      // this.$router.push({path: `/rank/${id}`})
    }
  },
  computed: {
    toggleShow: function () {
      console.log(this.$route.meta.show)
      return this.$route.meta.show
    }
  }
}
</script>
<style lang="stylus" scoped rel="stylesheet/stylus">
.parent-dom
  height calc(100% - 5rem)
  width 100%
.child-dom

.rank__img
  height 7.5rem
  border-radius 5px
  margin 5px
.rank
  position relative
  display flex
.singer__List
  margin auto
  padding 5px
.singer__item
  margin 5px
.update__frequency
  text-align center

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

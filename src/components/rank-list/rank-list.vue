<template>
  <div id="rank">
    <div class="rankList" v-show="toggleShow">
    <transition >
    <div  class="parent-dom" >
      <vue-scroll :ops="ops" >
        <div v-for="item in rank" class="rank" :key="item.id" @click=getListDetail(item.id) >
          <img v-lazy="item.coverImgUrl" class="rank__img" alt="排行榜图片">
          <!-- <div class="top3List">
            <div v-for="(tracks,index) in item.tracks" :key="tracks.first">
            {{index+1}} {{tracks.first}} — {{tracks.second}}
            </div>
          </div> -->
          <span class="singer__List animated">{{item.description||item.name}}</span>
        </div>
      </vue-scroll>
    </div>
    </transition>
    </div>
    <!-- <keep-alive> -->
      <transition enter-class="enterClass" enter-to-class="enterToClass" enter-active-class="animated active"
                  >
      <router-view></router-view>
      </transition>
    <!-- </keep-alive> -->
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
          mode: 'slide',
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
      this.axios.get(`${this.global.myUrl}/toplist/detail`).then(response => {
        this.rank = [...response.data.list]
      })
      console.log(this)
    },
    getListDetail (id) {
      this.$router.push({path: `/rank-list/${id}`})
    }
  },
  computed: {
    toggleShow: function () {
      return this.$route.meta.show
    }
  }
}
</script>
<style lang="stylus" scoped rel="stylesheet/stylus">
.parent-dom
  height 100%
  width 100%
#rank
  height 100%
.rankList
  height calc(100% - 5rem)
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
.enterClass
  opacity 0
  transform translateX(100%)
.enterToClass
  opacity 1
  transform translateX(0%)
.active
  transition all 300ms cubic-bezier(0.000, 0.000, 0.580, 1.000)
.top3List
  display flex
  flex-direction column
  justify-content space-around
  padding 1rem 0.5rem
  font-size 0.8rem
</style>

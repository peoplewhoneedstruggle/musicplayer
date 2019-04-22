<template>
  <div>
    <div v-for="item in rank" :key="item.id" class="rank" @click=getListDetail(item.id)>
      <img v-lazy="item.coverImgUrl" class="rank__img" alt="排行榜图片">
      <span class="singer__List">{{item.description||item.name}}</span>
    </div>
  </div>
</template>
<script>
export default {
  mounted () {
    this.getRank()
  },
  data () {
    return {
      rank: []
    }
  },
  methods: {
    getRank () {
      this.axios.get('http://localhost:3000/toplist/detail').then(response => {
        this.rank = [...response.data.list]
      })
    },
    getListDetail (id) {
      this.$router.push({path: `/recommend/${id}`})
    }
  }
}
</script>
<style lang="stylus" scoped rel="stylesheet/stylus">
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
</style>

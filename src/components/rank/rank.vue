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
        console.log(response)
      })
    },
    getListDetail (id) {
      this.$router.push({path: `/rank/${id}`})
    }
  }
}
</script>
<style lang="stylus" scoped rel="stylesheet/stylus">
.rank__img
  width 8rem
  height 8rem
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
</style>

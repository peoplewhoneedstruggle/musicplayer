<template>
  <div>
    <div v-for="(item, index) in rank" :key=index class="rank">
      <div>
        <img :src="item.coverImgUrl" class="rank__img" alt="排行榜图片">
      </div>
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
      let _this = this
      this.$.ajax({
        url: 'http://localhost:3000/toplist',
        type: 'get',
        data: '',
        success (data) {
          _this.rank.splice(0, 0, ...data.list)
          console.log(_this.rank)
        }
      })
    }
  }
}
</script>
<style lang="stylus" scoped rel="stylesheet/stylus">
.rank
  width 10rem
.rank__img
  width 100%
</style>

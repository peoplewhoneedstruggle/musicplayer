<template>
  <div class="tab">
    <router-link tag="div" class="tab-item" to="/recommend">
    <span class="tab-link">推荐</span>
    </router-link>
        <router-link tag="div" class="tab-item" to="/song-list">
    <span class="tab-link">歌单</span>
    </router-link>
        <router-link tag="div" class="tab-item" to="/rank">
    <span class="tab-link">排行</span>
    </router-link>
        <router-link tag="div" class="tab-item" to="/search">
    <span class="tab-link">搜索</span>
    </router-link>
  </div>
</template>
<script>
export default {}
</script>
<style lang="stylus" scoped rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .tab
    display flex
    height 2.5rem
    line-height 2.5rem
    font-size $font-size-medium
    .tab-item
      flex 1
      text-align center
      .tab-link
        padding-bottom 5px
        color black
      &.router-link-active
        .tab-link
          color $color-theme
          border-bottom 2px solid $color-theme
          font-weight bold
</style>

<template>
  <div class="all">
     <i class="left el-icon-arrow-left" @click="back"></i>
     <h4>{{value}}</h4>
     <div class="right">
       <el-dropdown trigger="click">
        <span class="el-dropdown-link">
        <i class="el-icon-more"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
        <el-dropdown-item><i class="el-icon-menu"></i><span>首页</span></el-dropdown-item>
        <el-dropdown-item><i class="el-icon-search"></i><span>分类搜索</span></el-dropdown-item>
        <el-dropdown-item><i class="el-icon-goods"></i><span>购物车</span></el-dropdown-item>
        <el-dropdown-item><i class="el-icon-news"></i><span>我的京东</span></el-dropdown-item>
        <el-dropdown-item><i class="el-icon-location"></i><span>浏览记录</span></el-dropdown-item>
       </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  props: ['value'],
  methods:{
    back(){
        this.$router.go(-1);//返回上一层
    },
  },
}
</script>


<style lang="stylus" scoped>
.all {
  text-align center
  width: 100%
  height: 88px
  background #fff
  border-bottom: 1px solid #e5e5e5;
  position relative
  h4{
    margin 0 140px
    height: 88px
    line-height 88px
    font-size: 32px
    color: #333
  }
}
.left {
  position absolute
  top 24px
  left 20px
  // margin: 24px 0 0 20px;
}
.right {
  position absolute
  top 0px
  right 0px
  .el-dropdown {
    margin 24px
  }
}
.el-icon-more,el-icon-arrow-left{
  font-size 40px
}
.el-dropdown-menu{
  width 250px
  background-color rgba(0,0,0,0.9)
  .el-dropdown-menu__item {
    font-size 28px
    height 80px
    line-height 80px
    color #fff
    box-sizing border-box
    i {
      margin-right 12px
    }
    span {
      width 85*2px
      display inline-block
      border-bottom: 1px solid rgba(255,255,255,0.2)
    }
  }
}
</style>

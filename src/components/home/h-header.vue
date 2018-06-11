<template>
  <div class="j-header">
        <div class="left">
            <span>注册</span>&nbsp;|&nbsp;<span>登录</span>
        </div>
         <el-button class="right" type="danger">APP下载</el-button>
    </div>
</template>


<style lang="stylus" rel="stylesheet/stylus" scoped>
    .j-header {background: #fff url(jr-logo.png) no-repeat center center
          background-size: auto 50%
          height: 100px
          color: #666666
          padding-left :15px
          padding-right 15px
          box-sizing:border-box;
          -moz-box-sizing:border-box; /* Firefox */
          -webkit-box-sizing:border-box; /* Safari */
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index 999
          }
    .left {padding-top: 30px
             height: 30px
             line-height: 30px
             float left
             font-size 28px

          }
          .right {margin-top: 20px
                  float right
                  height: 28*2px;
                  font-size 21px
                  width 120px

                }
</style>


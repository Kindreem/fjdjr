<template>
  <div class="all">
    <h4>- 理财精选 -</h4>
    <section class="content">
        <dl class="item" v-for="item in items" :key="item.title">
                <dt>{{ item.title }}
                  <span>{{ item.sub }}</span>
                </dt>
                <dd>{{ item.rate }}</dd>
                <dd>{{ item.text }}</dd>
        </dl>
    </section>
  </div>
</template>

<script>
export default {
    data() {
        return {
            items: [{
                title: "京渤随享盈",
                sub: "90天可质押",
                rate: "5.50%",
                text: "历史年化收益率",
            }, {
                title: "年年盈",
                sub: "理财推荐",
                rate: "5.10%",
                text: "综合年化收益率",
            }, {
                title: "建信养老飞益鑫",
                sub: "1000起投",
                rate: "4.72%",
                text: "近7日年化收益",
            }, {
                title: "小白基金",
                sub: "超短期",
                rate: "4.50%",
                text: "7日年化收益率",
            }],
        }
    },
}
</script>

<style lang="stylus" scoped>
.all {
  margin-top 20px
  background white
  font-weight bold
  margin-bottom 20px
  text-overflow ellipsis
  white-space nowrap
  overflow hidden
}
.all h4{
    text-align center
    font-size 32px
    padding 0 32px
    font-weight: 700;
    height: 56*2px;
    line-height: 56*2px;

}
.content{
  display flex
  justify-content: space-around
  flex-wrap: wrap

}
.item{
  padding-left 16*2px
  width 50%
  height 109*2px
  box-sizing border-box
  dt {
    height 42px
    line-height 42px
    font-size 30px
    margin 34px 0 16px
    text-overflow ellipsis
    white-space nowrap
    overflow hidden

  }
  dt span{
    border 1px solid #FF5155
    font-size 22px
    color red
    font-weight normal
    height 34px
    line-height 34px
    padding 0 8px
    text-align center
    // box-sizing border-box

    }


}
.item>dd:nth-child(2) {
    color red
    font-size 44px
  }
  .item>dd:nth-child(3){
    font-size 24px
    color #999
    white-space nowrap
    text-overflow ellipsis
    overflow hidden
    font-weight normal
  }
</style>


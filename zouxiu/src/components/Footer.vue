<template>
  <nav>
      <ul>
          <router-link activeClass="active" v-for="(nav,i) in list" :key="i" :to="{name:nav.name}"  tag="li">
              <a href="javascript:;">
                  <div class="iconfont" :class="nav.icon"></div>
                  <p>{{nav.text}}</p>
              </a>
          </router-link>
      </ul>
  </nav>
</template>
<script>
export default {
  name : "Footer",
  data(){
      return {
          list : [
              {
                  name : "Home",
                  text : "首页",
                  icon : "icon-menuHome"
              },
              {
                  name : "Goods",
                  text : "分类",
                  icon : "icon-menuClass"
              },
              {
                  name : "ShopCar",
                  text : "购物车",
                  icon : "icon-menuShop"
              },
              {
                  name : "Show",
                  text : "我的秀",
                  icon : "icon-menuMy"
              },
              {
                  name : "More",
                  text : "更多",
                  icon : "icon-menuMore"
              }
          ]
      }
  }
}
</script>
<style lang="less" scoped>
    @import "../less/style.less";

    nav{
        position: fixed;
        bottom:0;
        left: 0;
        width: 100%;
        z-index: 99;
        background: #484850;


        ul{
            display: flex;

            li{
                flex: 1;
                &.active{
                    border-top:0.06rem solid #e90b08;

                    a{
                        padding-top:0;
                    }
                }

                a{
                    display: block;
                    height: @bh - 0.06rem;
                    color: #fff;
                    text-align: center;
                    padding-top:0.06rem;
                    box-sizing: border-box;

                    .iconfont{
                        @h:0.58rem;
                        height: @h;
                        line-height: @h;
                        font-size: 0.44rem;
                    }
                    p{
                        @h:0.34rem;
                        height: @h;
                        line-height: @h;
                        font-size: 0.22rem;
                    }
                }
            }
        }
    }
</style>


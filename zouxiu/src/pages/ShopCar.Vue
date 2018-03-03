<template>
  <div>
      <HeaderCom :text="title" />
      <div class="main">
          <p class="count-box">您一共选择了 <span>{{num}}</span> 件商品,总价为: <span>¥{{allPrice.toFixed(2)}}</span></p>
          <div class="select-all">
              <input type="checkbox" v-model="isAll" />全选
          </div>
          <ul>
              <li v-for="(item,i) in list" :key="i">
                  <div class="select-box">
                      <input type="checkbox" v-model="item.isSelected" />
                  </div>
                  <div class="img-box">
                      <img :src="item.goodsListImg" />
                  </div>
                  <div class="content">
                      <h2>{{item.goodsName}}</h2>
                      <p>价格:{{item.price}}</p>
                      <div class="number-box">
                          <a href="javascript:;" class="btn" @click="numUpdate(i,false)">-</a>
                          <input type="text" v-model.number="item.number" />
                          <a href="javascript:;" class="btn" @click="numUpdate(i,true)">+</a>
                      </div>
                  </div>
              </li>
          </ul>
          
      </div>
      <FooterCom/>
  </div>
</template>
<script>
import HeaderCom from "../components/Header"
import FooterCom from "../components/Footer"
import jsonp from "fetch-jsonp"

export default {
  name : "ShopCar",
  data(){
      return {
          title : "购物车",
          list : [],
          isAll : false
      }
  },
  watch : {
      isAll(){
          this.list.map((item,i)=>{
              this.list[i].isSelected = this.isAll;
          })
      }
  },
  computed:{
      num(){
          var count = 0;
          this.list.map(item=>{
              if(item.isSelected){
                  count += item.number;
              }
          });

          return count;
      },
      allPrice(){
          var price = 0;
          this.list.map(item=>{
              if(item.isSelected){
                  price += item.number*item.price;
              }
          });

          return price;
      }
  },
  methods : {
      numUpdate(index,isAdd){
          //如果是加号
          if(isAdd){
              this.list[index].number++
          }else if(this.list[index].number > 1){
              this.list[index].number--
          }
      }
  },
  mounted(){
      jsonp("http://datainfo.duapp.com/shopdata/getCar.php?userID=zhuzhuxia")
        .then(r=>r.json())
        .then(data=>{
            data.map((item,i)=>{
                data[i].number *= 1;
                data[i].price *= 1;
                data[i].isSelected = false;
            })
            this.list = data;
        })
  },
  components : {
      HeaderCom,
      FooterCom
  }
}
</script>
<style lang="less" scoped>
    .count-box{
        @h:0.6rem;
        background: #ccc;
        font-size:0.24rem;
        height: @h;
        line-height: @h;
        padding:0 0.36rem;

        span{
            color: #900;
            font-size: 0.3rem;
        }
    }

    .select-all{
        padding:0.1rem 0.2rem;
    }

    .select-box{
        width: 0.4rem;
    }
    ul{
        li{
            padding:0.2rem 0.25rem;
            display: flex;

            .img-box{
                @h:1.7rem;
                height: @h;
                width: @h;
                overflow: hidden;
                margin-right: 0.2rem;
            }

            .content{
                flex: 1;
                .number-box{
                    height: 0.8rem;
                    display: flex;
                }
                h2{
                    font-size: 0.2rem;
                }
                p{
                    font-size: 0.16rem;
                }
                input{
                    @h:0.4rem;
                    width: 0.5rem;
                    border:1px solid #ccc;
                    text-align: center;
                    height: @h;
                    line-height: @h;
                    margin: 0 0.2rem;
                }
                .btn{
                    font-size: 0.16rem;
                    display: block;
                    width: 0.4rem;
                    text-align: center;
                    background: #ccc;
                    height: 0.4rem;
                    line-height: 0.4rem;
                }
            }
        }

    }
</style>

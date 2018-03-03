<template>
    <div>
        <HeaderCom :text="title" :hasBack = "false"/>
        <div class="main">
            <Search/>
            <Banner :list="bannerList" />
            <GoodsList :list="goodsList" />
        </div>
        <FooterCom />
    </div>
</template>

<script>
    import HeaderCom from "@/components/Header"
    import Search from "@/components/Search"
    import Banner from "@/components/Banner"
    import GoodsList from "@/components/GoodsList" 
    import FooterCom from "@/components/Footer"

    import jsonp from "fetch-jsonp"

    export default {
        name : "Home",
        data(){
            return {
                title : "首页",
                content : "这是首页页面的文本内容!",
                goodsList : [],
                bannerList : [1,2,3,4]
            }
        },
        components : {
            HeaderCom,
            Search,
            Banner,
            GoodsList,
            FooterCom
        },
        mounted(){
            // 开始请求数据
            jsonp("http://datainfo.duapp.com/shopdata/getGoods.php")
             .then(r=>r.json())
             .then(data=>{
                 this.goodsList = data;
                 var newList = [];

                 data.map(({goodsID,goodsName,discount,price,imgsUrl,goodsListImg})=>{
                    // 解构赋值
                    // var imgSrc = JSON.parse(imgsUrl)[0];
                    var imgSrc = goodsListImg;
                    price *= 1;
                    discount = discount == 0 ? 10 : discount*1;
                    var oldPrice = price*10/discount;

                    oldPrice = oldPrice.toFixed(2);
                    price = price.toFixed(2);

                    var obj = {
                         goodsName,
                         imgSrc,
                         price ,
                         oldPrice,
                         discount,
                         goodsID
                    }

                    newList.push(obj);
                 })


                 this.goodsList = newList;
             })

            jsonp("http://datainfo.duapp.com/shopdata/getBanner.php")
              .then(r=>r.json())
              .then(data=>{

                  var newList = [];

                  data.map(({goodsID,goodsName,goodsBenUrl})=>{
                      var imgSrc = JSON.parse(goodsBenUrl)[0];

                      var obj = {
                          goodsID,
                          goodsName,
                          imgSrc
                      }

                      newList.push(obj);
                  });

                  this.bannerList = newList;
              })

            this.$http.get("./static/data.json").then(data=>{
                console.log(data.body);
            })
        }
    }

    var abc = ({obj}) => {

    }

    // var abc = function(name){
    //     return name;
    // }

    // var abc = (name) => {
    //     return name;
    // }

    // var abc = name => {
    //     return name+1;
    // }

    // var abc = name => name+1;

    // var  obj = {
    //     name : "abc",
    //     age : 18,
    //     height : 190,
    // }

    // var name = obj.name;
    // var age = obj.age;
    // var height = obj.height;

    // // var name = "123";

    // var {name:n,age,height,color="#f00"} = obj;

    // console.log(name); 

    // 解构参数
    // function abc({a,b,c,d}){
    //     console.log(a);
    //     console.log(b);
    //     console.log(c);
    //     console.log(d);
    // }

</script>
<style scoped>
</style>


<template>
  <div>
      <HeaderCom :text="title" />
      <div class="main">
          商品分类页
      </div>
      <FooterCom />
  </div>
</template>
<script>
import HeaderCom from "../components/Header"
import FooterCom from "../components/Footer"

export default {
  name : "Goods",
  data(){
      return {
          title : "商品分类"
      }
  },
  components : {
      HeaderCom,
      FooterCom
  }
}
</script>

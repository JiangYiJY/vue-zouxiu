<template>
  <div>
      <HeaderCom :text="title" />
      <div class="main">
          我的秀页面
      </div>
      <FooterCom/>
  </div>
</template>
<script>
import HeaderCom from "../components/Header"
import FooterCom from "../components/Footer"

export default {
  name : "Show",
  data(){
      return {
          title : "我的秀"
      }
  },
  components : {
      HeaderCom,
      FooterCom
  }
}
</script>

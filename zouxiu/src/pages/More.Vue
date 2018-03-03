<template>
  <div>
      <HeaderCom :text="title" />
      <div class="main">
          更多页面
      </div>
      <FooterCom/>
  </div>
</template>
<script>
import HeaderCom from "../components/Header"
import FooterCom from "../components/Footer"

export default {
  name : "More",
  data(){
      return {
          title : "更多"
      }
  },
  components : {
      HeaderCom,
      FooterCom
  }
}
</script>

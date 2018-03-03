<template>
  <div class="swiper-container banner">
        <div class="swiper-wrapper">
            <div v-for="(item,i) in list" :key="i" class="swiper-slide">
                <router-link :to="{name:'Detail',query:{goodsID:item.goodsID}}">
                    <img :src="item.imgSrc" :title="item.goodsName" />
                </router-link>
            </div>
        </div>

        <div v-if="hasPag" class="swiper-pagination"></div>

        <div v-if="hasBtn" class="swiper-button-next"></div>
        <div v-if="hasBtn" class="swiper-button-prev"></div>
  </div>
</template>
<script>
import Swiper from "swiper";

export default {
  name: "Banner",
  props: {
    list: {
      type: Array,
      required: true
    },
    auto: {
      type: Boolean,
      default: true
    },
    hasPag: {
      type: Boolean,
      default: true
    },
    hasBtn: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    var option = {};

    if (this.auto) {
      option.autoplay = true;
    }

    if (this.hasPag) {
      option.pagination = { el: ".swiper-pagination" };
    }

    if (this.hasBtn) {
      option.navigation = {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      };
    }
    var swiper = new Swiper(".swiper-container", option);
  }
};
</script>
<style src="swiper/dist/css/swiper.css"></style>

<style lang="less" scoped>
.banner {
  height: 2.5rem;
}




</style>



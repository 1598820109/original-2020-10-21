<template>
  <div class="header">
    <!-- 订阅模式 -->
    <homeSubscribe></homeSubscribe>
    <!-- 订阅模式 -->
    <homeHeader></homeHeader>
    <!-- 轮播图 -->
    <homeRotation></homeRotation>
    <!-- 轮播图 -->
    <!-- 文章 -->
    <homeArticle></homeArticle>
    <!-- 文章 -->
    <!-- ##### 个人照片 ##### -->
    <homePhoto></homePhoto>
    <!-- ##### 个人照片end ##### -->
    <!-- 底部组件 -->
    <homeFooter></homeFooter>
    <!-- 底部组件 -->
  </div>
</template>

<script>
import Vue from "vue";
import homeHeader from "@/components/common/homeHeader";
import homeRotation from "@/components/common/homeRotation";
import homeFooter from "@/components/common/homeFooter";
import homePhoto from "@/components/common/homePhoto";
import homeArticle from "@/components/common/homeArticle";
import homeSubscribe from "@/components/common/homeSubscribe";

export default {
  name: "home",
  data() {
    return {
      
    };
  },

  components: {
    homeHeader,
    homeRotation,
    homeFooter,
    homePhoto,
    homeArticle,
    homeSubscribe
  },
};
</script>

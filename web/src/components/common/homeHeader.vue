<template>
  <div class="header">
    <header class="header-area">
      <!-- Top Header Area -->
      <div class="top-header">
        <div class="container h-100">
          <div class="row h-100 align-items-center">
            <!-- Breaking News Area -->
            <div class="col-12 col-sm-8">
              <div class="breaking-news-area">
                <div id="breakingNewsTicker" class="ticker">
                  <ul>
                    <li><a href="#">Hello World!</a></li>
                    <li><a href="#">Hello Universe!</a></li>
                    <li><a href="#">Hello Original!</a></li>
                    <li><a href="#">Hello Earth!</a></li>
                    <li><a href="#">Hello Colorlib!</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <!-- Top Social Area -->
            <div class="col-12 col-sm-4">
              <div class="top-social-area">
                <router-link
                  tag="a"
                  to="/"
                  v-for="(link, index) in links"
                  :key="index"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  :title="link.name"
                  class="black"
                >
                  <i :class="link.iconClassName" aria-hidden="true"></i>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Logo Area -->
      <div class="logo-area text-center">
        <div class="container h-100">
          <div class="row h-100 align-items-center">
            <div class="col-12">
              <a href="index.html" class="original-logo"
                ><img src="img/core-img/logo.png" alt=""
              /></a>
            </div>
          </div>
        </div>
      </div>

      <!-- Nav Area -->
      <div class="original-nav-area" id="stickyNav">
        <div class="classy-nav-container breakpoint-off">
          <div class="container">
            <!-- Classy Menu -->
            <nav class="classy-navbar justify-content-between">
              <!-- Subscribe btn -->
              <div class="subscribe-btn">
                <a
                  href="#"
                  class="btn subscribe-btn"
                  data-toggle="modal"
                  data-target="#subsModal"
                  >Subscribe</a
                >
              </div>

              <!-- Navbar Toggler -->
              <div class="classy-navbar-toggler">
                <span class="navbarToggler"
                  ><span></span><span></span><span></span
                ></span>
              </div>

              <!-- Menu -->
              <div class="classy-menu" id="originalNav">
                <!-- close btn -->
                <div class="classycloseIcon">
                  <div class="cross-wrap">
                    <span class="top"></span><span class="bottom"></span>
                  </div>
                </div>

                <!-- Nav Start -->
                <div class="classynav">
                  <ul v-for="(item, index) in items" :key="index">
                    <li>
                      <router-link tag="a" :to="`/${item.name}`" @click.native="flunload()" >{{ item.name }}</router-link>
                    </li>
                  </ul>

                  <!-- Search Form  -->
                  <div id="search-wrapper">
                    <form action="#">
                      <input
                        type="text"
                        id="search"
                        placeholder="Search something..."
                      />
                      <div id="close-icon"></div>
                      <input class="d-none" type="submit" value="" />
                    </form>
                  </div>
                </div>
                <!-- Nav End -->
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  </div>

</template>


<script>
import Vue from "vue";

import { getItemDate } from '@/axios/http.js';

export default {
  name: "home",
  data() {
    return {
      items: [],
      links: [],
      articles:[],
    };
  },

   // 钩子函数

  methods: {
    // 首页导航数据
    async feach() {
      const res = await this.$http.get("/categories/all");
      res.data.forEach((item, index) => {
        if (item.parent == undefined) {
          this.items.push(item);
        }
      });
    },
    // 首页友链数据
    async linkload() {
      const res = await this.$http.get("/links/list");
      this.links = res.data;
    },

   
    // 点击刷新
    flunload(){
      this.$router.go(0)
    },

    // 获取分类数据

  },

  created() {
    this.feach();
    this.linkload();
  },
};
</script>

<script setup lang="ts">
import "./assets/app.css"

const handleGetStart=()=>{
  window.open('https://github.com/MiyamizuSu')
}

</script>

<template>
  <el-container class="blog-outer">
    <el-header class="blog-title-background">
      <el-text class="blog-title  text">
        MiyamizuSu
      </el-text>
    </el-header>
    <el-main class="blog-main-background">
      <div>
        <!-- <a href="" id="github-link" v-show=false></a> -->
        <el-button class="blog-start-button" size="large" round color="#F7CFD8" @click="handleGetStart">Get Start!
        </el-button>
      </div>
    </el-main>
    <el-footer class="blog-bottom-background">
        <el-text class="blog-bottom-copyright text">
          Copyright © 2024 Mygo Inc. All rights reserved.
        </el-text>
    </el-footer>
  </el-container>
</template>


<style scoped>

</style>

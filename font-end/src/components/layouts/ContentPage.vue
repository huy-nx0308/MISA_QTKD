<template>
  <div class="content">
    <ContentPageLeft/>
    <ContentPageCenter/>
    <ContentPageRight/>
  </div>
</template>

<script>

import ContentPageCenter from "./ContentPageCenter" 
import ContentPageLeft from "./ContentPageLeft" 
import ContentPageRight from "./ContentPageRight" 

export default {
  name: "ContentPage",
  components: {
    ContentPageCenter,
    ContentPageLeft,
    ContentPageRight
  },
  // cho phép sử dụng tham số
   methods:{
   
  },
  // không cho phép sử dụng tham số
  mounted() {
  },
};
</script>

<style>
</style>
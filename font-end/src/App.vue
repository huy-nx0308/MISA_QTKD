<!-- eslint-disable no-unused-vars -->
<template>
  <div class="container">
   
    <Header></Header>
  
    <Toolbar :checkShowFormData="checkShowForm" @ShowFormData="checkShowForm = $event"></Toolbar>

    <ContentPage @SelectInfoUser="User = $event"></ContentPage>

    <FormData
      :checkShowFormData="checkShowForm"
      @CloseFormData="checkShowForm = $event"
    ></FormData>
  
  </div>
</template>

<script>
import { info, students } from "./js/demo";
import Header from "./components/layouts/Header";
import Toolbar from "./components/layouts/Toolbar";
import ContentPage from "./components/layouts/ContentPage";
import FormData from "./components/layouts/FormData";



export default {
  name: "App",
  components: {
    Header,
    Toolbar,
    ContentPage,
    FormData,
  },
  data() {
    return {
      username: "",
      // phải lưu cho nó 1 tên biến mới đưa lên được
      customInfo: info,
      customStudents: students,
      checkShowForm: false,
      User: Object
    };
  },
  methods: {
    
  }, mounted(){
    console.log('xong')
  }
};
</script>

<style>
@import url("../src/css/main.css");
</style>

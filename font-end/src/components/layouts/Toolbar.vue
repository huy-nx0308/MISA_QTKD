<template>
    <div class="toolbar">
      <div class="toolbar-left toolbar-child">
        <div class="toolbar-left__child">
          <div class="combobox-toolbar">
            <span class="combobox-toolbar__text">Tất cả tiềm năng</span>
            <span class="combobox-toolbar__icon button-icon__down-black"></span>
          </div>
        </div>
        <div class="toolbar-left__child">
          <button class="button__toolbar-left">Sửa</button>
        </div>
        <div class="toolbar-left__child">
          <button class="button-icon__refesh">
            <span class="button-icon__icon icon-refesh"></span>
          </button>
        </div>
      </div>
      <div class="toolbar-right toolbar-child">
        <div class="toolbar-right__child">
          <div class="combo-button">
            <button  @click="ClickShowForm()"
              class="
                button button-icon
                button-background__primary
                button-icon__left
              "
            >
              <span class="button-icon__icon button-icon__icon-sum"></span>
              <span class="button-icon__text">Thêm</span>
            </button>
            <button
              class="button-arrow button-background__primary button-icon__right"
            >
              <span class="button-icon__icon button-icon__down"></span>
            </button>
          </div>
        </div>
        <div class="toolbar-right__child">
          <button class="button button-dots button-background-white">
            <span class="button-icon__icon button-icon__icon-dots"></span>
          </button>
        </div>
        <div class="toolbar-right__child">
          <button class="button button-dots button-background-white">
            <span class="button-icon__icon button-icon__tiles"></span>
            <span class="button-icon__icon button-icon__down-black"></span>
          </button>
        </div>
      </div>
    </div>
</template>

<script>

export default {
   name: "ToolbarComponent",
   props: {
    checkShowFormData: Boolean 
  },
   methods:{
    ClickShowForm: function(){
        this.$emit('ShowFormData',!this.checkShowFormData);
    }
   }
}
</script>

<style>

</style>


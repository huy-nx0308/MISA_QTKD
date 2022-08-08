<template>
        <div class="header">
      <div class="header-top">
        <div class="header-top-left">
          <div class="header-top-left__toggle"></div>
          <div class="header-top-left__logo"></div>
          
        </div>

        <div class="header-top-center">
          <div class="container-input">
            <div class="label-input label-input-icon">
              <label class="background-icon-search-input"></label>
              <input
                type="text"
                class="input"
                placeholder="Tìm kiếm tiềm năng, liên hệ khách hàng"
              />
            </div>
          </div>
        </div>

        <div class="header-top-right">
          <div class="header-top-right__button" >
            <button
              class="button-background-header background-icon-face"
            ></button>
          </div>
          <div class="header-top-right__button">
            <button
              class="button-background-header background-icon-calendar"
            ></button>
          </div>
          <div class="header-top-right__button">
            <button
              class="button-background-header background-icon-notify"
            ></button>
          </div>
          <div class="header-top-right__button">
            <button
              class="button-background-header background-icon-setting"
            ></button>
          </div>
          <div class="header-top-right__button">
            <button
              class="button-background-header background-icon-question"
            ></button>
          </div>
          <div class="header-top-right__button header-right__button-avatar">
            <button
              class="button-background-header background-icon-avatar"
            ></button>
          </div>
        </div>
      </div>
      <div class="header-nav">
        <div class="header-nav-item">
          <div class="header-nav-item__content background-icon__home-hover">
            <span
              class="header-nav-item__background background-icon__home"
            ></span>
            <span>Bàn làm việc</span>
          </div>
        </div>
        <div class="header-nav-item">
          <div class="header-nav-item__content background-icon__tiemnang-hover header-nav-item__content-select">
            <span
              class="header-nav-item__background background-icon__tiemnang"
            ></span>
            <span>Tiềm năng</span>
          </div>
        </div>
        <div class="header-nav-item">
          <div class="header-nav-item__content background-icon__chaohang-hover">
            <span
              class="header-nav-item__background background-icon__chaohang"
            ></span>
            <span>Chào hàng</span>
          </div>
        </div>
        <div class="header-nav-item">
          <div class="header-nav-item__content background-icon__lienhe-hover">
            <span
              class="header-nav-item__background background-icon__lienhe"
            ></span>
            <span>Liên hệ</span>
          </div>
        </div>
        <div class="header-nav-item">
          <div
            class="header-nav-item__content background-icon__khachhang-hover"
          >
            <span
              class="header-nav-item__background background-icon__khachhang"
            ></span>
            <span>Khách hàng</span>
          </div>
        </div>
        <div class="header-nav-item">
          <div class="header-nav-item__content background-icon__cohoi-hover">
            <span
              class="header-nav-item__background background-icon__cohoi"
            ></span>
            <span>Cơ hội</span>
          </div>
        </div>
        <div class="header-nav-item">
          <div class="header-nav-item__content background-icon__baogia-hover">
            <span
              class="header-nav-item__background background-icon__baogia"
            ></span>
            <span>Báo giá</span>
          </div>
        </div>
        <div class="header-nav-item">
          <div class="header-nav-item__content background-icon__donhang-hover">
            <span
              class="header-nav-item__background background-icon__donhang"
            ></span>
            <span>Đơn hàng</span>
          </div>
        </div>

        <div class="header-nav-item">
          <div class="header-nav-item__content background-icon__muctieu-hover">
            <span
              class="header-nav-item__background background-icon__muctieu"
            ></span>
            <span>Mục tiêu</span>
          </div>
        </div>
        <div class="header-nav-item">
          <div
            class="header-nav-item__content background-icon__chiendich-hover"
          >
            <span
              class="header-nav-item__background background-icon__chiendich"
            ></span>
            <span>Chiến dịch</span>
          </div>
        </div>
        <div class="header-nav-item">
          <div class="header-nav-item__content background-icon__baocao-hover">
            <span
              class="header-nav-item__background background-icon__baocao"
            ></span>
            <span>Báo cáo</span>
          </div>
        </div>
        <div class="header-nav-item">
          <div class="header-nav-item__content background-icon__khac-hover">
            <span
              class="header-nav-item__background background-icon__khac"
            ></span>
            <span>Khác</span>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'HeaderComponent',
  props: {
    
  }
}

</script>

<style>

</style>
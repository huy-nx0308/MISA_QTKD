<template>
  <div class="form-container" v-if="checkShowFormData">
    <form @submit.prevent="OnSubmit">
      <div class="form-content">
        <div class="form-container__title">
          <div class="form-container__title-left">
            <div class="filter-title__text" style="font-size: 20px">
              Thêm tiềm năng
            </div>
          </div>
          <div class="form-container__title-right">
            <button class="button">Lưu</button>
            <button class="button">Lưu và thêm</button>
            <button class="button" type="button" @click="HandlerCloseForm">
              Hủy bỏ
            </button>
          </div>
        </div>

        <div class="form-container__content">
          <!-- ảnh tiềm năng -->
          <div class="form-container__content-child">
            <div class="form-container__content-child__title font-latin-bold">
              Ảnh tiềm năng
            </div>
            <div
              class="
                form-container__content-child--item
                form-container__content-child__avatar
              "
            >
              <label class="label-file" for="file">
                <span class="background-icon__avatar-push"></span>
              </label>
              <input type="file" class="input-file" id="file" />
            </div>
          </div>

          <!-- thông tin chung -->
          <div class="form-container__content-child">
            <div class="form-container__content-child__title font-latin-bold">
              Thông tin chung
            </div>

            <!-- Start Xưng hô -->
            <div class="form-container__content-child__body">
              <div class="form-container__content-child--item">
                <div class="form-container__content-child--item__label">
                  Xưng hô
                </div>
                <div class="form-container__content-child--item__input">
                   <div class="combobox">
                    <div
                      class="combobox-child combobox-content"
                      @click="handlerClickCombobox"
                      check="false"
                    >
                      <div class="combobox-content__select">- Không chọn -</div>
                      <div
                        class="
                          combobox-content__icon
                          button-icon__up-black
                          icon-font-16
                        "
                      ></div>
                    </div>

                    <div class="combobox-child combobox-data">
                      <div class="combobox-data__search">
                        <label class="label-input combobox-data__search-label">
                          <input
                            type="text"
                            class="input input-icon"
                            placeholder="Tìm kiếm"
                          />
                          <span class="background-icon-search-input"></span>
                        </label>
                      </div>
                      <div class="combobox-data__child">
                        <div
                          class="combobox-data__child-content"
                          @click="handlerClickComboboxData"
                          value="- Không chọn -"
                        >
                          - Không chọn -
                        </div>
                        <div
                          class="combobox-data__child-content"
                          @click="handlerClickComboboxData"
                          value="Anh"
                        >
                          Anh
                        </div>
                        <div
                          class="combobox-data__child-content"
                          @click="handlerClickComboboxData"
                          value="Chị"
                        >
                          Chị
                        </div>
                        <div
                          class="combobox-data__child-content"
                          @click="handlerClickComboboxData"
                          value="Em"
                        >
                          Em
                        </div>
                        <div
                          class="combobox-data__child-content"
                          @click="handlerClickComboboxData"
                          value="Bố"
                        >
                          Bố
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- End Xưng hô -->

              <!-- Start họ và đệm -->
              <div class="form-container__content-child--item">
                <div class="form-container__content-child--item__label">
                  Họ và đệm
                </div>
                <div class="form-container__content-child--item__input">
                  <input type="text" class="input-content" :model="UserInfo.FirstName"/>
                </div>
              </div>
              <!-- End Họ và đệm -->

              <!-- Start Tên -->
              <div class="form-container__content-child--item">
                <div class="form-container__content-child--item__label">
                  Tên <span class="not-required">*</span>
                </div>
                <div class="form-container__content-child--item__input">
                  <input type="text" class="input-content" />
                  <span v-if="errors.UserId" class="span-error">Tên không được để trống</span>
                </div>
              </div>
              <!-- End Tên -->

              <!-- Start Họ và tên  -->
              <div class="form-container__content-child--item">
                <div class="form-container__content-child--item__label">
                  Họ và tên
                </div>
                <div class="form-container__content-child--item__input">
                  <input
                    type="text"
                    class="input-content disabled-input"
                    disabled
                  />
                </div>
              </div>
              <!-- End họ và tên -->

              <!-- Start Phòng ban -->
              <div class="form-container__content-child--item">
                <div class="form-container__content-child--item__label">
                  Phòng ban
                </div>
                <div class="form-container__content-child--item__input">
                  <div class="combobox">
                    <div
                      class="combobox-child combobox-content"
                      @click="handlerClickCombobox"
                      check="false"
                    >
                      <div class="combobox-content__select">- Không chọn -</div>
                      <div
                        class="
                          combobox-content__icon
                          button-icon__up-black
                          icon-font-16
                        "
                      ></div>
                    </div>

                    <div class="combobox-child combobox-data">
                      <div class="combobox-data__search">
                        <label class="label-input combobox-data__search-label">
                          <input
                            type="text"
                            class="input input-icon"
                            placeholder="Tìm kiếm"
                          />
                          <span class="background-icon-search-input"></span>
                        </label>
                      </div>
                      <div class="combobox-data__child">
                        <div
                          class="combobox-data__child-content"
                          @click="handlerClickComboboxData"
                          value="- Không chọn -"
                        >
                          - Không chọn -
                        </div>
                        <div
                          class="combobox-data__child-content"
                          @click="handlerClickComboboxData"
                          value="Bố cục"
                        >
                          Bố cục
                        </div>
                        <div
                          class="combobox-data__child-content"
                          @click="handlerClickComboboxData"
                          value="Chức danh"
                        >
                          Chức danh
                        </div>
                        <div
                          class="combobox-data__child-content"
                          @click="handlerClickComboboxData"
                          value="Doanh thu"
                        >
                          Doanh thu
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- End phòng ban -->

              <!--Start Chức danh -->
              <div class="form-container__content-child--item">
                <div class="form-container__content-child--item__label">
                  Chức danh
                </div>
                <div class="form-container__content-child--item__input">
                  <div class="combobox">
                    <div
                      class="combobox-child combobox-content"
                      @click="handlerClickCombobox"
                      check="false"
                    >
                      <div class="combobox-content__select">- Không chọn -</div>
                      <div
                        class="
                          combobox-content__icon
                          button-icon__up-black
                          icon-font-16
                        "
                      ></div>
                    </div>

                    <div class="combobox-child combobox-data">
                      <div class="combobox-data__search">
                        <label class="label-input combobox-data__search-label">
                          <input
                            type="text"
                            class="input input-icon"
                            placeholder="Tìm kiếm"
                          />
                          <span class="background-icon-search-input"></span>
                        </label>
                      </div>
                      <div class="combobox-data__child">
                        <div
                          class="combobox-data__child-content"
                          @click="handlerClickComboboxData"
                          value="- Không chọn -"
                        >
                          - Không chọn -
                        </div>
                        <div
                          class="combobox-data__child-content"
                          @click="handlerClickComboboxData"
                          value="Giám đốc"
                        >
                          Giám đốc
                        </div>
                        <div
                          class="combobox-data__child-content"
                          @click="handlerClickComboboxData"
                          value="Trưởng nhóm"
                        >
                          Trưởng nhóm
                        </div>
                        <div
                          class="combobox-data__child-content"
                          @click="handlerClickComboboxData"
                          value="Nhân viên"
                        >
                          Nhân viên
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- END chức danh -->

              <!-- Start Đt di động -->
              <div class="form-container__content-child--item">
                <div class="form-container__content-child--item__label">
                  ĐT di động
                </div>
                <div class="form-container__content-child--item__input">
                  <input type="text" class="input-content" />
                </div>
              </div>
              <!-- End ĐT di động -->

              <!-- Start Đt cơ quan -->
              <div class="form-container__content-child--item">
                <div class="form-container__content-child--item__label">
                  ĐT di động
                </div>
                <div class="form-container__content-child--item__input">
                  <input type="text" class="input-content" />
                </div>
              </div>
              <!-- End ĐT cơ quan-->

              <!-- Start Nguồn gốc -->
              <div class="form-container__content-child--item">
                <div class="form-container__content-child--item__label">
                  Nguồn gốc
                </div>
                <div class="form-container__content-child--item__input">
                  <div class="combobox">
                    <div
                      class="combobox-child combobox-content"
                      @click="handlerClickCombobox"
                      check="false"
                    >
                      <div class="combobox-content__select">- Không chọn -</div>
                      <div
                        class="
                          combobox-content__icon
                          button-icon__up-black
                          icon-font-16
                        "
                      ></div>
                    </div>

                    <div class="combobox-child combobox-data">
                      <div class="combobox-data__search">
                        <label class="label-input combobox-data__search-label">
                          <input
                            type="text"
                            class="input input-icon"
                            placeholder="Tìm kiếm"
                          />
                          <span class="background-icon-search-input"></span>
                        </label>
                      </div>
                      <div class="combobox-data__child">
                        <div
                          class="combobox-data__child-content"
                          @click="handlerClickComboboxData"
                          value="- Không chọn -"
                        >
                          - Không chọn -
                        </div>
                        <div
                          class="combobox-data__child-content"
                          @click="handlerClickComboboxData"
                          value="Giám đốc"
                        >
                          Giám đốc
                        </div>
                        <div
                          class="combobox-data__child-content"
                          @click="handlerClickComboboxData"
                          value="Trưởng nhóm"
                        >
                          Trưởng nhóm
                        </div>
                        <div
                          class="combobox-data__child-content"
                          @click="handlerClickComboboxData"
                          value="Nhân viên"
                        >
                          Nhân viên
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- End Nguồn gốc -->

              <!-- Start Loại tiềm năng -->
              <div class="form-container__content-child--item">
                <div class="form-container__content-child--item__label">
                  Loại tiềm năng
                </div>
                <div class="form-container__content-child--item__input">
                  <div class="combobox combobox__mul">
                    <div
                      class="combobox-child combobox-content"
                      @click="handlerClickComboboxMul"
                      check="false"
                    >
                      <div class="combobox-content__select">- Không chọn -</div>
                    </div>

                    <div class="combobox-child combobox-data">
                      <div class="combobox-data__search">
                        <label class="label-input combobox-data__search-label">
                          <input
                            type="text"
                            class="input input-icon"
                            placeholder="Tìm kiếm"
                          />
                          <span class="background-icon-search-input"></span>
                        </label>
                      </div>
                      <div class="combobox-data__child">
                        <div
                          class="combobox-data__child-content"
                          @click="selectValueComboboxMulData"
                          value="- Không chọn -"
                        >
                          - Không chọn -
                        </div>
                        <div
                          class="combobox-data__child-content"
                          @click="selectValueComboboxMulData"
                          value="Giám đốc"
                        >
                          Giám đốc
                        </div>
                        <div
                          class="combobox-data__child-content"
                          @click="selectValueComboboxMulData"
                          value="Trưởng nhóm"
                        >
                          Trưởng nhóm
                        </div>
                        <div
                          class="combobox-data__child-content"
                          @click="selectValueComboboxMulData"
                          value="Nhân viên"
                        >
                          Nhân viên
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- End Loại tiềm năng -->

              <!-- Start Zalo -->
              <div class="form-container__content-child--item">
                <div class="form-container__content-child--item__label">
                  Zalo
                </div>
                <div class="form-container__content-child--item__input">
                  <input type="text" class="input-content" />
                </div>
              </div>
              <!-- End Zalo -->

              <!-- Start Email cá nhân -->
              <div class="form-container__content-child--item">
                <div class="form-container__content-child--item__label">
                  Email cá nhân
                </div>
                <div class="form-container__content-child--item__input">
                  <input type="text" class="input-content" />
                </div>
              </div>
              <!-- EndEmail cá nhân -->

              <!-- Start cơ quan-->
              <div class="form-container__content-child--item">
                <div class="form-container__content-child--item__label">
                  Email cơ quan
                </div>
                <div class="form-container__content-child--item__input">
                  <input type="text" class="input-content" />
                </div>
              </div>
              <!-- EndEmail cơ quan-->

              <!-- Start tổ chức -->
              <div class="form-container__content-child--item">
                <div class="form-container__content-child--item__label">
                  Tổ chức
                </div>
                <div class="form-container__content-child--item__input">
                  <input type="text" class="input-content" />
                </div>
              </div>
              <!-- End Tổ chức-->

              <!-- Start Mã số thuế-->
              <div class="form-container__content-child--item">
                <div class="form-container__content-child--item__label">
                  Mã số thuế
                </div>
                <div class="form-container__content-child--item__input">
                  <input type="text" class="input-content" />
                </div>
              </div>
              <!-- End Mã số thuế -->
            </div>
          </div>

          <!-- thông tin tổ chức -->
          <div class="form-container__content-child">
            <div class="form-container__content-child__title font-latin-bold">
              Thông tin tổ chức
            </div>

            <!-- Start Tài khoản ngân hàng-->
            <div class="form-container__content-child__body">
              <div class="form-container__content-child--item">
                <div class="form-container__content-child--item__label">
                  Tài khoản ngân hàng
                </div>
                <div class="form-container__content-child--item__input">
                  <input type="text" class="input-content input-error" />
                  <span class="span-error">Tên không được để trống</span>
                </div>
              </div>
              <!-- End Tài khoản ngân hàng -->

              <!-- Start Mở tại ngân hàng -->
              <div class="form-container__content-child--item">
                <div class="form-container__content-child--item__label">
                  Mở tại ngân hàng
                </div>
                <div class="form-container__content-child--item__input">
                  <input type="text" class="input-content" />
                </div>
              </div>
              <!-- End Mở tại ngân hàng-->

              <!-- Start Ngày thành lập -->
              <div class="form-container__content-child--item">
                <div class="form-container__content-child--item__label">
                  Ngày thành lập
                </div>
                <div class="form-container__content-child--item__input">
                  <input type="date" class="input-content" />
                </div>
              </div>
              <!-- End Ngày thành lập -->

              <!-- Start Loại hình  -->
              <div class="form-container__content-child--item">
                <div class="form-container__content-child--item__label">
                  Loại hình
                </div>
                <div class="form-container__content-child--item__input">
                  <input
                    type="text"
                    class="input-content disabled-input"
                    disabled
                  />
                </div>
              </div>
              <!-- End Loại hình -->

              <!-- Start Lĩnh vực -->
              <div class="form-container__content-child--item">
                <div class="form-container__content-child--item__label">
                  Lĩnh vực
                </div>
                <div class="form-container__content-child--item__input">
                  <div class="combobox">
                    <div
                      class="combobox-child combobox-content"
                      @click="handlerClickCombobox"
                      check="false"
                    >
                      <div class="combobox-content__select">- Không chọn -</div>
                      <div
                        class="
                          combobox-content__icon
                          button-icon__up-black
                          icon-font-16
                        "
                      ></div>
                    </div>

                    <div class="combobox-child combobox-data">
                      <div class="combobox-data__search">
                        <label class="label-input combobox-data__search-label">
                          <input
                            type="text"
                            class="input input-icon"
                            placeholder="Tìm kiếm"
                          />
                          <span class="background-icon-search-input"></span>
                        </label>
                      </div>
                      <div class="combobox-data__child">
                        <div
                          class="combobox-data__child-content"
                          @click="handlerClickComboboxData"
                          value="- Không chọn -"
                        >
                          - Không chọn -
                        </div>
                        <div
                          class="combobox-data__child-content"
                          @click="handlerClickComboboxData"
                          value="Bố cục"
                        >
                          Bố cục
                        </div>
                        <div
                          class="combobox-data__child-content"
                          @click="handlerClickComboboxData"
                          value="Chức danh"
                        >
                          Chức danh
                        </div>
                        <div
                          class="combobox-data__child-content"
                          @click="handlerClickComboboxData"
                          value="Doanh thu"
                        >
                          Doanh thu
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- End Lĩnh vực -->

              <!--Start Ngành nghề -->
              <div class="form-container__content-child--item">
                <div class="form-container__content-child--item__label">
                  Ngành nghề
                </div>
                <div class="form-container__content-child--item__input">
                  <div class="combobox">
                    <div
                      class="combobox-child combobox-content"
                      @click="handlerClickCombobox"
                      check="false"
                    >
                      <div class="combobox-content__select">- Không chọn -</div>
                      <div
                        class="
                          combobox-content__icon
                          button-icon__up-black
                          icon-font-16
                        "
                      ></div>
                    </div>

                    <div class="combobox-child combobox-data">
                      <div class="combobox-data__search">
                        <label class="label-input combobox-data__search-label">
                          <input
                            type="text"
                            class="input input-icon"
                            placeholder="Tìm kiếm"
                          />
                          <span class="background-icon-search-input"></span>
                        </label>
                      </div>
                      <div class="combobox-data__child">
                        <div
                          class="combobox-data__child-content"
                          @click="handlerClickComboboxData"
                          value="- Không chọn -"
                        >
                          - Không chọn -
                        </div>
                        <div
                          class="combobox-data__child-content"
                          @click="handlerClickComboboxData"
                          value="Giám đốc"
                        >
                          Giám đốc
                        </div>
                        <div
                          class="combobox-data__child-content"
                          @click="handlerClickComboboxData"
                          value="Trưởng nhóm"
                        >
                          Trưởng nhóm
                        </div>
                        <div
                          class="combobox-data__child-content"
                          @click="handlerClickComboboxData"
                          value="Nhân viên"
                        >
                          Nhân viên
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- END Ngành nghề -->

              <!-- Start Doanh thu-->
              <div class="form-container__content-child--item">
                <div class="form-container__content-child--item__label">
                  Doanh thu
                </div>
                <div class="form-container__content-child--item__input">
                  <div class="combobox">
                    <div
                      class="combobox-child combobox-content"
                      @click="handlerClickCombobox"
                      check="false"
                    >
                      <div class="combobox-content__select">- Không chọn -</div>
                      <div
                        class="
                          combobox-content__icon
                          button-icon__up-black
                          icon-font-16
                        "
                      ></div>
                    </div>

                    <div class="combobox-child combobox-data">
                      <div class="combobox-data__search">
                        <label class="label-input combobox-data__search-label">
                          <input
                            type="text"
                            class="input input-icon"
                            placeholder="Tìm kiếm"
                          />
                          <span class="background-icon-search-input"></span>
                        </label>
                      </div>
                      <div class="combobox-data__child">
                        <div
                          class="combobox-data__child-content"
                          @click="handlerClickComboboxData"
                          value="- Không chọn -"
                        >
                          - Không chọn -
                        </div>
                        <div
                          class="combobox-data__child-content"
                          @click="handlerClickComboboxData"
                          value="Giám đốc"
                        >
                          Giám đốc
                        </div>
                        <div
                          class="combobox-data__child-content"
                          @click="handlerClickComboboxData"
                          value="Trưởng nhóm"
                        >
                          Trưởng nhóm
                        </div>
                        <div
                          class="combobox-data__child-content"
                          @click="handlerClickComboboxData"
                          value="Nhân viên"
                        >
                          Nhân viên
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- End Doanh thu -->
            </div>
          </div>

          <!-- end thông tin tổ chức -->

          <!-- start Thông tin địa chỉ -->
          <div class="form-container__content-child">
            <div class="form-container__content-child__title font-latin-bold">
              Thông tin địa chỉ
            </div>

            <div class="form-container__content-child__body">
              <!-- Start Quốc Gia -->
              <div class="form-container__content-child--item">
                <div class="form-container__content-child--item__label">
                  Quốc gia
                </div>
                <div class="form-container__content-child--item__input">
                  <div class="combobox">
                    <div
                      class="combobox-child combobox-content"
                      @click="handlerClickCombobox"
                      check="false"
                    >
                      <div class="combobox-content__select">- Không chọn -</div>
                      <div
                        class="
                          combobox-content__icon
                          button-icon__up-black
                          icon-font-16
                        "
                      ></div>
                    </div>

                    <div class="combobox-child combobox-data">
                      <div class="combobox-data__search">
                        <label class="label-input combobox-data__search-label">
                          <input
                            type="text"
                            class="input input-icon"
                            placeholder="Tìm kiếm"
                          />
                          <span class="background-icon-search-input"></span>
                        </label>
                      </div>
                      <div class="combobox-data__child">
                        <div
                          class="combobox-data__child-content"
                          @click="handlerClickComboboxData"
                          value="- Không chọn -"
                        >
                          - Không chọn -
                        </div>
                        <div
                          class="combobox-data__child-content"
                          @click="handlerClickComboboxData"
                          value="Bố cục"
                        >
                          Bố cục
                        </div>
                        <div
                          class="combobox-data__child-content"
                          @click="handlerClickComboboxData"
                          value="Chức danh"
                        >
                          Chức danh
                        </div>
                        <div
                          class="combobox-data__child-content"
                          @click="handlerClickComboboxData"
                          value="Doanh thu"
                        >
                          Doanh thu
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- End Quốc Gia -->

              <!--Start Tỉnh/Thành phố-->
              <div class="form-container__content-child--item">
                <div class="form-container__content-child--item__label">
                  Tỉnh/Thành phố
                </div>
                <div class="form-container__content-child--item__input">
                  <div class="combobox">
                    <div
                      class="combobox-child combobox-content"
                      @click="handlerClickCombobox"
                      check="false"
                    >
                      <div class="combobox-content__select">- Không chọn -</div>
                      <div
                        class="
                          combobox-content__icon
                          button-icon__up-black
                          icon-font-16
                        "
                      ></div>
                    </div>

                    <div class="combobox-child combobox-data">
                      <div class="combobox-data__search">
                        <label class="label-input combobox-data__search-label">
                          <input
                            type="text"
                            class="input input-icon"
                            placeholder="Tìm kiếm"
                          />
                          <span class="background-icon-search-input"></span>
                        </label>
                      </div>
                      <div class="combobox-data__child">
                        <div
                          class="combobox-data__child-content"
                          @click="handlerClickComboboxData"
                          value="- Không chọn -"
                        >
                          - Không chọn -
                        </div>
                        <div
                          class="combobox-data__child-content"
                          @click="handlerClickComboboxData"
                          value="Giám đốc"
                        >
                          Giám đốc
                        </div>
                        <div
                          class="combobox-data__child-content"
                          @click="handlerClickComboboxData"
                          value="Trưởng nhóm"
                        >
                          Trưởng nhóm
                        </div>
                        <div
                          class="combobox-data__child-content"
                          @click="handlerClickComboboxData"
                          value="Nhân viên"
                        >
                          Nhân viên
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- END Tỉnh/Thành phố -->

              <!-- Start Quận/Huyện -->
              <div class="form-container__content-child--item">
                <div class="form-container__content-child--item__label">
                  Quận/Huyện
                </div>
                <div class="form-container__content-child--item__input">
                  <div class="combobox">
                    <div
                      class="combobox-child combobox-content"
                      @click="handlerClickCombobox"
                      check="false"
                    >
                      <div class="combobox-content__select">- Không chọn -</div>
                      <div
                        class="
                          combobox-content__icon
                          button-icon__up-black
                          icon-font-16
                        "
                      ></div>
                    </div>

                    <div class="combobox-child combobox-data">
                      <div class="combobox-data__search">
                        <label class="label-input combobox-data__search-label">
                          <input
                            type="text"
                            class="input input-icon"
                            placeholder="Tìm kiếm"
                          />
                          <span class="background-icon-search-input"></span>
                        </label>
                      </div>
                      <div class="combobox-data__child">
                        <div
                          class="combobox-data__child-content"
                          @click="handlerClickComboboxData"
                          value="- Không chọn -"
                        >
                          - Không chọn -
                        </div>
                        <div
                          class="combobox-data__child-content"
                          @click="handlerClickComboboxData"
                          value="Giám đốc"
                        >
                          Giám đốc
                        </div>
                        <div
                          class="combobox-data__child-content"
                          @click="handlerClickComboboxData"
                          value="Trưởng nhóm"
                        >
                          Trưởng nhóm
                        </div>
                        <div
                          class="combobox-data__child-content"
                          @click="handlerClickComboboxData"
                          value="Nhân viên"
                        >
                          Nhân viên
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- End Quận/Huyện -->

              <!-- Start Phường/Xã -->
              <div class="form-container__content-child--item">
                <div class="form-container__content-child--item__label">
                  Phường/Xã
                </div>
                <div class="form-container__content-child--item__input">
                  <div class="combobox">
                    <div
                      class="combobox-child combobox-content"
                      @click="handlerClickCombobox"
                      check="false"
                    >
                      <div class="combobox-content__select">- Không chọn -</div>
                      <div
                        class="
                          combobox-content__icon
                          button-icon__up-black
                          icon-font-16
                        "
                      ></div>
                    </div>

                    <div class="combobox-child combobox-data">
                      <div class="combobox-data__search">
                        <label class="label-input combobox-data__search-label">
                          <input
                            type="text"
                            class="input input-icon"
                            placeholder="Tìm kiếm"
                          />
                          <span class="background-icon-search-input"></span>
                        </label>
                      </div>
                      <div class="combobox-data__child">
                        <div
                          class="combobox-data__child-content"
                          @click="handlerClickComboboxData"
                          value="- Không chọn -"
                        >
                          - Không chọn -
                        </div>
                        <div
                          class="combobox-data__child-content"
                          @click="handlerClickComboboxData"
                          value="Giám đốc"
                        >
                          Giám đốc
                        </div>
                        <div
                          class="combobox-data__child-content"
                          @click="handlerClickComboboxData"
                          value="Trưởng nhóm"
                        >
                          Trưởng nhóm
                        </div>
                        <div
                          class="combobox-data__child-content"
                          @click="handlerClickComboboxData"
                          value="Nhân viên"
                        >
                          Nhân viên
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- End Phường/Xã -->

              <!-- Start Số nhà, Đường phố -->
              <div class="form-container__content-child--item">
                <div class="form-container__content-child--item__label">
                  Số nhà, Đường phố
                </div>
                <div class="form-container__content-child--item__input">
                  <input type="text" class="input-content" />
                </div>
              </div>
              <!-- End Số nhà, Đường phố-->

              <!-- Start Mã vùng -->
              <div class="form-container__content-child--item">
                <div class="form-container__content-child--item__label">
                  Mã vùng
                </div>
                <div class="form-container__content-child--item__input">
                  <input type="text" class="input-content" />
                </div>
              </div>
              <!-- Mã vùng -->

              <!-- Start Địa chỉ -->
              <div class="form-container__content-child--item">
                <div class="form-container__content-child--item__label">
                  Mã vùng
                </div>
                <div class="form-container__content-child--item__input">
                  <textarea class="textarea"></textarea>
                </div>
              </div>
              <!-- End địa chỉ -->
            </div>
          </div>
          <!-- end thông tin địa chỉ -->

          <!-- Start thông tin mô tả -->
          <div class="form-container__content-child">
            <div class="form-container__content-child__title font-latin-bold">
              Thông tin mô tả
            </div>

            <div class="form-container__content-child__body">
              <!-- Start thông tin mô tả -->
              <div
                class="
                  form-container__content-child--item
                  form-container__description
                "
              >
                <div class="form-container__content-child--item__label">
                  Mô tả
                </div>
                <div class="form-container__content-child--item__input">
                  <textarea class="textarea textarea-description"></textarea>
                </div>
              </div>
              <!-- End địa chỉ -->
            </div>
          </div>
          <!-- End thông tin mô tả -->

          <!-- Start thông tin hệ thống -->
          <div class="form-container__content-child">
            <div class="form-container__content-child__title font-latin-bold">
              Thông tin hệ thống
            </div>

            <div class="form-container__content-child__body">
              <!-- Start dùng chung-->
              <div
                class="
                  form-container__content-child--item
                  form-container__description
                "
              >
                <div class="form-container__content-child--item__label">
                  Dùng chung
                </div>
                <div class="form-container__content-child--item__input">
                  <input type="checkbox" />
                </div>
              </div>
              <!-- End dùng chung -->

              <!-- Start Mã tiềm năng -->
              <div class="form-container__content-child--item">
                <div class="form-container__content-child--item__label">
                  Mã tiềm năng
                </div>
                <div class="form-container__content-child--item__input">
                  <input
                    type="text"
                    class="input-content"
                    :model="UserInfo.UserId"
                  />
                </div>
              </div>
              <!-- End Mã tiềm năng -->
            </div>
          </div>
          <!-- End thông tin hệ thống -->
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import {
  ClickShowHideComboboxData,
  selectValueComboboxData,
  ClickShowHideComboboxMulData,
} from "../../js/test";
import { ErrorsValidation } from "../../js/validation";

export default {
  name: "FormDataComponent",
  components: {},
  created() {
    // alert('khoi tao');
  },
  props: {
    checkShowFormData: Boolean,
    User1: Object,
  },
  data() {
    return {
       errors: {
        UserId: "",
        LastName: "",
        UserPhone: "",
        UserEmail: "",
      },
      UserInfo: {
        UserId: "",
        FirstName: "",
        LastName: "",
        UserNummberPhone: "", //số đt cá nhân
        CompanyNumberPhone: "", //số đt công ty
        UserEmail: "", // email cá nhân
        CompanyEmail: "", // email công ty
        Zalo: "", //  -- zalo
        TaxCode: "", //-- mã số thuế
        Organize: "", //-- tổ chức
        Gender: "", //-- 1 là Nam, 0 là Nữ
        BirthDay: "", //-- ngày sinh
        UserDescription: "", // -- mô tả
        Address: "", // -- địa chỉ
        Country: "", // -- quốc gia
        City: "", //-- tỉnh
        District: "", //-- Huyện
        Commune: "", // -- Xã
        ApartmentNumber: "", // -- số nhà
        AreaCode: "", // -- mã vùng
        IsUserPhoneActive: Boolean, // -- cho phép gọi điện
        IsUserEmailActive: Boolean, // -- cho phép gửi email
        VocativeId: "", //-- xưng hô Id, 1 user có 1 xưng hô
        DepartmentID: "", // -- một người - 1 phòng ban
        OriginId: "", // -- 1 người - 1 nguồn gốc tiềm năng
        JobTitleId: "", // -- 1 người - 1 chức danh
        CompanyTypeId: "", // -- loại hình công ty của user /  -- 1 người thuộc 1 tổ chức - ghi thông tin tổ chức ra các bảng
        RevenueID: "", // -- doanh thu của tổ chức
        CreatedAt: "",
        UpdatedAt: "",
        CreateaBy: "",
        UpdatedBy: "",
      },
    };
  },
  methods: {
    HandlerCloseForm() {
      try {
        this.$emit("CloseFormData", !this.checkShowFormData);
      } catch (error) {
        console.log(error);
      }
    },
    handlerClickCombobox: function (event) {
      try {
        ClickShowHideComboboxData(event);
      } catch (error) {
        console.log(error);
      }
    },
    handlerClickComboboxData: function (event) {
      try {
        selectValueComboboxData(event);
      } catch (error) {
        console.log(error);
      }
    },
    handlerClickComboboxMul(event) {
      try {
        ClickShowHideComboboxMulData(event);
      } catch (error) {
        console.log(error);
      }
    },
    validate() {
      this.errors = {
        UserId: "",
        LastName: "",
        UserPhone: "",
        UserEmail: "",
      };

      if (!this.UserInfo.UserId)
        this.errors.UserId = ErrorsValidation.UserIdRequired;

      if (!this.UserInfo.LastName)
        this.errors.LastName = ErrorsValidation.LastNameRequired;

      if (!this.UserInfo.UserPhone)
        this.errors.UserPhone = ErrorsValidation.PhoneRequired;

      if (!this.UserInfo.UserEmail)
        this.errors.UserEmail = ErrorsValidation.EmailRequired;
    },
    OnSubmit() {
      this.validate();
      console.log(this.errors);
    },
  },
  mounted() {
    // alert('huy');
  },
};
</script>
<style>
</style>
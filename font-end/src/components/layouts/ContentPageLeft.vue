<template>
  <div class="content-chlid content-sider-bar__left">
    <div class="content-sider-bar__left-top">
      <div class="combobox filter-save combobox-filter-top">
        <div
          class="combobox-child combobox-content"
          @click="handlerClickCombobox"
          check="false"
        >
          <div class="combobox-content__select">BỘ LỌC ĐÃ LƯU</div>
          <div
            class="combobox-content__icon button-icon__up-black icon-font-16"
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
              class="combobox-data__child-content select-content__data"
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
    <div class="content-sider-bar__left-center">
      <div class="filter-title">
        <div class="filter-title__text">LỌC TIỀM NĂNG THEO</div>
        <div class="filter-title__icon">
          <span class="background-icon-search-input"></span>
        </div>
      </div>

      <div class="filter-content">
        <div class="filter-content-child">
          <div class="filter-content-child__checkbox">
            <div class="filter-content-child__checkbox-input">
              <input type="checkbox" />
            </div>
            <div class="filter-content-child__checkbox-text">Thẻ</div>
          </div>
          <div class="filter-content-child__box">
            <!-- content thẻ -->
          </div>
        </div>

        <div class="filter-content-child filter-content-active">
          <div class="filter-content-child__checkbox">
            <div class="filter-content-child__checkbox-input">
              <input type="checkbox" />
            </div>
            <div class="filter-content-child__checkbox-text">Xưng hô</div>
          </div>
          <div class="filter-content-child__box">
            <div
              class="combobox filter-save filter-content-child__box--combobox"
            >
              <div
                class="combobox-child combobox-content border-color-c"
                @click="handlerClickCombobox"
                check="false"
              >
                <div class="combobox-content__select"></div>
                <div
                  class="
                    combobox-content__icon
                    button-icon__up-black
                    icon-font-16
                  "
                ></div>
              </div>

              <div
                class="combobox-child combobox-data filter-content-child__data"
              >
                <div
                  class="
                    combobox-data__search
                    filter-content-child__data__child
                  "
                >
                  <label class="label-input combobox-data__search-label">
                    <input
                      type="text"
                      class="input input-icon"
                      placeholder="Tìm kiếm"
                    />
                    <span class="background-icon-search-input"></span>
                  </label>
                </div>
                <div
                  class="combobox-data__child filter-content-child__data__child"
                >
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
            <div class="filter-content-child__box--textarea">
              <div
                class="
                  filter-content-child__box--textarea__content
                  border-color-c
                "
              ></div>
            </div>
          </div>
        </div>

        <!-- Họ và tên -->
        <div class="filter-content-child">
          <div class="filter-content-child__checkbox">
            <div class="filter-content-child__checkbox-input">
              <input type="checkbox" />
            </div>
            <div class="filter-content-child__checkbox-text">Họ và tên</div>
          </div>
          <div class="filter-content-child__box">
            <!-- content thẻ -->
          </div>
        </div>

        <!-- Chức danh -->
        <div class="filter-content-child">
          <div class="filter-content-child__checkbox">
            <div class="filter-content-child__checkbox-input">
              <input type="checkbox" />
            </div>
            <div class="filter-content-child__checkbox-text">Chức danh</div>
          </div>
          <div class="filter-content-child__box">
            <!-- content thẻ -->
          </div>
        </div>

        <!-- điện thoại di động -->
        <div class="filter-content-child">
          <div class="filter-content-child__checkbox">
            <div class="filter-content-child__checkbox-input">
              <input type="checkbox" />
            </div>
            <div class="filter-content-child__checkbox-text">ĐT di động</div>
          </div>
          <div class="filter-content-child__box">
            <!-- content thẻ -->
          </div>
        </div>

        <!-- điện thoại cơ quan -->
        <div class="filter-content-child">
          <div class="filter-content-child__checkbox">
            <div class="filter-content-child__checkbox-input">
              <input type="checkbox" />
            </div>
            <div class="filter-content-child__checkbox-text">Đt cơ quan</div>
          </div>
          <div class="filter-content-child__box">
            <!-- content thẻ -->
          </div>
        </div>

        <!-- email cơ quan -->
        <div class="filter-content-child">
          <div class="filter-content-child__checkbox">
            <div class="filter-content-child__checkbox-input">
              <input type="checkbox" />
            </div>
            <div class="filter-content-child__checkbox-text">Email cơ quan</div>
          </div>
          <div class="filter-content-child__box">
            <!-- content thẻ -->
          </div>
        </div>

        <!-- email cá nhân -->
        <div class="filter-content-child">
          <div class="filter-content-child__checkbox">
            <div class="filter-content-child__checkbox-input">
              <input type="checkbox" />
            </div>
            <div class="filter-content-child__checkbox-text">Email cá nhân</div>
          </div>
          <div class="filter-content-child__box">
            <!-- content thẻ -->
          </div>
        </div>

        <!-- tổ chức -->
        <div class="filter-content-child">
          <div class="filter-content-child__checkbox">
            <div class="filter-content-child__checkbox-input">
              <input type="checkbox" />
            </div>
            <div class="filter-content-child__checkbox-text">Tổ chức</div>
          </div>
          <div class="filter-content-child__box">
            <!-- content thẻ -->
          </div>
        </div>

        <!-- Địa chỉ -->
        <div class="filter-content-child">
          <div class="filter-content-child__checkbox">
            <div class="filter-content-child__checkbox-input">
              <input type="checkbox" />
            </div>
            <div class="filter-content-child__checkbox-text">Địa chỉ</div>
          </div>
          <div class="filter-content-child__box">
            <!-- content thẻ -->
          </div>
        </div>

        <!-- Tỉnh/Thành phố -->
        <div class="filter-content-child">
          <div class="filter-content-child__checkbox">
            <div class="filter-content-child__checkbox-input">
              <input type="checkbox" />
            </div>
            <div class="filter-content-child__checkbox-text">
              Tỉnh/Thành phố
            </div>
          </div>
          <div class="filter-content-child__box">
            <!-- content thẻ -->
          </div>
        </div>

        <!-- Quận/Huyện -->
        <div class="filter-content-child">
          <div class="filter-content-child__checkbox">
            <div class="filter-content-child__checkbox-input">
              <input type="checkbox" />
            </div>
            <div class="filter-content-child__checkbox-text">Quận/Huyện</div>
          </div>
          <div class="filter-content-child__box">
            <!-- content thẻ -->
          </div>
        </div>

        <!-- Phường/Xã -->
        <div class="filter-content-child">
          <div class="filter-content-child__checkbox">
            <div class="filter-content-child__checkbox-input">
              <input type="checkbox" />
            </div>
            <div class="filter-content-child__checkbox-text">Phường/Xã</div>
          </div>
          <div class="filter-content-child__box">
            <!-- content thẻ -->
          </div>
        </div>

        <!-- Nguồn gốc -->
        <div class="filter-content-child">
          <div class="filter-content-child__checkbox">
            <div class="filter-content-child__checkbox-input">
              <input type="checkbox" />
            </div>
            <div class="filter-content-child__checkbox-text">Nguồn gốc</div>
          </div>
          <div class="filter-content-child__box">
            <!-- content thẻ -->
          </div>
        </div>

        <!-- Loại hình -->
        <div class="filter-content-child">
          <div class="filter-content-child__checkbox">
            <div class="filter-content-child__checkbox-input">
              <input type="checkbox" />
            </div>
            <div class="filter-content-child__checkbox-text">Loại hình</div>
          </div>
          <div class="filter-content-child__box">
            <!-- content thẻ -->
          </div>
        </div>

        <!-- Lĩnh vực -->
        <div class="filter-content-child">
          <div class="filter-content-child__checkbox">
            <div class="filter-content-child__checkbox-input">
              <input type="checkbox" />
            </div>
            <div class="filter-content-child__checkbox-text">Lĩnh vực</div>
          </div>
          <div class="filter-content-child__box">
            <!-- content thẻ -->
          </div>
        </div>

        <!-- Mô tả -->
        <div class="filter-content-child">
          <div class="filter-content-child__checkbox">
            <div class="filter-content-child__checkbox-input">
              <input type="checkbox" />
            </div>
            <div class="filter-content-child__checkbox-text">Mô tả</div>
          </div>
          <div class="filter-content-child__box">
            <!-- content thẻ -->
          </div>
        </div>

        <!-- Bố cục -->
        <div class="filter-content-child">
          <div class="filter-content-child__checkbox">
            <div class="filter-content-child__checkbox-input">
              <input type="checkbox" />
            </div>
            <div class="filter-content-child__checkbox-text">Bố cục</div>
          </div>
          <div class="filter-content-child__box">
            <!-- content thẻ -->
          </div>
        </div>

        <!-- chủ sở hữu -->
        <div class="filter-content-child">
          <div class="filter-content-child__checkbox">
            <div class="filter-content-child__checkbox-input">
              <input type="checkbox" />
            </div>
            <div class="filter-content-child__checkbox-text">Chủ sở hữu</div>
          </div>
          <div class="filter-content-child__box">
            <!-- content thẻ -->
          </div>
        </div>

        <!-- doanh thu -->
        <div class="filter-content-child">
          <div class="filter-content-child__checkbox">
            <div class="filter-content-child__checkbox-input">
              <input type="checkbox" />
            </div>
            <div class="filter-content-child__checkbox-text">Doanh thu</div>
          </div>
          <div class="filter-content-child__box">
            <!-- content thẻ -->
          </div>
        </div>

        <!-- Dùng chung -->
        <div class="filter-content-child">
          <div class="filter-content-child__checkbox">
            <div class="filter-content-child__checkbox-input">
              <input type="checkbox" />
            </div>
            <div class="filter-content-child__checkbox-text">Dùng chung</div>
          </div>
          <div class="filter-content-child__box">
            <!-- content thẻ -->
          </div>
        </div>

        <!-- Facebook -->
        <div class="filter-content-child">
          <div class="filter-content-child__checkbox">
            <div class="filter-content-child__checkbox-input">
              <input type="checkbox" />
            </div>
            <div class="filter-content-child__checkbox-text">Facebook</div>
          </div>
          <div class="filter-content-child__box">
            <!-- content thẻ -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ClickShowHideComboboxData, selectValueComboboxData } from "../../js/test";
export default {
  name: "ContentPageLeft",
  methods: {
    handlerClickCombobox: function (event) {
      ClickShowHideComboboxData(event);
    },
    handlerClickComboboxData: function (event) {
      selectValueComboboxData(event);
    },
  },
};
</script>

<style>
</style>
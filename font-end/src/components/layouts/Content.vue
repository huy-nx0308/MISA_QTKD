<template>
   <div class="content">
    <div class="content-chlid content-sider-bar__left">
      <div class="content-sider-bar__left-top">
        <!-- <div class="filter-save">
                        <span class="filter-save__text">BỘ LỌC ĐÃ LƯU</span>
                        <span class="filter-save__text__icon combobox-toolbar__icon button-icon__down-black"></span>
                    </div> -->
        <div class="combobox filter-save combobox-filter-top">
          <div
            class="combobox-child combobox-content"
            onclick="ClickShowHideComboboxData(event)"
            check="false"
          >
            <div class="combobox-content__select">- Chọn trường -</div>
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
                onclick="selectValueComboboxData(event)"
                value="Bố cục"
              >
                Bố cục
              </div>
              <div
                class="combobox-data__child-content"
                onclick="selectValueComboboxData(event)"
                value="Chức danh"
              >
                Chức danh
              </div>
              <div
                class="combobox-data__child-content"
                onclick="selectValueComboboxData(event)"
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
                  onclick="ClickShowHideComboboxData(event)"
                  check="false"
                >
                  <div class="combobox-content__select">Là</div>
                  <div
                    class="
                      combobox-content__icon
                      button-icon__up-black
                      icon-font-16
                    "
                  ></div>
                </div>

                <div
                  class="
                    combobox-child combobox-data
                    filter-content-child__data
                  "
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
                    class="
                      combobox-data__child
                      filter-content-child__data__child
                    "
                  >
                    <div
                      class="combobox-data__child-content"
                      onclick="selectValueComboboxData(event)"
                      value="Bố cục"
                    >
                      Bố cục
                    </div>
                    <div
                      class="combobox-data__child-content"
                      onclick="selectValueComboboxData(event)"
                      value="Chức danh"
                    >
                      Chức danh
                    </div>
                    <div
                      class="combobox-data__child-content"
                      onclick="selectValueComboboxData(event)"
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
              <div class="filter-content-child__checkbox-text">
                Email cơ quan
              </div>
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
              <div class="filter-content-child__checkbox-text">
                Email cá nhân
              </div>
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

    <div class="content-chld content-center">
      <div class="table-container">
        <div class="table-header">
          <div class="thead">
            <div class="tr">
              <div class="th">
                <span class="th-icon-sum background-icon__header-sum"></span>
              </div>
              <div class="th">
                <input type="checkbox" />
              </div>
              <div class="th">Thẻ</div>
              <div class="th">Xưng hô</div>
              <div class="th">Họ và tên</div>
              <div class="th">Chức danh</div>
              <div class="th">ĐT di động</div>
              <div class="th">ĐT cơ quan</div>
              <div class="th">Email cơ quan</div>
              <div class="th">Email cá nhân</div>
              <div class="th">Tổ chức</div>
              <div class="th">Mã số thuế</div>
              <div class="th">Tài khoản ngân hàng</div>
              <div class="th">Mở tại ngân hàng</div>
              <div class="th">Ngày thành lập</div>
              <div class="th">Loại hình</div>
              <div class="th">Lĩnh vực</div>
              <div class="th">Ngành nghề</div>
              <div class="th">Doanh thu</div>
              <div class="th">Địa chỉ</div>
            </div>
          </div>
        </div>
        <div class="table-content">
          <div class="tbody">
            <div class="tr">
              <div class="td"></div>
              <div class="td">
                <input type="checkbox" />
              </div>
              <div class="td"></div>
              <div class="td">Anh</div>
              <div class="td">Phạm Văn Đạt</div>
              <div class="td">Thực tập sinh</div>
              <div class="td">0123457894</div>
              <div class="td">0123564657</div>
              <div class="td">phamphamaahaashsnfbhdndhh@gmail.com</div>
              <div class="td">phamphamaahaashsnfbhdndhh@gmail.com</div>
              <div class="td">Tổ chức A</div>
              <div class="td">0668845123</div>
              <div class="td">Helo pay</div>
              <div class="td">Hà Nội</div>
              <div class="td">10/10/2019</div>
              <div class="td">Banking</div>
              <div class="td">Công Nghệ Thông tin</div>
              <div class="td">Lập trình viên</div>
              <div class="td">000.000.000 VNĐ</div>
              <div class="td">
                Hà Nội Hà Nội Hà Nội Hà Nội Hà Nội Hà Nội Hà Nội Hà Nội Hà Nội
              </div>
            </div>
            <div class="tr">
              <div class="td"></div>
              <div class="td">
                <input type="checkbox" />
              </div>
              <div class="td"></div>
              <div class="td">Anh</div>
              <div class="td">Phạm Văn Đạt</div>
              <div class="td">Thực tập sinh</div>
              <div class="td">0123457894</div>
              <div class="td">0123564657</div>
              <div class="td">phamphamaahaashsnfbhdndhh@gmail.com</div>
              <div class="td">phamphamaahaashsnfbhdndhh@gmail.com</div>
              <div class="td">Tổ chức A</div>
              <div class="td">0668845123</div>
              <div class="td">Helo pay</div>
              <div class="td">Hà Nội</div>
              <div class="td">10/10/2019</div>
              <div class="td">Banking</div>
              <div class="td">Công Nghệ Thông tin</div>
              <div class="td">Lập trình viên</div>
              <div class="td">000.000.000 VNĐ</div>
              <div class="td">
                Hà Nội Hà Nội Hà Nội Hà Nội Hà Nội Hà Nội Hà Nội Hà Nội Hà Nội
              </div>
            </div>
            <div class="tr">
              <div class="td"></div>
              <div class="td">
                <input type="checkbox" />
              </div>
              <div class="td"></div>
              <div class="td">Anh</div>
              <div class="td">Phạm Văn Đạt</div>
              <div class="td">Thực tập sinh</div>
              <div class="td">0123457894</div>
              <div class="td">0123564657</div>
              <div class="td">phamphamaahaashsnfbhdndhh@gmail.com</div>
              <div class="td">phamphamaahaashsnfbhdndhh@gmail.com</div>
              <div class="td">Tổ chức A</div>
              <div class="td">0668845123</div>
              <div class="td">Helo pay</div>
              <div class="td">Hà Nội</div>
              <div class="td">10/10/2019</div>
              <div class="td">Banking</div>
              <div class="td">Công Nghệ Thông tin</div>
              <div class="td">Lập trình viên</div>
              <div class="td">000.000.000 VNĐ</div>
              <div class="td">
                Hà Nội Hà Nội Hà Nội Hà Nội Hà Nội Hà Nội Hà Nội Hà Nội Hà Nội
              </div>
            </div>
            <div class="tr">
              <div class="td"></div>
              <div class="td">
                <input type="checkbox" />
              </div>
              <div class="td"></div>
              <div class="td">Anh</div>
              <div class="td">Phạm Văn Đạt</div>
              <div class="td">Thực tập sinh</div>
              <div class="td">0123457894</div>
              <div class="td">0123564657</div>
              <div class="td">phamphamaahaashsnfbhdndhh@gmail.com</div>
              <div class="td">phamphamaahaashsnfbhdndhh@gmail.com</div>
              <div class="td">Tổ chức A</div>
              <div class="td">0668845123</div>
              <div class="td">Helo pay</div>
              <div class="td">Hà Nội</div>
              <div class="td">10/10/2019</div>
              <div class="td">Banking</div>
              <div class="td">Công Nghệ Thông tin</div>
              <div class="td">Lập trình viên</div>
              <div class="td">000.000.000 VNĐ</div>
              <div class="td">
                Hà Nội Hà Nội Hà Nội Hà Nội Hà Nội Hà Nội Hà Nội Hà Nội Hà Nội
              </div>
            </div>
            <div class="tr">
              <div class="td"></div>
              <div class="td">
                <input type="checkbox" />
              </div>
              <div class="td"></div>
              <div class="td">Anh</div>
              <div class="td">Phạm Văn Đạt</div>
              <div class="td">Thực tập sinh</div>
              <div class="td">0123457894</div>
              <div class="td">0123564657</div>
              <div class="td">phamphamaahaashsnfbhdndhh@gmail.com</div>
              <div class="td">phamphamaahaashsnfbhdndhh@gmail.com</div>
              <div class="td">Tổ chức A</div>
              <div class="td">0668845123</div>
              <div class="td">Helo pay</div>
              <div class="td">Hà Nội</div>
              <div class="td">10/10/2019</div>
              <div class="td">Banking</div>
              <div class="td">Công Nghệ Thông tin</div>
              <div class="td">Lập trình viên</div>
              <div class="td">000.000.000 VNĐ</div>
              <div class="td">
                Hà Nội Hà Nội Hà Nội Hà Nội Hà Nội Hà Nội Hà Nội Hà Nội Hà Nội
              </div>
            </div>
            <div class="tr">
              <div class="td"></div>
              <div class="td">
                <input type="checkbox" />
              </div>
              <div class="td"></div>
              <div class="td">Anh</div>
              <div class="td">Phạm Văn Đạt</div>
              <div class="td">Thực tập sinh</div>
              <div class="td">0123457894</div>
              <div class="td">0123564657</div>
              <div class="td">phamphamaahaashsnfbhdndhh@gmail.com</div>
              <div class="td">phamphamaahaashsnfbhdndhh@gmail.com</div>
              <div class="td">Tổ chức A</div>
              <div class="td">0668845123</div>
              <div class="td">Helo pay</div>
              <div class="td">Hà Nội</div>
              <div class="td">10/10/2019</div>
              <div class="td">Banking</div>
              <div class="td">Công Nghệ Thông tin</div>
              <div class="td">Lập trình viên</div>
              <div class="td">000.000.000 VNĐ</div>
              <div class="td">
                Hà Nội Hà Nội Hà Nội Hà Nội Hà Nội Hà Nội Hà Nội Hà Nội Hà Nội
              </div>
            </div>
            <div class="tr">
              <div class="td"></div>
              <div class="td">
                <input type="checkbox" />
              </div>
              <div class="td"></div>
              <div class="td">Anh</div>
              <div class="td">Phạm Văn Đạt</div>
              <div class="td">Thực tập sinh</div>
              <div class="td">0123457894</div>
              <div class="td">0123564657</div>
              <div class="td">phamphamaahaashsnfbhdndhh@gmail.com</div>
              <div class="td">phamphamaahaashsnfbhdndhh@gmail.com</div>
              <div class="td">Tổ chức A</div>
              <div class="td">0668845123</div>
              <div class="td">Helo pay</div>
              <div class="td">Hà Nội</div>
              <div class="td">10/10/2019</div>
              <div class="td">Banking</div>
              <div class="td">Công Nghệ Thông tin</div>
              <div class="td">Lập trình viên</div>
              <div class="td">000.000.000 VNĐ</div>
              <div class="td">
                Hà Nội Hà Nội Hà Nội Hà Nội Hà Nội Hà Nội Hà Nội Hà Nội Hà Nội
              </div>
            </div>
            <div class="tr">
              <div class="td"></div>
              <div class="td">
                <input type="checkbox" />
              </div>
              <div class="td"></div>
              <div class="td">Anh</div>
              <div class="td">Phạm Văn Đạt</div>
              <div class="td">Thực tập sinh</div>
              <div class="td">0123457894</div>
              <div class="td">0123564657</div>
              <div class="td">phamphamaahaashsnfbhdndhh@gmail.com</div>
              <div class="td">phamphamaahaashsnfbhdndhh@gmail.com</div>
              <div class="td">Tổ chức A</div>
              <div class="td">0668845123</div>
              <div class="td">Helo pay</div>
              <div class="td">Hà Nội</div>
              <div class="td">10/10/2019</div>
              <div class="td">Banking</div>
              <div class="td">Công Nghệ Thông tin</div>
              <div class="td">Lập trình viên</div>
              <div class="td">000.000.000 VNĐ</div>
              <div class="td">
                Hà Nội Hà Nội Hà Nội Hà Nội Hà Nội Hà Nội Hà Nội Hà Nội Hà Nội
              </div>
            </div>
            <div class="tr">
              <div class="td"></div>
              <div class="td">
                <input type="checkbox" />
              </div>
              <div class="td"></div>
              <div class="td">Anh</div>
              <div class="td">Phạm Văn Đạt</div>
              <div class="td">Thực tập sinh</div>
              <div class="td">0123457894</div>
              <div class="td">0123564657</div>
              <div class="td">phamphamaahaashsnfbhdndhh@gmail.com</div>
              <div class="td">phamphamaahaashsnfbhdndhh@gmail.com</div>
              <div class="td">Tổ chức A</div>
              <div class="td">0668845123</div>
              <div class="td">Helo pay</div>
              <div class="td">Hà Nội</div>
              <div class="td">10/10/2019</div>
              <div class="td">Banking</div>
              <div class="td">Công Nghệ Thông tin</div>
              <div class="td">Lập trình viên</div>
              <div class="td">000.000.000 VNĐ</div>
              <div class="td">
                Hà Nội Hà Nội Hà Nội Hà Nội Hà Nội Hà Nội Hà Nội Hà Nội Hà Nội
              </div>
            </div>
            <div class="tr">
              <div class="td"></div>
              <div class="td">
                <input type="checkbox" />
              </div>
              <div class="td"></div>
              <div class="td">Anh</div>
              <div class="td">Phạm Văn Đạt</div>
              <div class="td">Thực tập sinh</div>
              <div class="td">0123457894</div>
              <div class="td">0123564657</div>
              <div class="td">phamphamaahaashsnfbhdndhh@gmail.com</div>
              <div class="td">phamphamaahaashsnfbhdndhh@gmail.com</div>
              <div class="td">Tổ chức A</div>
              <div class="td">0668845123</div>
              <div class="td">Helo pay</div>
              <div class="td">Hà Nội</div>
              <div class="td">10/10/2019</div>
              <div class="td">Banking</div>
              <div class="td">Công Nghệ Thông tin</div>
              <div class="td">Lập trình viên</div>
              <div class="td">000.000.000 VNĐ</div>
              <div class="td">
                Hà Nội Hà Nội Hà Nội Hà Nội Hà Nội Hà Nội Hà Nội Hà Nội Hà Nội
              </div>
            </div>
            <div class="tr">
              <div class="td"></div>
              <div class="td">
                <input type="checkbox" />
              </div>
              <div class="td"></div>
              <div class="td">Anh</div>
              <div class="td">Phạm Văn Đạt</div>
              <div class="td">Thực tập sinh</div>
              <div class="td">0123457894</div>
              <div class="td">0123564657</div>
              <div class="td">phamphamaahaashsnfbhdndhh@gmail.com</div>
              <div class="td">phamphamaahaashsnfbhdndhh@gmail.com</div>
              <div class="td">Tổ chức A</div>
              <div class="td">0668845123</div>
              <div class="td">Helo pay</div>
              <div class="td">Hà Nội</div>
              <div class="td">10/10/2019</div>
              <div class="td">Banking</div>
              <div class="td">Công Nghệ Thông tin</div>
              <div class="td">Lập trình viên</div>
              <div class="td">000.000.000 VNĐ</div>
              <div class="td">
                Hà Nội Hà Nội Hà Nội Hà Nội Hà Nội Hà Nội Hà Nội Hà Nội Hà Nội
              </div>
            </div>
            <div class="tr">
              <div class="td"></div>
              <div class="td">
                <input type="checkbox" />
              </div>
              <div class="td"></div>
              <div class="td">Anh</div>
              <div class="td">Phạm Văn Đạt</div>
              <div class="td">Thực tập sinh</div>
              <div class="td">0123457894</div>
              <div class="td">0123564657</div>
              <div class="td">phamphamaahaashsnfbhdndhh@gmail.com</div>
              <div class="td">phamphamaahaashsnfbhdndhh@gmail.com</div>
              <div class="td">Tổ chức A</div>
              <div class="td">0668845123</div>
              <div class="td">Helo pay</div>
              <div class="td">Hà Nội</div>
              <div class="td">10/10/2019</div>
              <div class="td">Banking</div>
              <div class="td">Công Nghệ Thông tin</div>
              <div class="td">Lập trình viên</div>
              <div class="td">000.000.000 VNĐ</div>
              <div class="td">
                Hà Nội Hà Nội Hà Nội Hà Nội Hà Nội Hà Nội Hà Nội Hà Nội Hà Nội
              </div>
            </div>
            <div class="tr">
              <div class="td"></div>
              <div class="td">
                <input type="checkbox" />
              </div>
              <div class="td"></div>
              <div class="td">Anh</div>
              <div class="td">Phạm Văn Đạt</div>
              <div class="td">Thực tập sinh</div>
              <div class="td">0123457894</div>
              <div class="td">0123564657</div>
              <div class="td">phamphamaahaashsnfbhdndhh@gmail.com</div>
              <div class="td">phamphamaahaashsnfbhdndhh@gmail.com</div>
              <div class="td">Tổ chức A</div>
              <div class="td">0668845123</div>
              <div class="td">Helo pay</div>
              <div class="td">Hà Nội</div>
              <div class="td">10/10/2019</div>
              <div class="td">Banking</div>
              <div class="td">Công Nghệ Thông tin</div>
              <div class="td">Lập trình viên</div>
              <div class="td">000.000.000 VNĐ</div>
              <div class="td">
                Hà Nội Hà Nội Hà Nội Hà Nội Hà Nội Hà Nội Hà Nội Hà Nội Hà Nội
              </div>
            </div>
            <div class="tr">
              <div class="td"></div>
              <div class="td">
                <input type="checkbox" />
              </div>
              <div class="td"></div>
              <div class="td">Anh</div>
              <div class="td">Phạm Văn Đạt</div>
              <div class="td">Thực tập sinh</div>
              <div class="td">0123457894</div>
              <div class="td">0123564657</div>
              <div class="td">phamphamaahaashsnfbhdndhh@gmail.com</div>
              <div class="td">phamphamaahaashsnfbhdndhh@gmail.com</div>
              <div class="td">Tổ chức A</div>
              <div class="td">0668845123</div>
              <div class="td">Helo pay</div>
              <div class="td">Hà Nội</div>
              <div class="td">10/10/2019</div>
              <div class="td">Banking</div>
              <div class="td">Công Nghệ Thông tin</div>
              <div class="td">Lập trình viên</div>
              <div class="td">000.000.000 VNĐ</div>
              <div class="td">
                Hà Nội Hà Nội Hà Nội Hà Nội Hà Nội Hà Nội Hà Nội Hà Nội Hà Nội
              </div>
            </div>
            <div class="tr">
              <div class="td"></div>
              <div class="td">
                <input type="checkbox" />
              </div>
              <div class="td"></div>
              <div class="td">Anh</div>
              <div class="td">Phạm Văn Đạt</div>
              <div class="td">Thực tập sinh</div>
              <div class="td">0123457894</div>
              <div class="td">0123564657</div>
              <div class="td">phamphamaahaashsnfbhdndhh@gmail.com</div>
              <div class="td">phamphamaahaashsnfbhdndhh@gmail.com</div>
              <div class="td">Tổ chức A</div>
              <div class="td">0668845123</div>
              <div class="td">Helo pay</div>
              <div class="td">Hà Nội</div>
              <div class="td">10/10/2019</div>
              <div class="td">Banking</div>
              <div class="td">Công Nghệ Thông tin</div>
              <div class="td">Lập trình viên</div>
              <div class="td">000.000.000 VNĐ</div>
              <div class="td">
                Hà Nội Hà Nội Hà Nội Hà Nội Hà Nội Hà Nội Hà Nội Hà Nội Hà Nội
              </div>
            </div>
            <div class="tr">
              <div class="td"></div>
              <div class="td">
                <input type="checkbox" />
              </div>
              <div class="td"></div>
              <div class="td">Anh</div>
              <div class="td">Phạm Văn Đạt</div>
              <div class="td">Thực tập sinh</div>
              <div class="td">0123457894</div>
              <div class="td">0123564657</div>
              <div class="td">phamphamaahaashsnfbhdndhh@gmail.com</div>
              <div class="td">phamphamaahaashsnfbhdndhh@gmail.com</div>
              <div class="td">Tổ chức A</div>
              <div class="td">0668845123</div>
              <div class="td">Helo pay</div>
              <div class="td">Hà Nội</div>
              <div class="td">10/10/2019</div>
              <div class="td">Banking</div>
              <div class="td">Công Nghệ Thông tin</div>
              <div class="td">Lập trình viên</div>
              <div class="td">000.000.000 VNĐ</div>
              <div class="td">
                Hà Nội Hà Nội Hà Nội Hà Nội Hà Nội Hà Nội Hà Nội Hà Nội Hà Nội
              </div>
            </div>
            <div class="tr">
              <div class="td"></div>
              <div class="td">
                <input type="checkbox" />
              </div>
              <div class="td"></div>
              <div class="td">Anh</div>
              <div class="td">Phạm Văn Đạt</div>
              <div class="td">Thực tập sinh</div>
              <div class="td">0123457894</div>
              <div class="td">0123564657</div>
              <div class="td">phamphamaahaashsnfbhdndhh@gmail.com</div>
              <div class="td">phamphamaahaashsnfbhdndhh@gmail.com</div>
              <div class="td">Tổ chức A</div>
              <div class="td">0668845123</div>
              <div class="td">Helo pay</div>
              <div class="td">Hà Nội</div>
              <div class="td">10/10/2019</div>
              <div class="td">Banking</div>
              <div class="td">Công Nghệ Thông tin</div>
              <div class="td">Lập trình viên</div>
              <div class="td">000.000.000 VNĐ</div>
              <div class="td">
                Hà Nội Hà Nội Hà Nội Hà Nội Hà Nội Hà Nội Hà Nội Hà Nội Hà Nội
              </div>
            </div>
            <div class="tr">
              <div class="td"></div>
              <div class="td">
                <input type="checkbox" />
              </div>
              <div class="td"></div>
              <div class="td">Anh</div>
              <div class="td">Phạm Văn Đạt</div>
              <div class="td">Thực tập sinh</div>
              <div class="td">0123457894</div>
              <div class="td">0123564657</div>
              <div class="td">phamphamaahaashsnfbhdndhh@gmail.com</div>
              <div class="td">phamphamaahaashsnfbhdndhh@gmail.com</div>
              <div class="td">Tổ chức A</div>
              <div class="td">0668845123</div>
              <div class="td">Helo pay</div>
              <div class="td">Hà Nội</div>
              <div class="td">10/10/2019</div>
              <div class="td">Banking</div>
              <div class="td">Công Nghệ Thông tin</div>
              <div class="td">Lập trình viên</div>
              <div class="td">000.000.000 VNĐ</div>
              <div class="td">
                Hà Nội Hà Nội Hà Nội Hà Nội Hà Nội Hà Nội Hà Nội Hà Nội Hà Nội
              </div>
            </div>
            <div class="tr">
              <div class="td"></div>
              <div class="td">
                <input type="checkbox" />
              </div>
              <div class="td"></div>
              <div class="td">Anh</div>
              <div class="td">Phạm Văn Đạt</div>
              <div class="td">Thực tập sinh</div>
              <div class="td">0123457894</div>
              <div class="td">0123564657</div>
              <div class="td">phamphamaahaashsnfbhdndhh@gmail.com</div>
              <div class="td">phamphamaahaashsnfbhdndhh@gmail.com</div>
              <div class="td">Tổ chức A</div>
              <div class="td">0668845123</div>
              <div class="td">Helo pay</div>
              <div class="td">Hà Nội</div>
              <div class="td">10/10/2019</div>
              <div class="td">Banking</div>
              <div class="td">Công Nghệ Thông tin</div>
              <div class="td">Lập trình viên</div>
              <div class="td">000.000.000 VNĐ</div>
              <div class="td">
                Hà Nội Hà Nội Hà Nội Hà Nội Hà Nội Hà Nội Hà Nội Hà Nội Hà Nội
              </div>
            </div>
            <div class="tr">
              <div class="td"></div>
              <div class="td">
                <input type="checkbox" />
              </div>
              <div class="td"></div>
              <div class="td">Anh</div>
              <div class="td">Phạm Văn Đạt</div>
              <div class="td">Thực tập sinh</div>
              <div class="td">0123457894</div>
              <div class="td">0123564657</div>
              <div class="td">phamphamaahaashsnfbhdndhh@gmail.com</div>
              <div class="td">phamphamaahaashsnfbhdndhh@gmail.com</div>
              <div class="td">Tổ chức A</div>
              <div class="td">0668845123</div>
              <div class="td">Helo pay</div>
              <div class="td">Hà Nội</div>
              <div class="td">10/10/2019</div>
              <div class="td">Banking</div>
              <div class="td">Công Nghệ Thông tin</div>
              <div class="td">Lập trình viên</div>
              <div class="td">000.000.000 VNĐ</div>
              <div class="td">
                Hà Nội Hà Nội Hà Nội Hà Nội Hà Nội Hà Nội Hà Nội Hà Nội Hà Nội
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="table-button">
        <div class="table-button__left">
          Tổng số: <span class="table-button__left-text">893</span>
        </div>
        <div class="table-button__right">
          <div class="table-button__right-chlid table-button__right-combobox combobox-table">
            50 Bản ghi trên Trang
          </div>
          <div class="table-button__right-chlid combobox-table"></div>
        </div>
      </div>
    </div>

    <div class="content-child content-sider-bar__right">
      <div
        class="content-sider-bar__right--title content-sider-bar__right--child"
      >
        <div class="content-sider-bar__right--child-icon">
          <div class="background-icon__phone icon-font-16"></div>
        </div>
        <div class="content-sider-bar__right--child-icon">
          <div class="background-icon__bill icon-font-16"></div>
        </div>
        <div class="content-sider-bar__right--child-icon">
          <div class="background-icon__bag icon-font-16"></div>
        </div>
        <div class="content-sider-bar__right--child-icon">
          <div class="background-icon__email icon-font-16"></div>
        </div>
      </div>

      <div
        class="
          content-sider-bar__right--content content-sider-bar__right--child
        "
      >
        <div class="notifi-content-container">
          <div class="notifi-content-left">
            <span class="notifi-content-left__icon"></span>
          </div>
          <div class="notifi-content-right">
            <div class="notifi-content-right-title">Ghi Chú</div>
            <div class="notifi-content-right-text">
              Nguyễn Văn Hà (A006) - 12/08/2021
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
if(document.getElementsByClassName('table-content')[0]){
    document.getElementsByClassName('table-content')[0].addEventListener("scroll",function(e){
    let element = document.getElementsByClassName('table-header')[0];
    if(e.target.scrollLeft > 0){
        console.log(e.target.scrollLeft)
        let translateXValue = -e.target.scrollLeft  + "px";
        console.log(translateXValue)
        element.style.transform = `translateX(${translateXValue})`;
        console.log(`translate(${translateXValue})`)
    }else if(e.target.scrollLeft < 40)
        element.style.transform = "translateX(0)";
  
});
}

// Hàm xử lý click combobox hiển thị data
// Author: Phạm Văn Đạt
// created: 10h24' 1/08/2022 
// async function ClickShowHideComboboxData(e, element = null){
//     try{
//         let element = e.target;
//         if(e.target.getAttribute("check") == null){
//             element = e.target.parentNode
//         }
//         await HandlerShowHideComboboxData(element);
//     }
//     catch(error){
//         console.log(error);
//     }
    
// }

// Hàm xử lý click hiển thị data combobox lên ô hiển thị
// Author: Phạm Văn Đạt
// created: 11h24' 1/08/2022 
// async function selectValueComboboxData(e){
//     let value = e.target.getAttribute("value");
//     const containerElement = e.target.parentNode.parentNode.parentNode;
//     let containerContent = containerElement.getElementsByClassName('combobox-content__select')[0];
//     let comboboxContent = containerElement.getElementsByClassName('combobox-content')[0];
//     containerContent.innerHTML = value;
//     containerElement.setAttribute("value",value);
//     await HandlerShowHideComboboxData(comboboxContent)
//     console.log(e.target.parentNode.parentNode.parentNode);
// }



// async function HandlerShowHideComboboxData(element){
//     let check =  element.getAttribute("check");
//     let comboboxData = element.parentNode.getElementsByClassName("combobox-data")[0];
//     let iconBox = element.getElementsByClassName("combobox-content__icon")[0];
//     if(comboboxData){
//         if(check == "false"){
//         // hiển thị box
//         comboboxData.style.display = "inline-block";

//         // thay đổi icon
//         iconBox.classList.remove("button-icon__up-black");
//         iconBox.classList.add("button-icon__down-black");
//         // chuyển trạng thái check
//         element.setAttribute("check", "true")
            
//         }else{
//             // ẩn box
//             comboboxData.style.display = "none";

//             // thay doi icon
//             iconBox.classList.remove("button-icon__down-black");
//             iconBox.classList.add("button-icon__up-black");

//             // chuyển trạng thái check
//             element.setAttribute("check","false");
//         }
//     }
// }
</script>

<script>
export default {
  name: "ContentComponnent",
  methos:{
    selectValueComboboxData(e){
        let value = e.target.getAttribute("value");
        const containerElement = e.target.parentNode.parentNode.parentNode;
        let containerContent = containerElement.getElementsByClassName('combobox-content__select')[0];
        let comboboxContent = containerElement.getElementsByClassName('combobox-content')[0];
        containerContent.innerHTML = value;
        containerElement.setAttribute("value",value);
        await HandlerShowHideComboboxData(comboboxContent)
        console.log(e.target.parentNode.parentNode.parentNode);
    },

    HandlerShowHideComboboxData(element){
        let check =  element.getAttribute("check");
        let comboboxData = element.parentNode.getElementsByClassName("combobox-data")[0];
        let iconBox = element.getElementsByClassName("combobox-content__icon")[0];
        if(comboboxData){
            if(check == "false"){
            // hiển thị box
            comboboxData.style.display = "inline-block";

            // thay đổi icon
            iconBox.classList.remove("button-icon__up-black");
            iconBox.classList.add("button-icon__down-black");
            // chuyển trạng thái check
            element.setAttribute("check", "true")
                
            }else{
                // ẩn box
                comboboxData.style.display = "none";

                // thay doi icon
                iconBox.classList.remove("button-icon__down-black");
                iconBox.classList.add("button-icon__up-black");

                // chuyển trạng thái check
                element.setAttribute("check","false");
            }
        }
    },
    selectValueComboboxData(e){
        let value = e.target.getAttribute("value");
        const containerElement = e.target.parentNode.parentNode.parentNode;
        let containerContent = containerElement.getElementsByClassName('combobox-content__select')[0];
        let comboboxContent = containerElement.getElementsByClassName('combobox-content')[0];
        containerContent.innerHTML = value;
        containerElement.setAttribute("value",value);
        await HandlerShowHideComboboxData(comboboxContent)
        console.log(e.target.parentNode.parentNode.parentNode);
    },
    ClickShowHideComboboxData(e, element = null){
        try{
            let element = e.target;
            if(e.target.getAttribute("check") == null){
                element = e.target.parentNode
            }
            await HandlerShowHideComboboxData(element);
        }
        catch(error){
            console.log(error);
        }
        
    },
  }
};
</script>

<style>
</style>
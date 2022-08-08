<template>
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
          <div class="tr" v-for="user in userList" :key="user.UserId">
            <div class="td"></div>
            <div class="td">
              <input type="checkbox" :value="user.UserId" />
            </div>
            <div class="td"></div> <!-- thẻ -->
            <div class="td">Anh</div>
            <div class="td">{{user.FirstName}}{{user.LastName}}</div>
            <div class="td">Thực tập sinh</div>
            <div class="td">0123456987</div>
            <div class="td">0123456987</div>
            <div class="td">xuanhuynguyennguyenxuanhuy0308@gmail.com</div>
            <div class="td">xuanhuynguyennguyenxuanhuy0308@gmail.com</div>
            <div class="td">Tổ chức A</div>
            <div class="td">15975324860</div>
            <div class="td">Helo pay</div>
            <div class="td">Hà Nội</div>
            <div class="td">31/12/2019</div>
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
            <div class="td">Nguyễn Xuân Huy</div>
            <div class="td">Thực tập sinh</div>
            <div class="td">0123456987</div>
            <div class="td">0123456987</div>
            <div class="td">xuanhuynguyennguyenxuanhuy0308@gmail.com</div>
            <div class="td">xuanhuynguyennguyenxuanhuy0308@gmail.com</div>
            <div class="td">Tổ chức A</div>
            <div class="td">15975324860</div>
            <div class="td">Helo pay</div>
            <div class="td">Hà Nội</div>
            <div class="td">31/12/2019</div>
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
             <div class="td">Nguyễn Xuân Huy</div>
            <div class="td">Thực tập sinh</div>
            <div class="td">0123456987</div>
            <div class="td">0123456987</div>
            <div class="td">xuanhuynguyennguyenxuanhuy0308@gmail.com</div>
            <div class="td">xuanhuynguyennguyenxuanhuy0308@gmail.com</div>
            <div class="td">Tổ chức A</div>
            <div class="td">15975324860</div>
            <div class="td">Helo pay</div>
            <div class="td">Hà Nội</div>
            <div class="td">31/12/2019</div>
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
            <div class="td">Nguyễn Xuân Huy</div>
            <div class="td">Thực tập sinh</div>
            <div class="td">0123456987</div>
            <div class="td">0123456987</div>
            <div class="td">xuanhuynguyennguyenxuanhuy0308@gmail.com</div>
            <div class="td">xuanhuynguyennguyenxuanhuy0308@gmail.com</div>
            <div class="td">Tổ chức A</div>
            <div class="td">15975324860</div>
            <div class="td">Helo pay</div>
            <div class="td">Hà Nội</div>
            <div class="td">31/12/2019</div>
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
             <div class="td">Nguyễn Xuân Huy</div>
            <div class="td">Thực tập sinh</div>
            <div class="td">0123456987</div>
            <div class="td">0123456987</div>
            <div class="td">xuanhuynguyennguyenxuanhuy0308@gmail.com</div>
            <div class="td">xuanhuynguyennguyenxuanhuy0308@gmail.com</div>
            <div class="td">Tổ chức A</div>
            <div class="td">15975324860</div>
            <div class="td">Helo pay</div>
            <div class="td">Hà Nội</div>
            <div class="td">31/12/2019</div>
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
            <div class="td">Nguyễn Xuân Huy</div>
            <div class="td">Thực tập sinh</div>
            <div class="td">0123456987</div>
            <div class="td">0123456987</div>
            <div class="td">xuanhuynguyennguyenxuanhuy0308@gmail.com</div>
            <div class="td">xuanhuynguyennguyenxuanhuy0308@gmail.com</div>
            <div class="td">Tổ chức A</div>
            <div class="td">15975324860</div>
            <div class="td">Helo pay</div>
            <div class="td">Hà Nội</div>
            <div class="td">31/12/2019</div>
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
            <div class="td">Nguyễn Xuân Huy</div>
            <div class="td">Thực tập sinh</div>
            <div class="td">0123456987</div>
            <div class="td">0123456987</div>
            <div class="td">xuanhuynguyennguyenxuanhuy0308@gmail.com</div>
            <div class="td">xuanhuynguyennguyenxuanhuy0308@gmail.com</div>
            <div class="td">Tổ chức A</div>
            <div class="td">15975324860</div>
            <div class="td">Helo pay</div>
            <div class="td">Hà Nội</div>
            <div class="td">31/12/2019</div>
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
             <div class="td">Nguyễn Xuân Huy</div>
            <div class="td">Thực tập sinh</div>
            <div class="td">0123456987</div>
            <div class="td">0123456987</div>
            <div class="td">xuanhuynguyennguyenxuanhuy0308@gmail.com</div>
            <div class="td">xuanhuynguyennguyenxuanhuy0308@gmail.com</div>
            <div class="td">Tổ chức A</div>
            <div class="td">15975324860</div>
            <div class="td">Helo pay</div>
            <div class="td">Hà Nội</div>
            <div class="td">31/12/2019</div>
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
            <div class="td">Nguyễn Xuân Huy</div>
            <div class="td">Thực tập sinh</div>
            <div class="td">0123456987</div>
            <div class="td">0123456987</div>
            <div class="td">xuanhuynguyennguyenxuanhuy0308@gmail.com</div>
            <div class="td">xuanhuynguyennguyenxuanhuy0308@gmail.com</div>
            <div class="td">Tổ chức A</div>
            <div class="td">15975324860</div>
            <div class="td">Helo pay</div>
            <div class="td">Hà Nội</div>
            <div class="td">31/12/2019</div>
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
            <div class="td">Nguyễn Xuân Huy</div>
            <div class="td">Thực tập sinh</div>
            <div class="td">0123456987</div>
            <div class="td">0123456987</div>
            <div class="td">xuanhuynguyennguyenxuanhuy0308@gmail.com</div>
            <div class="td">xuanhuynguyennguyenxuanhuy0308@gmail.com</div>
            <div class="td">Tổ chức A</div>
            <div class="td">15975324860</div>
            <div class="td">Helo pay</div>
            <div class="td">Hà Nội</div>
            <div class="td">31/12/2019</div>
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
            <div class="td">Nguyễn Xuân Huy</div>
            <div class="td">Thực tập sinh</div>
            <div class="td">0123456987</div>
            <div class="td">0123456987</div>
            <div class="td">xuanhuynguyennguyenxuanhuy0308@gmail.com</div>
            <div class="td">xuanhuynguyennguyenxuanhuy0308@gmail.com</div>
            <div class="td">Tổ chức A</div>
            <div class="td">15975324860</div>
            <div class="td">Helo pay</div>
            <div class="td">Hà Nội</div>
            <div class="td">31/12/2019</div>
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
            <div class="td">Nguyễn Xuân Huy</div>
            <div class="td">Thực tập sinh</div>
            <div class="td">0123456987</div>
            <div class="td">0123456987</div>
            <div class="td">xuanhuynguyennguyenxuanhuy0308@gmail.com</div>
            <div class="td">xuanhuynguyennguyenxuanhuy0308@gmail.com</div>
            <div class="td">Tổ chức A</div>
            <div class="td">15975324860</div>
            <div class="td">Helo pay</div>
            <div class="td">Hà Nội</div>
            <div class="td">31/12/2019</div>
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
            <div class="td">Nguyễn Xuân Huy</div>
            <div class="td">Thực tập sinh</div>
            <div class="td">0123456987</div>
            <div class="td">0123456987</div>
            <div class="td">xuanhuynguyennguyenxuanhuy0308@gmail.com</div>
            <div class="td">xuanhuynguyennguyenxuanhuy0308@gmail.com</div>
            <div class="td">Tổ chức A</div>
            <div class="td">15975324860</div>
            <div class="td">Helo pay</div>
            <div class="td">Hà Nội</div>
            <div class="td">31/12/2019</div>
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
            <div class="td">Nguyễn Xuân Huy</div>
            <div class="td">Thực tập sinh</div>
            <div class="td">0123456987</div>
            <div class="td">0123456987</div>
            <div class="td">xuanhuynguyennguyenxuanhuy0308@gmail.com</div>
            <div class="td">xuanhuynguyennguyenxuanhuy0308@gmail.com</div>
            <div class="td">Tổ chức A</div>
            <div class="td">15975324860</div>
            <div class="td">Helo pay</div>
            <div class="td">Hà Nội</div>
            <div class="td">31/12/2019</div>
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
            <div class="td">Nguyễn Xuân Huy</div>
            <div class="td">Thực tập sinh</div>
            <div class="td">0123456987</div>
            <div class="td">0123456987</div>
            <div class="td">xuanhuynguyennguyenxuanhuy0308@gmail.com</div>
            <div class="td">xuanhuynguyennguyenxuanhuy0308@gmail.com</div>
            <div class="td">Tổ chức A</div>
            <div class="td">15975324860</div>
            <div class="td">Helo pay</div>
            <div class="td">Hà Nội</div>
            <div class="td">31/12/2019</div>
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
            <div class="td">Nguyễn Xuân Huy</div>
            <div class="td">Thực tập sinh</div>
            <div class="td">0123456987</div>
            <div class="td">0123456987</div>
            <div class="td">xuanhuynguyennguyenxuanhuy0308@gmail.com</div>
            <div class="td">xuanhuynguyennguyenxuanhuy0308@gmail.com</div>
            <div class="td">Tổ chức A</div>
            <div class="td">15975324860</div>
            <div class="td">Helo pay</div>
            <div class="td">Hà Nội</div>
            <div class="td">31/12/2019</div>
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
            <div class="td">Nguyễn Xuân Huy</div>
            <div class="td">Thực tập sinh</div>
            <div class="td">0123456987</div>
            <div class="td">0123456987</div>
            <div class="td">xuanhuynguyennguyenxuanhuy0308@gmail.com</div>
            <div class="td">xuanhuynguyennguyenxuanhuy0308@gmail.com</div>
            <div class="td">Tổ chức A</div>
            <div class="td">15975324860</div>
            <div class="td">Helo pay</div>
            <div class="td">Hà Nội</div>
            <div class="td">31/12/2019</div>
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
            <div class="td">Nguyễn Xuân Huy</div>
            <div class="td">Thực tập sinh</div>
            <div class="td">0123456987</div>
            <div class="td">0123456987</div>
            <div class="td">xuanhuynguyennguyenxuanhuy0308@gmail.com</div>
            <div class="td">xuanhuynguyennguyenxuanhuy0308@gmail.com</div>
            <div class="td">Tổ chức A</div>
            <div class="td">15975324860</div>
            <div class="td">Helo pay</div>
            <div class="td">Hà Nội</div>
            <div class="td">31/12/2019</div>
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
            <div class="td">Nguyễn Xuân Huy</div>
            <div class="td">Thực tập sinh</div>
            <div class="td">0123456987</div>
            <div class="td">0123456987</div>
            <div class="td">xuanhuynguyennguyenxuanhuy0308@gmail.com</div>
            <div class="td">xuanhuynguyennguyenxuanhuy0308@gmail.com</div>
            <div class="td">Tổ chức A</div>
            <div class="td">15975324860</div>
            <div class="td">Helo pay</div>
            <div class="td">Hà Nội</div>
            <div class="td">31/12/2019</div>
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
        <div
          class="
            table-button__right-chlid table-button__right-combobox
            combobox-table
          "
        >
          50 Bản ghi trên Trang
        </div>
        <div class="table-button__right-chlid combobox-table"></div>
      </div>
    </div>

    <div
      class="buttonHideShow buttonHideShowLeft"
      @click="checkLeft = !checkLeft"
    >
      <span class="background-icon-arrow-left icon-font-16"></span>
    </div>
    <div
      class="buttonHideShow buttonHideShowRight"
      @click="checkRight = !checkRight"
    >
      <span class="background-icon-arrow-right icon-font-16"></span>
    </div>
  </div>
</template>

<script>
import { handlerScroll, handlerClickButtonArrow } from "../../js/test";
export default {
  name: "ContentPageCenter",
  data() {
    return {
      checkLeft: false,
      checkRight: false,
      userList: [{
        UserId: "123aa321aa",
        FirstName:'Nguyễn Xuân',
        LastName: 'Huy',
        UserNummberPhone: '0349459937', //số đt cá nhân
        CompanyNumberPhone:"0220203500",//số đt công ty
        UserEmail:'phamvandatx4ql@gmail.com', // email cá nhân
        CompanyEmail: 'phamvandatx4ql@gmail.com', // email công ty
        Zalo: '0379459937', //  -- zalo
        TaxCode: '1900aa1081', //-- mã số thuế
        Organize: 'MisaJSC', //-- tổ chức
        Gender: '1', //-- 1 là Nam, 0 là Nữ
        BirthDay: '03/08/2000', //-- ngày sinh
        UserDescription: "Đây là thông tin mô tả ",// -- mô tả
        Address: 'tổ 4, Vấn Khẩu, tp Nam Định',// -- địa chỉ
        Country: 'Việt Nam', // -- quốc gia
        City:'Nam Định', //-- tỉnh
        District: 'TP', //-- Huyện
        Commune: 'tổ 4',// -- Xã
        ApartmentNumber: '3/28',// -- số nhà
        AreaCode: '001100', // -- mã vùng
        IsUserPhoneActive: true,// -- cho phép gọi điện
        IsUserEmailActive: true, // -- cho phép gửi email
        VocativeId: '1', //-- xưng hô Id, 1 user có 1 xưng hô
        DepartmentID: '1',// -- một người - 1 phòng ban
        OriginId: '1',// -- 1 người - 1 nguồn gốc tiềm năng
        JobTitleId:'1',// -- 1 người - 1 chức danh
        CompanyTypeId: '1',// -- loại hình công ty của user /  -- 1 người thuộc 1 tổ chức - ghi thông tin tổ chức ra các bảng
        RevenueID: '1',// -- doanh thu của tổ chức
        CreatedAt: '2016-12-24T07:34:06.388Z',
        UpdatedAt: '2016-12-24T07:34:06.388Z',
        CreateaBy: '81238asjdasjdg123',
        UpdatedBy: '81238asjdasjdg123',
      },{
       UserId: "123aa321ab",
        FirstName:'Nguyễn Xuân',
        LastName: 'Huy',
        UserNummberPhone: '0349459937', //số đt cá nhân
        CompanyNumberPhone:"0220203500",//số đt công ty
        UserEmail:'phamvandatx4ql@gmail.com', // email cá nhân
        CompanyEmail: 'phamvandatx4ql@gmail.com', // email công ty
        Zalo: '0379459937', //  -- zalo
        TaxCode: '1900aa1081', //-- mã số thuế
        Organize: 'MisaJSC', //-- tổ chức
        Gender: '1', //-- 1 là Nam, 0 là Nữ
        BirthDay: '03/08/2000', //-- ngày sinh
        UserDescription: "Đây là thông tin mô tả ",// -- mô tả
        Address: 'tổ 4, Vấn Khẩu, tp Nam Định',// -- địa chỉ
        Country: 'Việt Nam', // -- quốc gia
        City:'Nam Định', //-- tỉnh
        District: 'TP', //-- Huyện
        Commune: 'tổ 4',// -- Xã
        ApartmentNumber: '3/28',// -- số nhà
        AreaCode: '001100', // -- mã vùng
        IsUserPhoneActive: true,// -- cho phép gọi điện
        IsUserEmailActive: true, // -- cho phép gửi email
        VocativeId: '1', //-- xưng hô Id, 1 user có 1 xưng hô
        DepartmentID: '1',// -- một người - 1 phòng ban
        OriginId: '1',// -- 1 người - 1 nguồn gốc tiềm năng
        JobTitleId:'1',// -- 1 người - 1 chức danh
        CompanyTypeId: '1',// -- loại hình công ty của user /  -- 1 người thuộc 1 tổ chức - ghi thông tin tổ chức ra các bảng
        RevenueID: '1',// -- doanh thu của tổ chức
        CreatedAt: '2016-12-24T07:34:06.388Z',
        UpdatedAt: '2016-12-24T07:34:06.388Z',
        CreateaBy: '81238asjdasjdg123',
        UpdatedBy: '81238asjdasjdg123',
      }]
    };
  },
  methods: {},
  // theo dõi các biến thay đổi và thực hiện hàm nếu có
  watch: {
    checkLeft() {
      handlerClickButtonArrow(this.checkLeft, this.checkRight,event);
    },
    checkRight() {
      handlerClickButtonArrow(this.checkLeft, this.checkRight,event);
    },
  },
  mounted() {
    handlerScroll();
  },
};
</script>

<style>
</style>
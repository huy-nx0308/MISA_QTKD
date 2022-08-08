// // Hàm xử lý scroll thanh cuộn của table
// // Author: Nguyễn Xuân Huy
// // created:  06/08/2022
export function handlerScroll() {
  try {
    if (document.getElementsByClassName("table-content")[0]) {
      document
        .getElementsByClassName("table-content")[0]
        .addEventListener("scroll", function (e) {
          let element = document.getElementsByClassName("table-header")[0];
          if (e.target.scrollLeft > 0) {
            let translateXValue = -e.target.scrollLeft + "px";
            element.style.transform = `translateX(${translateXValue})`;
          } else if (e.target.scrollLeft < 40) element.style.transform = "translateX(0)";
        });
    }
  } catch (error) {
    console.log(error);
  }
}

// // Hàm xử lý click combobox hiển thị data
// // Author: Nguyễn Xuân Huy
// // created:  06/08/2022
export async function ClickShowHideComboboxData(e, _element = null) {
  try {
    if (_element == null) _element = e.target;

    if (e.target.getAttribute("check") == null) {
      _element = e.target.parentNode;
    }

    await HandlerShowHideComboboxData(_element);
  } catch (error) {
    console.log(error);
  }
}

// // Hàm xử lý click hiển thị data combobox lên ô hiển thị
// // Author: Nguyễn Xuân Huy
// // created:  06/08/2022
export async function selectValueComboboxData(e) {
  try {
    let value = e.target.getAttribute("value");
    const containerElement = e.target.parentNode.parentNode.parentNode;
    let containerContent = containerElement.getElementsByClassName(
      "combobox-content__select"
    )[0];
    let comboboxContent =
      containerElement.getElementsByClassName("combobox-content")[0];
    containerContent.innerHTML = value;
    containerElement.setAttribute("value", value);
    await HandlerShowHideComboboxData(comboboxContent);
  } catch (error) {
    console.log(error);
  }
}

// // Hàm xử lý click combobox hiển thị data
// // Author: Nguyễn Xuân Huy
// // created: 06/08/2022
export async function ClickShowHideComboboxMulData(e, _element = null) {
  try {
    if (_element == null) _element = e.target;

    if (e.target.getAttribute("check") == null) {
      _element = e.target.parentNode;
    }

    await HandlerShowHideComboboxData(_element);
  } catch (error) {
    console.log(error);
  }
}

// // Hàm xử lý click hiển thị data combobox lên ô hiển thị combobox chứa nhiều
// // Author: Nguyễn Xuân Huy
// // created:  08/08/2022
export async function selectValueComboboxMulData(e) {
  try {
    let value = e.target.getAttribute("value");
    const containerElement = e.target.parentNode.parentNode.parentNode;
    let containerContent = containerElement.getElementsByClassName(
      "combobox-content__select"
    )[0];

    containerContent.innerHTML = value;
    containerElement.setAttribute("value", value);
  } catch (error) {
    console.log(error);
  }
}

// function xử lý hiển thị combobox data
export async function HandlerShowHideComboboxData(element) {
  try {
    let check = element.getAttribute("check");
    let comboboxData =
      element.parentNode.getElementsByClassName("combobox-data")[0];
    let iconBox = element.getElementsByClassName("combobox-content__icon")[0];
    if (comboboxData) {
      ShowFormData(comboboxData, check, iconBox, element);
    }
  } catch (error) {
    console.log(error);
  }
}

// Hiển thị combobox Data
function ShowFormData(comboboxData, check, iconBox = null, element) {
  try {
    if (check == "false") {
      // hiển thị box
      comboboxData.style.display = "inline-block";

      // thay đổi icon
      if (iconBox) {
        iconBox.classList.remove("button-icon__up-black");
        iconBox.classList.add("button-icon__down-black");
      }

      // chuyển trạng thái check
      element.setAttribute("check", "true");
    } else {
      // ẩn box
      comboboxData.style.display = "none";

      // thay doi icon
      if (iconBox) {
        iconBox.classList.remove("button-icon__down-black");
        iconBox.classList.add("button-icon__up-black");
      }

      // chuyển trạng thái check
      element.setAttribute("check", "false");
    }
  } catch (error) {
    console.log(error);
  }
}

// xử lý click hiển thị, ẩn side bar left/right
export function handlerClickButtonArrow(left, right, event) {
  try {
    if (left == true && right == true) {
      document.getElementsByClassName("content")[0].style.gridTemplateColumns =
        "0 100% 0";
      document.getElementsByClassName(
        "content-sider-bar__left"
      )[0].style.display = "none";
      document.getElementsByClassName(
        "content-sider-bar__right"
      )[0].style.display = "none";
    }

    if (left == true && right == false) {
      console.log("chay");
      document.getElementsByClassName("content")[0].style.gridTemplateColumns =
        "0 calc(100% - 320px) 320px";
      document.getElementsByClassName(
        "content-sider-bar__left"
      )[0].style.display = "none";
      document.getElementsByClassName(
        "content-sider-bar__right"
      )[0].style.display = "grid";
    }

    if (left == false && right == true) {
      document.getElementsByClassName("content")[0].style.gridTemplateColumns =
        "240px calc(100% - 240px) 0";
      document.getElementsByClassName(
        "content-sider-bar__left"
      )[0].style.display = "inline-block";
      document.getElementsByClassName(
        "content-sider-bar__right"
      )[0].style.display = "none";
    }

    if (left == false && right == false) {
      document.getElementsByClassName("content")[0].style.gridTemplateColumns =
        "240px calc(100% -  240px - 320px) 320px";
      document.getElementsByClassName(
        "content-sider-bar__left"
      )[0].style.display = "inline-block";
      document.getElementsByClassName(
        "content-sider-bar__right"
      )[0].style.display = "grid";
    }

    let _element = event.target;
    if (event.target.getElementsByClassName("icon-font-16")[0])
      _element = event.target.getElementsByClassName("icon-font-16")[0];

    // check thay đổi mũi tên:

    let classList = _element.classList;
    classList.remove("icon-font-16");
    console.log(classList.value);
    if (classList.value == "background-icon-arrow-left") leftToRight(_element);
    else {
      rightToLeft(_element);
    }
  } catch (error) {
    console.log(error);
  }
}

// start hàm xử lý thay đổi mũi tên trong lúc click để ẩn/ hiển thị side bar
function rightToLeft(element) {
  try {
    element.classList.remove("background-icon-arrow-right");
    element.classList.add("background-icon-arrow-left", "icon-font-16");
  } catch (error) {
    console.log(error);
  }
}

function leftToRight(element) {
  try {
    element.classList.remove("background-icon-arrow-left");
    element.classList.add("background-icon-arrow-right", "icon-font-16");
  } catch (error) {
    console.log(error);
  }
}

// end hàm xử lý thay đổi mũi tên trong lúc click để ẩn/ hiển thị side bar

let code; // global 定義驗證碼
const codeLength = 4; // 驗證碼長度
const checkCode = document.getElementById("code"); // 取得ID
// 產生驗證碼 - 載入頁面生成
window.onload = function () {
    createCode();
};
// 產生驗證碼 - 輸入錯誤刷新
function createCode() {
    code = "";
    //隨機亂數
    let random = [2, 3, 4, 5, 6, 7, 8, 'A', 'B', 'C', 'D','E', 'F', 'G', 'H', 'J', 'K', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'm', 'n', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y'];
    // 循環操作
    for (let i = 0; i < codeLength; i++) { 
        let index = Math.floor(Math.random() * random.length);// 取得隨機亂數的索引(random.length)
        code += random[index]; // 根據索引取得隨機數加到code上
    }
    // 把code值賦給驗證碼
    checkCode.value = code; 
}

// 檢查驗證碼
function validate() {
    // 1. 取得輸入驗證碼
    // 2. 轉換為大寫
    let inputCode = document.getElementById("input").value.toUpperCase();
    if (inputCode.length <= 0) { // 若驗證碼長度小於等於0
        Swal.fire(
            '請輸入驗證碼',
            '',
            'warning'
          )
         // 1. 將隨機產生的驗證碼轉成大寫
        //  2. 驗證碼輸入錯誤時
    } else if (inputCode != code.toUpperCase()) { 
        Swal.fire(
            '驗證碼輸入錯誤',
            '',
            'error'
          )
        createCode();// 刷新驗證碼
        document.getElementById("input").value = ""; //清空輸入框
    }
    // else { 
    //     Swal.fire(
    //         '驗證碼輸入正確',
    //         '',
    //         'success'
    //       )
    // }
}
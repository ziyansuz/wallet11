let CryptoJS=require('crypto-js')
module.exports= {

    // 加密
    /*
      * {param} plaintText 加密明文
      * return  str 加密结果
      */
    encrypt (plaintText,key) {
        var plaintText = plaintText
        var options = {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7
        }
        var key = CryptoJS.enc.Utf8.parse(key)
        var encryptedData = CryptoJS.AES.encrypt(JSON.stringify(plaintText), key, options)
        var encryptedBase64Str = encryptedData.toString()
        return encryptedBase64Str
    },
    // 解密
    /*
      * {param} plaintText 解密密文

      * return  str 解密结果
      */
    decrypt (encryptedBase64Str, key) {
        // eslint-disable-next-line no-redeclare
        var encryptedBase64Str = encryptedBase64Str
        var options = {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7
        }
        var key = CryptoJS.enc.Utf8.parse(key)
        // 解密
        var decryptedData = CryptoJS.AES.decrypt(encryptedBase64Str, key, options)
        // 解密后，需要按照Utf8的方式将明文转位字符串
        // console.log(decryptedData)
        var decryptedStr = JSON.parse(decryptedData.toString(CryptoJS.enc.Utf8))

        return decryptedStr
    }


}
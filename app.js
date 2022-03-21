// app.js
App({
  onLaunch() {
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        // code只有5分钟有效期
        let code = res.code

        // 
        wx.request({
          url: 'http://152.136.185.210:7878/api/hy66/login',
          data: {
            code
          },
          success: function(res) {
            console.log(res);
          }
        })
      }
    })
  },
  globalData: {
    userInfo: null
  }
})

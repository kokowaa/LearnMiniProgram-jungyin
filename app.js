// app.js
App({
  // globalData存储在内存中，小程序关闭则会丢失，需要进行本地存储和读取
  globalData: {
    token: '',
    userInfo: null
  },
  onLaunch() {
    // 先从storage缓存中读取token 并验证token是否过期
    // 没过期继续使用/过期则重新请求
    let token = wx.getStorageSync('token')
    if (token && token.length !== 0) {
      // 验证token是否过期
      this.check_token(token)
    } else {
      this.login()
    };
  },
  check_token(token) {
    // console.log('执行了验证操作');
    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      method: 'POST',
      header: {
        token
      },
      success: (res) => {
        if (!res.data.errCode) {
          // console.log('token有效');
          this.globalData.token = token
        } else {
          this.login()
        }
      },
      fail: (err) => {
        console.log(err);
      }
    })
  },
  login() {
    // console.log('执行了登录操作');
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        // code只有5分钟有效期
        let code = res.code

        // 
        wx.request({
          url: 'http://123.207.32.32:3000/login',
          // url: 'http://152.136.185.210:7878/api/hy66/login',
          method: 'POST',
          data: {
            code
          },
          success: (res) => {
            // console.log(res);
            const token = res.data.token;
            this.globalData.token = token;
            wx.setStorageSync('token', token)
            // console.log(this.globalData.token);
          }
        })
      }
    })
  }
})

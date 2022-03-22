// index.js
// 获取应用实例
Page({
  data: {
    title: '哈哈哈哈'
  },
  handleClickTurn() {
    wx.navigateTo({
      url: '/pages/detail/detail?name=zl',
    })
  }
})
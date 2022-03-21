// pages/about/about.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    showToast() {
        wx.showToast({
          title: '你好啊',
          icon: 'loading',
          mask: true
        })
    },
    showModal() {
        wx.showModal({
          cancelColor: 'cancelColor',
          title: '是否选择进入?',
          content: '请您选择',
          success: (res) => {
            if (res.confirm) {
                console.log('用户选择确定');
            } else {
                console.log('用户选择取消');
            }
          }
        })
    },
    showLoading() {
        wx.showLoading({
          title: '加载ing',
        })

        // showLoading无时间限制,需要调用wx.hideLoading来进行关闭loading
        setTimeout(() => {
            wx.hideLoading()
        }, 2000)
    },
    showAction() {
        wx.showActionSheet({
          itemList: ['相册', "拍照"],
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function (option) {

    }
})
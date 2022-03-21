// pages/about/about.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        counter: 0,
        titles: ["流行", "精选", "新款"],
        title: '流行'
    },
    increment(e) {
        console.log(e);
        // console.log('----');
        this.setData({
            counter: ++this.data.counter
        })
    },
    handleTitleClick(e) {
        // console.log(e);
        this.setData({
            title: e.detail.title
        })
    },
    counterAdd() {
        // 获取组件对象
        const select = this.selectComponent('#select');
        // console.log(select);
        // 注：直接通过setData修改组件内部数据，不太合理(不推荐)
        // select.setData({
        //     counter: select.data.counter+1
        // })

        // 推荐: 组件内部暴露出一个接口方法
        // 可传入参数
        select.counterAddOne()
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

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
    onShareAppMessage: function () {

    }
})
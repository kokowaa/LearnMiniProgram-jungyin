// pages/event/event.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        titles: ['星际穿越', '所罗门', '功夫']
    },

    handleClick() {
        console.log('按钮发生点击');
    },
    handleTouch() {
        console.log('开始触摸');
    },
    handleMove() {
        console.log('开始移动');
    },
    handleTouchEnd() {
        console.log('触摸结束');
    },
    handleTap() {
        console.log('tag');
    },
    handleLongPress() {
        console.log('长按事件');
    },
    handleClickEvent(event) {
        console.log(event);
    },
    handleOuter(e) {
        console.log('outer', e);
    },
    handleInner(e) {
        console.log('inner', e);
    },
    handleItemClick(e) {
        console.log(e);
    },
    handleCn1() {
        console.log('handleCn1');
    },
    handleBn1() {
        console.log('handleBn1');
    },
    handleCn2() {
        console.log('handleCn2');
    },
    handleBn2() {
        console.log('handleBn2');
    },
    handleCn3() {
        console.log('handleCn3');
    },
    handleBn3() {
        console.log('handleBn3');
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
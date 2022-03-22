// pages/detail/detail.js
Page({
    // onLoad接受数据
    onLoad: function(options) {
        console.log(options);
    },
    // 返回的时候在onUnload传递数据
    onUnload: function() {
        // console.log('页面退出');
        const pages = getCurrentPages()
        const home = pages[pages.length - 2]
        home.setData({
            title: '呵呵呵'
        })
    }
})
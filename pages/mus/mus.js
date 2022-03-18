// pages/mus/mus.js
Page({
  data: {
    name: 'kobe',
    age: 22,
    time: new Date().toLocaleString(),
    colord: true,
    isShow: true,
    score: 80
  },
  numberToFixed(number) {
    return number.toFixed(2)
  },
  handleSwitchDisplay() {
    this.setData({
      isShow: !this.data.isShow,
    })
  },
  handleCheckColor() {
    this.setData({
      colord: !this.data.colord,
    })
  },
  // page
  onLoad() {
    const timer = setInterval(() => {
      this.setData({
        time: new Date().toLocaleString(),
      })
    }, 1000)
  },
  onUnload() {
    clearInterval(timer)
  },
})

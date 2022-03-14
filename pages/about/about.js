// pages/about/about.js
Page({
    data: {
        name: 'Jungyin',
        age: 23,
        students: [
            {id: 111, name: 'kobe', age: 31},
            {id: 112, name: 'curry', age: 33},
            {id: 113, name: 'james', age: 30},
            {id: 114, name: 'zl', age: 23},
            {id: 115, name: 'why', age: 18}
        ],
        counter: 0
    },
    add() {
        this.setData({
            counter: this.data.counter + 1
        })
    }
})
// components/tab-control/tab-control.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        titles: {
            type: Array,
            value: []
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        isActive: 0
    },

    /**
     * 组件的方法列表
     */
    methods: {
        handleTabItemClick(e) {
            // console.log(e.target.dataset.index);
            const index = e.target.dataset.index
            // 修改isActive
            this.setData({
                isActive: index
            })
            // 事件监听
            this.triggerEvent('titleClick', {
                index, title: this.properties.titles[index]
            }, {})
        }
    }
})

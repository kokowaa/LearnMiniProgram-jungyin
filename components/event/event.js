// components/event/event.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {

    },
    

    /**
     * 组件的方法列表
     */
    methods: {
        handleAdd1() {
            this.triggerEvent('increment', {
                name: 'jungyin', age: 23
            }, {})
        },
    }
})

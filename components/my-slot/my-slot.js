// components/my-slot/my-slot.js
Component({
    /**
     * 组件的属性列表
     */
    options: {
        // 在组件定义时的选项中启用多slot支持
        multipleSlots: true
    },
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

    },
    pageLifetimes: {
        show() {
            console.log('页面显示');
        },
        hide() {
            console.log('页面隐藏');
        },
        resize() {
            console.log('页面size重定义');
        }
    },
    lifetimes: {
        created() {
            console.log('组件创建');
        },
        attached() {
            console.log('组件挂载');
        },
        ready() {
            console.log('组件视图层显示');
        },
        moved() {
            console.log('组件移动');
        },
        detached() {
            console.log('组件移除');
        },
        error() {
            console.log('组件内部方法抛出异常');
        }
    }
})

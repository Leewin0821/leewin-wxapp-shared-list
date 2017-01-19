var app = getApp()

Page({
    data: {
        userInfo: {},
        items: [
            {name: 'AR/VR Workshop', value: 'AR', checked: false, showBtn: false},
            {name: 'Mini Program Workshop', value: 'Mini', checked: true, showBtn: false},
            {name: 'Ng2 Practice', value: 'Ng2', checked: false, showBtn: false},
            {name: 'React Native Practice', value: 'RN', checked: false, showBtn: false},
            {name: 'Scalling Lean', value: 'Lean', checked: false, showBtn: false},
            {name: 'Holiday', value: 'Hol', checked: true, showBtn: false}
        ]
    },
    add(event) {
        var that = this;
        that.data.items.unshift({
            name: event.detail.value,
            value: 'add',
            checked: false,
            showBtn: false
        })
        this.setData({
            items: that.data.items
        })
        return ''
    },
    bindCheck(event) {
        var that = this;
        var index = event.currentTarget.dataset.checkedboxindex;
        that.data.items[index].checked = !that.data.items[index].checked;
        this.setData({
            items: that.data.items
        })
    },
    bindLongTap(event) {
        var that = this;
        var index = event.currentTarget.dataset.checkedboxindex;
        that.data.items[index].showBtn = !that.data.items[index].showBtn;
        this.setData({
            items: that.data.items
        })
    },
    remove(event) {
        var that = this;
        var index = event.currentTarget.dataset.checkedboxindex;
        that.data.items.splice(index, 1)
        this.setData({
            items: that.data.items
        })
    },
    onLoad() {
        console.log('onLoad')
        var that = this
        //调用应用实例的方法获取全局数据
        app.getUserInfo(function (userInfo) {
            //更新数据
            that.setData({
                userInfo: userInfo
            })
        })
    },
    onShareAppMessage() {
        return {
            title: '自定义分享标题',
            desc: '自定义分享描述',
            path: '/page/user?id=123'
        }
    }
})

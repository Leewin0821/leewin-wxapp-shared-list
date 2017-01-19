var app = getApp()

Page({
    data: {
        userInfo: {},
        items: [
            {name: 'AR/VR Workshop', checked: false},
            {name: 'Mini Program Workshop', checked: true},
            {name: 'Ng2 Practice', checked: false},
            {name: 'React Native Practice', checked: false},
            {name: 'Scalling Lean', checked: false},
            {name: 'Holiday', checked: true}
        ]
    },
    onLoad() {
        var that = this
        //调用应用实例的方法获取全局数据
        app.getUserInfo(function (userInfo) {
            //更新数据
            that.setData({
                userInfo: userInfo
            })
        })
    },
    checkboxChange(event) {
        let items = this.data.items
        for (let item of items) {
            item.checked = event.detail.value.indexOf(String(items.indexOf(item))) !== -1;
        }
        this.setData({
            items: items
        })
    }
})

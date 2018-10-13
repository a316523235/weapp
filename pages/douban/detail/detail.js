Page({
  data: {
    film: {},
    showLoading: true,
    options: null
  },
  onLoad: function (options) {
    var that = this
    wx.setNavigationBarTitle({
      title: options.title
    })
    wx.request({
      url: 'https://www.booyu.cn/api/info?id=' + options.id,
      header: {
        'content-type': 'json'
      },
      success: function (res) {
        var data = res.data.content
        console.log('start')
        console.log(res)
        that.setData({
          film: data,
          showLoading: false
        })
      }
    })
  },
  copyTBL: function (e) {
    var self = this;
    wx.setClipboardData({
      data: self.data.film.tkl,
      success: function (res) {
        // self.setData({copyTip:true}),
        wx.showModal({
          title: '提示',
          content: '复制成功',
          success: function (res) {
            if (res.confirm) {
              console.log('确定')
            } else if (res.cancel) {
              console.log('取消')
            }
          }
        })
      }
    });
  }
})

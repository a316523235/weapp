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
      url: 'https://www.booyu.cn/douban/movie/subject?id=' + options.id,
      header: {
        'content-type': 'json'
      },
      success: function (res) {
        var data = res.data
        that.setData({
          film: data,
          showLoading: false
        })
      }
    })
  }
})

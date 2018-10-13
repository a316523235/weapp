App({
  onLaunch: function () {
  },
  onShow: function () {

    wx.getClipboardData({
      success: function (res) {
        var sourceData = res.data
        if (sourceData) {
          wx.request({
            url: 'https://www.booyu.cn/api/tkltoid',
            data: { content: sourceData },
            method: 'POST',
            dataType: 'json',
            success: function (res) {
              console.log(res.data)
              if(res.data.status == true) {
                wx.navigateTo({
            url: '../detail/detail?id=' + res.data.content + '&title=t1&type=ing'
                })
              }
            }
          })
        }
      }
    })
  },
  onHide: function () {
  },
  globalData: {
  }
})

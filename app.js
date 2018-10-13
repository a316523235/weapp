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
              var goodsid = res.data.content
              if(res.data.status == true) {
                wx.showModal({
                  title: '提示',
                  content: '发现淘口令，是否跳转到商品优惠信息',
                  success: function (res) {
                    if (res.confirm) {
                      wx.navigateTo({
                        url: '../detail/detail?id=' + goodsid + '&title=简单券&type=ing'
                      })
                    } else if (res.cancel) {
                      console.log('取消')
                    }
                  }
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

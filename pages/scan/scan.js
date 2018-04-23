Page({
  data: {
    signId: 0
  },
  onLoad: function (option) {
    console.log(option);
    this.setData({
      signId: option.signid
    })
  },
  scanHandler: function () {
    const that = this;
    wx.scanCode({
      onlyFromCamera: true,
      success: (res) => {
        let url = res.result;
        wx.getLocation({
          success: function (res) {
            var latitude = res.latitude;
            var longitude = res.longitude;
            var accuracy = res.accuracy;
            const openid = wx.getStorageSync('openid');
            console.log(that.data.signId)
            wx.request({
              url: url,
              method:"PUT",
              data:{
                openId:openid,
                longitude: longitude,
                accuracy: accuracy,
                latitude: latitude,
                signId: that.data.signId
              },
              header: {
                'content-type': 'application/json'
              },
              success: function (res) {
                wx.showModal({
                  title: '签到结果',
                  content: res.data.msg
                })
              }
            })
          }
        })
      }
    })
  }
})
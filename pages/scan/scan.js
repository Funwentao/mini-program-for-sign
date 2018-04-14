Page({
  data: {
    courseId: 0
  },
  onLoad: function (option) {
    this.setData({
      courseId: option.courseId
    })
  },
  scanHandler: function () {
    wx.scanCode({
      onlyFromCamera: true,
      success: (res) => {
        const url = res.result;
        wx.request({
          url: url,
          header: {
            'content-type': 'json'
          },
          success: function (res) {
            wx.showToast({
              title: url,
            });
          }
        })
      }
    })
  }
})
Page({
  data: {
    courseList: []
  },
  onPullDownRefresh: function () {
    const openid = wx.getStorageSync('openid');
    const that = this;
    wx.request({
      url: 'https://api.uzpeng.top/sign/v1/student/sign?type=1&openId=' + openid,
      header: {
        'content-type': 'json'
      },
      success: function (res) {
        that.setData({
          courseList: res.data.list
        });
        wx.stopPullDownRefresh();
      }
    })
  },
  onLoad: function (options) {
    const openid = wx.getStorageSync('openid');
    const that = this;
    wx.request({
      url: 'https://api.uzpeng.top/sign/v1/student/sign?type=1&openId=' + openid,
      header: {
        'content-type': 'json'
      },
      success:function(res){
        that.setData({
          courseList:res.data.list
        })
      }
    })
  },
  goToScan: function (e) {
    wx.navigateTo({
      url: '../scan/scan?signid=' + e.currentTarget.dataset.signid,
      fail: function () {
        console.log("fail");
      }
    });
  }
})
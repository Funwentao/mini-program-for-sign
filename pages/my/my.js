const app = getApp();
Page({
  data: {
    motto: 'Hello World',
    studentName:'',
    studentNum:'',
    userInfo:{}
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    }else {
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    const openid = wx.getStorageSync("openid");
    const that = this;
    wx.request({
      url: 'https://api.uzpeng.top/sign/v1/student?openId=' + openid,
      header: {
        'content-type': 'json'
      },
      success: function (res) {
        that.setData({
          studentName: res.data.name,
          studentNum: res.data.studentNum
        })
      }
    })
  },
  changeAccount(){
    wx.navigateTo({
      url: '../login/login',
      fail: function (fail) {
        console.log("fail");
      }
    });
  },
  goToHistory(){
    wx.navigateTo({
      url: '../history/history',
      fail: function (fail) {
        console.log("fail");
      }
    });
  },
  goToEdit(){
    wx.navigateTo({
      url: '../edit/edit',
      fail: function (fail) {
        console.log("fail");
      }
    });
  }
})
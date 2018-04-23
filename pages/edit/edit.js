// pages/edit/edit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    oldPassword:'',
    newPassword:''
  },
  oldPasswordInput(e){
    this.setData({
      oldPassword: e.detail.value
    })
  },
  newPasswordInput(e){
    this.setData({
      newPassword: e.detail.value
    })
  },
  editHandler: function () {
    if (this.data.oldPassword === '' || this.data.newPassword === '') {
      wx.showModal({
        title: '提示',
        content: '信息未填写完整！'
      })
    } else {
      const openid = wx.getStorageSync('openid');
      wx.request({
        url: 'https://api.uzpeng.top/sign/v1/student/password',
        method: "PUT",
        data: {
          oldPassword: this.data.oldPassword,
          newPassword: this.data.newPassword,
          openId: openid
        },
        header: {
          'content-type': 'application/json'
        },
        success: function (res) {
          if (res.data.status === "success") {
            wx.navigateBack();  
          } else {
            wx.showModal({
              title: '错误',
              content: res.data.msg
            })
          }
        }
      })
    }
  }
})
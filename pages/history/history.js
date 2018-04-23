// pages/history/history.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    courseList: []
  },
  onPullDownRefresh: function () {
    const openid = wx.getStorageSync('openid');
    const that = this;
    wx.request({
      url: 'https://api.uzpeng.top/sign/v1/student/sign?type=0&openId=' + openid,
      header: {
        'content-type': 'json'
      },
      success: function (res) {
        wx.stopPullDownRefresh();
        that.setData({
          courseList: res.data.list
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const openid = wx.getStorageSync('openid');
    const that = this;
    wx.request({
      url: 'https://api.uzpeng.top/sign/v1/student/sign?type=0&openId=' + openid,
      header: {
        'content-type': 'json'
      },
      success: function (res) {
        that.setData({
          courseList: res.data.list
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})
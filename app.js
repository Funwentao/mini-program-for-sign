//app.js
App({
  onLaunch: function () {
    //展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    //登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        console.log(res.code);
        const URL = 'https://api.funwt.top/user/openid?code=' + res.code;
        wx.request({
          url: URL,
          header:{
            'content-type':'json'
          },
          success:function(res){
            console.log(res);
            wx.getStorageSync('openid') || wx.setStorageSync('openid', res.data.openid);
            let openid = wx.getStorageSync('openid');
            //查询是否注册过
            if (openid ==="oXcsX0ZOO-CmnV8gIfB4iThwHMJ8"){
              wx.switchTab({
                url: '../list/list',
               //url:'../my/my'
              });
            }else{
              wx.switchTab({
                url: '../login/login',
              });
            }
            // wx.redirectTo({
            //   url: '/pages/logs/logs'
            // })
          }
        })
      }
    })
    //获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo;
              wx.setStorageSync('userInfo',res.userInfo);
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  }
})
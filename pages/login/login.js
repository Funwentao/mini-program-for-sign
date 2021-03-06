Page({
  data: {
    username:'',
    password:''
  },
  usernameInput:function(e){
    this.setData({
      username: e.detail.value
    })
  },
  passwordInput:function(e){
    this.setData({
      password:e.detail.value
    });
  },
  loginHandler:function(){
    if(this.data.username===''||this.data.password===''){
      wx.showModal({
        title: '提示',
        content: '信息未填写完整！'
      })
    }else{
      const openid = wx.getStorageSync('openid');
      wx.request({
        url: 'https://api.funwt.top/user/login',
        method: "POST",
        data: {
          password: this.data.password,
          studentNum: this.data.username,
          openid: openid
        },
        header: {
          'content-type': 'application/json'
        },
        success: function (res) {
          if (res.data.status === "success") {
            wx.switchTab({
              url: '../list/list',
            });
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
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
    // console.log(wx.getStorageSync('userInfo'));
    wx.request({
      url: 'https://api.funwt.top/test',
      header: {
        'content-type': 'json'
      },
      success: function (res) {
        console.log(res.data.msg);
      }
    })
    // if(this.data.username===''||this.data.password===''){
    //   wx.showModal({
    //     title: '提示',
    //     content: '信息未填写完整！',
    //     success: function (res) {
    //       if (res.confirm) {
    //         console.log('确定')
    //       } else if (res.cancel) {
    //         console.log('取消')
    //       }
    //     }
    //   })
    // }else{

    // }
  }
})
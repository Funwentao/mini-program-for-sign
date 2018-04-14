Page({
  data: {
    coourseList: [{
      courseName: '离散数学',
      loc: '文科楼',
      time: '第3-4节',
      teacher: '陈飞',
      courseNum: "2014150283",
      courseId: 1,
      className: "color" + Math.ceil(Math.random() * 10)
    }, {
      courseName: '离散数学',
      loc: '文科楼',
      time: '第3-4节',
      teacher: '陈飞',
      courseNum: "2014150283",
      courseId: 2,
      className: "color" + Math.ceil(Math.random() * 10)
    }, {
      courseName: '离散数学',
      loc: '文科楼',
      time: '第3-4节',
      teacher: '陈飞',
      courseNum: "2014150283",
      courseId: 3,
      className: "color" + Math.ceil(Math.random() * 10)
    }, {
      courseName: '离散数学',
      loc: '文科楼',
      time: '第3-4节',
      teacher: '陈飞',
      courseNum: "2014150283",
      courseId: 4,
      className: "color" + Math.ceil(Math.random() * 10)
    }]
  },
  goToScan: function (e) {
    console.log(e.currentTarget.dataset.courseid);
    wx.navigateTo({
      url: '../scan/scan?courseId=' + e.currentTarget.dataset.courseid,
      fail: function () {
        console.log("fail");
      }
    });
  }
})
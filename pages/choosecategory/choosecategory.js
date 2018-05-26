const app = getApp()
Page({
  loaddata: function () {
    var that = this
    wx.request({
      url: app.globalData.api.url + '?code=CAN003&body={"page":1,"pagesize":10}',
      method: 'POST',
      success: function (res) {
        console.log(res.data)
        var message = '系统繁忙，请稍后再试哦~'
        if (res.data.message) {
          message = res.data.message
        }
        if (res.data.error != 0) {
          return
        }
        var innerResponse = {};
        try {
          innerResponse = JSON.parse(res.data.body)
        } catch (e) {
          console.log(res.data.body)
        }

        if (!innerResponse.items) {
          return;
        }

        that.setData({
          categories: innerResponse.items
        })
      }
    })
  },
  choose: function (e) {
    var categoryname = e.currentTarget.dataset.categoryname
    var categoryid = e.currentTarget.dataset.categoryid
    wx.request({
      url: app.globalData.api.url2 + '?code=CAN021&body={"categoryid":' + categoryid + ',"sk":"' + app.globalData.sk + '"}',
      method: 'POST',
      success: function (res) {
        console.log(res.data)
        var message = '系统繁忙，请稍后再试哦~'
        if (res.data.message) {
          message = res.data.message
        }
        if (res.data.status != 0) {
          wx.showToast({
            title: message,
            icon: 'none'
          })
          return
        }

        app.globalData.learning.categoryname = res.data.body.learning.categoryname;
        app.globalData.learning.categoryid = res.data.body.learning.categoryid;
        app.globalData.learning.total = res.data.body.learning.total;
        app.globalData.learning.complete = res.data.body.learning.complete;
        app.globalData.learning.remain = res.data.body.learning.remain;

        var pages = getCurrentPages()
        var prev = pages[pages.length - 2]
        prev.data = {
          hasLearning: true,
          hasLearningToday: app.globalData.hasLearningToday,
          learning: app.globalData.learning
        }
        prev.setData(prev.data)
        wx.navigateBack({})
      }
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    categories: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '选择词库'
    })
    this.loaddata()
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
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

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
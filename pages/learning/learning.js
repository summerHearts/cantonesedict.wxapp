const app = getApp()
var data = {
  hasLearning: false,
  hasLearningToday: false,
  learning: {
    categoryname: "",
    categoryid: 0,
    total: 0,
    complete: 0,
    remain: 0,
    todaycomplete: 0,
    todaywords: []
  }
}
Page({

  /**
   * 页面的初始数据
   */
  data: data,
  play_voice: function (e) {
    var voice = e.currentTarget.dataset.canvoice;
    var prounounce = e.currentTarget.dataset.canpronounce;
    app.play_voice(voice, prounounce);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#22b14c'
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
    data.hasLearning = app.globalData.hasLearning
    data.hasLearningToday = app.globalData.hasLearningToday
    data.learning = app.globalData.learning
    this.setData(data)
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
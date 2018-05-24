const app = getApp()
var data = {
  items: [
    { chntext: "b", cantext: "波", canpronounce: "bo1", description: "波" },
    { chntext: "p", cantext: "婆", canpronounce: "po4", description: "婆" },
    { chntext: "m", cantext: "摸", canpronounce: "mo2", description: "磨" },
    { chntext: "f", cantext: "科", canpronounce: "fo1", description: "佛(1声)" },
    { chntext: "d", cantext: "地", canpronounce: "dei6", description: "得(1声)" },
    { chntext: "t", cantext: "条", canpronounce: "tiu4", description: "提油" },
    { chntext: "n", cantext: "你", canpronounce: "nei2／lei2", description: "馁/雷" },
    { chntext: "l", cantext: "了", canpronounce: "liu4", description: "流" },
    { chntext: "g", cantext: "哥", canpronounce: "go1", description: "锅" },
    { chntext: "gw", cantext: "广", canpronounce: "gwong2", description: "个王" },
    { chntext: "k", cantext: "其", canpronounce: "kei4", description: "K" },
    { chntext: "kw", cantext: "框", canpronounce: "kwaang1", description: "克王" },
    { chntext: "ng", cantext: "我", canpronounce: "ngo5", description: "ngo5" },
    { chntext: "h", cantext: "哈", canpronounce: "haa1", description: "哈" },
    { chntext: "z", cantext: "站", canpronounce: "zaam6", description: "赞" },
    { chntext: "c", cantext: "车", canpronounce: "ce1", description: "此唉" },
    { chntext: "s", cantext: "三", canpronounce: "saam1", description: "三" },
    { chntext: "j", cantext: "衣", canpronounce: "ji1", description: "衣" },
    { chntext: "w", cantext: "乌", canpronounce: "wu1", description: "乌" }
  ]
}
Page({
  play_voice: function (e) {
    var voice = e.currentTarget.dataset.canvoice;
    var prounounce = e.currentTarget.dataset.canpronounce;
    app.play_voice(voice, prounounce);
  },
  /**
   * 页面的初始数据
   */
  data: data,

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '声母'
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
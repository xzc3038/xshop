// pages/detail/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      "../../images/index/goods2.jpg",
      "../../images/index/goods2.jpg",
      "../../images/index/goods2.jpg"
    ],
    goods:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const app = getApp();
    var that = this;
    wx.request({
      url: 'http://www.xshop.com/index/index/detail', //仅为示例，并非真实的接口地址
      method:"POST",
      data: {
        id:app.globalData.goodsId
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        that.setData({
          goods:res.data
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
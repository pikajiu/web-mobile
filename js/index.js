window.onload = function () {
  // 1.获取搜索栏
  var jd_search = document.querySelector('.search')
  console.log(jd_search)
  // 2.获取轮播图高度
  var navHeight = document.querySelector('.nav').offsetHeight
  // 3.监听滚动事件
  window.onscroll = function () {
    // 4.获取滑出屏幕的界面高度
    var scroll_Height = window.document.body.scrollTop||document.documentElement.scrollTop
    // 5.计算透明度=4./2.
    var opcity = scroll_Height / navHeight
    // 6.赋值给搜索框
    jd_search.style.backgroundColor = 'rgba(233, 34, 35, '+opcity+')'
  }

}
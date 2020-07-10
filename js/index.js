window.onload = function () {
  setHeaderOpacity();
  setSKTime();
  setBanner();
}
function setHeaderOpacity() {
  // 1.获取搜索栏
  var jd_search = document.querySelector('.search')
  console.log(jd_search)
  // 2.获取轮播图高度
  var navHeight = document.querySelector('.nav').offsetHeight
  // 3.监听滚动事件
  window.onscroll = function () {
    // 4.获取滑出屏幕的界面高度
    var scroll_Height = window.document.body.scrollTop || document.documentElement.scrollTop
    // 5.计算透明度=4./2.
    var opcity = scroll_Height / navHeight
    // 6.赋值给搜索框
    jd_search.style.backgroundColor = 'rgba(233, 34, 35, ' + opcity + ')'
  }
}
function setSKTime() {
  var total = 100000;

  var timeID = setInterval(() => {
    total--;
    var hours = Math.floor(total / 3600);
    var minutes = Math.floor(total % 3600 / 60);
    var seconds = Math.floor(total % 3600 % 60);
    var times = document.querySelectorAll('.time');
    times[0].innerHTML = Math.floor(hours / 10);
    times[1].innerHTML = Math.floor(hours % 10);
    times[2].innerHTML = Math.floor(minutes / 10);
    times[3].innerHTML = Math.floor(minutes % 10);
    times[4].innerHTML = Math.floor(seconds / 10);
    times[5].innerHTML = Math.floor(seconds % 10);

    if (total <= 0) {
      clearInterval(timeID);
      return;
    }
  }, 1000);

}

function setBanner() {
  //获取banner>ul:nth-of-type(1)元素
  var imgbox = document.querySelector('.banner > ul:nth-of-type(1)')
  var bannerWidth = document.querySelector('.banner').offsetWidth;
  //异步请求数据
  $.ajax({
    type: 'get',
    //路径基于引用js的html(index.html),可以从本地的目录拿数据
    url: './data/img.json',
    dataType: 'json',
    success: function (result) {
      //渲染模板
      var html = template('bannerTemplate', result);
      imgbox.innerHTML = html;
      //前后各插入一张, for example: n，1，2，...,n,1
      var fisrtImg = imgbox.querySelector('li:nth-of-type(1)')
      var lastImg = imgbox.querySelector('li:nth-last-of-type(1)')
    /*深拷贝*/
      imgbox.insertBefore(lastImg.cloneNode(true),fisrtImg);
      imgbox.appendChild(fisrtImg.cloneNode(true));
      //修改CSS，改变 ul witdh , 改变li width
      
      
      var liElements = imgbox.querySelectorAll('li');
      // ul witdh = banner width * li 数量
      imgbox.style.width = bannerWidth * liElements.length + 'px';
      for (var i = 0; i < liElements.length; i++){
        // each li width = banner width
        liElements[i].style.width = bannerWidth + 'px';
      }
      imgbox.style.left = -bannerWidth + 'px';
    }
  })
  //自动轮播
  var index = 1;
  var bannerID = setInterval(() => {
    //偏移值
    index++;
    imgbox.style.transition = 'left .5s';
    imgbox.style.left = -bannerWidth * index + 'px';
    
  }, 2000);
  // 轮播到最后一张，无过渡跳到第一张
  imgbox.addEventListener('transitionend', function () {
    if (index >= 9) {
      index = 1;
      imgbox.style.transition = 'none';
      imgbox.style.left = -bannerWidth * index + 'px';
    }
  })
  /*  手动轮播
      1.监听touchstart事件，获取初始鼠标位置
      2.监听touchmove事件，获取实时鼠标位置
      3.计算鼠标滑动距离，改变ul偏移值
      4.监听touchend事件，获取最后鼠标位置
      5.计算总共滑动距离，超过bannerwidth则偏移到下一张，否则偏移回当前图片
      5.滑动快过动画，bug fix？
  */


}
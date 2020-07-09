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
      
      //修改CSS，改变 banner witdh , 改变li width
      imgbox.style.witdh = 

    }
  })
}
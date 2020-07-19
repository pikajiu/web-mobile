window.onload = function () {
  // 绑定单击事件
  setInitalSwiper()
  setLeftClickEvent()
}

function setLeftClickEvent() {
  // 绑定单击事件
  var dom = document.querySelector('.left')
  clickSim.tap(dom,function(e){
    // 拿到了A链接元素
    // console.log(e.target) 
    var allLi = dom.querySelectorAll('li')
    for(var i = 0;i<allLi.length;i++){
      allLi[i].classList.remove('active')
    }
    var activeLi = e.target.parentNode
    activeLi.classList.add('active')
  })
}


function setInitalSwiper() { 
  var mySwiper = new Swiper('.swiper-container', {
    direction: 'vertical', // 垂直切换选项
    // 默认为false，普通模式：slide滑动时只滑动一格，并自动贴合wrapper，设置为true则变为free模式，slide会根据惯性滑动可能不止一格且不会贴合。
    freeMode: true,
    slidesPerView: 'auto',
  })
};
$(document).ready(function () {
  $(".event-useguide .title").on("click", function(e) {
    $(this).toggleClass("open").siblings().toggleClass("open");
  });

  // 스크롤 이벤트
  const part = $('.qmenu');
  const speed = 160;

  $(window).on('scroll',function(){
      let scrollTop = $(window).scrollTop();
      // nav
      part.each(function (i) {
          if (scrollTop >= part.eq(i).offset().top - speed) {
            $(".quick-menu li").eq(i).addClass("on").siblings().removeClass("on");
          }
        });
  })
  $(".quick-menu a").on("click", function(){
    //e.preventDefault();
    $(".quick-menu li").removeClass("on");
    $(this).parent('.quick-menu li').addClass("active");
    $("html, body").animate({scrollTop: $(this.hash).offset().top + 20}, 300);
});

  $("#discography-albums").bxSlider({
    minSlides: 3,
    maxSlides: 3,
    moveSlides: 1,
    slideMargin: 80,
    pager: false,
    controls: false,
    slideWidth: 500,
    hideControlOnEnd: true,
    infiniteLoop: false,
  });
  const topSwiper = new Swiper(".top-img", {
    loop: true,
    autoplay: {
      delay: 1600,
      disableOnInteraction: false,
    },
    parallax: true,
    effect: "fade",
    allowTouchMove: false,
  });
  const newsSwiper = new Swiper(".card-swiper", {
    effect: "cards",
    grabCursor: true,
  });
});
const sections = $(".section");
const speed = 850;

//스크롤 애니메이션
$(window).on("scroll", function () {
  let scrollTop = $(window).scrollTop();
  sections.each(function (i) {
    if (scrollTop >= sections.eq(i).offset().top - speed) {
      sections.eq(i).find(".show-up").addClass("active");
    }
  });
});

$(window).on("load", function () {
  setFlowBanner1();
  setFlowBanner2();
  setFlowBanner3();
});

function setFlowBanner1() {
  const $wrap = $(".flow-text.n1");
  const $list = $(".flow-text.n1 .list");
  let wrapWidth = $wrap.width();
  let listWidth = $list.width();
  const speed = 92; //1초에 몇픽셀 이동하는지 설정

  //리스트 복제
  let $clone = $list.clone();
  $wrap.append($clone);
  flowBannerAct();

  //배너 실행 함수
  function flowBannerAct() {
    //무한 반복을 위해 리스트를 복제 후 배너에 추가
    if (listWidth < wrapWidth) {
      const listCount = Math.ceil((wrapWidth * 2) / listWidth);
      for (let i = 2; i < listCount; i++) {
        $clone = $clone.clone();
        $wrap.append($clone);
      }
    }
    $wrap.find(".list").css({
        animation: `${listWidth / speed}s linear infinite flowRolling`,
      });
  }
}
function setFlowBanner3() {
  const $wrap = $(".flow-text.n3");
  const $list = $(".flow-text.n3 .list");
  let wrapWidth = $wrap.width();
  let listWidth = $list.width();
  const speed = 92; //1초에 몇픽셀 이동하는지 설정

  //리스트 복제
  let $clone = $list.clone();
  $wrap.append($clone);
  flowBannerAct();

  //배너 실행 함수
  function flowBannerAct() {
    //무한 반복을 위해 리스트를 복제 후 배너에 추가
    if (listWidth < wrapWidth) {
      const listCount = Math.ceil((wrapWidth * 2) / listWidth);
      for (let i = 2; i < listCount; i++) {
        $clone = $clone.clone();
        $wrap.append($clone);
      }
    }
    $wrap.find(".list").css({
        animation: `${listWidth / speed}s linear infinite flowRolling`,
      });
  }
}
function setFlowBanner2() {
  const $wrap = $(".flow-text.n2");
  const $list = $(".flow-text.n2 .list");
  let wrapWidth = $wrap.width();
  let listWidth = $list.width();
  const speed = 92; //1초에 몇픽셀 이동하는지 설정

  //리스트 복제
  let $clone = $list.clone();
  $wrap.append($clone);
  flowBannerAct();

  //배너 실행 함수
  function flowBannerAct() {
    //무한 반복을 위해 리스트를 복제 후 배너에 추가
    if (listWidth < wrapWidth) {
      const listCount = Math.ceil((wrapWidth * 2) / listWidth);
      for (let i = 2; i < listCount; i++) {
        $clone = $clone.clone();
        $wrap.append($clone);
      }
    }
    $wrap.find(".list").css({
        animation: `${listWidth / speed}s linear infinite flowRolling2`,
      });
  }
}
$('#comment').keyup(function (e) {
	let content = $(this).val();
    
    // 글자수 세기
    if (content.length == 0 || content == '') {
    	$('#textcount').text('0');
    } else {
    	$('#textcount').text(content.length);
    }
    
    // 글자수 제한
    if (content.length > 200) {
    	// 200자 부터는 타이핑 되지 않도록
        $(this).val($(this).val().substring(0, 200));
        // 200자 넘으면 알림창 뜨도록
        alert('글자수는 200자까지 입력 가능합니다.');
    };
});
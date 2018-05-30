$(function() {
	
	banner();

	function banner() {
		var _win_width = $(window).width(),
			_header_hei = $(window).height();
		if(_win_width >= 1440) {
			$('.banner').height('500px');
			$('.main-left').width('6400px');
		} else if(_win_width < 1440 && _win_width > 960) {
			_header_hei = 500 * _win_width / 1440;
			$('.banner').height(_header_hei);

		} else {
			$('.banner').height('333.33333px');
		}

		if(_win_width >= 1180) {
			$('.main-container').width('1180px');
			$('.main-left').width('860px');
		} else {
			$('.main-container').width('960px');
			$('.main-left').width('640px');
		}
	}

	$(window).resize(function() {
		banner();

	});

	//  ========== 
	//  = Banner = 
	//  ========== 
	num = $(".banner-list .item").length;
	for(i = 0; i < num; i++) {
		$(".bannerNum").append("<a class='num-text' href='javascript:void(0)'>" + "</a>");
	}

	theInt = null;
	$(".bannerNum .num-text").eq(0).addClass("cur");

	$(".bannerNum .num-text").each(function(i) {
		$(this).click(function() {
			//						HuanDeng(i);
			Change(i);
		});
	});

	HuanDeng = function(p) {
		//						setInterval(function() {
		//							p++;
		//							if(p < num) {
		//								Change(p);
		//							} else {
		//								p = 0
		//								Change(p);
		//							}
		//						}, 5000)
		clearInterval(theInt); //取消setInterval的设置
		theInt = setInterval(function() {
			p++;
			if(p < num) {
				Change(p);
			} else {
				p = 0
				Change(p);
			}
		}, 5000); //每隔5s调用function
	}
	HuanDeng(0);

	function Change(i) {
		//					var next = i!=undefined?i:(++cur%num);
		$(".banner-list .item").removeClass('active');
		$(".banner-list .item").eq(i).addClass('active');
		$(".bannerNum .num-text").removeClass("cur");
		$(".bannerNum .num-text").eq(i).addClass("cur");
	}

	//  ========== 
	//  = 顶部显示隐藏 = 
	//  ========== 
	$(window).on('scroll', function() {
		var st = $(document).scrollTop();
		banner_scroll(st);

		function banner_scroll(st) {
			//				debugger;
			if(st >= 1) {
				//					debugger;
				$('.header').css({
					position: 'fixed',
					backgroundColor: '#f9f9f9'
				}).fadeOut('fast');
				$('.banner-header .logo img').attr({
					src: 'img/black-logo.png'
				});
				$('.banner-header').css({
					position: 'fixed',
					opacity: 0.97,
					left: 0,
					backgroundColor: '#f9f9f9',
					zIndex: 3,
					top: 0,
					boxShadow: '0 1px 4px rgba(0,0,0,0.1)'
				});
				$('.search .submit').css({
					backgroundImage: '-webkit-image-set(url(img/search-btn.png) 1x,url(img/search-btn_2x.png)  2x)'
				});
				$('.nav-list a,.login a').css({
					color: '#333'
				})
			}
			if(st < 1) {
				$('.header').css({
					position: 'static',
					backgroundColor: '#222'
				}).slideDown('fast');
				$('.banner-header .logo img').attr({
					src: 'img/white-logo.png'
				});
				$('.banner-header').css({
					position: 'absolute',
					opacity: 1,
					backgroundColor: '',
					zIndex: 2,
					boxShadow: ''
				});
				$('.search .submit').css({
					backgroundImage: 'url(img/search-btn-white.png)'
				});
				$('.nav-list a,.login a').css({
					color: '#fff'
				})
			}
		}
	})

	function ratingInit() {
		$('.score').each(function() {
			var str = $(this).data('score');
			var score = parseFloat($(this).data('score') / 2);
			var floor = Math.floor(score);
			var len = floor * 90 / 5 + 3 + (score - floor) * 12;
			//			$(this).children('.star-bar').html('<span class="star"></span>')
			$(this).children('.star-bar').html('<span class="star" style="width:' + len + 'px;"></span>')
		});
	}
	ratingInit();
	//	$.rotate({});

})
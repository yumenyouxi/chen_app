$(function () {
				$('#move').hover(function () {
					$('#moveleft').stop(true, true).animate({left:"-40%"}, 300);
				}, function () {
					$('#moveleft').stop(true, true).animate({left:0}, 300);
				});
			});

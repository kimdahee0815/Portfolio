(function($) {

	var	$window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$all = $body.add($header);

	// Breakpoints.
		breakpoints({
			xxlarge: [ '1681px',  '1920px' ],
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '1001px',  '1280px' ],
			medium:  [ '737px',   '1000px' ],
			small:   [ '481px',   '736px'  ],
			xsmall:  [ null,      '480px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Touch mode.
		if (browser.mobile)
			$body.addClass('is-touch');
		else {

			breakpoints.on('<=small', function() {
				$body.addClass('is-touch');
			});

			breakpoints.on('>small', function() {
				$body.removeClass('is-touch');
			});

		}

	// Fix: IE flexbox fix.
		if (browser.name == 'ie') {

			var $main = $('.main.fullscreen'),
				IEResizeTimeout;

			$window
				.on('resize.ie-flexbox-fix', function() {

					clearTimeout(IEResizeTimeout);

					IEResizeTimeout = setTimeout(function() {

						var wh = $window.height();

						$main.each(function() {

							var $this = $(this);

							$this.css('height', '');

							if ($this.height() <= wh)
								$this.css('height', (wh - 50) + 'px');

						});

					});

				})
				.triggerHandler('resize.ie-flexbox-fix');

		}

	// Gallery.
		// $window.on('load', function() {

		// 	var $gallery = $('.gallery');
		
		// 	$gallery.poptrox({
		// 		baseZIndex: 10001,
		// 		useBodyOverflow: false,
		// 		usePopupEasyClose: false,
		// 		overlayColor: '#1f2328',
		// 		overlayOpacity: 0.65,
		// 		usePopupDefaultStyling: false,
		// 		usePopupCaption: true,
		// 		popupLoaderText: '',
		// 		windowMargin: 50,
		// 		usePopupNav: true,
		// 		selector: 'a.image.fit',
				
		// 	});


		// 	// Hack: Adjust margins when 'small' activates.
		// 		breakpoints.on('>small', function() {
		// 			$gallery.each(function() {
		// 				$(this)[0]._poptrox.windowMargin = 50;
		// 			});
		// 		});

		// 		breakpoints.on('<=small', function() {
		// 			$gallery.each(function() {
		// 				$(this)[0]._poptrox.windowMargin = 5;
		// 			});
		// 		});

		// });

		document.addEventListener("DOMContentLoaded", function () {
			const modal = document.getElementById("demoModal");
			const img = document.getElementById("demoModalImg");
			const video = document.getElementById("demoModalVideo");
			const title = document.getElementById("demoTitle");
			const desc = document.getElementById("demoDescription");
			const closeBtn = document.getElementById("closeDemoModal");
	
			document.querySelectorAll(".open-demo-modal").forEach(btn => {
				btn.addEventListener("click", function () {
					const mediaSrc = btn.getAttribute("data-demo");
					const mediaType = btn.getAttribute("data-type") || "image";
					const projectTitle = btn.getAttribute("data-title") || "";
					const projectDesc = btn.getAttribute("data-desc") || "";
	
					title.textContent = projectTitle;
					desc.innerHTML = projectDesc;
	
					if (mediaType === "video") {
						img.style.display = "none";
						video.style.display = "block";
						video.src = mediaSrc;
					} else {
						video.style.display = "none";
						video.pause();
						img.style.display = "block";
						img.src = mediaSrc;
					}
	
					modal.classList.add('show');
				});
			});
	
			closeBtn.addEventListener("click", () => {
				modal.classList.remove('show');
				video.pause();
				video.src = "";
				img.src = "";
			});
	
			window.addEventListener("click", e => {
				if (e.target == modal) {
					modal.classList.remove('show');
					video.pause();
					video.src = "";
					img.src = "";
				}
			});
		});
	// Section transitions.
		if (browser.canUse('transition')) {

			var on = function() {

				// Galleries.
					$('.gallery')
						.scrollex({
							top:		'30vh',
							bottom:		'30vh',
							delay:		50,
							initialize:	function() { $(this).addClass('inactive'); },
							terminate:	function() { $(this).removeClass('inactive'); },
							enter:		function() { $(this).removeClass('inactive'); },
							leave:		function() { $(this).addClass('inactive'); }
						});

				// Generic sections.
					$('.main.style1')
						.scrollex({
							mode:		'middle',
							delay:		100,
							initialize:	function() { $(this).addClass('inactive'); },
							terminate:	function() { $(this).removeClass('inactive'); },
							enter:		function() { $(this).removeClass('inactive'); },
							leave:		function() { $(this).addClass('inactive'); }
						});

					$('.main.style2')
						.scrollex({
							mode:		'middle',
							delay:		100,
							initialize:	function() { $(this).addClass('inactive'); },
							terminate:	function() { $(this).removeClass('inactive'); },
							enter:		function() { $(this).removeClass('inactive'); },
							leave:		function() { $(this).addClass('inactive'); }
						});

				// Contact.
					$('#contact')
						.scrollex({
							top:		'50%',
							delay:		50,
							initialize:	function() { $(this).addClass('inactive'); },
							terminate:	function() { $(this).removeClass('inactive'); },
							enter:		function() { $(this).removeClass('inactive'); },
							leave:		function() { $(this).addClass('inactive'); }
						});

			};

			var off = function() {

				// Galleries.
					$('.gallery')
						.unscrollex();

				// Generic sections.
					$('.main.style1')
						.unscrollex();

					$('.main.style2')
						.unscrollex();

				// Contact.
					$('#contact')
						.unscrollex();

			};

			breakpoints.on('<=small', off);
			breakpoints.on('>small', on);

		}

		/*--/ Star Typed /--*/
	if ($('.text-slider').length == 1) {
    var typed_strings = $('.text-slider-items').text();
		var typed = new Typed('.text-slider', {
			strings: typed_strings.split(','),
			typeSpeed: 80,
			loop: true,
			backDelay: 1100,
			backSpeed: 30
		});
	}

	// Events.
		var resizeTimeout, resizeScrollTimeout;

		$window
			.on('resize', function() {

				// Disable animations/transitions.
					$body.addClass('is-resizing');

				clearTimeout(resizeTimeout);

				resizeTimeout = setTimeout(function() {

					// Update scrolly links.
						$('a[href^="#"]').scrolly({
							speed: 1500,
							offset: $header.outerHeight() - 1
						});

					// Re-enable animations/transitions.
						setTimeout(function() {
							$body.removeClass('is-resizing');
							$window.trigger('scroll');
						}, 0);

				}, 100);

			})
			.on('load', function() {
				$window.trigger('resize');
			});

			$(window).on('scroll', function () {
				var pixels = 800; 
				var fadeOutPixels = 900;
				if ($(window).scrollTop() > pixels) { 
					$('#header').fadeIn();
				}
				else if ($(window).scrollTop() <= fadeOutPixels) { 
					$('#header').fadeOut(50);
				}
			});

			$(document).on('click', '.project-link', function(e) {
				e.stopPropagation(); // Stop event bubbling
		});

	$(document).on("click", ".open-demo-modal", function () {
  const demoUrl = $(this).data("demo");
  const type = $(this).data("type");
  const title = $(this).data("title");
  const desc = $(this).data("desc");

  $("#demoTitle").html(title);
  $("#demoDescription").html(desc);

  $("#demoModalVideo").hide();
  $("#demoModalImg").hide();

  if (type === "video") {
    const $video = $("#demoModalVideo");
    $video.attr("src", demoUrl);
    $video.show();
    $video.get(0).playbackRate = 2.0; 
  } else if (type === "image") {
    $("#demoModalImg").attr("src", demoUrl).show();
  }

  $("#demoModal").fadeIn();
});

$("#closeDemoModal").on("click", function () {
  $("#demoModal").fadeOut();

  const video = $("#demoModalVideo").get(0);
  video.pause();
  video.currentTime = 0;
  $("#demoModalVideo").attr("src", "").hide();

  $("#demoModalImg").attr("src", "").hide();
});

		$('#contact-form').on('submit', function (e) {
			e.preventDefault();
		
			const name = $('input[name="name"]').val();
			const email = $('input[name="email"]').val();
			const message = $('textarea[name="message"]').val();
		
			fetch("https://daheekim-portfolio.fly.dev/send-email", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({ name, email, message })
			})
			.then(res => {
				if (res.ok) {
					alert("✅ Sent Your Message successfully!");
					$('#contact-form')[0].reset(); 
				} else {
					alert("❌ Try again!");
				}
			})
			.catch(err => {
				console.error(err);
				alert("⚠️ Server error!");
			});
		});

})(jQuery);
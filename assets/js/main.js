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
				btn.addEventListener("click", function (e) {
					e.preventDefault();
					
					const mediaSrc = btn.getAttribute("data-demo");
					const mediaType = btn.getAttribute("data-type") || "image";
					const projectTitle = btn.getAttribute("data-title") || "";
					const projectDesc = btn.getAttribute("data-desc") || "";
					const projectLink = btn.getAttribute("data-link") || null;

					if (projectLink) {
						title.innerHTML = `<a class="project-link" href="${projectLink}" target="_blank" rel="noopener" style="color: rgb(230, 148, 72); text-decoration: none;">${projectTitle}
						<img src="images/click.ico" width="45" height="45" alt="Click"/>
						</a>`;
					} else {
						title.textContent = projectTitle;
					}
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
				const sectionTop = $('#three').offset().top;
  			const scrollTop = $(window).scrollTop();
  			const header = $('#header');

  			if (scrollTop >= sectionTop) {
    			header.fadeIn();
  			} else {
    			header.fadeOut(100);
  			}
			});

			$(document).on('click', '.project-link', function(e) {
				e.stopPropagation(); // Stop event bubbling
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

	$(document).ready(function () {
  	  const $arrow = $("#one .arrow-toggle");
  		const $section = $("#one");
  		const $overlay = $("#one .white-overlay"); 
  		let showText = false;

			$arrow.on("click", function () {
  			showText = true;
  			$section.addClass("show-text");
  			$arrow.hide();
  			$overlay.css("opacity", 0);
			});

			$section.on("mouseover", function () {
  			if (showText) {
					$overlay.css("opacity", 0.1);
  			}
			});
			$section.on("mouseleave", function () {
  			if (showText) {
					$overlay.css("opacity", 0);
  			}
			});

  	//Mobile Touch
  	let touchStartX = 0;
  	let touchEndX = 0;
		let touchStartY = 0;
		let touchEndY = 0;
  	
		$section.on("touchstart", function (e) {
  		touchStartX = e.originalEvent.touches[0].clientX;
  		touchStartY = e.originalEvent.touches[0].clientY;
			});

		$section.on("touchend", function (e) {
  		touchEndX = e.originalEvent.changedTouches[0].clientX;
  		touchEndY = e.originalEvent.changedTouches[0].clientY;

  		const deltaX = touchEndX - touchStartX;
  		const deltaY = Math.abs(touchEndY - touchStartY);

  		// Scroll (neglected)
  		if (deltaY > Math.abs(deltaX)) {
				$overlay.css("opacity", 0);
				return;
			}

			$overlay.css("opacity", 1);
  		handleSwipe(deltaX);
		})
  	//Desktop mouse
		let didDrag = false; 
		let isDragging = false;

	$section.on("mousedown", function (e) {
  	isDragging = true;
  	mouseStartX = e.clientX;
  	didDrag = false; 
  	$overlay.css("opacity", 1);
	});

	$(document).on("mousemove", function (e) {
  	if (isDragging) {
    	didDrag = true; 
  	}
	});

	$(document).on("mouseup", function (e) {
  	if (isDragging) {
    	isDragging = false;
    	const deltaX = e.clientX - mouseStartX;

    	if (Math.abs(deltaX) > 5) {
      	handleSwipe(deltaX);
    	}
  	}
		});

	$section.on("click", function (e) {
		if (didDrag) return;
  	if ($(e.target).closest(".arrow-toggle").length > 0) return;

  	if ($section.hasClass("show-text")) {
    	showText = false;
    	$section.removeClass("show-text");
    	$arrow.show();
    	$overlay.css("opacity", 1);
  	}
	});

  function handleSwipe(deltaX) {
    const threshold = 50;

    if (deltaX > threshold) {
      showText = true;
      $section.addClass("show-text");
      $arrow.hide();
      $overlay.css("opacity", 0);
    } else if (deltaX < -threshold) {
      showText = false;
      $section.removeClass("show-text");
      $arrow.show();
      $overlay.css("opacity", 0);
    }
  }

  $arrow.on("mouseenter", function () {
    $overlay.css("opacity", 1);
  });

  $arrow.on("mouseleave", function () {
    $overlay.css("opacity", 0);
  });

	$section.on("mouseleave", function () {
    $overlay.css("opacity", 0);
  });
});
$(document).ready(function () {
  function setupSwipeSection(sectionId) {
    const $arrow = $(`${sectionId} .arrow-toggle`);
    const $section = $(sectionId);
    const $overlay = $(`${sectionId} .white-overlay`);
    let showText = false;
    let isDragging = false;
    let didDrag = false;
    let mouseStartX = 0;
    let touchStartX = 0;
		let touchEndX = 0;
		let touchStartY = 0;
		let touchEndY = 0;

    $arrow.on("click", function () {
      showText = true;
      $section.addClass("show-text");
      $arrow.hide();
      $overlay.css("opacity", 0);
    });

    $section.on("mouseover", function () {
      if (showText) {
				$overlay.css("opacity", 0.1);
      }
    });

    $section.on("mouseleave", function () {
      if (showText) {
        $overlay.css("opacity", 0);
      }
    });

    $section.on("touchstart", function (e) {
  		touchStartX = e.originalEvent.touches[0].clientX;
  		touchStartY = e.originalEvent.touches[0].clientY;
		});

		$section.on("touchend", function (e) {
  		touchEndX = e.originalEvent.changedTouches[0].clientX;
  		touchEndY = e.originalEvent.changedTouches[0].clientY;

  		const deltaX = touchEndX - touchStartX;
  		const deltaY = Math.abs(touchEndY - touchStartY);
			//scroll (negelected)
  		if (deltaY > Math.abs(deltaX)) {
				$overlay.css("opacity", 0);
				return;
			}

			$overlay.css("opacity", 1);
  		handleSwipe(deltaX);
		});
    $section.on("mousedown", function (e) {
      isDragging = true;
      mouseStartX = e.clientX;
      didDrag = false;
      $overlay.css("opacity", 1);
    });

    $(document).on("mousemove", function (e) {
      if (isDragging) {
        didDrag = true;
      }
    });

    $(document).on("mouseup", function (e) {
      if (isDragging) {
        isDragging = false;
        const deltaX = e.clientX - mouseStartX;
        if (Math.abs(deltaX) > 5) {
          handleSwipe(deltaX);
        }
      }
    });

    $section.on("click", function (e) {
      if (didDrag) return;
      if ($(e.target).closest(".arrow-toggle").length > 0) return;

      if ($section.hasClass("show-text")) {
        showText = false;
        $section.removeClass("show-text");
        $arrow.show();
        $overlay.css("opacity", 1);
      }
    });

    function handleSwipe(deltaX) {
      const threshold = 50;

      if (deltaX < threshold) {
        showText = true;
        $section.addClass("show-text");
        $arrow.hide();
        $overlay.css("opacity", 0);
      } else if (deltaX > -threshold) {
        showText = false;
        $section.removeClass("show-text");
        $arrow.show();
        $overlay.css("opacity", 0);
      }
    }

    $arrow.on("mouseenter", function () {
      $overlay.css("opacity", 1);
    });

    $arrow.on("mouseleave", function () {
      $overlay.css("opacity", 0);
    });

    $section.on("mouseleave", function () {
      $overlay.css("opacity", 0);
    });
  }

  setupSwipeSection("#three");
  setupSwipeSection("#two");
});
$(window).on("scroll", function () {
  const scrollTop = $(window).scrollTop();
  const windowHeight = $(window).height();

  ["#one", "#two", "#three"].forEach(function (id) {
    const $section = $(id);
    const $arrow = $section.find(".arrow-toggle");
    const $overlay = $section.find(".white-overlay");

    const oneTop = $section.offset().top;
    const oneBottom = oneTop + $section.outerHeight();

    const isOutOfView =
      scrollTop > oneBottom || scrollTop + windowHeight < oneTop + 100;

    if (isOutOfView && $section.hasClass("show-text")) {
      $section.removeClass("show-text");
      $arrow.show();
      $overlay.css("opacity", 1);
    }
  });
});
})(jQuery);
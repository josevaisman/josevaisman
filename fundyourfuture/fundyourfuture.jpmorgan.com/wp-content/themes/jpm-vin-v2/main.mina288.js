//alert(jQuery(window).width() + " x " + jQuery(window).height());
jQuery( document ).ready( function( $ ) {

	//alert(window.location.hash);
	if(window.location.hash=="") window.location.hash="home";
	//alert(window.location.hash);
	if(window.location.hash=="#home") $(".wpg-disclaimer-box").hide();

    var md = new MobileDetect( window.navigator.userAgent );
    var isMobile = ((md.mobile() || md.phone()) != null);
    var isTablet = (md.tablet() != null);

    var $body = $('body');

    if( isMobile || isTablet ) {
        $body.removeClass();
        if( isMobile ) $body.addClass('mobile');
        if( isTablet ) $body.addClass('tablet');
        if( window.innerWidth > window.innerHeight ) {
            $body.addClass('landscape');
            if( isTablet ) $body.addClass('animate');
        } else {
            $body.addClass('portrait');
        }
    }

    $( window ).on( "orientationchange", function( event ) {
        $body.removeClass();
        if( isMobile ) $body.addClass('mobile');
        if( isTablet ) $body.addClass('tablet');
        $body.addClass( event.orientation );
        if( isTablet && event.orientation == 'landscape' ) {
            $body.addClass('animate');
        }
    });

    var anchors = [
        'home',
        'introduction',
        'life-expectancy',
        'dependents',
        'objectives',
        'inflation',
        'guiding-principles',
        'start-early',
        'diversify',
        'stick-with-it',
        'next-steps',
        'informacion-importante'
    ];
    var sliders = {
        'inflation': { first: true, last: false, count: 2 },
        'start-early': { first: true, last: false, count: 2 },
        'diversify': { first: true, last: false, count: 1 },
        'stick-with-it': { first: true, last: false, count: 2 }
    };

    function getAnchorByIndex( index ) {
        if( index > 0 && index <= anchors.length ) {
            return anchors[ index - 1 ];
        }
        return false;
    }

    function setNavFromLoactionHash() {
        var hash = window.location.hash;
        if( hash[0] === '#' ) {
            hash = hash.substr(1);
        }
        if( hash.length ) {
            jQuery.fn.fullpage.activateNavDots( hash );
        }
    }

	function setNavByHash( hash ) {
		if( hash.length ) {
			jQuery.fn.fullpage.activateNavDots( hash );
		}
	}

	var positionLegendChart2=function(){
		if($(window).width()<768)
		{
			$( ".wpg-ct-chart-2-legend").insertAfter( ".ct-chart-2" );
		}
		else
		{
			$(".wpg-ct-chart-2-legend").insertAfter( ".wpg-inflation-media-procent" );
		}
	};
	positionLegendChart2();
	$(window).resize(positionLegendChart2);

	var desktopSmallVersion=function(){
		if($(window).height()<768)
		{
			$("body").addClass("desktop-small-version");
		}
		else
		{
			$("body").removeClass("desktop-small-version");
		}
	};
	if(  isTablet ) {
		desktopSmallVersion();
	}
	if(!isMobile) {
		desktopSmallVersion();
	}

    if(  (isMobile || isTablet) ) {

		/* animet svg */
		if($(window).width()>768)
		{
			$(".module-home").find("h2").css("left",-2000);
			$(".module-home").find("p").css("right",-2000);
			if(window.location.hash=="#home")
			{
				setTimeout(function(){

					$(".module-home").find("h2").animate({"left":0},600,function(){
						$(".wpg-animate-home > img").trigger("click");
					});
					$(".module-home").find("p").animate({"right":0},600);
				},1000);
			}
		}

		setTimeout(function(){

			//$('[data-edge]').parent().css("opacity",0);

			$(".wpg-years-list li:eq(0) a").trigger("click");

			drawChart2('load');

        	drawChart6();
			$(".wpg-animate-9-1").animate({opacity: 1},600);
			$(".module-stick-with-it-1 .wpg-tooltip-x").addClass("wpg-tooltip-x-active");
			$(".wpg-invested-list li:eq(0) a").trigger("click");

		},100);
		/* end animet svg */


		var graphicsForMobile=function(){
			if(!($(window).width()>768))
			{
				$('[data-edge]').hide();
				$('.wpg-static-image').show();

				/* clear animation */

				$(".module-home").find("h2").css("left",0);
				$(".module-home").find("p").css("right",0);
				$(".module-life-expectancy .wpg-number-size").css({top:0,opacity:1});
				$(".module-introduction p").css({opacity:1});
				$(".three-box-birds-image li").css({top: 0});
				$(".while-box").css({opacity:1});
	     		$(".wpg-animate-9-1").css({opacity: 1});
	     		$(".module-stick-with-it-1 .wpg-tooltip-x").addClass("wpg-tooltip-x-active");
	     		$(".while-box2").css({opacity:1});
	        	$('[data-edge]').css({opacity:1});
				/* end clear animation */
			}
			else
			{
				$('[data-edge]').show();
				$('.wpg-static-image').hide();
			}
		};
		graphicsForMobile();
		$(window).resize(function(){
			graphicsForMobile();
		});


        $('.section > .slide').unwrap().removeClass('slide').addClass('section');
        $( '#fullpage' ).fullpage( {
            anchors: [
                'home',
                'introduction',
                'life-expectancy',
                'dependents',
                'objectives',
                'inflation',
                'inflation-1',
                'inflation-2',
                'guiding-principles',
                'start-early',
                'start-early-1',
                'start-early-2',
                'diversify',
                'diversify-1',
                'stick-with-it',
                'stick-with-it-1',
                'stick-with-it-2',
                'next-steps'
            ],
            controlArrows: false,
            navigation: false,
            loopHorizontal: false,
            scrollingSpeed: 800,
            fitToSectionDelay: 0,
            paddingTop: '73px',
            fitToSection: true,
            scrollOverflow: true,
            afterRender: function() {
                $('.section' ).css('visibility', 'visible');
            },
            onLeave: function( index, nextIndex, direction ) {

				if($(window).width()>768)
				{
	                var anchor = getAnchorByIndex( index );
	                var nextAnchor = getAnchorByIndex( nextIndex );
	                var abs = Math.abs( index - nextIndex );


					/* ready class to animation */

					$(".module-home").find("h2").css("left",-2000);
					$(".module-home").find("p").css("right",-2000);
					$(".module-life-expectancy .wpg-number-size").css({top:-1000,opacity:0});
					$(".module-introduction p").css({opacity:0});
					$(".three-box-birds-image li").css({top: 2000});
					$(".while-box").css({opacity:0});
					drawChart2('unload');
             		$(".wpg-animate-9-1").animate({opacity: 0},600);
             		$(".module-stick-with-it-1 .wpg-tooltip-x").removeClass("wpg-tooltip-x-active");
             		$(".while-box2").animate({opacity:0},600);
	            	for(var i=0, iLength=$('[data-edge]').length; i<iLength; i++)
	            	{
	            		if($('[data-edge]').eq(i).find("> div").length>0)
						{
	            			$('[data-edge]').eq(i).parent().animate({opacity:0},600);
	            		}
	            	}
					/* end ready to animation */

	        		setTimeout(function(){
		        		if($('.active [data-edge]').length>0)
		        		{
		        			var nameClassEdge=$('.active [data-edge]').attr("class");
		        		}

	        			var nameClassEdge=$('.active [data-edge]').attr("class");

		        		if($(".active").hasClass("module-home"))
		        		{

							$(".module-home").find("h2").animate({"left":0},600);
							$(".module-home").find("p").animate({"right":0},600);
							setTimeout(function(){ $(".wpg-animate-home > img").trigger("click"); },1000);

		        		}
		        		else if($(".active").hasClass("module-introduction"))
		        		{

							$(".module-introduction.active p").eq(0).animate({opacity:1},600, function(){
								$(".module-introduction.active p").eq(1).animate({opacity:1},600, function(){
									$(".module-introduction.active p").eq(2).animate({opacity:1},600, function(){
										$(".module-introduction.active p").eq(3).animate({opacity:1},600, function(){
											$(".wpg-introduction-animation").trigger("click");
										});
									});
								});
							});

		        		}
		        		else if($(".active").hasClass("module-life-expectancy"))
		        		{
							$(".module-life-expectancy.active .wpg-number-size-animate-2").animate({top:0,opacity:1},400,function(){
								$(".module-life-expectancy.active .wpg-number-size-animate-3").animate({top:0,opacity:1},400,function(){
									$(".module-life-expectancy.active .wpg-number-size-animate-4").animate({top:0,opacity:1},400,function(){
										setTimeout(function(){
											if(!($('.active [data-edge] > div').length>0)) {

												AdobeEdge.loadComposition(tempURL+'/js/svg/animation-svg-part-2', 'EDGE-32763721', {
													scaleToFit: "both",
													centerStage: "none",
													minW: "0px",
													maxW: "160px",
													bScaleToParent: true,
													width: "160px",
													height: "215px"
												}, {"dom":{}}, {"dom":{}});
												$('.active [data-edge]').parent().animate({opacity:1},600);
											}
											else
											{
												AdobeEdge.getComposition(nameClassEdge).getStage().play();
												$('.active [data-edge]').parent().animate({opacity:1},600);
											}
										},400);
									});
								});
							});
		        		}
		        		else if($(".active").hasClass("module-dependents"))
		        		{


							if(!($(".EDGE-195609396 > div").length>0))
							{
								AdobeEdge.loadComposition(tempURL+'/js/svg/animation-svg-part-3a', 'EDGE-195609396', {
								    scaleToFit: "none",
								    centerStage: "none",
								    minW: "0px",
								    maxW: "undefined",
								    width: "310px",
								    height: "300px"
								}, {"dom":{}}, {"dom":{}});
									AdobeEdge.loadComposition(tempURL+'/js/svg/animation-svg-part-3b', 'EDGE-195609397', {
								    scaleToFit: "none",
								    centerStage: "none",
								    minW: "0px",
								    maxW: "undefined",
								    width: "320px",
								    height: "350px"
								}, {"dom":{}}, {"dom":{}});
									AdobeEdge.loadComposition(tempURL+'/js/svg/animation-svg-part-3c', 'EDGE-195609399', {
								    scaleToFit: "none",
								    centerStage: "none",
								    minW: "0px",
								    maxW: "undefined",
								    width: "320px",
								    height: "320px"
								}, {"dom":{}}, {"dom":{}});
							}
							setTimeout(function(){
								$('.active [data-edge]').parent().animate({opacity:1},600);
								$(".module-dependents.active .three-box-birds-image li").eq(0).animate({top: 0},600,function(){

									//jQuery(".EDGE-195609396 *").trigger("click");
									AdobeEdge.getComposition('EDGE-195609396').getStage().play();

									$(".module-dependents.active .three-box-birds-image li").eq(1).animate({top: 0},600,function(){

										//jQuery(".EDGE-195609397 *").trigger("click");
										AdobeEdge.getComposition('EDGE-195609397').getStage().play();

										$(".module-dependents.active .three-box-birds-image li").eq(2).animate({top: 0},600,function(){

											//jQuery(".EDGE-195609399 *").trigger("click");
											AdobeEdge.getComposition('EDGE-195609399').getStage().play();
											var timery3=function(){
												setTimeout(function(){
													//jQuery(".EDGE-195609396 > div").eq(1).trigger("click");
													AdobeEdge.getComposition('EDGE-195609396').getStage().play();
													setTimeout(function(){
														setTimeout(function(){
															//jQuery(".EDGE-195609399 > div").eq(1).trigger("click");
															AdobeEdge.getComposition('EDGE-195609399').getStage().play();
															timery3();
														},2000);
													},0);
												},4600);
											};
											timery3();

										});

									});

								});
							},600);

		        		}
		        		else if($(".active").hasClass("module-objectives"))
		        		{

							if(!($(".EDGE-89648597 > div").length>0))
							{
								AdobeEdge.loadComposition(tempURL+'/js/svg/animation-svg-part-4', 'EDGE-89648597', {
									scaleToFit: "both",
									centerStage: "none",
									minW: "0px",
									maxW: "500px",
									bScaleToParent: true,
									width: "490px",
									height: "360px"
								}, {"dom":{}}, {"dom":{}});
							}
							else
							{
								$('.active [data-edge]').parent().animate({opacity:1},600);
								AdobeEdge.getComposition('EDGE-89648597').getStage().play();
							}
		        		}
		        		else if($(".active").hasClass("module-inflation"))
		        		{
							if(!($(".EDGE-90983411 > div").length>0))
							{
								AdobeEdge.loadComposition(tempURL+'/js/svg/animation-svg-part-5', 'EDGE-90983411', {
									scaleToFit: "both",
									centerStage: "none",
									minW: "0px",
									maxW: "500px",
									bScaleToParent: true,
								    width: "670px",
								    height: "659px"
								}, {"dom":{}}, {"dom":{}});
							}
							else
							{
								$('.active [data-edge]').parent().animate({opacity:1},600);
								AdobeEdge.getComposition('EDGE-90983411').getStage().play();
							}

		        		}
		        		else if($(".active").hasClass("module-inflation-1"))
		        		{

							$(".wpg-years-list li:eq(0) a").trigger("click");
							$(".while-box").animate({opacity:1},600);

		        		}
		        		else if($(".active").hasClass("module-inflation-2"))
		        		{
		  					drawChart2('load');
		        		}
		        		else if($(".active").hasClass("module-start-early"))
		        		{
							if(!($(".EDGE-332580393 > div").length>0))
							{
								AdobeEdge.loadComposition(tempURL+'/js/svg/animation-svg-part-7', 'EDGE-332580393', {
									scaleToFit: "both",
									centerStage: "none",
									minW: "0px",
									maxW: "500px",
									bScaleToParent: true,
									width: "550px",
									height: "445px"
								}, {"dom":{}}, {"dom":{}});
							}
							else
							{
								$('.active [data-edge]').parent().animate({opacity:1},600);
								AdobeEdge.getComposition('EDGE-332580393').getStage().play();
							}
		        		}
		        		else if($(".active").hasClass("module-start-early-1"))
		        		{
		                	if(!($(".EDGE-6150757 > div").length>0))
		                	{
								AdobeEdge.loadComposition(tempURL+'/js/svg/animation-svg-part-7a', 'EDGE-6150757', {
									scaleToFit: "both",
									centerStage: "none",
									minW: "0px",
									maxW: "985px",
									bScaleToParent: true,
									width: "985px",
									height: "500px"
								}, {"dom":{}}, {"dom":{}});
							}
							else
							{
								$('.active [data-edge]').parent().animate({opacity:1},600);
								AdobeEdge.getComposition('EDGE-6150757').getStage().play();
							}
		        		}
		        		else if($(".active").hasClass("module-diversify"))
		        		{
							if(!($(".EDGE-103812348 > div").length>0))
							{
								AdobeEdge.loadComposition(tempURL+'/js/svg/animation-svg-part-8', 'EDGE-103812348', {
									scaleToFit: "both",
									centerStage: "none",
									minW: "0px",
									maxW: "350px",
									bScaleToParent: true,
								    width: "400px",
								    height: "435px"
								}, {"dom":{}}, {"dom":{}});
							}
							else
							{
								$('.active [data-edge]').parent().animate({opacity:1},600);
								AdobeEdge.getComposition('EDGE-103812348').getStage().play();
							}
		        		}
		        		else if($(".active").hasClass("module-stick-with-it"))
		        		{
							if(!($(".EDGE-3813953 > div").length>0))
							{
								AdobeEdge.loadComposition(tempURL+'/js/svg/animation-svg-part-9', 'EDGE-3813953', {
									scaleToFit: "both",
									centerStage: "none",
									minW: "0px",
									maxW: "935px",
									bScaleToParent: true,
									width: "935px",
									height: "280px"
								}, {"dom":{}}, {"dom":{}});
							}
							else
							{
								$('.active [data-edge]').parent().animate({opacity:1},600);
								AdobeEdge.getComposition('EDGE-3813953').getStage().play();
							}
		        		}
		        		else if($(".active").hasClass("module-stick-with-it-1"))
		        		{
		                 	drawChart6();
							$(".wpg-animate-9-1").animate({opacity: 1},600);
							$(".module-stick-with-it-1 .wpg-tooltip-x").addClass("wpg-tooltip-x-active");
		        		}
		        		else if($(".active").hasClass("module-stick-with-it-2"))
		        		{
							$(".wpg-invested-list li:eq(0) a").trigger("click");
							$(".while-box2").animate({opacity:1},600);
		        		}
		        	},1000);


	            	//alert(nextAnchor);
					//$(".active .EDGE-animate").parent().animate({opacity,1},600);
				}


            }

        } );




    } else {

		/* ready class to animation */
		$moduleHome = $(".module-home");
		if(window.location.hash == "#home")
		{
			$moduleHome.find("h2").css("left",-2000);
			$moduleHome.find("p").css("right",-2000);
		}
		$(".module-life-expectancy .wpg-number-size").css({top:-1000,opacity:0});
		$(".module-introduction p").css({opacity:0});
		$(".three-box-birds-image li").css({top: 2000});
		setTimeout(function(){ $(".wpg-animate-home > img").trigger("click"); },1000);
		/* end ready to animation */

        $( '#fullpage' ).fullpage( {
            anchors: anchors,
            controlArrows: false,
            navigation: true,
            paddingTop: '73px',
            navigationPosition: 'right',
            loopHorizontal: false,
            scrollingSpeed: 800,
            fitToSectionDelay: 0,
            //normalScrollElements: '.wpg-sub-footer',
            //scrollOverflow:true,
            afterRender: function() {
                $('.section' ).css('visibility', 'visible');
                //$( window ).on( 'hashchange', setNavFromLoactionHash );
				$moduleHome.find("h2").animate({"left":0},600);
				$moduleHome.find("p").animate({"right":0},600);
            },
            onSlideLeave: function( anchorLink, index, slideIndex, direction, nextSlideIndex ) {
            	// before slide
            },
            afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex ) {

                setNavByHash( anchorLink + ((slideIndex > 0) ? '/' + slideIndex : '') );
                var anchor = getAnchorByIndex( index );
                if( sliders[ anchor ] ) {
                    sliders[ anchor ].first = (slideIndex === 0);
                    sliders[ anchor ].last = (slideIndex === sliders[ anchor ].count );
                }

                if((anchorLink + "/" + slideAnchor) == 'inflation/0')
                {
					if($(".active .EDGE-90983411 > div").length>0)
					{
						$(".EDGE-90983411").parent().fadeIn();
						AdobeEdge.getComposition('EDGE-90983411').getStage().play();
					}
                }
                else
                {
 					if($(".active .EDGE-90983411 > div").length>0)
					{
						$(".EDGE-90983411").parent().fadeOut();
					}
                }

                if((anchorLink + "/" + slideAnchor) == 'inflation/1')
                {
					$(".wpg-years-list li:eq(0) a").trigger("click");
					$(".while-box").animate({opacity:1},600);
                }
                else
                {
                	$(".while-box").animate({opacity:0},600);
                }

                if((anchorLink + "/" + slideAnchor) == 'inflation/2')
                {

					drawChart2('load');
                }
                else
                {
                	drawChart2('unload');
                }

                if((anchorLink + "/" + slideAnchor) == 'start-early/0')
                {
                	if($(".EDGE-332580393 > div").length>0)
					{
						$(".EDGE-332580393").parent().fadeIn();
                		AdobeEdge.getComposition('EDGE-332580393').getStage().play();
                	}
                }
                else
                {
 					if($(".active .EDGE-332580393 > div").length>0)
					{
						$(".EDGE-332580393").parent().fadeOut();
					}
                }

                if((anchorLink + "/" + slideAnchor) == 'start-early/1')
                {

                	if(!($(".EDGE-6150757 > div").length>0))
                	{
						AdobeEdge.loadComposition(tempURL+'/js/svg/animation-svg-part-7a', 'EDGE-6150757', {
							scaleToFit: "both",
							centerStage: "none",
							minW: "0px",
							maxW: "985px",
							bScaleToParent: true,
							width: "985px",
							height: "500px"
						}, {"dom":{}}, {"dom":{}});



					}
					else
					{
						AdobeEdge.getComposition('EDGE-6150757').getStage().play();
						$(".EDGE-6150757").parent().animate({opacity:1},400);
					}
                }
                else
                {
                	if($(".EDGE-6150757 > div").length>0) $(".EDGE-6150757").parent().animate({opacity:0},400);
                }


                if((anchorLink + "/" + slideAnchor) == 'diversify/0')
                {
                	if($(".EDGE-103812348 > div").length>0)
					{
						$(".EDGE-103812348").parent().fadeIn();
                		AdobeEdge.getComposition('EDGE-103812348').getStage().play();
                	}
                }
                else
                {
 					if($(".active .EDGE-103812348 > div").length>0)
					{
						$(".EDGE-103812348").parent().fadeOut();
					}
                }

                if((anchorLink + "/" + slideAnchor) == 'stick-with-it/0')
                {
                	if($(".EDGE-3813953 > div").length>0)
					{
						$(".EDGE-3813953").parent().fadeIn();
                		AdobeEdge.getComposition('EDGE-3813953').getStage().play();
                	}
                }
                else
                {
 					if($(".active .EDGE-3813953 > div").length>0)
					{
						$(".EDGE-3813953").parent().fadeOut();
					}
                }


                if((anchorLink + "/" + slideAnchor) == 'stick-with-it/1')
                {
                	drawChart6();
					$(".wpg-animate-9-1").animate({opacity: 1},600);
					$(".module-stick-with-it-1 .wpg-tooltip-x").addClass("wpg-tooltip-x-active");
                }
                else
                {
             		$(".wpg-animate-9-1").animate({opacity: 0},600);
             		$(".module-stick-with-it-1 .wpg-tooltip-x").removeClass("wpg-tooltip-x-active");
                }

                if((anchorLink + "/" + slideAnchor) == 'stick-with-it/2')
                {
					$(".wpg-invested-list li:eq(0) a").trigger("click");
					$(".while-box2").animate({opacity:1},600);
                }
                else
                {
					$(".while-box2").animate({opacity:0},600);
                }



            },
            onLeave: function( index, nextIndex, direction ) {

                var anchor = getAnchorByIndex( index );
                var nextAnchor = getAnchorByIndex( nextIndex );
                var abs = Math.abs( index - nextIndex );

                if( sliders[ anchor ] && abs === 1 ) {
					setNavFromLoactionHash();
                    if( direction === 'up' ) {
                        if( !sliders[ anchor ].first ) {
                            $.fn.fullpage.moveSlideLeft();
                            return false;
                        }
                    } else if( direction === 'down' ) {
                        if( !sliders[ anchor ].last ) {
                            $.fn.fullpage.moveSlideRight();
                            return false;
                        }
                    }
                }

				setNavByHash( nextAnchor );

                if( sliders[ nextAnchor ] ) {
                    if( direction === 'up' ) {
                        $.fn.fullpage.setScrollingSpeed( 0 );
                        $.fn.fullpage.scrollSlider( $( '#' + nextAnchor + '-section' ), sliders[ nextAnchor ].count );
                        $.fn.fullpage.setScrollingSpeed( 800 );
						setNavByHash( nextAnchor + '/' + sliders[ nextAnchor ].count );
                    } else if( direction === 'down' ) {
                        $.fn.fullpage.setScrollingSpeed( 0 );
                        $.fn.fullpage.scrollSlider( $( '#' + nextAnchor + '-section' ), 0 );
                        $.fn.fullpage.setScrollingSpeed( 800 );
						setNavByHash( nextAnchor );
                    }
                }

				if(nextAnchor == "home")
				{
					$(".wpg-disclaimer-box").fadeOut();
					setTimeout(function(){
						$moduleHome.find("h2").animate({"left":0},600);
						$moduleHome.find("p").animate({"right":0},600);
					},400);
					setTimeout(function(){ $(".wpg-animate-home > img").trigger("click"); },1000);

				}
				else
				{
					$(".wpg-disclaimer-box").fadeIn();
					$moduleHome.find("h2").animate({"left":-2000},600);
					$moduleHome.find("p").animate({"right":-2000},600);

				}

				if(nextAnchor == "introduction")
				{
					setTimeout(function() {
						var $miap = $(".module-introduction.active").find('p');
						$miap.eq(0).animate({opacity:1},600, function(){
							$miap.eq(1).animate({opacity:1},600, function(){
								$miap.eq(2).animate({opacity:1},600, function(){
									$miap.eq(3).animate({opacity:1},600, function(){
										$(".wpg-introduction-animation").trigger("click");
									});
								});
							});
						});
					},600);
				}
				else
				{
					$(".module-introduction p").animate({opacity:0},600);
				}

				if(nextAnchor == "life-expectancy")
				{


					setTimeout(function(){
						$(".module-life-expectancy.active .wpg-number-size-animate-2").animate({top:0,opacity:1},400,function(){
							$(".module-life-expectancy.active .wpg-number-size-animate-3").animate({top:0,opacity:1},400,function(){
								$(".module-life-expectancy.active .wpg-number-size-animate-4").animate({top:0,opacity:1},400,function(){
									setTimeout(function(){
										if(!($(".EDGE-32763721 > div").length>0))
										{
											AdobeEdge.loadComposition(tempURL+'/js/svg/animation-svg-part-2', 'EDGE-32763721', {
												scaleToFit: "both",
												centerStage: "none",
												minW: "0px",
												maxW: "160px",
												bScaleToParent: true,
												width: "160px",
												height: "215px"
											}, {"dom":{}}, {"dom":{}});
										}
										else
										{
											AdobeEdge.getComposition('EDGE-32763721').getStage().play();
										}
									},400);
								});
							});
						});
					},400);

				}
				else
				{
					$(".module-life-expectancy .wpg-number-size").animate({top:-1000,opacity:0},400);
				}

				if(nextAnchor == "dependents")
				{

					if(!($(".EDGE-195609396 > div").length>0))
					{
						AdobeEdge.loadComposition(tempURL+'/js/svg/animation-svg-part-3a', 'EDGE-195609396', {
						    scaleToFit: "none",
						    centerStage: "none",
						    minW: "0px",
						    maxW: "undefined",
						    width: "310px",
						    height: "300px"
						}, {"dom":{}}, {"dom":{}});
							AdobeEdge.loadComposition(tempURL+'/js/svg/animation-svg-part-3b', 'EDGE-195609397', {
						    scaleToFit: "none",
						    centerStage: "none",
						    minW: "0px",
						    maxW: "undefined",
						    width: "320px",
						    height: "350px"
						}, {"dom":{}}, {"dom":{}});
							AdobeEdge.loadComposition(tempURL+'/js/svg/animation-svg-part-3c', 'EDGE-195609399', {
						    scaleToFit: "none",
						    centerStage: "none",
						    minW: "0px",
						    maxW: "undefined",
						    width: "320px",
						    height: "320px"
						}, {"dom":{}}, {"dom":{}});
					}
					setTimeout(function(){
						$(".module-dependents.active .three-box-birds-image li").eq(0).animate({top: 0},600,function(){

							//jQuery(".EDGE-195609396 *").trigger("click");
							AdobeEdge.getComposition('EDGE-195609396').getStage().play();

							$(".module-dependents.active .three-box-birds-image li").eq(1).animate({top: 0},600,function(){

								//jQuery(".EDGE-195609397 *").trigger("click");
								AdobeEdge.getComposition('EDGE-195609397').getStage().play();

								$(".module-dependents.active .three-box-birds-image li").eq(2).animate({top: 0},600,function(){

									//jQuery(".EDGE-195609399 *").trigger("click");
									AdobeEdge.getComposition('EDGE-195609399').getStage().play();
									var timery3=function(){
										setTimeout(function(){
											//jQuery(".EDGE-195609396 > div").eq(1).trigger("click");
											AdobeEdge.getComposition('EDGE-195609396').getStage().play();
											setTimeout(function(){
												setTimeout(function(){
													//jQuery(".EDGE-195609399 > div").eq(1).trigger("click");
													AdobeEdge.getComposition('EDGE-195609399').getStage().play();
													timery3();
												},2000);
											},0);
										},4600);
									};
									timery3();

								});

							});

						});
					},600);

				}
				else
				{
					$(".three-box-birds-image li").animate({top: 2000},600);
				}


				if(nextAnchor == "objectives")
				{
					if(!($(".EDGE-89648597 > div").length>0))
					{
						AdobeEdge.loadComposition(tempURL+'/js/svg/animation-svg-part-4', 'EDGE-89648597', {
							scaleToFit: "both",
							centerStage: "none",
							minW: "0px",
							maxW: "500px",
							bScaleToParent: true,
							width: "490px",
							height: "360px"
						}, {"dom":{}}, {"dom":{}});
					}
					else
					{
						AdobeEdge.getComposition('EDGE-89648597').getStage().play();
					}
				}

				if(nextAnchor == "inflation")
				{

					if(!($(".EDGE-90983411 > div").length>0))
					{
						AdobeEdge.loadComposition(tempURL+'/js/svg/animation-svg-part-5', 'EDGE-90983411', {
							scaleToFit: "both",
							centerStage: "none",
							minW: "0px",
							maxW: "500px",
							bScaleToParent: true,
						    width: "670px",
						    height: "659px"
						}, {"dom":{}}, {"dom":{}});
						$(".EDGE-90983411").parent().fadeIn();
					}
					else
					{
						AdobeEdge.getComposition('EDGE-90983411').getStage().play();
						$(".EDGE-90983411").parent().fadeIn();
					}


					if($(".module-inflation-2.active").length>0)
					{
						drawChart2('load');
					}
				}
				else
				{

					if($(".active .EDGE-90983411 > div").length>0)
					{
						$(".EDGE-90983411").parent().fadeOut();
					}
					drawChart2('unload');
				}


				if(nextAnchor == "start-early")
				{

					if(!($(".EDGE-332580393 > div").length>0))
					{
						// start-early
						AdobeEdge.loadComposition(tempURL+'/js/svg/animation-svg-part-7', 'EDGE-332580393', {
							scaleToFit: "both",
							centerStage: "none",
							minW: "0px",
							maxW: "500px",
							bScaleToParent: true,
							width: "550px",
							height: "445px"
						}, {"dom":{}}, {"dom":{}});
						$(".EDGE-332580393").parent().fadeIn();
					}
					else
					{
						AdobeEdge.getComposition('EDGE-332580393').getStage().play();
						$(".EDGE-332580393").parent().fadeIn();
					}
				}
				else
				{
					if($(".active .EDGE-332580393 > div").length>0)
					{
						$(".EDGE-332580393").parent().fadeOut();
					}
				}


				if(nextAnchor == "diversify")
				{

					if(!($(".EDGE-103812348 > div").length>0))
					{
						AdobeEdge.loadComposition(tempURL+'/js/svg/animation-svg-part-8', 'EDGE-103812348', {
							scaleToFit: "both",
							centerStage: "none",
							minW: "0px",
							maxW: "350px",
							bScaleToParent: true,
						    width: "400px",
						    height: "435px"
						}, {"dom":{}}, {"dom":{}});

						$(".EDGE-103812348").parent().fadeIn();
					}
					else
					{
						AdobeEdge.getComposition('EDGE-103812348').getStage().play();
						$(".EDGE-103812348").parent().fadeIn();
					}
				}
				else
				{
					if($(".active .EDGE-103812348 > div").length>0)
					{
						$(".EDGE-103812348").parent().fadeOut();
					}
				}


				if(nextAnchor == "stick-with-it")
				{

					if(!($(".EDGE-3813953 > div").length>0))
					{
						AdobeEdge.loadComposition(tempURL+'/js/svg/animation-svg-part-9', 'EDGE-3813953', {
							scaleToFit: "both",
							centerStage: "none",
							minW: "0px",
							maxW: "935px",
							bScaleToParent: true,
							width: "935px",
							height: "280px"
						}, {"dom":{}}, {"dom":{}});

						$(".EDGE-3813953").parent().fadeIn();
					}
					else
					{
						AdobeEdge.getComposition('EDGE-3813953').getStage().play();
						$(".EDGE-3813953").parent().fadeIn();
					}
					setTimeout(function(){
						$(".active .wpg-invested-list li:eq(0) a").trigger("click");
						$(".active .while-box2").animate({opacity:1},600);
					},600);
				}
				else
				{
					if($(".active .EDGE-3813953 > div").length>0)
					{
						$(".EDGE-3813953").parent().fadeOut();
					}
					$(".while-box2").animate({opacity:0},600);
				}




            }
        } );
    }

	/* my animate bird */
	$(".wpg-introduction-animation").click(function(){
		$(this).css({"transform": "scaleX(-1)"});
		$(this).animate({top: -40},200,function(){
			$(this).animate({top: 0},200,function(){
				$(this).animate({top: -40},200,function(){
					$(this).animate({top: 0},200,function(){
						setTimeout(function(){
							$(".wpg-introduction-animation").css({"transform": "scaleX(1)"});
						},100);
					});
				});
			});
		});
	});
	/* end my animate bird */



	/* .module-inflation-1 */
	var drawChart1b=function(vProcent){
		jQuery( "#donut1" ).html("");
		jQuery( "#donut1" ).doughnutit({
			dnData: [
				{value:vProcent,color:"#e10713"},
				{value:100-vProcent,color:"#BFB800"}
			],
		    dnSize: 384,
		    dnInnerCutout: 78,
		    dnAnimation: true,
			dnAnimationSteps: 100,
			dnAnimationEasing: 'linear',
			dnStroke: false,

			dnShowText: true,
			dnFontSize: '12px',
			dnFontOffset: 60,
			dnFontColor: "#000000",
			dnText: '',

			dnStartAngle: -90,
			dnCounterClockwise: false
		});// End Doughnut
		jQuery(".while-box-inset h5").html(vProcent.toFixed(1).replace(".",",") + "%");
	};

	jQuery(".wpg-years-list a").click(function(e){
		e.preventDefault();
		jQuery(".ct-chart-1").html("");
		jQuery(".wpg-years-list a").removeClass("wpg-years-list-active");
		jQuery(this).addClass("wpg-years-list-active");
		//drawChart1(jQuery(this).data("procent"));
		drawChart1b(jQuery(this).data("procent"));

	});
	/* end .module-inflation-1 */

	/* .module-inflation-2 */
	var drawChart2=function(z){
		if(z=='load')
		{
			setTimeout(function()
			{
				var oneProcent=31.81,
					mainblockCahrt=jQuery(".ct-chart-2"),
					heightChart=mainblockCahrt.height(),
					maxValueChart=Math.floor(heightChart/oneProcent);

				for(var i=0, item=jQuery(".ct-chart-2-slup"), iLength=item.length; i<iLength; i++)
				{
					var procentToPixel=parseInt((item.eq(i).data("procent")*heightChart)/maxValueChart);
					item.eq(i).css("height",procentToPixel);
					item.eq(i).append("<span>" + item.eq(i).data("label") + "</span>");
				}
				if(!(jQuery(".ct-chart-2-load-complete").length>0))
				{
					for(i=0;i<=maxValueChart;i++)
					{
						mainblockCahrt.find("> div").append('<span style="bottom: ' + ((i*oneProcent)) + 'px; ' + ((i==maxValueChart)?'left: -36px;':'') + '">' + i + ((i==maxValueChart)?'%':'') + '</span>');
					}

					// legend
					for(var i=0, iLength=jQuery(".ct-chart-2-slup").length; i<iLength; i++)
					{
						jQuery(".wpg-ct-chart-2-legend li").eq(i).find("span").css("background-color",jQuery(".ct-chart-2-slup").eq(i).find("> div").css("background-color"));
					}

					jQuery(".ct-chart-2-slup > div").hover(
						function() {
							//alert(jQuery(".ct-chart-2-slup > div").index(jQuery(this)));
							jQuery(".wpg-ct-chart-2-legend li").eq(jQuery(".ct-chart-2-slup > div").index(jQuery(this))).css("opacity",1);
						}, function() {
							jQuery(".wpg-ct-chart-2-legend li").eq(jQuery(".ct-chart-2-slup > div").index(jQuery(this))).css("opacity",.5);
						}
					);
					jQuery(".ct-chart-2").addClass("ct-chart-2-load-complete");
				}
				var procentInflationToPx=parseInt((jQuery(".wpg-line-inflation").data("inflation-procent")*heightChart)/maxValueChart);
				jQuery(".wpg-inflation").animate({"height":procentInflationToPx},1200);
				jQuery(".wpg-line-inflation").animate({"top":heightChart-procentInflationToPx},1200);
			},300);
			positionLegendChart2();
		}
		else if(z=='unload')
		{
			jQuery(".ct-chart-2-slup").animate({"height":0},200);
			jQuery(".wpg-inflation").animate({"height":0},200);
			jQuery(".wpg-line-inflation").animate({"top":0},200);
		}
	}

	jQuery( ".ct-chart-2-slup" ).on( "mousemove", function( e ) {
		//console.log(jQuery(this).offset().left + ' - ' + jQuery(this).offset().top);
		if( jQuery(this).data('tooltip')) {
			var prc=jQuery(this).data("tooltip");
		} else {
			var prc=String( jQuery(this).data("procent") ).replace(".",",") + "%";
		}
		jQuery(this).find(".wpg-tooltip-fixed").css({display: "block", top: e.pageY-jQuery(this).offset().top, left: e.pageX-jQuery(this).offset().left }).text( prc );

	});
	jQuery( ".ct-chart-2-slup" ).on( "mouseleave", function( event ) {
		jQuery(".wpg-tooltip-fixed").hide();
	});
	/* end .module-inflation-2 */


	var AlabelsArray=[],
		AdataEquities =[],
		AdataBonds=[],
		AdataCash=[],
		AdataHistory=[];

	function prepareDataForChart6() {
		var $chartData = jQuery(".ct-chart-6").data();

		var tmp = $chartData.wspY.split(",");
		for(var i=0; i<(tmp.length+2); i++) {
			AlabelsArray.push( tmp[i] );
		}

		tmp = $chartData.wspAe.split(",");
		for(var i=0; i<tmp.length; i++) {
			AdataEquities.push( tmp[i] );
		}

		tmp = $chartData.wspAb.split(",");
		for(var i=0; i<tmp.length; i++) {
			AdataBonds.push( tmp[i] );
		}

		tmp = $chartData.wspAc.split(",");
		for(var i=0; i<tmp.length; i++) {
			AdataCash.push( tmp[i] );
		}

		tmp = $chartData.wspHistory.split(",");
		for(var i=0; i<tmp.length; i++) {
			AdataHistory.push( tmp[i] );
		}
	}

	/* draw chart 6 */
	var onlyOneAnimateDrawChart5up=true;
	var drawChart6=function() {

		if( AlabelsArray.length === 0 ) prepareDataForChart6();

		var chart6 = new Chartist.Line('.ct-chart-6', {
			labels: AlabelsArray,
			// Naming the series with the series object array notation
			series: [{
				name: 'equities',
				className: 'equities',
				data: AdataEquities
			}, {
				name: 'bonds',
				className: 'bonds',
				data: AdataBonds
			}, {
				name: 'cash',
				className: 'cash',
				data: AdataCash
			}, {
				name: 'history',
				className: 'history',
				data: AdataHistory
			}]
		}, {

			axisY: {
				showGrid: false,
				showLabel: true,
				type: Chartist.AutoScaleAxis,
				//type: Chartist.FixedScaleAxis,
				onlyInteger: false,
				scale: 'log10',
				ticks: [1, 10, 100, 1000],
				low: 1
			},
			axisX: {
				showGrid: false,
				//showLabel: false
			},
			fullWidth: true,
			series: {
				'equities': {
					lineSmooth: Chartist.Interpolation.none(),
					showArea: false,
					showPoint: true
				},
				'bonds': {
					lineSmooth: Chartist.Interpolation.none(),
					showPoint: true
				},
				'cash': {
					lineSmooth: Chartist.Interpolation.none(),
					showPoint: true
				},
				'history': {
					lineSmooth: Chartist.Interpolation.none(),
					showPoint: true
				}
			}
		});


		var seq = 0;
		chart6.on('created', function() {
			seq = 0;
		});

		var customLabels = jQuery('.ct-chart-6').data('wsp-custom').split(',');
		var customLabels1 = [];
		customLabels1[100] = customLabels[0];

		var customLabels2 = [];
		customLabels2[100] = customLabels[1];

		var customLabels4 = [];
		customLabels4[100] = customLabels[2];

		var history = jQuery('.ct-chart-6').data('wsp-history-content').split(',');
		chart6.on('draw', function(data) {
			if(data.type === 'point' && data.series.name == 'history' && (history.indexOf(data.index+1900+'')>-1)) {
				var circle = new Chartist.Svg('line', {
					x1: [data.x], y1:[data.y],x2: [data.x], y2:[data.y],'ct:value':['0.20'+(data.index+1900)],
				}, 'ct-point point-history');
				data.element.replace(circle);
			}
			osYpChart6();

			if(onlyOneAnimateDrawChart5up && (data.type === 'line' || data.type === 'area')) {
				var svg = d3.select("svg.ct-chart-line");
				var series = data.series.name;
				if(series!='history'){
					var paths = svg.selectAll("."+series+" path");
					var path_equities = "M50,365L55.983,357.48L61.966,355.762L67.948,356.186L73.931,355.762L79.914,351.707L85.897,344.456L91.879,344.456L97.862,347.952L103.845,338.114L109.828,331.423L115.81,329.88L121.793,329.88L127.776,329.88L133.759,335.218L139.741,335.218L145.724,329.88L151.707,329.88L157.69,338.114L163.672,343.453L169.655,350.171L175.638,365L181.621,351.707L187.603,341.186L193.586,333.557L199.569,325.051L205.552,316.586L211.534,309.336L217.517,294.76L223.5,283.453L229.483,290.978L235.466,309.336L241.448,325.051L247.431,314.674L253.414,294.76L259.397,292.288L265.379,284.477L271.362,276.815L277.345,283.453L283.328,283.453L289.31,282.252L295.293,283.453L301.276,279.554L307.259,278.624L313.241,275.933L319.224,270.16L325.207,266.405L331.19,283.453L337.172,287.678L343.155,285.522L349.138,278.44L355.121,266.405L361.103,257.228L367.086,250.666L373.069,242.727L379.052,227.789L385.034,221.448L391.017,218.552L397,221.448L402.983,201.664L408.966,194.667L414.948,192.669L420.931,184.859L426.914,189.399L432.897,183.431L438.879,179.376L444.862,175.621L450.845,178.093L456.828,169.922L462.81,166.787L468.793,167.976L474.776,172.125L480.759,166.787L486.741,159.267L492.724,166.787L498.707,184.859L504.69,178.093L510.672,172.125L516.655,172.125L522.638,166.787L528.621,164.839L534.603,157.549L540.586,161.958L546.569,159.267L552.552,152.72L558.534,153.493L564.517,137.005L570.5,114.05L576.483,111.123L582.466,106.294L588.448,101.111L594.431,107.853L600.414,106.294L606.397,107.853L612.379,104.781L618.362,100.497L624.345,94.074L630.328,87.309L636.31,81.341L642.293,76.003L648.276,62.746L654.259,71.56L660.241,80.98L666.224,92.096L672.207,77.318L678.19,71.114L684.172,67.794L690.155,59.411L696.138,57.338L702.121,83.482L708.103,71.259L714.086,66.067L720.069,70.268L726.052,63.409L732.034,51.931L738.017,49.564L744,50.063";

					var path_bonds = "M50,365L55.983,370.338L61.966,365L67.948,372.642L73.931,363.997L79.914,362.528L85.897,359.258L91.879,355.762L97.862,351.707L103.845,349.42L109.828,356.614L115.81,357.045L121.793,357.045L127.776,360.171L133.759,362.048L139.741,366.543L145.724,366.543L151.707,372.056L157.69,381.645L163.672,390.882L169.655,397.168L175.638,411.426L181.621,400.12L187.603,390.045L193.586,391.734L199.569,390.045L205.552,386.053L211.534,383.072L217.517,376.306L223.5,377.589L229.483,369.779L235.466,369.225L241.448,370.904L247.431,351.707L253.414,344.119L259.397,344.119L265.379,344.119L271.362,344.119L277.345,347.952L283.328,344.795L289.31,343.453L295.293,342.469L301.276,347.952L307.259,345.48L313.241,349.42L319.224,350.171L325.207,357.48L331.19,363.013L337.172,370.904L343.155,373.234L349.138,368.677L355.121,370.338L361.103,371.477L367.086,376.306L373.069,372.642L379.052,370.338L385.034,370.338L391.017,373.234L397,376.306L402.983,376.944L408.966,370.904L414.948,370.338L420.931,370.338L426.914,367.599L432.897,366.543L438.879,367.599L444.862,365.509L450.845,366.543L456.828,365L462.81,370.338L468.793,367.599L474.776,370.338L480.759,367.599L486.741,365L492.724,368.135L498.707,366.024L504.69,365.509L510.672,365L516.655,360.171L522.638,358.361L528.621,360.171L534.603,369.225L540.586,373.234L546.569,370.338L552.552,369.225L558.534,370.338L564.517,355.762L570.5,344.456L576.483,338.114L582.466,332.479L588.448,328.382L594.431,329.88L600.414,327.408L606.397,318.777L612.379,314.3L618.362,312.832L624.345,306.864L630.328,300.95L636.31,300.098L642.293,294.381L648.276,295.525L654.259,293.139L660.241,294.13L666.224,284.788L672.207,280.215L678.19,275.846L684.172,277.531L690.155,276.372L696.138,273.295L702.121,270.004L708.103,269.387L714.086,267.577L720.069,266.189L726.052,264.279L732.034,266.189L738.017,266.405L744,267.725";

					var path_cash = "M50,365L55.983,367.599L61.966,365L67.948,362.528L73.931,360.171L79.914,357.919L85.897,355.762L91.879,353.694L97.862,351.707L103.845,349.794L109.828,346.524L115.81,346.174L121.793,344.456L127.776,342.795L133.759,341.186L139.741,339.627L145.724,338.114L151.707,342.469L157.69,350.933L163.672,356.614L169.655,358.808L175.638,360.171L181.621,352.89L187.603,349.42L193.586,345.826L199.569,342.469L205.552,340.557L211.534,341.186L217.517,334.105L223.5,329.88L229.483,330.389L235.466,323.464L241.448,322.798L247.431,316.978L253.414,316.198L259.397,316.978L265.379,316.198L271.362,317.769L277.345,321.709L283.328,318.981L289.31,316.978L295.293,320.642L301.276,322.798L307.259,327.408L313.241,329.88L319.224,332.746L325.207,337.522L331.19,346.524L337.172,349.049L343.155,347.952L349.138,341.504L355.121,347.952L361.103,351.318L367.086,354.511L373.069,350.171L379.052,350.171L385.034,346.174L391.017,343.123L397,346.174L402.983,344.795L408.966,343.123L414.948,346.174L420.931,343.785L426.914,345.48L432.897,343.785L438.879,342.469L444.862,344.795L450.845,341.504L456.828,340.87L462.81,340.87L468.793,336.646L474.776,339.935L480.759,341.504L486.741,338.413L492.724,338.413L498.707,339.321L504.69,343.785L510.672,339.321L516.655,337.817L522.638,342.469L528.621,341.504L534.603,345.48L540.586,343.123L546.569,342.469L552.552,336.07L558.534,335.5L564.517,334.658L570.5,328.137L576.483,329.627L582.466,327.408L588.448,323.687L594.431,323.464L600.414,325.051L606.397,324.138L612.379,324.138L618.362,323.464L624.345,323.464L630.328,321.066L636.31,319.391L642.293,317.769L648.276,313.929L654.259,312.651L660.241,311.58L666.224,311.935L672.207,312.471L678.19,313.377L684.172,313.561L690.155,312.471L696.138,312.113L702.121,312.292L708.103,313.561L714.086,314.114L720.069,315.621L726.052,316.392L732.034,317.174L738.017,317.57L744,318.17";

					if(series=='equities')
						paths.transition()
							.duration(1500)
							.attr({
								d: path_equities
							});
					if(series=='bonds')
						paths.transition()
							.duration(1500)
							.attr({
								d: path_bonds
							});
					if(series=='cash')
						paths.transition()
							.duration(1500)
							.attr({
								d: path_cash
							});
				}

			}

			if(data.type === 'point') {
				if( data.series.name === 'equities' && customLabels4[data.index]) {
					data.group.elem('text', {
						x: data.x + 70,
						y: data.y - 435
					}, 'ct-labels ct-label-eabonds').text(customLabels4[data.index]);
				}
				if( data.series.name === 'bonds' && customLabels1[data.index]) {
					data.group.elem('text', {
						x: data.x + 70,
						y: data.y - 222
					}, 'ct-labels ct-label-bonds').text(customLabels1[data.index]);
				}
				if( data.series.name === 'cash' && customLabels2[data.index]) {
					data.group.elem('text', {
						x: data.x + 70,
						y: data.y - 175
					}, 'ct-labels ct-label-cash').text(customLabels2[data.index]);
				}
			}
		});
	}




	var punktwybranyChart6=function(){
		//jQuery('[x1="518.6666666666667"][y2="298.5466666666666"]').css({"stroke-width":"12px"});
		//jQuery('[x1="518.6666666666667"][y2="298.5466666666666"]').attr('ct:value');

		//jQuery('.module-box-impact [ct\\:value=7]').css({"stroke-width":"12px"});
	}
	var osYpChart6=function(){
		setTimeout(function(){
			punktwybranyChart6();
		},1000);
	}
	jQuery(window).resize(function(){
		osYpChart6();
	});
	jQuery(window).load(function(){
		osYpChart6();
	});

	/* sliders - suwaki */
	var wplaty=function(k,r,n){
		if(r == 0){
			return k / (12*n);
		}else{
			var rate = (Math.pow((1+(r/100)),(1/12))-1);
			//console.log(rate);
			//return (k*(r/100))/(12* ( Math.pow( (1+(r/100)),n)-1));
			return((k/((Math.pow((1+rate),(n*12)))-1))*rate);
		}
	};
	var retirement_amount=function(k,r,n){
		if(r === 0){
			return (k / (12*n));
		}else{
			var inflation = 0.02;
			var rate = (Math.pow((1+inflation),(1/12))-1);
			return (k/(Math.pow((1+rate),(n*12))));
		}
	};
	function addCommas(nStr) {
		nStr += '';
		var x = nStr.split('.');
		var x1 = x[0];
		var x2 = x.length > 1 ? ',' + x[1] : '';
		var rgx = /(\d+)(\d{3})/;
		while (rgx.test(x1)) {
			x1 = x1.replace(rgx, '$1' + '.' + '$2');
		}
		return x1 + x2;
	};
	function removeCommas(nStr){
		var str =nStr.replace(/\./g, '');
		var strc = str.replace(/,/g, '');
		return strc;
	};
	$( "#suwak1" ).slider({
		value: 250000,
		orientation: "horizontal",
		range: "min",
		animate: true,
		min: 50000,
		max: 1000000,
		step: 10000,
		slide: function( event, ui ) {
			$("#suwak1 .wpg-suwak-chmurka").fadeIn();
			$( "#suwak1 .wpg-suwak-chmurka span" ).html( ui.value );
			$("#suwak1 .wpg-suwak-chmurka > span").text(addCommas($("#suwak1 .wpg-suwak-chmurka > span").text()));
			$(".wpg-wynik").text(addCommas((Math.ceil(wplaty(parseInt(removeCommas($("#suwak1 .wpg-suwak-chmurka > span").text())),parseInt($("#suwak3 .wpg-suwak-chmurka > span").text()),parseInt($("#suwak2 .wpg-suwak-chmurka > span").text()))*100)/100).toFixed(2)) );
			$(".wpg-k").text($("#suwak1 .wpg-suwak-chmurka > span").text());
			$(".wpg-kr").text(addCommas((Math.ceil(retirement_amount(parseInt(removeCommas($("#suwak1 .wpg-suwak-chmurka > span").text())),parseInt($("#suwak3 .wpg-suwak-chmurka > span").text()),parseInt($("#suwak2 .wpg-suwak-chmurka > span").text()))*100)/100).toFixed(2)) );
			$("#suwak1 .wpg-chmurka-new").html($("#suwak1 .wpg-suwak-chmurka > span").text() + '\u20AC');
		},
		stop: function(event, ui){
			$("#suwak1 .wpg-suwak-chmurka").fadeOut(500);

		}
	});
	$( "#suwak2" ).slider({
		value: 20,
		orientation: "horizontal",
		range: "min",
		animate: true,
		min: 5,
		max: 50,
		slide: function( event, ui ) {
			$("#suwak2 .wpg-suwak-chmurka").fadeIn();
			$( "#suwak2 .wpg-suwak-chmurka span" ).html( ui.value );
			$(".wpg-wynik").text(addCommas(( Math.ceil(wplaty(parseInt(removeCommas($("#suwak1 .wpg-suwak-chmurka > span").text())),parseInt($("#suwak3 .wpg-suwak-chmurka > span").text()),parseInt($("#suwak2 .wpg-suwak-chmurka > span").text()))*100)/100).toFixed(2)) );
			$(".wpg-k").text($("#suwak1 .wpg-suwak-chmurka > span").text());
			$(".wpg-kr").text(addCommas((Math.ceil(retirement_amount(parseInt(removeCommas($("#suwak1 .wpg-suwak-chmurka > span").text())),parseInt($("#suwak3 .wpg-suwak-chmurka > span").text()),parseInt($("#suwak2 .wpg-suwak-chmurka > span").text()))*100)/100).toFixed(2)) );
			$("#suwak2 .wpg-chmurka-new").html($("#suwak2 .wpg-suwak-chmurka > span").text());
		},
		stop: function(event, ui){
			$("#suwak2 .wpg-suwak-chmurka").fadeOut(500);
		}
	});
	$( "#suwak3" ).slider({
		value: 5,
		orientation: "horizontal",
		range: "min",
		animate: true,
		min: 0,
		max: 10,
		slide: function( event, ui ) {
			$("#suwak3 .wpg-suwak-chmurka").fadeIn(0);
			$( "#suwak3 .wpg-suwak-chmurka span" ).html( ui.value );
			$(".wpg-wynik").text(addCommas(( Math.ceil(wplaty(parseInt(removeCommas($("#suwak1 .wpg-suwak-chmurka > span").text())),parseInt($("#suwak3 .wpg-suwak-chmurka > span").text()),parseInt($("#suwak2 .wpg-suwak-chmurka > span").text()))*100)/100).toFixed(2)) );
			$(".wpg-k").text($("#suwak1 .wpg-suwak-chmurka > span").text());
			$(".wpg-kr").text(addCommas((Math.ceil(retirement_amount(parseInt(removeCommas($("#suwak1 .wpg-suwak-chmurka > span").text())),parseInt($("#suwak3 .wpg-suwak-chmurka > span").text()),parseInt($("#suwak2 .wpg-suwak-chmurka > span").text()))*100)/100).toFixed(2)) );
			$("#suwak3 .wpg-chmurka-new").html($("#suwak3 .wpg-suwak-chmurka > span").text() + '%');
		},
		stop: function(event, ui){
			$("#suwak3 .wpg-suwak-chmurka").fadeOut(500);
		}
	});

	$("#suwak1 .ui-slider-handle").html('<div style="display: none;" class="wpg-suwak-chmurka"><span>' + $( "#suwak1" ).slider("value") + '</span></div>');
	$("#suwak1  .wpg-chmurka-new").html(addCommas($( "#suwak1" ).slider("value")) + '\u20AC');

	$("#suwak2 .ui-slider-handle").html('<div style="display: none;" class="wpg-suwak-chmurka"><span>' + $( "#suwak2" ).slider("value") + '</span></div>');
	$("#suwak2  .wpg-chmurka-new").html(addCommas($( "#suwak2" ).slider("value")));

	$("#suwak3 .ui-slider-handle").html('<div style="display: none;" class="wpg-suwak-chmurka"><span>' + $( "#suwak3" ).slider("value") + '</span></div>');
	$("#suwak3  .wpg-chmurka-new").html(addCommas($( "#suwak3" ).slider("value")) + '%');


    $( "#chart-6-slider" ).slider({
      range: false,
      min: 1,
      max: 117,
	  step:10,
      values: 1,
      slide: function( event, ui ) {
      }

    });
	/* end sliders - suwaki */

	/* .module-stick-with-it-2 */
	var drawChart5b=function(vEuro,vProcent,vBgcolor){
		jQuery( "#donut2" ).html("");
		jQuery( "#donut2" ).doughnutit({
			dnData: [
				{value:((vProcent>100)?100:vProcent),color:vBgcolor},
				{value:100-((vProcent>100)?100:vProcent),color:"#da291c"}
			],
		    dnSize: 384,
		    dnInnerCutout: 78,
		    dnAnimation: true,
			dnAnimationSteps: 100,
			dnAnimationEasing: 'linear',
			dnStroke: false,

			dnShowText: true,
			dnFontSize: '12px',
			dnFontOffset: 60,
			dnFontColor: "#000000",
			dnText: '',

			dnStartAngle: -90,
			dnCounterClockwise: false
		});// End Doughnut
		jQuery(".while-box-inset2 h5").html(vEuro + '\u20AC');
	};

	jQuery(".wpg-invested-list a").click(function(e){
		e.preventDefault();
		jQuery(".ct-chart-5").html("");
		jQuery(".wpg-invested-list a").removeClass("wpg-invested-list-active");
		jQuery(this).addClass("wpg-invested-list-active");
		//drawChart5(jQuery(this).data("euro"),jQuery(this).data("procent"),jQuery(this).find("> span").css("background-color"));
		drawChart5b(jQuery(this).data("euro"),jQuery(this).data("procent"),jQuery(this).find("> span").css("background-color"));

		jQuery(".while-box-inset2 .span-table h5").css("color","#BFB800");

		//alert(jQuery(".wpg-invested-list > li").index(jQuery(this).parent()));
		// if(jQuery(".wpg-invested-list > li").index(jQuery(this).parent())==0) jQuery(".while-box-inset2 .span-table h5").css("color","#BFB800");
		// else jQuery(".while-box-inset2 .span-table h5").css("color","#da291c");

	});
	/* end .module-stick-with-it-2 */









	/* .module-next-steps */
	var ci=0, flagaRound=true;

	var swiperightfun=function(){
		if(ci<3) ci++;
		else ci=1;

		jQuery(".wpg-three-animate-images li").removeClass("wpg-three-animate-images-active");
		if(ci==1)
		{
			jQuery(".wpg-id-1").css("left","33.3333%").addClass("wpg-three-animate-images-active");
			jQuery(".wpg-id-2").css("left","66.6666%");
			jQuery(".wpg-id-3").css("left","0");
		}
		if(ci==2)
		{
			jQuery(".wpg-id-3").css("left","33.3333%").addClass("wpg-three-animate-images-active");
			jQuery(".wpg-id-1").css("left","66.6666%");
			jQuery(".wpg-id-2").css("left","0");
		}
		if(ci==3)
		{
			jQuery(".wpg-id-2").css("left","33.3333%").addClass("wpg-three-animate-images-active");
			jQuery(".wpg-id-3").css("left","66.6666%");
			jQuery(".wpg-id-1").css("left","0");
		}
	};


	var swipeleftfun=function(){
		if(ci<3) ci++;
		else ci=1;

		jQuery(".wpg-three-animate-images li").removeClass("wpg-three-animate-images-active");
		if(ci==1)
		{

			jQuery(".wpg-id-1").css("left","66.6666%");
			jQuery(".wpg-id-3").css("left","33.3333%").addClass("wpg-three-animate-images-active");
			jQuery(".wpg-id-2").css("left","0");

		}
		if(ci==2)
		{
			jQuery(".wpg-id-1").css("left","33.3333%").addClass("wpg-three-animate-images-active");
			jQuery(".wpg-id-3").css("left","0");
			jQuery(".wpg-id-2").css("left","66.6666%");
		}
		if(ci==3)
		{
			jQuery(".wpg-id-1").css("left","0");
			jQuery(".wpg-id-3").css("left","66.6666%");
			jQuery(".wpg-id-2").css("left","33.3333%").addClass("wpg-three-animate-images-active");
		}
	};

	var falagTimeotRound=setTimeout(function(){
		flagaRound=true;
	},4000);
	var funTimeoutRound=function(){
		clearTimeout(falagTimeotRound);
		flagaRound=false;
		falagTimeotRound=setTimeout(function(){
			flagaRound=true;
		},4000);
	};
	jQuery(".wpg-three-animate-images li").click(function(){
		funTimeoutRound();
		swiperightfun();
	});


	jQuery(".wpg-three-animate-images").on("swiperight", function( event ){
		funTimeoutRound();
		swiperightfun();
	});


	jQuery(".wpg-three-animate-images").on("swipeleft", function( event ){
		funTimeoutRound();
		swipeleftfun();
	});

	var animateRoundBirds=function(){
		setTimeout(function(){
			if(flagaRound)
			{
				swiperightfun();
			}
			animateRoundBirds();
		},4000);
	};
	animateRoundBirds();
	/* end .module-next-steps */


	 $('.wpg-share').on('click',function(e){
	    $('ul.share-buttons').slideToggle('slow');
		e.preventDefault();
	 });


	$(".wpg-animate-home > img").click(function(){
		$(this).animate({top: -40},200,function(){
			$(this).animate({top: 0},200,function(){
				$(this).animate({top: -40},200,function(){
					$(this).animate({top: 0},200,function(){
					});
				});
			});
		});
	});
	/*
	var desktopSmallVersion=function(){
		if($(window).height()<768)
		{
			$("body").addClass("desktop-small-version");
		}
		else
		{
			$("body").removeClass("desktop-small-version");
		}
	};
	desktopSmallVersion();
	$(window).resize(desktopSmallVersion);
	*/
	var isIE = /(MSIE|Trident\/|Edge\/)/i.test(navigator.userAgent);
	//alert(isIE);
	if(isIE)
	{
		$("body").addClass("isie");
	}


	$(".wpg-read-more").click(function(e){
		e.preventDefault();
		$(this).slideToggle(400);
		$(".wpg-show-more").slideToggle(400);
	});
	$(".wpg-read-less").click(function(e){
		e.preventDefault();
		$(".wpg-show-more").slideToggle(400);
		$(".wpg-read-more").slideToggle(400);
	});

	jQuery(document).on("click","body", function(e) {
	      if (jQuery(e.target).is('.module-footer *')) {
	          return;
	      } else {
			  if($(".wpg-show-more").css("display")=="block")
			  {
				$(".wpg-show-more").slideToggle(400);
				$(".wpg-read-more").slideToggle(400);
			  }
	      }
	});


} );

jQuery(".wpg-disclaimer-box .container button").click(function(){
	jQuery(".wpg-disclaimer-box-inset-content").slideToggle();
});
jQuery(document).on("click","body", function(e) {
      if (jQuery(e.target).is('.wpg-disclaimer-box *')) {
          return; 
      } else {
      	if(jQuery(".wpg-disclaimer-box .container .wpg-disclaimer-box-inset-content").css("display")=='block')
      	{
     		jQuery(".wpg-disclaimer-box-inset-content").slideToggle();
     	}
      }    
});





/*
AdobeEdge.loadComposition(tempURL+'/js/svg/animation-svg-part-5', 'EDGE-90983411', {
	scaleToFit: "both",
	centerStage: "none",
	minW: "0px",
	maxW: "500px",
	bScaleToParent: true,
    width: "670px",
    height: "659px"
}, {"dom":{}}, {"dom":{}});


// objectives
AdobeEdge.loadComposition(tempURL+'/js/svg/animation-svg-part-4', 'EDGE-89648597', {
	scaleToFit: "both",
	centerStage: "none",
	minW: "0px",
	maxW: "500px",
	bScaleToParent: true,
	width: "490px",
	height: "360px"
}, {"dom":{}}, {"dom":{}});
*/



/*
// objectives
AdobeEdge.loadComposition(tempURL+'/js/svg/animation-svg-part-4', 'EDGE-89648597', {
	scaleToFit: "none",
	centerStage: "none",
	minW: "0px",
	maxW: "undefined",
	width: "490px",
	height: "360px"
}, {"dom":{}}, {"dom":{}});

// infaltion
AdobeEdge.loadComposition(tempURL+'/js/svg/animation-svg-part-5', 'EDGE-90983411', {
    scaleToFit: "none",
    centerStage: "none",
    minW: "0px",
    maxW: "undefined",
    width: "670px",
    height: "659px"
}, {"dom":{}}, {"dom":{}});

// life-expectancy
	AdobeEdge.loadComposition(tempURL+'/js/svg/animation-svg-part-2', 'EDGE-32763721', {
    scaleToFit: "none",
    centerStage: "none",
    minW: "0px",
    maxW: "undefined",
    width: "160px",
    height: "215px"
}, {"dom":{}}, {"dom":{}});

// start-early
AdobeEdge.loadComposition(tempURL+'/js/svg/animation-svg-part-7', 'EDGE-332580393', {
	scaleToFit: "none",
	centerStage: "none",
	minW: "0px",
	maxW: "undefined",
	width: "550px",
	height: "445px"
}, {"dom":{}}, {"dom":{}});

// diversify
AdobeEdge.loadComposition(tempURL+'/js/svg/animation-svg-part-8', 'EDGE-103812348', {
    scaleToFit: "none",
    centerStage: "none",
    minW: "0px",
    maxW: "undefined",
    width: "700px",
    height: "435px"
}, {"dom":{}}, {"dom":{}});

// stick-with-it
AdobeEdge.loadComposition(tempURL+'/js/svg/animation-svg-part-9', 'EDGE-3813953', {
	scaleToFit: "none",
	centerStage: "none",
	minW: "0px",
	maxW: "undefined",
	width: "935px",
	height: "280px"
}, {"dom":{}}, {"dom":{}});

// depends
AdobeEdge.loadComposition(tempURL+'/js/svg/animation-svg-part-3a', 'EDGE-195609396', {
    scaleToFit: "none",
    centerStage: "none",
    minW: "0px",
    maxW: "undefined",
    width: "310px",
    height: "300px"
}, {"dom":{}}, {"dom":{}});
	AdobeEdge.loadComposition(tempURL+'/js/svg/animation-svg-part-3b', 'EDGE-195609397', {
    scaleToFit: "none",
    centerStage: "none",
    minW: "0px",
    maxW: "undefined",
    width: "320px",
    height: "350px"
}, {"dom":{}}, {"dom":{}});
	AdobeEdge.loadComposition(tempURL+'/js/svg/animation-svg-part-3c', 'EDGE-195609399', {
    scaleToFit: "none",
    centerStage: "none",
    minW: "0px",
    maxW: "undefined",
    width: "320px",
    height: "320px"
}, {"dom":{}}, {"dom":{}});

// guiding-principles
AdobeEdge.loadComposition(tempURL+'/js/svg/animation-svg-part-6a', 'EDGE-1', {
	scaleToFit: "none",
	centerStage: "none",
	minW: "0px",
	maxW: "undefined",
	width: "130px",
	height: "125px"
}, {"dom":{}}, {"dom":{}});
AdobeEdge.loadComposition(tempURL+'/js/svg/animation-svg-part-6b', 'EDGE-2', {
	scaleToFit: "none",
	centerStage: "none",
	minW: "0px",
	maxW: "undefined",
	width: "130px",
	height: "125px"
}, {"dom":{}}, {"dom":{}});
AdobeEdge.loadComposition(tempURL+'/js/svg/animation-svg-part-6c', 'EDGE-3', {
	scaleToFit: "none",
	centerStage: "none",
	minW: "0px",
	maxW: "undefined",
	width: "130px",
	height: "125px"
}, {"dom":{}}, {"dom":{}});


AdobeEdge.loadComposition(tempURL+'/js/svg/animation-svg-part-7a', 'EDGE-6150757', {
	scaleToFit: "none",
	centerStage: "none",
	minW: "0px",
	maxW: "undefined",
	width: "985px",
	height: "400px"
}, {"dom":{}}, {"dom":{}});
*/




//alert(jQuery(window).width() + " x " + jQuery(window).height());
/*
jQuery(window).resize(function(){
	console.log(jQuery(window).width() + " x " + jQuery(window).height());
});
*/

<!-- Mobile Animation Plugin — More on tilda.live -->
if (window.innerWidth < 1200) {
	function t_animateSbs__init() {
		var t = {
			els: $("[data-animate-sbs-event]"),
			scrollTop: window.pageYOffset,
			stop: !1,
			needUpdate: !0
		};
		if (t.mode = void 0 !== $(t.els[0]).attr("data-field-sbsevent-value") ? "edit" : "publish", 0 != t.els.length) {
			t_animateSbs__cashElsInfo(t);
			var e, a = t_animateSbs__generateKeyframes(t);
			"" != a && $("head").append('<style class="sbs-anim-keyframes">' + a + "</style>"), "y" == window.lazy && t_lazyload_update(), $(window).resize(function () {
				clearTimeout(e), e = setTimeout(function () {
					$(window).width() < 101 ? (t.stop = !0, t_animateSbs__reset(t)) : (t.stop = !1, t_animateSbs__cashElsInfo(t), t_animateSbs__triggerTimeAnim(t), t_animateSbs__triggerScrollAnim(t))
				}, 500)
			}), $(window).width() >= 101 && (t_animateSbs__triggerTimeAnim(t), $("[data-animate-sbs-event=scroll]").length > 0 && (t_animateSbs__triggerScrollAnim(t), t_animateSbs__checkFrame(t))), $(window).load(function () {
				t_animateSbs__rereadElsValues(t)
			}), setTimeout(function () {
				t_animateSbs__rereadElsValues(t)
			}, 3e3)
		}
	}

	function t_animateSbs__generateKeyframes__correctOpacityOnFirstStep(t, e) {
		var a = e[1];
		void 0 !== a && 0 === a.time && 0 === a.styles.opacity && $(window).width() >= 101 && ($(t).find(".tn-atom__sbs-anim-wrapper").css("opacity", 0), e[0].styles.opacity = 0)
	}
	$(document).ready(function () {
		1 == window.isSearchBot || t_animateParallax__checkOldIE() || window.isMobile && $(window).width() < 101 || "edit" == $(".t-records").attr("data-tilda-mode") || (t_animateSbs__wrapAtomEls(), setTimeout(function () {
			t_animateSbs__init()
		}, 50))
	})
}

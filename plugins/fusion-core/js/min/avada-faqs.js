jQuery(document).on("ready fusion-element-render-fusion_faq",function(i,s){(void 0!==s?jQuery('div[data-cid="'+s+'"]').find(".fusion-faq-shortcode"):jQuery(".fusion-faq-shortcode")).each(function(){var i,s,e,f,n=jQuery(this),a=n.find(".fusion-filters");n.find(".fusion-faqs-wrapper").fadeIn(),a.length&&(a.fadeIn(),i=a.find(".fusion-filter"),s=a.find(".fusion-active").children("a"),e=s.attr("data-filter").substr(1),f=jQuery(this).find(".fusion-faqs-wrapper .fusion-faq-post"),i&&i.each(function(){var i=jQuery(this),s=i.children("a").data("filter");f&&(e.length&&f.hide(),f.each(function(){var f=jQuery(this);f.hasClass(s.substr(1))&&i.hasClass("fusion-hidden")&&i.removeClass("fusion-hidden"),e.length&&f.hasClass(e)&&f.show()}))})),n.find(".fusion-filters a").click(function(i){var s=jQuery(this).attr("data-filter");i.preventDefault(),n.find(".fusion-faqs-wrapper .fusion-faq-post").fadeOut(),setTimeout(function(){n.find(".fusion-faqs-wrapper .fusion-faq-post"+s).fadeIn()},400),jQuery(this).parents(".fusion-filters").find(".fusion-filter").removeClass("fusion-active"),jQuery(this).parent().addClass("fusion-active")})})});
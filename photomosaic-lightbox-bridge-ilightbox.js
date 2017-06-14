(function (window) {
    'use strict';

    window.PhotoMosaic.LightboxBridge.ilightbox = function ($, $mosaic, $items) {
        if (window.ILIGHTBOX && $.fn.iLightBox) {
            var options = window.ILIGHTBOX.options && eval("(" + window.ILIGHTBOX.options + ")") || {};

            if ($mosaic.not('.ilightbox_initialized')) {
                $mosaic.addClass('ilightbox_gallery ilightbox_initialized')
                $items.each(function(){
                    var $item = $(this);
                    $item
                        .attr('source', $item.attr('href'))
                        .attr('data-caption', $item.find('img').attr('title'));
                    window.ILIGHTBOX.instances.push($item.iLightBox(options));
                });
            }
        }
    }
}(window));

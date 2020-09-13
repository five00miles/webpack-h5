/**
 * rem配置 7.5px = 1rem
*/

; (function (win, lib) {
    var doc = win.document;
    var docEl = doc.documentElement;
    var dpr = 0;
    var scale = 0;
    var flexible = lib.flexible || (lib.flexible = {});

    if (!dpr && !scale) {
        var isAndroid = win.navigator.appVersion.match(/android/gi);
        var isIPhone = win.navigator.appVersion.match(/iphone/gi);
        var devicePixelRatio = win.devicePixelRatio;
        if (isIPhone) {
            // iOS下，对于2和3的屏，用2倍的方案，其余的用1倍方案
            if (devicePixelRatio >= 3) {
                dpr = 3;
            } else if (devicePixelRatio >= 2) {
                dpr = 2;
            } else {
                dpr = 1;
            }
        } else {
            // 其他设备下，仍旧使用1倍的方案
            dpr = 1;
        }
        scale = 1 / dpr;
    }

    function refreshRem() {
        var rem = docEl.clientWidth / 7.5;
        docEl.style.fontSize = rem + 'px';
        flexible.rem = rem;
    }

    win.addEventListener('resize', refreshRem, false);
    win.addEventListener('pageshow', function (e) {
        if (e.persisted) {
            refreshRem()
        }
    }, false);


    refreshRem();

    flexible.dpr = dpr;
    flexible.refreshRem = refreshRem;
    flexible.rem2px = function (d) {
        var val = parseFloat(d) * this.rem;
        if (typeof d === 'string' && d.match(/rem$/)) {
            val += 'px';
        }
        return val;
    }
    flexible.px2rem = function (d) {
        var val = parseFloat(d) / this.rem;
        if (typeof d === 'string' && d.match(/px$/)) {
            val += 'rem';
        }
        return val;
    }

})(window, window['lib'] || (window['lib'] = {}));
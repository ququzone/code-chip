if (typeof (luminate) == 'undefined') {
    var _comscore = _comscore || [];
    _comscore.push({
        c1: "8",
        c2: "8739517",
        c3: "5"
    });
    var _qevents = _qevents || [];
    _qevents.push({
        qacct: "p-2bezcUSPIXo56",
        labels: "Widget"
    });
    (function () {
        var isHttps = document.location.protocol == "https:";
        luminate = {};
        loadScript = function (url, cb) {
            var a, s = document.getElementsByTagName('script')[0];
            a = document.createElement("script");
            a.type = "text/javascript";
            a.async = true;
            a.src = url;
            s.parentNode.insertBefore(a, s);
            a.onload = function () {
                if (!a.onloadDone) {
                    a.onloadDone = true;
                    (cb && cb());
                }
            };
            a.onreadystatechange = function () {
                if (("loaded" === a.readyState || "complete" === a.readyState) && !a.onloadDone) {
                    a.onloadDone = true;
                    (cb && cb());
                }
            };
        };
        var dostats = function () {
            loadScript((isHttps ? "https://secure" : "http://edge") + ".quantserve.com/quant.js");
            loadScript((isHttps ? "https://sb" : "http://b") + ".scorecardresearch.com/beacon.js");
        };
        loadScript("http://static.luminate.com/gzip/widget/4.0.24231/luminate.min.js", function () {
            loadScript('http://www.luminate.com/widget/v3/137fe395b71/config/?r=' + encodeURIComponent(document.referrer) + '&v=4.0', dostats);
        });
    })();
}

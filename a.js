var a = prompt("What bookmarklet would you like to activate? Click=1 Mini=2 X=3 FS=4 Edit=5 Blanker=6 Browser=7 Snake=8");
(function() {
    if (a == 1) {
        var DELAY = 0;
        var autoClickerStyleElement = document.createElement("style");
        autoClickerStyleElement.innerHTML = "*{cursor: crosshair !important;}";
        document.body.appendChild(autoClickerStyleElement);

        function addClicker(e) {
            if (!e.isTrusted) {
                return;
            }
            if (e.target.classList.contains("auto-clicker-target")) {
                e.target.classList.remove("auto-clicker-target");
            } else {
                e.target.classList.add("auto-clicker-target");
            }
            document.body.removeChild(autoClickerStyleElement);
            document.body.removeEventListener("click", addClicker);
            e.preventDefault();
            autoClick(e.target);
        }

        function autoClick(element) {
            if (element.classList.contains("auto-clicker-target")) {
                element.click();
                setTimeout(function() {
                    autoClick(element);
                }, DELAY);
            }
        }
        document.body.addEventListener("click", addClicker, 0);
    } else if (a == 2) {
        var s = prompt("What website?");
        ((function() % 7 Bvar a, b, c; c = s, b = document.createElement("iframe"), b.setAttribute("src", c), b.setAttribute("id", "rusic-modal"), b.setAttribute("style", "position: fixed; z-index: 999999; width: 400px; height: 270px; left: 10px; top: 10px; border: 5px solid #009933; overflow: hidden; background-color: #fff;"), a = document.getElementsByTagName("body") % 5 B0 % 5 D, a.appendChild(b) % 7 D)).call(this)
    } else if (a == 3) {
        var element = document.getElementById("rusic-modal");
        element.parentNode.removeChild(element);
    } else if (a == 4) {
        var s = prompt("What website?");
        ((function() % 7 Bvar a, b, c; c = s, b = document.createElement("iframe"), b.setAttribute("src", c), b.setAttribute("id", "rusic-modal"), b.setAttribute("style", "position: fixed; z-index: 999999; width: 1375px; height: 675px; right: 0px; top: 0px; border: 0px solid #8834af; overflow: hidden; background-color: #fff;"), a = document.getElementsByTagName("body") % 5 B0 % 5 D, a.appendChild(b) % 7 D)).call(this)
    } else if (a == 5) {
        document.body.contentEditable = 'true';
        document.designMode = 'on';
        void 0
    } else if (a == 6) {
        (function() {
            var url = prompt("Paste the link you want to be embedded into an about:blank page.", "ex. https://example.com");
            var urlObj = new window.URL(window.location.href);
            win = window.open();
            win.document.body.style.margin = "0";
            win.document.body.style.height = "100vh";
            var iframe = win.document.createElement("iframe");
            iframe.style.border = "none";
            iframe.style.width = "100%";
            iframe.style.height = "100%";
            iframe.style.margin = "0";
            iframe.referrerpolicy = "no-referrer";
            iframe.allow = "fullscreen";
            iframe.src = url.toString();
            win.document.body.appendChild(iframe);
            var script = win.document.createElement("script");
            script.src = "https://3kh0.github.io/js/main.js";
            win.document.body.appendChild(script);
        })()
    } else if (a == 7) {
        ((function() % 7 Bvar a, b, c; c = "https://goguardian.up.railway.app/", b = document.createElement("iframe"), b.setAttribute("src", c), b.setAttribute("id", "rusic-modal"), b.setAttribute("style", "position: fixed; z-index: 999999; width: 1375px; height: 675px; right: 0px; top: 0px; border: 0px solid #8834af; overflow: hidden; background-color: #fff;"), a = document.getElementsByTagName("body") % 5 B0 % 5 D, a.appendChild(b) % 7 D)).call(this)
    } else if (a == 8) {
        Q = 64;
        m = b = Q * Q;
        a = [P = l = u = d = p = S = w = 0];
        u = 89;
        f = (h = j = t = (b + Q) / 2) - 1;
        (B = (D = document).body).appendChild(x = D.createElement("p"));
        (X = x.style).position = "fixed";
        X.left = X.top = 0;
        X.background = "#FFF";
        x.innerHTML = "<p></p><canvas>";
        v = (s = x.childNodes)[0];
        (s = s[1]).width = s.height = 5 * Q;
        c = s.getContext("2d");
        onkeydown = onblur = F = function(e, g) {
            g ? a[f] ? (w += m, f = Math.random(l += 8) * (R = Q - 2) * R | (u = 0), F(f += Q + 1 + 2 * (f / R | 0), g)) : F(f) : 0 > e ? (l ? --l : (y = t, t = a[t] - 2, F(y)), S += (w *= 0.8) / 4, m = 999 / (u++ + 10), a[h += [-1, -Q, 1, Q][d = p]] ? B.removeChild(x, alert("Game Over")) : (F(h), F(e, j = h), v.innerHTML = P ? (setTimeout(F, 50, e, 0), S | 0) : "Press P")) : -e ? (y = (a[e] = e < Q | e >= Q * Q - Q | !(e % Q) | e % Q == Q - 1 | 2 * (e == h)) + (e == f), e == h && (a[j] = 2 + h), c.fillStyle = "hsl(" + 99 * !a[e] + "," + 2 * m + "%," + 50 * y + "%)", c.fillRect(e % Q * 5, 5 * (e / Q | 0), 5, 5)) : isNaN(y = e.keyCode - 37) | 43 == y ? (P = y && !P) && F(-1) : p = !P | y & -4 | !(y ^ 2 ^ d) ? p : y;
            return !1
        };
        for (; --b; F(b));
        void F(-1)
    } {
        alert("None of these bookmarklets are created by me!");
    }
})();

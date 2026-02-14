/**
 * Shop4Dog.cz AI Chatbot Widget
 * <script src="https://shop4dog-cz-chatbot.onrender.com/widget.js"></script>
 */
(function() {
    var CHATBOT_URL = 'https://shop4dog-cz-chatbot.onrender.com';
    var btn = document.createElement('div');
    btn.id = 'shop4dogcz-chat-btn';
    btn.innerHTML = '\ud83d\udcac';
    btn.style.cssText = 'position:fixed;bottom:24px;right:24px;width:60px;height:60px;background:#ff9900;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:28px;box-shadow:0 4px 16px rgba(0,0,0,0.3);z-index:99999;transition:transform 0.2s;border:2px solid #b3b3b3;';
    btn.onmouseenter = function() { btn.style.transform = 'scale(1.1)'; };
    btn.onmouseleave = function() { btn.style.transform = 'scale(1)'; };
    var wrap = document.createElement('div');
    wrap.id = 'shop4dogcz-chat-wrap';
    wrap.style.cssText = 'position:fixed;bottom:96px;right:24px;width:400px;height:580px;border-radius:16px;overflow:hidden;box-shadow:0 8px 32px rgba(0,0,0,0.4);z-index:99999;display:none;border:2px solid #b3b3b3;';
    var iframe = document.createElement('iframe');
    iframe.src = CHATBOT_URL;
    iframe.style.cssText = 'width:100%;height:100%;border:none;';
    wrap.appendChild(iframe);
    document.body.appendChild(btn);
    document.body.appendChild(wrap);
    var open = false;
    btn.onclick = function() {
        open = !open;
        wrap.style.display = open ? 'block' : 'none';
        btn.innerHTML = open ? '\u2715' : '\ud83d\udcac';
        btn.style.background = open ? '#e4e4e3' : '#ff9900';
    };
    if (window.innerWidth < 500) { wrap.style.width='calc(100vw - 24px)';wrap.style.height='calc(100vh - 120px)';wrap.style.right='12px';wrap.style.bottom='84px'; }
})();

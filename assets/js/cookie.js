(function () {
  
    // Abort if we have a cookie set already
    if (Cookies.get('MimoCookieConsent')) return;

    // Create the banner dom module
    let banner = document.createElement('section');
        banner.classList.add('co');
        banner.innerHTML = '<div class="co-text"><p>We serve cookies on this site to analyse traffic, remember your preferences, and optimise your experience. If you are happy to accept cookies, please continue browsing. To opt-out of performance cookies, please review our <a href="/privacy">Privacy Policy</a></p></div><a href="' + window.location + '" class="button co-button">OK</a><style>.co{position:fixed;bottom:0;left:0;right:0;background:var(--c-bg);padding:.5rem;align-items:center;z-index:999999;border-top:1px solid var(--c-detail);justify-content:space-between}.co-button{margin-top:.5rem;width:100%;text-align:center}@media (min-width :450px){.co{display:flex}.co-button{margin-top:0;width:auto}.co-text{padding-right:1rem}}.co-text *{font-size:calc(var(--f-size) * var(--f-scale-s));line-height:.8rem;color:gray}.co-text a{background-image:linear-gradient(to right ,var(--c-text) 33.33333% ,var(--c-bg) 66.66666%);background-size:300% 1px;background-repeat:no-repeat;background-position:bottom left;transition:background-position .4s var(--a-speed)}.co-text a:hover{background-position:bottom right}</style>';

    // Append the banner to the body
    document.body.appendChild(banner);

    // When the button is clicked add the cookie and remove the banner
    document.querySelector('.co-button').addEventListener('click' , function (event) {
        event.preventDefault();
        Cookies.set('MimoCookieConsent', 'granted', { expires: 365 })
        banner.remove();
    })

})();

function mimoToggleColorScheme () {

    // Document Container
    let doc = document.documentElement;

    // Toggle the cookie
    (Cookies.get('MimoColorScheme')) ? doc.classList.remove('inverted')  : doc.classList.add('inverted');
    (Cookies.get('MimoColorScheme')) ? Cookies.remove('MimoColorScheme') : Cookies.set('MimoColorScheme', 'inverted', { expires: 365 });
}
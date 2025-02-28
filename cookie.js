document.addEventListener("DOMContentLoaded", function () {
    const cookieBanner = document.getElementById("cookie-banner");
    const cookieSettings = document.getElementById("cookie-settings");
    const acceptAllCookies = document.getElementById("accept-all-cookies");
    const customizeCookies = document.getElementById("customize-cookies");
    const saveCookieSettings = document.getElementById("save-cookie-settings");
    const acceptAll = document.getElementById("accept-all");
    const cookieSettingsBtn = document.getElementById("cookie-settings-btn");

    function setCookie(name, value, days) {
        let expires = "";
        if (days) {
            let date = new Date();
            date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + value + "; path=/" + expires;
    }

    function getCookie(name) {
        let nameEQ = name + "=";
        let cookies = document.cookie.split(";");
        for (let i = 0; i < cookies.length; i++) {
            let c = cookies[i].trim();
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    // Controllo se il consenso è già stato dato
    if (!getCookie("cookieConsent")) {
        cookieBanner.style.display = "block";
    } else {
        cookieSettingsBtn.classList.add("show"); // Mostra il pulsante con animazione
    }

    // Accetta tutti i cookie
    acceptAllCookies.addEventListener("click", function () {
        setCookie("cookieConsent", "accepted", 365);
        setCookie("cookieAnalytics", "yes", 365);
        setCookie("cookieMarketing", "yes", 365);
        setCookie("cookieFunctional", "yes", 365);
        cookieBanner.style.display = "none";
        cookieSettingsBtn.classList.add("show"); // Mostra il pulsante con animazione
    });

    // Apri il pannello personalizzato
    customizeCookies.addEventListener("click", function () {
        cookieSettings.style.display = "block";
    });

    // Salva le preferenze
    saveCookieSettings.addEventListener("click", function () {
        setCookie("cookieAnalytics", document.getElementById("analytics").checked ? "yes" : "no", 365);
        setCookie("cookieMarketing", document.getElementById("marketing").checked ? "yes" : "no", 365);
        setCookie("cookieFunctional", document.getElementById("functional").checked ? "yes" : "no", 365);
        setCookie("cookieConsent", "custom", 365);
        cookieSettings.style.display = "none";
        cookieBanner.style.display = "none";
        cookieSettingsBtn.classList.add("show"); // Mostra il pulsante con animazione
    });

    // Accetta tutto dalla modale
    acceptAll.addEventListener("click", function () {
        acceptAllCookies.click();
    });

    // Mostra il banner quando si preme il pulsante delle impostazioni
    cookieSettingsBtn.addEventListener("click", function () {
        cookieBanner.style.display = "block";
    });
});
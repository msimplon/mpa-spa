let messages = null;

async function initMessages() {
    const browserLanguage = window.navigator.language; //fr, fr-fr selon les navigateur ou encore fr-FR
    let lang = "";
    if (browserLanguage.startsWith("fr")) {
        lang = "-fr";
    }
    const response = await fetch(`./src/resources/messages${lang}.json`);
    messages = await response.json();
}

export { initMessages, messages };

//Le développeur doit savoir ce qu'est l'asynchronie 
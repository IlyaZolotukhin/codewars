function greet(language) {
    const base ={
        english: 'Welcome',
        czech: 'Vitejte',
        danish: 'Velkomst',
        dutch: 'Welkom',
        estonian: 'Tere tulemast',
        finnish: 'Tervetuloa',
        flemish: 'Welgekomen',
        french: 'Bienvenue',
        german: 'Willkommen',
        irish: 'Failte',
        italian: 'Benvenuto',
        latvian: 'Gaidits',
        lithuanian: 'Laukiamas',
        polish: 'Witamy',
        spanish: 'Bienvenido',
        swedish: 'Valkommen',
        welsh: 'Croeso'
    }
    console.log(base[language] || base.english) ;
}


/*array = [
    {language: "english",congratulation: "Welcome"},
    {language: "czech", congratulation: "Vitejte"},
    {language: "danish", congratulation: "Velkomst"},
    {language: "dutch", congratulation: "Welkom"},
    {language: "estonian", congratulation: "Tere tulemast"},
    {language: "finnish", congratulation: "Tervetuloa"},
    {language: "flemish", congratulation: "Welgekomen"},
    {language: "french", congratulation: "Bienvenue"},
    {language: "german", congratulation: "Willkommen"},
    {language: "irish", congratulation: "Failte"},
    {language: "italian", congratulation: "Benvenuto"},
    {language: "latvian", congratulation: "Gaidits"},
    {language: "lithuanian", congratulation: "Laukiamas"},
    {language: "polish", congratulation: "Witamy"},
    {language: "spanish", congratulation: "Bienvenido"},
    {language: "swedish", congratulation: "Valkommen"},
    {language: "welsh", congratulation: "Croeso"},
    {language: "IP_ADDRESS_INVALID", congratulation: "Welcome, Your function should have returned 'Welcome'. Try again."},
    {language: "IP_ADDRESS_NOT_FOUND", congratulation: "Welcome, Your function should have returned 'Welcome'. Try again."},
    {language: "IP_ADDRESS_REQUIRED", congratulation: "Welcome, Your function should have returned 'Welcome'. Try again."},
]



function greet(language) {
    array.filter(item => item.language === language ? console.log(item.congratulation): "Welcome");
}*/

greet("IP_ADDRESS_INVALID")


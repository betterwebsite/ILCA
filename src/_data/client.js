module.exports = {
    name: "ILCA",
    email: "help@ilcanews.org",
    phoneForTel: "918-513-6060",
    phoneFormatted: "(918) 513-6060",
    address: {
        lineOne: "400 N Aspen Ave",
        lineTwo: "Second Address Line",
        city: "Broken Arrow",
        state: "OK",
        zip: "74012",
        country: "US",
        mapLink: "https://maps.app.goo.gl/TEdS5KoLC9ZcULuQ6",
    },
    socials: {
        facebook: "https://www.facebook.com/",
        instagram: "https://www.instagram.com/",
    },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    domain: "https://www.example.com",
    // Passing the isProduction variable for use in HTML templates
    isProduction: process.env.ELEVENTY_ENV === "PROD",
};

module.exports = {
  content: [
    "./src/_includes/**/*.{html,md,11ty.js,liquid,njk,hbs,mustache,ejs,haml,pug}",
    "./src/sections/**/*.{html,md,11ty.js,liquid,njk,hbs,mustache,ejs,haml,pug}",
    "./src/index.{html,md,11ty.js,liquid,njk,hbs,mustache,ejs,haml,pug}",
  ],
  theme: {
    fontFamily: {
      main: ["Muli", '-apple-system', 'BlinkMacSystemFont', "Segoe UI", 'Roboto',
        "Helvetica Neue", 'Arial', 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji",
        "Segoe UI Symbol", "Noto Color Emoji"],
      title: ["Saira Extra Condensed", "-apple-system", "BlinkMacSystemFont",
        "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif", "Apple Color Emoji",
        "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
    },
  }

}

var postcss = require('postcss');

module.exports = postcss.plugin('postcss-prefixer-font-face', function (opts) {
    opts = opts || {};

    var prefix = opts.prefix || '';

    var usedFonts = [];

    return function (css, result) {

        /* Font Faces */
        css.walkAtRules(/font-face$/, function (font) {
            font.walkDecls(/font-family/, function (decl) {
                usedFonts.push(decl.value);
                decl.value = String(prefix+decl.value);
            });
        });

        css.walkDecls(/font-family/, function (decl) {
            if (usedFonts.indexOf(decl.value) > -1) {
                decl.value = String(prefix + decl.value);
            }
        });
    };
});


var postcss = require('postcss');

module.exports = postcss.plugin('postcss-prefixer-font-face', function (opts) {
    opts = opts || {};

    var prefix = opts.prefix || '';

    var usedFonts = [];

    return function (css, result) {

        /* Font Faces */
        css.walkAtRules(/font-face$/, function (font) {
            font.walkDecls(/font-family/, function (decl) {
                var fontName = decl.value.replace(/['"]+/g, '');
                usedFonts.push(fontName);
                decl.value = String(prefix + fontName);
            });
        });

        css.walkDecls(/font-family/, function (decl) {
            var fontNames = decl.value.replace(/['"]+/g, '').split(',');
            for (var i = 0; i < fontNames.length; i++) {
                var fontName = fontNames[i].trim();
                if (usedFonts.indexOf(fontName) > -1) {
                    fontNames[i] = String(prefix + fontName);
                }
            }
            decl.value = fontNames.join(',');
        });
    };
});


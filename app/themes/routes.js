var ThemeModel = require('./ThemeModel');

function getThemeActive(req, res) {
    ThemeModel.findOne({}).populate('layers', 'name').exec(function(err, results) {
        res.json(results);
    })
}

function setup(app) {
    app.get('/themes/active', getThemeActive);
}

module.exports = setup;

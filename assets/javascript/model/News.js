var Backbone = window.Backbone;

module.exports = Backbone.Model.extend({
    attributes : {
        'title': 'Sem título',
        'poi': 0,
        'description': '<p>Adicione texto, imagem ou vídeo embed ao corpor da mensagem.</p>',
        'created_at': Date.now
    },
    idAttribute: "_id",
    urlRoot: '/news'
});

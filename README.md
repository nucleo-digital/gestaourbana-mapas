# Gestão Urbana Mapas

A necessidade de disponibilizar os mais diversos mapas da cidade publicamente, foi o que nos levou até esta ferramenta.

## Benefícios

O principal atrativo é você acompanhar as notícias por ponto de interesse e fazer um mix com as camadas relacionadas, conseguindo criar visões únicas, a partir da mescla de informações sobre o Plano Diretor e o Programa de metas;

* Camadas em destaque por tema
* Notícias por ponto de interesse do tema;
* Camadas relacionadas por projetos das secretarias;

## Tecnologias

No servidor:

* NodeJS
* MongoDB

[lista completa](https://github.com/nucleo-digital/gestaourbana-mapas/blob/master/package.json)

No frontend:

* Gulp
* Bower
* Sass
* Browserify

[lista completa](https://github.com/nucleo-digital/gestaourbana-mapas/blob/master/bower.json)

## Como instalar

Você vai precisar configurar as informações sobre o mongo no ```config.js``` e após isso, executar o seguinte comando:

```npm install && bower install && gulp build && node app/server.js```

## Importar camadas

As camadas utilizadas nesse projeto foram disponibilizdas no repositório [SP Mapas](https://github.com/nucleo-digital/sp-mapas) e a partir dele você pode importar as camadas do formato GeoJSON para o MongoDB.

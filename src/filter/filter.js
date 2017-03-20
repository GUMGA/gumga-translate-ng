'use strict';

TranslateFilter.$inject = ['GumgaTranslateHelper', '$timeout'];

function TranslateFilter(GumgaTranslateHelper, $timeout){
  return function translate(value, entity){
    if(value) {
      if(!angular.isString(value)) throw 'É necessário passar uma string para o filtro gumgaTranslate';
      let stringToTranslate = entity ?
          entity.toLowerCase().concat('.').concat(value ? value.toLowerCase() : ' ')
        : (value ? value.toLowerCase() : ' ');

      return GumgaTranslateHelper.returnTranslation(stringToTranslate) || value;
    }
    return value;
  };
}

angular.module('gumga.translate.filter', ['gumga.translate.helper'])
  .filter('gumgaTranslate', TranslateFilter);

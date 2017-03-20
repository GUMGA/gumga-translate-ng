'use strict';

require('./helper/helper.js')
require('./filter/filter.js')
require('./provider/provider.js')

angular.module('gumga.translate', [
    'gumga.translate.helper',
    'gumga.translate.filter',
    'gumga.translate.provider'
  ])

(function(){
	'use strict';
	Translate.$inject = ['$http','TranslateHelper', '$timeout', '$gumgaTranslate'];
	function Translate($http,TranslateHelper, $timeout, $gumgaTranslate){
		var ch = 0;
		return {
			restrict: 'AEC',
			scope: false,
			priority: 9999,
			link: function($scope,$elm,$attrs){
				var language = $attrs.gumgaTranslate.toLowerCase() || navigator.language.toLowerCase();

				$http.get($gumgaTranslate.getURL())
				.then(function(values){
					TranslateHelper.setTranslators(language,values.data);
				});

			}
		};
	}

	angular.module('gumga.translate.directive',['gumga.translate.directive.translatehelper'])
	.directive('gumgaTranslate',Translate);

})();

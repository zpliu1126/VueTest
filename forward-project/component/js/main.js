;(function(exports){
	exports.app=new Vue({
		el:"#app",
		template: "<APP/>",
		components:{
			"APP":exports.app
		}
	})
})(window)
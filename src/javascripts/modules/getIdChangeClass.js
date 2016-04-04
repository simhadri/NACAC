var GetIdChangeClass = function() {
	this.removeClassFromId = function(className, dataAttr) {
		let elm = document.getElementById(dataAttr);
		if (elm){
			elm.classList.remove(className);
		}
	},
	this.addClassToId = function(className, dataAttr) {
		let elm = document.getElementById(dataAttr);
		if (elm){
			elm.classList.add(className);
		}
	}
}
module.exports = GetIdChangeClass;

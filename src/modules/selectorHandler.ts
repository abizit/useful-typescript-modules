function SelectorException(selector:string){
	this.message = selector + ' is invalid';
	this.name = "SelectorException";
}

SelectorException.prototype = Error.prototype;

function _sl(selector:string):any{
		if (selector.indexOf("#") === 0){
			var id = selector.replace(/#/g,"");
			return document.getElementById(id);
		} else if (selector.indexOf('.') === 0){
				return document.querySelectorAll(selector);
		} else {
				throw new SelectorException(selector);
		}
};

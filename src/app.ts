import {ClassHandler} from './modules/classHandler.module';

class Application {
	private _classHandler: ClassHandler = new ClassHandler;

	constructor(){
		let container = document.getElementById('container');
		console.log(this._classHandler.has(container,'hello'))

	}

	someFunc(container:HTMLElement){
			return container;
	}
}

new Application;
var aa = 2;
console.log('hello');

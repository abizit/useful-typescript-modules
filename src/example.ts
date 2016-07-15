/*
 * Example Usages of ClassHandler
 */
import {ClassHandler} from './modules/classHandler.module';

class ClassUsage {
	private _classHandler: ClassHandler = new ClassHandler;

	constructor(){
		var id = document.getElementById('container');

		// Add Class
		this._classHandler.add(id,'classname');

		// Remove Class
		this._classHandler.remove(id,'classname');

		// Check if the id has class
		var hasClass = this._classHandler.has(id,'classname');
		console.log(hasClass);
	}
}

var clsUsage = new ClassUsage;

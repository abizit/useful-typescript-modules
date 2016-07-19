/*
 * Example Usages of ClassHandler
 */
import {ClassHandler} from './modules/classHandler.module';
class ClassUsage {
	private _classHandler: ClassHandler = new ClassHandler;

	constructor(){
		var id = document.getElementById('container');


		// Add Class
		this._classHandler.add(id,'test, test2,asdfasdf');

		// Remove Class
		this._classHandler.remove(id,'test, test2,asdfasdf');

		//Toggle Class
		this._classHandler.toggle(id,'classname')

		// Check if the id has class
		var hasClass = this._classHandler.has(id,'classname');
		console.log(hasClass);
	}
}

var clsUsage = new ClassUsage;

/*
 * Example Usages of UserOptions
 */
import {UserOptions} from './modules/userOptions';
var optUsage = new UserOptions(
	{
		optionone : 'Name Test'

	}
);
console.log(optUsage)

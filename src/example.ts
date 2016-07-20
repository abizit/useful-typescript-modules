/*
 * Example Usages of ClassHandler
 */
import {ClassHandler} from './modules/classHandler.module';
var clsUsage = new ClassHandler;
var id = document.getElementById('container');
// Add Class
clsUsage.add(id,'test');
// Remove Class
clsUsage.remove(id,'test');
//Toggle Class
clsUsage.toggle(id,'classname');
// Check if the id has class
var hasClass = clsUsage.has(id,'classname');
console.log(hasClass);


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

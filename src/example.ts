/*
 * Example Usages of ClassHandler
 */
import {ClassHandler} from './modules/classHandler.module';

let clsUsage = new ClassHandler;
let id = document.getElementById('container');

// Add Class
clsUsage.add(id,'test');
// Remove Class
clsUsage.remove(id,'test');
//Toggle Class
clsUsage.toggle(id,'classname');
// Check if the id has class
let hasClass = clsUsage.has(id,'classname');
console.log(hasClass);
/*
 * Example Usages of UserOptions
 */
import {UserOptions} from './modules/userOptions';
let optUsage = new UserOptions(
	{
		optionone : 'Name Test'

	}
);
console.log(optUsage);

console.log('hello');
import { aQ } from './modules/chainable';
console.log(aQ('.container'));
aQ('.container').find('hello');






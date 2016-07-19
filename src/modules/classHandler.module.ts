/*
 * @module ClassHandler
 * Performs Different Element Class functions
 */

export class ClassHandler {

    // @param {HTMLElement} Element Selector
    // @param {String} classname
    // Adds one or more class names to the element.
    add(element: HTMLElement, className: string) {
		var name = ClassHandler.inputCheck(className);
			for(var i = 0; i < name.length ; i++){
				try{
					element.classList.add(name[i]);
				}
				catch(e){
					return 'Input Error: Space between class names. Sperate class names with comma(,) only'
				}
			}
    }

    // @param {HTMLElement} Element Selector
    // @param {String} classname
    // Removes one or more class names from the element.
    remove(element: HTMLElement, className: string) {
		var name = ClassHandler.inputCheck(className);
			for(var i = 0; i < name.length ; i++){
				try{
					element.classList.remove(name[i]);
				}
				catch(e){
					return 'Input Error: Space between class names. Sperate class names with comma(,) only'
				}
			}
    }

    // @param {HTMLElement} Element Selector
    // @param {String} classname
    // @return {Boolean}, indicating whether the element has the specified class name.
    has(element: HTMLElement, className: string):Boolean {
        return element.classList.contains(className);
    }

	// @param {HTMLElement} Element Selector
    // @param {String} classname
    // Toggles between a class name for the element.
	toggle(element:HTMLElement,className:string){
		element.classList.toggle(className)
	}

	// @param {String} class name
	// @private
	// @return {Object} with removed spaces and seperated on commas
	static inputCheck(input:string):Array<string>{
		var str = input.split(',');
		return str
	}
}

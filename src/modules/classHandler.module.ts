export class ClassHandler {
/*
 * @module ClassHandler
 * Performs Different Element Class functions
 */
  add(element:HTMLElement,className:string){
	  // Add classname
      // @param {Element Selector} element
      // @param {Class Name} className
      // Add provided classname to the element
	  element.classList.add(className);
  }
  remove(element:HTMLElement,className:string){
	  // Remove classname
	  // @param {Element Selector} element
	  // @param {Class Name} className
	  // Remove provided classname to the element
	  element.classList.remove(className);
  }
  has(element:HTMLElement,className:string){
	  // Check for classname
	  // @param {Element Selector}
	  // @param {Class Name}
	  // @return {Boolean}
	  return element.classList.contains(className);
  }
}

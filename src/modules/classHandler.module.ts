/*
 * @module ClassHandler
 * Performs Different Element Class functions
 */

export class ClassHandler {

    // @param {HTMLElement} Element Selector
    // @param {String} classname
    // Add provided classname to the element
    add(element: HTMLElement, className: string) {
        element.classList.add(className);
    }

    // @param {HTMLElement} Element Selector
    // @param {String} classname
    // Remove provided classname to the element
    remove(element: HTMLElement, className: string) {
        element.classList.remove(className);
    }

    // @param {HTMLElement} Element Selector
    // @param {String} classname
    // @return {Boolean} true if has class else false
    has(element: HTMLElement, className: string) {
        return element.classList.contains(className);
    }
}

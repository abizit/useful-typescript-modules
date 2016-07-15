/*
 * @module ClassHandler
 * Performs Different Element Class functions
 */

export class ClassHandler {

    // Add classname
    // @param {HTMLElement} Element Selector
    // @param {String} classname
    // Add provided classname to the element
    add(element: HTMLElement, className: string) {
        element.classList.add(className);
    }

    // Remove classname
    // @param {HTMLElement} Element Selector
    // @param {String} classname
    // Remove provided classname to the element
    remove(element: HTMLElement, className: string) {
        element.classList.remove(className);
    }

    // Check for classname
    // @param {HTMLElement} Element Selector
    // @param {String} classname
    // @return {Boolean}
    has(element: HTMLElement, className: string) {

        return element.classList.contains(className);
    }
}

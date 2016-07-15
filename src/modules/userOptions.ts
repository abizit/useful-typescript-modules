/*
 * @module UserOptions
 * Merges Default Options with User Options
 */

export class UserOptions {

    // @param {Object} options User options
    constructor(
        public options: Object
    ) {
        this.extendDefaults(this.options);
    }

    // @private
    // @param {Object} options User options
    // @returns {Object} Merged values of defaults and options
    extendDefaults(properties: Object) {
        var property,
            defaults: Object = {
                'option-one': 'hello', //String
                'option-two': 2, //Number
                'option-three': true //Boolean
            };
        for (property in properties) {
            if (properties.hasOwnProperty(property)) {
                defaults[property] = properties[property];
            }
        }
        return defaults;
    }

}

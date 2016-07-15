/*
 * @module UserOptions
 * Merges Default Options with User Options
 */

export class UserOptions {
     _defaults:Object = {
        optionone : 'hello', //String
        optiontwo : 2, //Number
        optionthree: true //Boolean
    }

    // @param {Object} options User options
    constructor(
        public options: Object
    ) {
		if (this.options && typeof this.options === 'object'){
			this.extendDefaults(this.options);
		}

    }

    // @private
    // @param {Object} options User options
    // @returns {Object} Merged values of defaults and options
    extendDefaults(userOptions: Object) {
        var option
        for (option in userOptions) {
            if (userOptions.hasOwnProperty(option)) {
                this._defaults[option] = userOptions[option];
            }
        }
        return this._defaults;
    }

}

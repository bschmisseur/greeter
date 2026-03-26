/*
 * Project:   greeter
 * File:      src/greeter.js
 *
 * Description:
 *   Greeter functionality for the JavaScript application.
 */

// Immediately Invoked Function Expression (IIFE) to create a module and avoid polluting the global scope
// Putting the semi-colon at the beginning protects against concatenation issues where the previous file might not end with a semicolon
;((global, $) => {

    // Main constructor function for creating Greeter instances
    var Greeter = function(firstName, lastName, language) {
        return new Greeter.init(firstName, lastName, language);
    
    };

    // Private variable within the library - list of supported languages
    var supportedLangs = ['en', 'es'];

    // Object containing informal greetings for each supported language
    var greetings = {
        en: 'Hello',
        es: 'Hola'
    };
    
    // Object containing formal greetings for each supported language
    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos'
    };

    // Object containing log messages for each supported language
    var logMessages = {
        en: 'Logged in',
        es: 'Inicio sesion'
    };

    // Define methods on the Greeter prototype for all instances to share
    Greeter.prototype = {

        // Method to get the full name by concatenating first and last name
        fullName: function() {
            return this.firstName + ' ' + this.lastName;
        },

        // Method to validate that the current language is supported
        validate: function() {
            if (supportedLangs.indexOf(this.language) === -1) {
                throw "Invalid language";
            }
        },

        // Method to generate an informal greeting message
        greeting: function() {
            return greetings[this.language] + ' ' + this.firstName + '!';
        },

        // Method to generate a formal greeting message using the full name
        formalGreeting: function() {
            return formalGreetings[this.language] + ', ' + this.fullName();
        },

        // Method to greet the person, optionally formally, and log to console if available
        greet: function(formal) {
            var msg;

            if (formal) {
                msg = this.formalGreeting();
            } else {
                msg = this.greeting();
            }

            if (console) {
                console.log(msg);
            }

            // return this makes the method chainable
            return this;
        },

        // Method to log the person's login status to the console
        log: function() {
            if (console) {
                console.log(logMessages[this.language] + ': ' + this.fullName());
            }

            return this;
        },

        // Method to change the language and validate it
        setLang: function(lang) {
            this.language = lang;

            this.validate();

            return this;
        },

        // Method to display the greeting in an HTML element using jQuery
        HTMLGreeting: function(selector, formal) {
            if (!$) {
                throw 'jQuery not loaded';
            }

            if (!selector) {
                throw 'Missing jQuery selector';
            }

            var msg;

            if (formal) {
                msg = this.formalGreeting();
            } else {
                msg = this.greeting();
            }

            $(selector).html(msg);

            return this;
        }
    };

    // Initialization function called by the constructor to set up instance properties
    Greeter.init = function(firstName, lastName, language) {
    
        var self = this;
    
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';

        self.validate();
    };

    // Set the prototype of the init function to the Greeter prototype for inheritance
    Greeter.init.prototype = Greeter.prototype;

    // Expose the Greeter constructor globally as both 'Greeter' and 'G$' for convenience
    global.Greeter = global.G$ = Greeter;

})(window, jQuery);
/*
 * Project:   greeter
 * File:      src/app.js
 *
 * Description:
 *   Entry point for the JavaScript application. This file initializes the application, sets up necessary configurations, and starts the main functionality of the app.
 */

var g = G$('John', 'Doe');
console.log(g);

$('#login').click(function() {
    var loginGrtr = G$('John', 'Doe');
    $('#logindiv').hide();
    loginGrtr.setLang($('#language').val()).HTMLGreeting('#greeting', true).log();
});
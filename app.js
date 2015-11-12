// PERSON CLASS ++++++++++++++++++++++++++++++++
var Person = (function () {
    // CONSTRUCTOR ++++++++++++++++++++++++++++++
    function Person(name) {
        this._name = name;
    }
    // PUBLIC METHODS +++++++++++++++++++++++++++
    Person.prototype.sayName = function () {
        console.log("Your name is: " + this._name);
    };
    return Person;
})();
var tom = new Person("Tom");
tom.sayName();
//# sourceMappingURL=app.js.map
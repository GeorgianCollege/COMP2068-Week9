// PERSON CLASS ++++++++++++++++++++++++++++++++
class Person {
	private _name:string;
	// CONSTRUCTOR ++++++++++++++++++++++++++++++
	constructor(name:string) {
		this._name = name;
	}
	
	// PUBLIC METHODS +++++++++++++++++++++++++++
	public sayName():void {
		console.log("Your name is: " + this._name);
	}
}

var tom = new Person("Tom");
tom.sayName();
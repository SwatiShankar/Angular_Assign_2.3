class GetterSetter {
	private username : string;

	//getter method
	get UserName():string {
		return this.username;
	}

	//setter method
	set UserName(name : string){
		this.username = name;
	}

	//method which validates the argument
	validateuser() : string{
		var name = this.UserName;
		if(name === "shruthi"){
			return `The username argument : ` + name + ` is valid` ;
		} else {
			return `The user is not valid`;
		}
	}
}

let getset = new GetterSetter();
getset.UserName="shruthiss";

let validate = getset.validateuser();
console.log(validate);
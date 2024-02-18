// задвние №1
const student = {
name: 'Mikhail',
 surname: 'Vaganov',
 age: 48,
 position:'frontend-devoloper'
}
function keyInObj (object){
    for (let key in object) {
        if (Object.hasOwnProperty.call(object, key)) {
            console.log(key)
        }
    }
}

keyInObj(student);

// задвние №2
function strInObj (string, object){
    for (let key in object) {
        if (key == string) {
            return true;
        }
        return false
    }
}

strInObj ('name', student);

// задвние №3

function newObj() {
	return Object.create(null)
}

// задвние №4

function Device (name, power) {
    this.name = name
    this.power = power
    this.enable = false
}

Device.prototype.isOn = function (){
    console.log(this.name + ' turned on')
    this.enable = true
}

Device.prototype.getPower = function (){
    return this.enable ? this.power : 0;
}

const microwave = new Device('microwave', 1600)
const lamp = new Device('lamp', 60)

console.log(microwave.getPower() + lamp.getPower())

microwave.isOn()
console.log(microwave.getPower() + lamp.getPower())

lamp.isOn()
console.log(microwave.getPower() + lamp.getPower())


// задвние №5

class ElectricStuff {
	constructor(name, power) {
		this.name = name
		this.power = power
		this.enabled = false
	}

	isOn() {
		console.log(this.name + ' is ON.')
		this.enabled = true
	}

	getPower() {
		return this.enabled ? this.power : 0
	}
}

const laptop = new ElectricStuff('laptop', 300)
const phone = new ElectricStuff('phone', 20)

console.log(laptop.getPower() + phone.getPower())


laptop.isOn()
console.log(phone.getPower() + laptop.getPower())

phone.isOn()
console.log(phone.getPower() + laptop.getPower())
class Car {

    currentYear() {
        return new Date().getFullYear();
    }
   
    //The year parameter is a "default parameter"
    setDetails(make = 'No Make', model = 'No Model', year = this.currentYear(), ...accessories) {
        console.log(make + ' ' + model + ' ' + year);  
        if (accessories) {
            for (var i = 0; i < accessories.length; i++) {
                console.log('\n' + accessories[i]);
            }
        }
    }

}


var car = new Car();
//Testing default parameters
car.setDetails('Toyota', 'Tundra');
car.setDetails();

//Testing rest parameters
car.setDetails('Toyota', 'Tundra', 2015, 'sunroof', '4X4', '4-door');

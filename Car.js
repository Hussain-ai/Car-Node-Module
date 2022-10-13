//uses the module export for the class cars
module.exports = class car{
    constructor(color, convertible){
        this.color = color
        this.convertible = convertible 
        this.speed = 0
    }
    //uses the acceleration method from the module
    accelerate(carSpeed){
        this.speed = this.speed+carSpeed
    }
    //uses the deceleration method from the module
    decelerate(carSpeed){
        this.speed = this.speed-carSpeed
    }
}
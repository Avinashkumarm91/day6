class UberPriceCalculator {

    static BASEFARE = 25.0;
    
    static PERMILERATE = 5;
    
    static PERMINUTERATE = 1.5;
    
    constructor(distance, duration) {
    
    this.distance = distance;
    
    this.duration = duration;
    
    }
    
    calculateFare() {
    
    const distanceFare = this.distance * UberPriceCalculator.PERMILERATE;
    
    const timeFare = this.duration * UberPriceCalculator.PERMINUTERATE;
    
    const totalFare = UberPriceCalculator.BASEFARE + distanceFare + timeFare;
    
    return totalFare;
    
    }
    
    getDistance() {
    
    return this.distance;
    
    }
    
    setDistance(distance) {
    
    this.distance = distance;
    
    }
    
    getDuration() {
    
    return this.duration;
    
    }
    
    setDuration(duration) {
    
    this.duration = duration;
    
    }
    
    toString() {
    
    return `UberPriceCalculator[distance=${this.distance.toFixed(2)} miles, duration=${this.duration} minutes]`;
    
    }
}

    const calculator = new UberPriceCalculator(5.5, 15);
    
    console.log(calculator.toString());
    
    const fare = calculator.calculateFare();
    
    console.log(`Total Fare: $${fare.toFixed(2)}`);
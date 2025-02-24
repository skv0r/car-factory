"use strict";
class Jeep {
    drive() {
        return "Джип едет по дороге";
    }
}
class SportBike {
    ride() {
        return "Спортивный мотоцикл мчится по трассе.";
    }
}
class VehicleFactory {
    createCar() {
        return new Jeep;
    }
    createMotorcycle() {
        return new SportBike;
    }
}
class SimpleGPS {
    getLocation() {
        return "Широта: 40.7128, Долгота: -74.0060";
    }
}
class GPSAdapter {
    constructor(gps) {
        this.gps = gps;
    }
    getLocationInfo() {
        return `Текущая позиция: ${this.gps.getLocation()}`;
    }
}
function main() {
    const vehicleFactory = new VehicleFactory();
    const car = vehicleFactory.createCar();
    const motorcycle = vehicleFactory.createMotorcycle();
    console.log(car.drive());
    console.log(motorcycle.ride());
    const gps = new SimpleGPS();
    const gpsAdapter = new GPSAdapter(gps);
    console.log(gpsAdapter.getLocationInfo());
}
main();

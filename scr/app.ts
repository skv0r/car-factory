//abstract factory
interface ICar {
    drive(): string;
}

interface IMotorcycle {
    ride(): string;
}

interface IVehicleFactory {
    createCar(): ICar;
    createMotorcycle(): IMotorcycle;
}

class Jeep implements ICar {
    drive(): string {
        return "Джип едет по дороге";
    }
}

class SportBike implements IMotorcycle {
    ride(): string {
        return "Спортивный мотоцикл мчится по трассе.";
    }
}

class VehicleFactory implements IVehicleFactory {
    createCar(): ICar {
        return new Jeep;
    }

    createMotorcycle(): IMotorcycle {
        return new SportBike;
    }
}

//adapter

interface IGPS {
    getLocation(): string;
}

class SimpleGPS implements IGPS {
    getLocation(): string {
        return "Широта: 40.7128, Долгота: -74.0060";
    }
}

class GPSAdapter {
    private gps: IGPS;

    constructor(gps: IGPS) {
        this.gps = gps;
    }

    getLocationInfo(): string {
        return `Текущая позиция: ${this.gps.getLocation()}`
    }
}

function main() {
    const vehicleFactory: VehicleFactory = new VehicleFactory();

   
    const car: ICar = vehicleFactory.createCar();
    const motorcycle: IMotorcycle = vehicleFactory.createMotorcycle();

    console.log(car.drive()); 
    console.log(motorcycle.ride()); 

    const gps: IGPS = new SimpleGPS();
    const gpsAdapter = new GPSAdapter(gps);
    console.log(gpsAdapter.getLocationInfo());

}

main();
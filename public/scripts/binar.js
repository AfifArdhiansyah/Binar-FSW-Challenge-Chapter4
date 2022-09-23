// import data from '/data/cars.json' assert {type: 'json'};
// import { createRequire } from "module";
// const require = createRequire(import.meta.url);
// const data = require('./data/cars.json');

// let rawdata = fs.readFileSync('data/cars.json');
// let data = JSON.parse(rawdata);
// console.log(data);

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

class Binar {
  static populateCars = (cars) => {
    return cars.map((car) => {
      const isPositive = getRandomInt(0, 1) === 1;
      const timeAt = new Date();
      const mutator = getRandomInt(1000000, 100000000);
      const availableAt = new Date(timeAt.getTime() + (isPositive ? mutator : -1 * mutator))

      return {
        ...car,
        availableAt,
      };
    })
  }

  // static async listCars(filterer) {
  //   let cars;
  //   let cachedCarsString = localStorage.getItem("CARS");

  //   if (!!cachedCarsString) {
  //     const cacheCars = JSON.parse(cachedCarsString);
  //     cars = this.populateCars(cacheCars);
  //   } else {
  //     const response = await fetch(
  //       "https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json"
  //     );
  //     const body = await response.json();
  //     cars = this.populateCars(body)

  //     localStorage.setItem("CARS", JSON.stringify(cars));
  //   }

  //   if (filterer instanceof Function) return cars.filter(filterer);

  //   return cars;
  // }

  static listCars(tipeDriver, tahun, waktuJemput, jumlahPenumpang) {
    let cars;
    let cachedCarsString = localStorage.getItem("CARS");

    if (!!cachedCarsString) {
      const cacheCars = JSON.parse(cachedCarsString);
      cars = this.populateCars(cacheCars);
    } else {
      cars = this.populateCars(Data.getData())

      localStorage.setItem("CARS", JSON.stringify(cars));
    }

    //tipe driver
    if(tipeDriver == 'Dengan Sopir'){
      cars = cars.filter((car) => car.available == true);
    }
    else if(tipeDriver == 'Tanpa Sopir (Lepas Kunci)'){
      cars = cars.filter((car) => car.available == false);
    }
    //tahun
    if(tahun){
      cars = cars.filter((car) => car.year == tahun);
    }
    //jumlah penumpang
    if(jumlahPenumpang){
      cars = cars.filter((car) => car.capacity == jumlahPenumpang);
    }

    // if (filterer instanceof Function) return cars.filter(filterer);

    return cars;
  }
}

// export default Binar;
// module.exports = {Binar};
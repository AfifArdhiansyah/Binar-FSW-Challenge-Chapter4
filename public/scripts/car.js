class Car {
    static list = [];
  
    static init(cars) {
      this.list = cars.map((i) => new this(i));
    }
  
    constructor({
      id,
      plate,
      manufacture,
      model,
      image,
      rentPerDay,
      capacity,
      description,
      transmission,
      available,
      type,
      year,
      options,
      specs,
      availableAt,
    }) {
      this.id = id;
      this.plate = plate;
      this.manufacture = manufacture;
      this.model = model;
      this.image = image;
      this.rentPerDay = rentPerDay;
      this.capacity = capacity;
      this.description = description;
      this.transmission = transmission;
      this.available = available;
      this.type = type;
      this.year = year;
      this.options = options;
      this.specs = specs;
      this.availableAt = availableAt;
    }

    parseRupiah = () => {
      return this.rentPerDay.toLocaleString("id-ID", {
        currency: "IDR",
      });
    }
  
    render() {
      return `
        <div class="d-flex flex-column justify-content-between h-100">
          <img src="${this.image}" alt="${this.manufacture}">
          <div>            
            <p>${this.manufacture} / ${this.model}</b></p>
            <p><b>Rp ${this.parseRupiah()}/hari</b></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            <div class="d-flex flex-row">
              <img class="icon" src="img/fi_users.png" alt="seat" class="mr-2">
              <p>${this.capacity} orang</p>
            </div>   
            <div class="d-flex flex-row">   
              <img class="icon" src="img/fi_settings.png" alt="seat" class="mr-2">
              <p>${this.transmission}</p>
            </div> 
            <div class="d-flex flex-row"> 
              <img class="icon" src="img/fi_calendar.png" alt="seat" class="mr-2">
              <p>Tahun ${this.year}</p>   
            </div>
            <button class="btn">Pilih Mobil</button> 
          </div>          
        </div>
                     
      `;
    }
}

// export default Car;
// module.exports = {Car};
  
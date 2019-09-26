const Rental = require('./models/rental');

class FakeDb {

    constructor(){
        this.rentals = [{
        id: "1",
        title: "Central Apartment",
        city: "New York",
        street: "Time Square",
        category: "condo",
        image: "https://res.cloudinary.com/g5-assets-cld/image/upload/x_5,y_103,h_897,w_1495,c_crop/q_auto,f_auto,fl_lossy,g_center,h_1200,w_2000/g5/g5-c-iqbdwwmq-oakland-management-multifamily-client/g5-cl-1j4zxgpzty-bolton-estates-apartments/uploads/BuildingPhoto_94_uhfkne.jpg",
        bedrooms: 3,
        description: "nice apartment",
        dailyRate: 350,
        shared: true,
        createdAt: "12/12/2018"
        },
        {
        id: "2",
        title: "Comfortable Apartment",
        city: "Mexico City",
        street: "Paseo de la reforma",
        category: "condo",
        image: "https://res.cloudinary.com/g5-assets-cld/image/upload/x_5,y_103,h_897,w_1495,c_crop/q_auto,f_auto,fl_lossy,g_center,h_1200,w_2000/g5/g5-c-iqbdwwmq-oakland-management-multifamily-client/g5-cl-1j4zxgpzty-bolton-estates-apartments/uploads/BuildingPhoto_94_uhfkne.jpg",
        bedrooms: 3,
        description: "nice apartment",
        dailyRate: 162,
        shared: true,
        createdAt: "12/12/2018"
        },
        {
          id: "3",
          title: "Nice Apartment",
          city: "New Dheli",
          street: "India",
          category: "condo",
          image: "https://res.cloudinary.com/g5-assets-cld/image/upload/x_5,y_103,h_897,w_1495,c_crop/q_auto,f_auto,fl_lossy,g_center,h_1200,w_2000/g5/g5-c-iqbdwwmq-oakland-management-multifamily-client/g5-cl-1j4zxgpzty-bolton-estates-apartments/uploads/BuildingPhoto_94_uhfkne.jpg",
          bedrooms: 3,
          description: "nice apartment",
          dailyRate: 100,
          shared: true,
          createdAt: "12/27/2018"
        }]
    }

    async cleanDb(){
        await Rental.remove({});
    }

    pushRentalsToDb(){
        this.rentals.forEach((rental) => {
            const newRental = new Rental(rental);

            newRental.save();
        })
    }

    seedDb(){
        this.cleanDb();
        this.pushRentalsToDb();
    }
}

module.exports = FakeDb
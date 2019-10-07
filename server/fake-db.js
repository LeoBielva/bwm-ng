const Rental = require('./models/rental');
const User = require('./models/user');


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
        }];

        this.users =[{
            username: "test user",
            email: "Test@gmail.com",
            password: "testteEst$1234"
        }]
    }

    async cleanDb(){
        await User.remove({});
        await Rental.remove({});
    }

    pushRentalsToDb(){
        const user = new User(this.users[0]);

        this.rentals.forEach((rental) => {
            const newRental = new Rental(rental);
            newRental.user = user;

            user.rentals.push(newRental);
            newRental.save();
        });
        user.save();
    }

    async seedDb(){
        await this.cleanDb();
        this.pushRentalsToDb();
    }
}

module.exports = FakeDb
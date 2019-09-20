import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Rental } from './rental.model'
import { observeOn } from 'rxjs/operators';
import { ObserveOnOperator } from 'rxjs/operators/observeOn';

@Injectable()
export class RentalService {

    private rentals: Rental[] = [
        {
        id: "1",
        title: "Central Apartment",
        city: "New York",
        street: "new york times",
        category: "condo",
        image: "https://res.cloudinary.com/g5-assets-cld/image/upload/x_5,y_103,h_897,w_1495,c_crop/q_auto,f_auto,fl_lossy,g_center,h_1200,w_2000/g5/g5-c-iqbdwwmq-oakland-management-multifamily-client/g5-cl-1j4zxgpzty-bolton-estates-apartments/uploads/BuildingPhoto_94_uhfkne.jpg",
        bedrooms: 3,
        description: "nice apartment",
        dailyRate: 350,
        shared: true,
        createdAt: "27/12/2018"
        },
        {
        id: "2",
        title: "Comfortable Apartment",
        city: "New Jersey",
        street: "new york times",
        category: "condo",
        image: "https://res.cloudinary.com/g5-assets-cld/image/upload/x_5,y_103,h_897,w_1495,c_crop/q_auto,f_auto,fl_lossy,g_center,h_1200,w_2000/g5/g5-c-iqbdwwmq-oakland-management-multifamily-client/g5-cl-1j4zxgpzty-bolton-estates-apartments/uploads/BuildingPhoto_94_uhfkne.jpg",
        bedrooms: 3,
        description: "nice apartment",
        dailyRate: 162,
        shared: true,
        createdAt: "27/12/2018"
        },
        {
          id: "3",
          title: "Nice Apartment",
          city: "New Dheli",
          street: "new york times",
          category: "condo",
          image: "https://res.cloudinary.com/g5-assets-cld/image/upload/x_5,y_103,h_897,w_1495,c_crop/q_auto,f_auto,fl_lossy,g_center,h_1200,w_2000/g5/g5-c-iqbdwwmq-oakland-management-multifamily-client/g5-cl-1j4zxgpzty-bolton-estates-apartments/uploads/BuildingPhoto_94_uhfkne.jpg",
          bedrooms: 3,
          description: "nice apartment",
          dailyRate: 100,
          shared: true,
          createdAt: "27/12/2018"
          }
    ];
    
    public getRentalById(rentalId: string ): Observable<Rental> {
        return new Observable<Rental>((observer) => {
            setTimeout(() => {
                const foundRental = this.rentals.find((rental) => {
                    return rental.id == rentalId;
                });
                observer.next(foundRental);
            }, 500);
        });
    }

    public getRentals(): Observable<Rental[]> {
        return new Observable<Rental[]>((observer) => {
            setTimeout(() => {
                observer.next(this.rentals);
            }, 100);
        });
        
    }
}
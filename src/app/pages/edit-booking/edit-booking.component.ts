import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingI } from 'src/app/models/interfaces';
import { AccommodationService } from 'src/app/services/accommodation.service';

@Component({
  selector: 'app-edit-booking',
  templateUrl: './edit-booking.component.html',
  styleUrls: ['./edit-booking.component.scss']
})
export class EditBookingComponent {
  _id!: any;
  booking!: BookingI;

  constructor(private accommodationService: AccommodationService,private activatedRoute: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this._id = String(params.get('_id'));
    })

    this.accommodationService.getBookingsByID(this._id).subscribe((data: any) => {
      this.booking = data;
      console.log(this.booking);
      
    })
  }
  editBooking(){
    this.accommodationService.setBookings(this.booking, this._id);
    this.router.navigate(["/detailBooking"]);
  }

  deleteBooking(){
    this.accommodationService.deleteBooking(this._id).subscribe((data) => {
      alert("Reserva cancelada");
      this.router.navigate(["/profile"]);
    })
  }

}

import { Component } from '@angular/core';
import { AmazingTimePickerService } from 'amazing-time-picker';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 

  public selectedTime: string;

    constructor( private atp: AmazingTimePickerService ) { }

    open() {
        const amazingTimePicker = this.atp.open();
        amazingTimePicker.afterClose().subscribe(time => {
            this.selectedTime = time;
            console.log(this.selectedTime);
        });
    }

}

import { Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {

  @ViewChild('dateFilter') private dateFilter: any;
  date: Date | undefined;
  rangeDates: Date[] =[];
  text:string | undefined;
  formGroup: FormGroup<any>;

  public onDatesRangeFilterSelected(selectedValue: Date) {
    if (this.rangeDates[1]) { // If second date is selected
        this.dateFilter.hideOverlay()
    };
}

constructor(){
  this.formGroup = new FormGroup({
    text_2: new FormControl()
  })
}

ngOnInit(): void {
console.log(this.formGroup.get('text'));
}


}

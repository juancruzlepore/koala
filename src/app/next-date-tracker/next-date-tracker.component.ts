import {Component, OnInit} from '@angular/core';
import {HttpService} from '../http.service';
import {MatDialog} from '@angular/material';
import {AddDateDialogComponent} from '../add-date-dialog/add-date-dialog.component';
import {isUndefined} from 'util';

export interface DateRange{
  dateStart: Date;
  dateEnd: Date;
}

@Component({
  selector: 'app-next-date-tracker',
  templateUrl: './next-date-tracker.component.html',
  styleUrls: ['./next-date-tracker.component.css', '../app.component.css'],
  entryComponents: [AddDateDialogComponent],
})
export class NextDateTrackerComponent implements OnInit {
  lastDate: Date;
  dateDifference: Date;
  isThereNextDate: boolean;
  differenceInMilliseconds: number;
  title = 'koala';

  constructor(private httpService: HttpService, public dialog: MatDialog) {
    this.httpService.getLastDate().subscribe((data: string) => {
      if (data == 'None') {
        this.isThereNextDate = false;
      } else {
        this.isThereNextDate = true;
        this.lastDate = new Date(data);
        this.differenceInMilliseconds = this.lastDate.getTime() - Date.now();
        this.dateDifference = new Date(this.differenceInMilliseconds);
      }
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddDateDialogComponent, {
      width: '350px',
      data: {dateStart: new Date(), dateEnd: new Date()}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(!isUndefined(result)){
        const newRange = result as DateRange;
        console.log(result);
        this.addDate(newRange.dateStart, newRange.dateEnd)
      }
    });
  }

  addDate(dateStart: Date, dateEnd: Date) {
    this.httpService.addDate(dateStart, dateEnd).subscribe();
  }

  ngOnInit() {
  }

}

import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DateRange} from '../next-date-tracker/next-date-tracker.component';

@Component({
  selector: 'app-add-date-dialog',
  templateUrl: './add-date-dialog.component.html',
  styleUrls: ['./add-date-dialog.component.css']
})
export class AddDateDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddDateDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DateRange) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onClickSave(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}

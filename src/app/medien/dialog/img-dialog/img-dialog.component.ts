import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-img-dialog',
  templateUrl: './img-dialog.component.html',
  styleUrls: ['./img-dialog.component.css']
})
export class ImgDialogComponent implements OnInit {

  data: any;

  constructor(@Inject(MAT_DIALOG_DATA) data: any) {
    this.data = data;
  }

  ngOnInit(): void {
  }

}

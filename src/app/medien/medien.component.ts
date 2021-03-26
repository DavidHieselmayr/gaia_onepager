import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {ImgDialogComponent} from './dialog/img-dialog/img-dialog.component';

interface Img {
  imgurl: string;
}

@Component({
  selector: 'app-medien',
  templateUrl: './medien.component.html',
  styleUrls: ['./medien.component.css']
})
export class MedienComponent implements OnInit {

  mediatopic: number;

  constructor(private dialog: MatDialog) {
    this.mediatopic = 0; // 0 screenshots, 1 videos
  }

  ngOnInit(): void {
  }

  openDialog(imgurlstring: string): void {
    console.log('openDialogMedien');
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.height = '600px';
    dialogConfig.width = '800px';

    dialogConfig.data = {
      imgurl: imgurlstring
    };

    console.log(dialogConfig);
    const dialogRef = this.dialog.open(ImgDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => console.log('Dialog output:', data)
    );
  }

  setMediaTopic(mediatopic: number): void {
    console.log(mediatopic);
    this.mediatopic = mediatopic;
  }
}

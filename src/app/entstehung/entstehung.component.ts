import {Component, OnInit} from '@angular/core';
import {faLandmark} from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-entstehung',
    templateUrl: './entstehung.component.html',
    styleUrls: ['./entstehung.component.css']
})
export class EntstehungComponent implements OnInit {
    fontAwesome = [faLandmark];


    constructor() {
    }

    ngOnInit(): void {
    }

}

import {Component, OnInit} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {MedienComponent} from '../medien/medien.component';

@Component({
    selector: 'app-trailer',
    templateUrl: './trailer.component.html',
    styleUrls: ['./trailer.component.css']
})
export class TrailerComponent implements OnInit {
    private safeURL: SafeResourceUrl;

    /*public trailerHeight: number | undefined;
    public trailerWidth: number | undefined;*/

    constructor(private sanitizer: DomSanitizer, private medienparm: MedienComponent) {
        this.safeURL = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/watch?v=MuXEgxl__Po&ab_channel=LeFloid');
    }

    ngOnInit(): void {
        /*
        // @ts-ignore
        this.trailerHeight = document.getElementById('trailerBox').clientHeight - document.getElementById('headline').clientHeight;
        // @ts-ignore
        this.trailerWidth = document.getElementById('trailerBox').clientWidth;*/
    }
}

import {Component, OnInit} from '@angular/core';

interface SelectedPlatform {
    value: string;
    viewValue: string;
}

interface SelectedEdition {
    value: string;
    viewValue: string;
}

@Component({
    selector: 'app-download',
    templateUrl: './download.component.html',
    styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit {
    selectedValue: string | undefined;

    selectedPlatform: SelectedPlatform[] = [
        {value: 'pc-0', viewValue: 'PC'}
    ];

    selectedEdition: SelectedEdition[] = [
        {value: 'ed-20', viewValue: 'Standard'},
        {value: 'ed-40', viewValue: 'Gold'},
        {value: 'ed-60', viewValue: 'Platin'},
        {value: 'ed-80', viewValue: 'Crystal'}
    ];

    constructor() {
        this.selectedValue = ' ';
    }

    ngOnInit(): void {
    }

    buy(): void {
        window.open('http://192.168.0.17:8000/source/Gaia.zip', '_self');
    }
}

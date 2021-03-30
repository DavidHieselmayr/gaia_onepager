import {Component, OnInit} from '@angular/core';
import {faCoffee, faSearch, faSearchPlus} from '@fortawesome/free-solid-svg-icons';
import {IconDefinition} from '@fortawesome/fontawesome-common-types';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {CourseDialogComponentComponent} from './dialog/course-dialog-component/course-dialog-component.component';

interface User {
    id: number;
    name: string;
    beschreibung: string;
    imgurl: string;
}

@Component({
    selector: 'app-team',
    templateUrl: './team.component.html',
    styleUrls: ['./team.component.css']
})

export class TeamComponent implements OnInit {
    fontAwesome: IconDefinition[] = [faCoffee, faSearch, faSearchPlus];

    users: User[] = [
        {
            id: 0,
            name: 'David Hieselmayr',
            beschreibung: 'alt',
            imgurl: 'assets/images/placeholder/images/Portrait_acele.webp'
        },
        {
            id: 1,
            name: 'John Lim',
            beschreibung: 'kreativ',
            imgurl: 'assets/images/placeholder/images/Portrait_aliiz.webp'
        },
        {
            id: 2,
            name: 'Fabian Häubl',
            beschreibung: 'sport',
            imgurl: 'assets/images/placeholder/images/Portrait_andre.webp'
        },
        {
            id: 3,
            name: 'Florian Beckerle',
            beschreibung: 'implo',
            imgurl: 'assets/images/placeholder/images/Portrait_annete.webp'
        }
    ];

    constructor(private dialog: MatDialog) {
    }

    ngOnInit(): void {
    }

    openDialog(userid: number): void {
        const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;
        dialogConfig.height = '400px';
        dialogConfig.width = '600px';

        dialogConfig.data = {
            user: this.findCorrectUser(userid)
        };

        console.log(dialogConfig);
        const dialogRef = this.dialog.open(CourseDialogComponentComponent, dialogConfig);

        dialogRef.afterClosed().subscribe(
            data => console.log('Dialog output:', data)
        );
    }

    findCorrectUser(userid: number): any {
        let user;
        for (user of this.users) {
            if (user.id === userid) {
                console.log(user);
                return user;
            }
        }
    }
}

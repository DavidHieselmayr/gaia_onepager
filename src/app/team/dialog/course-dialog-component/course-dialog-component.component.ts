import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';


@Component({
    selector: 'app-course-dialog-component',
    templateUrl: './course-dialog-component.component.html',
    styleUrls: ['./course-dialog-component.component.css']
})
export class CourseDialogComponentComponent implements OnInit {
    // @ts-ignore
    form: FormGroup;
    data: any;

    // tslint:disable-next-line:max-line-length
    constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<CourseDialogComponentComponent>, @Inject(MAT_DIALOG_DATA) data: any) {

        this.data = data;
    }

    ngOnInit(): void {
        this.form = this.fb.group({
            data: [this.data, []]
        });
    }

    save(): void {
        // @ts-ignore
        this.dialogRef.close(this.form.value);
    }

    close(): void {
        this.dialogRef.close();
    }
}

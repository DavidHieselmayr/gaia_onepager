import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavComponent} from './nav/nav.component';
import {TrailerComponent} from './trailer/trailer.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {DownloadComponent} from './download/download.component';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {StoryComponent} from './story/story.component';
import {TeamComponent} from './team/team.component';
import {EntstehungComponent} from './entstehung/entstehung.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {CourseDialogComponentComponent} from './team/dialog/course-dialog-component/course-dialog-component.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MedienComponent} from './medien/medien.component';
import {ImgDialogComponent} from './medien/dialog/img-dialog/img-dialog.component';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        TrailerComponent,
        DownloadComponent,
        StoryComponent,
        TeamComponent,
        EntstehungComponent,
        CourseDialogComponentComponent,
        MedienComponent,
        ImgDialogComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        BrowserAnimationsModule,
        MatDialogModule,
        MatSelectModule,
        MatCheckboxModule,
        FontAwesomeModule,
        MatFormFieldModule,
        MatInputModule,
        MatGridListModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}

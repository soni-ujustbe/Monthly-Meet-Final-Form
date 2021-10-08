import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { MonthlyMeetComponent } from './monthly-meet/monthly-meet.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
// import { HttpClientModule } from '@angular/common/http';
import { MeetAppComponent } from './meet-app/meet-app.component';


@NgModule({
  declarations: [
    AppComponent,
    MeetAppComponent,
    MonthlyMeetComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase)

  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }

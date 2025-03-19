import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // ✅ Import this
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';
import { routes } from 'src/app/app.routes'; // Ensure routes are imported
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes), // ✅ Add this to enable router features
    FormsModule,
    
  ],
  providers: [AppComponent,HomeComponent],
  bootstrap: []
})
export class AppModule {}

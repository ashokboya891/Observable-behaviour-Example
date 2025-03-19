import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true, // ✅ Mark as standalone
  imports: [RouterModule], // ✅ Import RouterModule
})
export class AppComponent {}

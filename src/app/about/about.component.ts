import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent {
  id: string | null = '';

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
  }
}

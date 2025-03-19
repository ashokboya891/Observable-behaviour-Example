import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonService, Person } from 'src/app/servicews/PersonService'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true, // ✅ Mark as standalone
  imports: [CommonModule], // ✅ Import CommonModule
  })
export class HomeComponent implements OnInit {
  persons: Person[] = [];
  persons$ = this.personService.persons$; // ✅ Subscribe to observable

  constructor(public router: Router, private personService: PersonService) {}


  ngOnInit() {
    this.fetchPersons();
  }

  fetchPersons() {
    this.personService.getPersons().subscribe(data => {
      this.persons = data;
    });
  }

  editPerson(id: number) {
    this.router.navigate(['/edit', id]);
  }

  deletePerson(id: number) {
    if (confirm('Are you sure you want to delete this person?')) {
      this.personService.deletePerson(id).subscribe(() => {
        this.fetchPersons();
      });
    }
  }
  // ngOnInit() {
  //   this.personService.persons$.subscribe(data => {
  //     // debugger
  //     this.persons = data;
  //   });
  // }

  // editPerson(id: number) {
  //   this.router.navigate(['/edit', id]);
  // }

  // deletePerson(id: number) {
  //   if (confirm('Are you sure you want to delete this person?')) {
  //     this.personService.deletePerson(id);
  //   }
  // }
}

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { PersonService, Person } from 'src/app/servicews/PersonService';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  // standalone: true, // ✅ Standalone component
  // imports: [CommonModule, FormsModule, RouterModule], // ✅ Import required modules
})
export class EditComponent implements OnInit {
  person: Person = { id: 0, name: '', Dept: '', Fee: 0 };

  constructor(private route: ActivatedRoute, private router: Router, private personService: PersonService) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id !== 0) {
      this.personService.getPersonById(id).subscribe(person => {
        this.person = person;
      });
    }
  }
  updateFee(value: any) {
    this.person.Fee = Number(value);
  }
  
  savePerson() {
    this.personService.updatePerson(this.person).subscribe(() => {
      alert('Person saved successfully!');
      this.router.navigate(['/']);
    });
  }
  // person: Person = { id: 0, name: '', Dept: '', Fee: 0 }; // ✅ Ensure `id` exists

  // constructor(private route: ActivatedRoute, public router: Router, private personService: PersonService) {}

  // ngOnInit() {
  //   const id = Number(this.route.snapshot.paramMap.get('id'));
  //   if (id) {
  //     this.personService.getPersonById(id).subscribe(person => {
  //       this.person = person;
  //     });
  //   }
  // }

  // savePerson() {
  //   if (!this.person || !this.person.id) {
  //     alert('Invalid person data: Missing ID');
  //     return;
  //   }

  //   this.personService.updatePerson(this.person).subscribe(() => {
  //     alert('Person updated successfully!');
  //     this.router.navigate(['/']);
  //   });
  // }
}

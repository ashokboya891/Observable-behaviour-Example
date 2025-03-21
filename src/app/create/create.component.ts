import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Person, PersonService } from '../servicews/PersonService';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create',
  // standalone: true,
  // imports: [CommonModule],
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
 person: Person = { id: 0, name: '', Dept: '', Fee: 0 };

  constructor(private route: ActivatedRoute, private router: Router, private personService: PersonService) {}

  savePerson()
  {
    this.personService.addPerson(this.person).subscribe(()=>{
      alert('Person added successfully!');
      this.router.navigate(['/']);
    })
  }

}

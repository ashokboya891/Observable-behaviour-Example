import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface Person {
  id: number;
  name: string;
  Dept:string;
  Fee:number;
}

@Injectable({
  providedIn: 'root',
})
export class PersonService {

  private apiUrl='http://localhost:3000/persons';

  
  private persons: Person[] = [
    { id: 1, name: 'Alice',Dept:'EEE',Fee:2000 },
    { id: 2, name: 'Bob',Dept:'ECE',Fee:3000  },
    { id: 3, name: 'Charlie',Dept:'Mech',Fee:4000  },
  ];

  private personsSubject = new BehaviorSubject<Person[]>([]);
  persons$ = this.personsSubject.asObservable();
  
  constructor(private http: HttpClient) {
    this.loadPersons(); // ✅ Load initial data
  }

  /** 🔹 Load Persons from API and update the BehaviorSubject */
  private loadPersons() {
    this.http.get<Person[]>(this.apiUrl).subscribe((persons) => {
      this.personsSubject.next(persons);
      // this.persons=persons
    });
  }

  // getPersonById(id: number): Person | undefined {
  //   return this.persons.find((p) => p.id === id);
  // }

  // updatePerson(updatedPerson: Person) {
  //   const index = this.persons.findIndex((p) => p.id === updatedPerson.id);
  //   if (index !== -1) {
  //     this.persons[index] = updatedPerson;
  //     this.personsSubject.next([...this.persons]);
  //   }
  // }

  // deletePerson(id: number) {
  //   this.persons = this.persons.filter((p) => p.id !== id);
  //   this.personsSubject.next([...this.persons]);
  // }

  getPersons(): Observable<Person[]> {
    return this.persons$; // ✅ Use the observable
  }

  getPersonById(id: number): Observable<Person> {
    return this.http.get<Person>(`${this.apiUrl}/${id}`);
  }
  /** 🔹 Add a new Person and refresh the list */
  addPerson(person: Person): Observable<Person> {
    return this.http.post<Person[]>(`${this.apiUrl}`, person).pipe(
      map((persons)=>{
        const maxid=this.persons.length?Math.max(...this.persons.map(o=>o.id)):0
        person.id=maxid+1
        return person;
      }),
      tap(() => this.loadPersons()) // ✅ Reload the list
    );
  }

  
  /** 🔹 Update an existing Person and refresh the list */
  updatePerson(person: Person): Observable<Person> {
    return this.http.put<Person>(`${this.apiUrl}/${person.id}`, person).pipe(
      tap(() => this.loadPersons()) // ✅ Reload the list
    );
  }
   /** 🔹 Delete a Person and refresh the list */
   deletePerson(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      tap(() => this.loadPersons()) // ✅ Reload the list
    );
  }
  
  // ✅ 1. Fetch CSRF Token (Must call before sending POST/PUT/DELETE)
  fetchCsrfToken(): void {
    this.http.get<{ token: string }>(`https://localhost:7142/api/person/get-csrf-token`).subscribe(response => {
      document.cookie = `XSRF-TOKEN=${response.token}; path=/`; // Store token in a cookie
    });
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  role = 'admin'

  constructor() { }

  getUserRole() {
    return this.role;
  }

}

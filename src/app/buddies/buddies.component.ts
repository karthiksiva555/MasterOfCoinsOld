import { Component, OnInit } from '@angular/core';
import { Buddy } from '../models/buddy';

@Component({
  selector: 'app-buddies',
  templateUrl: './buddies.component.html',
  styleUrls: ['./buddies.component.css']
})
export class BuddiesComponent implements OnInit {

  buddies: Buddy[] = [
    new Buddy(1,"Narisetty","Siva","May 24, 1989", "karthik.siva555@gmail.com"),
    new Buddy(2,"Narisetty","Karthik","Dec 21, 1992", "testEmail@gmail.com"),
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}

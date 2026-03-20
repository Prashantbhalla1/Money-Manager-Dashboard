import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }
  userData
  userName
  ngOnInit() {
    this.userData=JSON.parse( localStorage.getItem("user"));
    this.userName=this.userData['fullName'];
  }

}

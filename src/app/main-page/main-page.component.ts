import { Component, OnInit } from '@angular/core';
import { LeafController1Service } from '../services/leaf-controller1.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private leaf1: LeafController1Service) { }

  ngOnInit(): void {
  }
  onclick1() {
    //window.alert("clicked");
    this.leaf1.getLeafJSONentries().subscribe(
      data => {
        console.log(data);

      },
      error => {
        console.log(error);
      }
    )

  }
  onclick2() {
    //window.alert("clicked");
    this.leaf1.getLeafJSONbyid(2).subscribe(
      data => {
        console.log(data);

      },
      error => {
        console.log(error);
      }
    )

  }

  onclick3() {
    //window.alert("clicked");
    this.leaf1.getLeafJSONbyname("Milo").subscribe(
      data => {
        console.log(data);

      },
      error => {
        console.log(error);
      }
    )

  }

  onclick4() {
    //window.alert("clicked");
    this.leaf1.getLeafJSONbySex("F").subscribe(
      data => {
        console.log(data);

      },
      error => {
        console.log(error);
      }
    )

  }

}

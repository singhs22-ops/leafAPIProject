import { Component, OnInit } from '@angular/core';
import { LeafController1Service } from '../services/leaf-controller1.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {


  data1:any;
  queryid: number = 1;
  defaultactionTypeid: number = 1;
  actionTypesid: number[];
  queryName: String ;
  defaultactionTypename: String = "Milo";
  actionTypesname:String[];
  queryGender: String = "F";
  defaultactionTypegender: String;
  actionTypesGender:String[];


  constructor(private leaf1: LeafController1Service) { }

  ngOnInit(): void {

    this.onclick1();
    
  }

  changeDefaultaction2(event){
    this.queryid = event.target.value;
    console.log("HERE"+this.queryid);
    this.defaultactionTypeid= this.queryid;

  }
  changeDefaultaction3(event){
    this.queryName = event.target.value;
    console.log("HERE"+this.queryName);
    this.defaultactionTypename= this.queryName;

  }
  changeDefaultaction4(event){
    this.queryGender = event.target.value;
    console.log("HERE"+this.queryGender);
    this.defaultactionTypegender= this.queryGender;

  }
  onclick1() {
    //window.alert("clicked");
    this.leaf1.getLeafJSONentries().subscribe(
      data => {
        this.data1 = data['result'];
        console.log("datafulresult"+JSON.stringify(this.data1));

        this.actionTypesname = this.data1['name'];

        console.log(JSON.stringify(this.actionTypesname));
        this.actionTypesid= this.data1.Id;
        console.log("Id"+JSON.stringify(this.actionTypesid));
        this.actionTypesGender= this.data1['sex'];
        console.log(JSON.stringify(this.actionTypesGender));        
        console.log(data);

      },
      error => {
        console.log(error);
      }
    )

  }
  onclick2() {
    //window.alert("clicked");

    this.leaf1.getLeafJSONbyid(this.queryid).subscribe(
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
    this.leaf1.getLeafJSONbyname(this.queryName).subscribe(
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
    this.leaf1.getLeafJSONbySex(this.queryGender).subscribe(
      data => {
       
        console.log(data);

      },
      error => {
        console.log(error);
      }
    )

  }

}

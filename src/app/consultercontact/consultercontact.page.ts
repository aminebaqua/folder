import { Component, OnInit } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Component({
  selector: 'app-consultercontact',
  templateUrl: './consultercontact.page.html',
  styleUrls: ['./consultercontact.page.scss'],
})
export class ConsultercontactPage implements OnInit {

  code=''
  nom='';
  prenom='';
  email='';
  adresse='';
  telephone='';
  testmessage=this.prenom;



  databaseObj: SQLiteObject;
  row_data: any = [];
  readonly database_name: string = "ContactDB_datatable.db";
  readonly table_name: string = "Contacttable";

  constructor( ) {
  
   }

  /***************************************************/
  getOneRow() {
    this.databaseObj.executeSql("SELECT * FROM " + this.table_name+" WHERE pid = " +this.code,[])
    .then((res) => {
    if (res.rows.length > 0) {
    for (var i = 0; i < res.rows.length; i++) {
    this.row_data.push(res.rows.item(i));
    }
    this.nom=this.row_data(0);
    this.prenom=this.row_data(0);
    this.adresse=this.row_data(0);
    this.email=this.row_data(0);
    this.telephone=this.row_data(0);
    this.testmessage='teeest'
   alert(this.nom+"/"+this.prenom+"/"+this.adresse);
    }
    })
    .catch(e => {
    alert("error " + JSON.stringify(e)) });
    }
  /***************************************************/
  

  ngOnInit() {
  }

}

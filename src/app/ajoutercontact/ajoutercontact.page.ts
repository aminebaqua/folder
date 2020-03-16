import { Component, OnInit } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ajoutercontact',
  templateUrl: './ajoutercontact.page.html',
  styleUrls: ['./ajoutercontact.page.scss'],
})
export class AjoutercontactPage implements OnInit {
  

  code=''
  nom='';
  prenom='';
  email='';
  adresse='';
  telephone='';
  testmessage=this.nom;
    
  databaseObj: SQLiteObject;
  name_model: string = "";
  row_data: any = [];
  readonly database_name: string = "ContactDB_datatable.db";
  readonly table_name: string = "Contacttable";


  constructor(private router: Router) { }

  
  insertRow() {
    if (this.nom==''||this.prenom==''||this.adresse==''||this.email==''||this.telephone=='') {
    alert("Enter all informations please");
    return;
    }else{
    this.databaseObj.executeSql('INSERT INTO Contacttable ( VALUES ("' + this.nom + '","'+this.prenom+'","'+this.adresse+'","'+this.email+'",'+parseInt(this.telephone)+')', [])
    .then(() => {alert('Row Inserted!');
   /* this.getRows();*/
    this.router.navigate(['/listecontacts']);
    }) .catch(e => { alert("error " + JSON.stringify(e)) });
    }}
    /***************************************************/
    getRows() {
      this.databaseObj.executeSql("SELECT * FROM " + this.table_name+" WHERE pid = " +this.code,[])
      .then((res) => {
      this.row_data = [];
      if (res.rows.length > 0) {
      for (var i = 0; i < res.rows.length; i++) {
      this.row_data.push(res.rows.item(i));
      }
      }
      })
      .catch(e => {
      alert("error " + JSON.stringify(e)) });
      }
    /***************************************************/
  


  ngOnInit() {
  }

}

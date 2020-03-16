import { Component, OnInit } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-listecontacts',
  templateUrl: './listecontacts.page.html',
  styleUrls: ['./listecontacts.page.scss'],
})
export class ListecontactsPage implements OnInit {
  name_model: string = "";
  databaseObj: SQLiteObject;
  row_data: any = [];
  readonly database_name: string = "ContactDB_datatable.db";
  readonly table_name: string = "Contacttable";

  

  constructor() { }

  getRows() {
    this.databaseObj.executeSql("SELECT * FROM " + this.table_name, [])
      .then((res) => {
        this.row_data = [];
        if (res.rows.length > 0) {
          for (var i = 0; i < res.rows.length; i++) {
            this.row_data.push(res.rows.item(i));
          }
        }
      })
      .catch(e => {
        alert("error " + JSON.stringify(e))
      });
  }
  ngOnInit() {
  }

}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ActivatedRoute } from '@angular/router';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Platform } from '@ionic/angular';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SQLite,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  name_model: string = "";
  databaseObj: SQLiteObject;
  row_data: any = [];
  readonly database_name: string = "ContactDB_datatable.db";
  readonly table_name: string = "Contacttable";
  
  constructor(private activatedRoute: ActivatedRoute,
    private platform: Platform,
    private sqlite: SQLite
  ) {
    this.platform.ready().then(() => {
      this.createDB();
    }).catch(error => {
      console.log(error);
    })
  }
  createDB() {
   
    this.sqlite.create({
      name: this.database_name,
      location: 'default'
    })
      .then((db: SQLiteObject) => {
        alert('Database Created!');
        this.databaseObj = db;
        this.createTable();
      })
      .catch(e => {
        alert("error " + JSON.stringify(e))
      });
  }
 
  createTable() {
    this.databaseObj.executeSql('CREATE TABLE IF NOT EXISTS ' +
    this.table_name + ' (pid INTEGER PRIMARY KEY AUTOINCREMENT , nom varchar(255),prennom varchar(255),adresse varchar(255),email varchar(255),telephone INTEGER )',[])
    .then(() => {alert('Contacttable Table Created!');
      })
      .catch(e => {
        alert("error " + JSON.stringify(e))
      });
  }
 
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
 
  deleteRow(item) {
    this.databaseObj.executeSql("DELETE FROM " + this.table_name + " WHERE pid = " + item.pid, [])
      .then((res) => {
        alert("Row Deleted!");
        this.getRows();
      })
      .catch(e => {
        alert("error " + JSON.stringify(e))
      });
  }
 
}

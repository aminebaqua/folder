
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
 

  constructor(private activatedRoute: ActivatedRoute) { }
  
 
 
 
  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  
  }
 
}
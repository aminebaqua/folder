import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AjoutercontactPage } from './ajoutercontact.page';

describe('AjoutercontactPage', () => {
  let component: AjoutercontactPage;
  let fixture: ComponentFixture<AjoutercontactPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutercontactPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AjoutercontactPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

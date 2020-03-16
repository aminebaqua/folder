import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConsultercontactPage } from './consultercontact.page';

describe('ConsultercontactPage', () => {
  let component: ConsultercontactPage;
  let fixture: ComponentFixture<ConsultercontactPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultercontactPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConsultercontactPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

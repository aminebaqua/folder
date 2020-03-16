import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListecontactsPage } from './listecontacts.page';

describe('ListecontactsPage', () => {
  let component: ListecontactsPage;
  let fixture: ComponentFixture<ListecontactsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListecontactsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListecontactsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

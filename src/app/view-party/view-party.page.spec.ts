import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { ViewPartyPageRoutingModule } from './view-party-routing.module';
import { ViewPartyPage } from './view-party.page';

describe('ViewPartyPage', () => {
  let component: ViewPartyPage;
  let fixture: ComponentFixture<ViewPartyPage>;

  beforeEach( async () => {
    TestBed.configureTestingModule({
      declarations: [ ViewPartyPage ],
      imports: [IonicModule.forRoot(), ViewPartyPageRoutingModule, RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewPartyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

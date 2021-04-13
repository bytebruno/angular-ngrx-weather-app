import { ComponentFixture, TestBed } from '@angular/core/testing'

import { MainLayoutComponent } from './main-layout.component'
import { MatToolbarModule } from '@angular/material/toolbar'
import { RouterTestingModule } from '@angular/router/testing'

describe('MainLayoutComponent', () => {
  let component: MainLayoutComponent
  let fixture: ComponentFixture<MainLayoutComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatToolbarModule, RouterTestingModule],
      declarations: [MainLayoutComponent],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(MainLayoutComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

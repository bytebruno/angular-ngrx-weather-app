import { ComponentFixture, TestBed } from '@angular/core/testing'

import { CityCardComponent } from './city-card.component'
import { RouterTestingModule } from '@angular/router/testing'

describe('CityCardComponent', () => {
  let component: CityCardComponent
  let fixture: ComponentFixture<CityCardComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [CityCardComponent],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(CityCardComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

const routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'weather',
  },
  {
    path: 'weather',
    loadChildren: () =>
      import('./features/weather/weather.module').then((m) => m.WeatherModule),
  },
  {
    path: '**',
    redirectTo: 'weather',
  },
]
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}

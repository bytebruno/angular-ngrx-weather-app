import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { CoreModule } from './core/core.module'
import { NgModule } from '@angular/core'

@NgModule({
  declarations: [AppComponent],
  imports: [CoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

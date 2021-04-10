import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser'
import { EffectsModule } from '@ngrx/effects'
import { HttpClientModule } from '@angular/common/http'
import { MainLayoutComponent } from './layout/main-layout/main-layout.component'
import { MatToolbarModule } from '@angular/material/toolbar'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { StoreModule } from '@ngrx/store'

@NgModule({
  declarations: [MainLayoutComponent],
  imports: [
    // vendor
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,

    // ngrx
    EffectsModule.forRoot([]),
    StoreModule.forRoot({}, {}),

    // material
    MatToolbarModule,
  ],
  exports: [MainLayoutComponent],
})
export class CoreModule {}

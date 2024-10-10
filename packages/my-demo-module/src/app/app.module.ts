import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MyTestModule } from 'my-lib';

// import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts';
import 'echarts-gl';

console.log(echarts);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyTestModule.forRoot(),
    // NgxEchartsModule.forRoot({
    // echarts,
    // }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

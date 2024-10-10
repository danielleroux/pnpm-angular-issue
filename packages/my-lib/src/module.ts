import { ModuleWithProviders, NgModule } from '@angular/core';
import { MyTestComponent } from './my-test.component';

@NgModule({
  declarations: [MyTestComponent],
  exports: [MyTestComponent],
})
export class MyTestModule {
  static forRoot(): ModuleWithProviders<MyTestModule> {
    return {
      ngModule: MyTestModule,
      providers: [],
    };
  }
}

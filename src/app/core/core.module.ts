import { HttpClientModule } from '@angular/common/http';
import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf
} from '@angular/core';

@NgModule({
  imports: [HttpClientModule]
})
export class CoreModule {
  public static forRoot (): ModuleWithProviders {
    return { ngModule: CoreModule };
  }

  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule != undefined) {
      throw new Error('CoreModule has already been imported. Only import CoreModule in the root AppModule');
    }
  }
}

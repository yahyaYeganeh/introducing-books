import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DataService } from './services/data.service';
import { EnsureModuleLoadedOnceGuard } from './ensure-module-loaded-once.guard';
import { NavbarComponent } from './navbar/navbar.component';
import { TrackByService } from './services/trackby.service';
import { FilterService } from './services/filter.service';
import { SorterService } from './services/sorter.service';
import { MockDataService2 } from './services/MockDataService2';


@NgModule({
  imports: [CommonModule, RouterModule, HttpClientModule],
  exports: [ RouterModule, HttpClientModule, NavbarComponent,],
  declarations: [NavbarComponent],
  providers: [SorterService,FilterService,TrackByService,
   { provide: DataService, useClass: MockDataService2 },
    { provide: 'Window', useFactory: () => window }]
    
})
 export class CoreModule extends EnsureModuleLoadedOnceGuard {    // Ensure that CoreModule is only loaded into AppModule

   // Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
   constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
     super(parentModule);
   }

}




import { NgModule } from '@angular/core';
import { MapComponent } from './map.component';
import { AgmCoreModule } from '@agm/core';
import { NgPipesModule } from 'ngx-pipes';

import { MapService } from './map.service';

@NgModule({
  declarations: [
      MapComponent
  ],
  exports:[
      MapComponent
  ],
  imports: [
    NgPipesModule,
    AgmCoreModule.forRoot({
        apiKey: 'AIzaSyB7EIvSPHDaC41M8V9ddX1J4wdyIsXifPk'
    })
    ],
    providers: [
        MapService
    ]

})
export class MapModule { }

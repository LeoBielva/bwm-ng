import { NgModule } from '@angular/core';
import { MapComponent } from './map.component';
import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common'; 
import { NgPipesModule } from 'ngx-pipes';
import { CamelizePipe } from 'ngx-pipes';

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

        apiKey: 'GOOGLE_MAPS_API'

    }),
    CommonModule
    ],
    providers: [
        MapService,
        CamelizePipe
    ]

})
export class MapModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ConfigService } from './services/config/config.service';
import { CrudRoutingModule } from './crud-routing.module';
import { CrudComponent } from './crud.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    CrudRoutingModule
  ],
  declarations: [CrudComponent],
  providers: [
    ConfigService,
  ],
  exports: [
    CrudComponent,
  ],
})
export class CrudModule { }

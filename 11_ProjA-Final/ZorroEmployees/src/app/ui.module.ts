import { NgModule } from '@angular/core';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzNotificationModule } from 'ng-zorro-antd/notification';



let modules = [
  NzLayoutModule,
  NzSpinModule,
  NzCardModule,
  NzGridModule,
  NzIconModule, 
  NzToolTipModule,
  NzSelectModule,
  NzDividerModule,
  NzButtonModule,
  NzPaginationModule,
  NzRadioModule,
  NzFormModule,
  NzInputModule,
  NzNotificationModule
]

@NgModule({
  declarations: [],
  imports: modules,
  exports: modules
})
export class UiModule { }

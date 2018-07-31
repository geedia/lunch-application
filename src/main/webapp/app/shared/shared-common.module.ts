import { NgModule } from '@angular/core';

import { LunchApplicationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [LunchApplicationSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [LunchApplicationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class LunchApplicationSharedCommonModule {}

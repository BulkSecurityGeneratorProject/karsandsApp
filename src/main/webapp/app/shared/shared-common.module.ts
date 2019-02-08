import { NgModule } from '@angular/core';

import { KarsandsAppSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [KarsandsAppSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [KarsandsAppSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class KarsandsAppSharedCommonModule {}

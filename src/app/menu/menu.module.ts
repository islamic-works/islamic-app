import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { MenuComponent } from "./menu.component";

@NgModule({
  imports: [NativeScriptCommonModule],
  exports: [MenuComponent],
  declarations: [MenuComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class MenuModule {}

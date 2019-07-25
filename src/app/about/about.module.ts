import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { AboutRoutingModule } from "./about-routing.module";
import { AboutComponent } from "./about.component";

import { MenuModule } from "./../menu/menu.module";

@NgModule({
  imports: [NativeScriptCommonModule, AboutRoutingModule, MenuModule],
  declarations: [AboutComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AboutModule {}

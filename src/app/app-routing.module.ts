import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

const routes: Routes = [
    { path: "", redirectTo: "/praytimes", pathMatch: "full" },
    { path: "glossary", loadChildren: "~/app/glossary/glossary.module#GlossaryModule" },
    { path: "about", loadChildren: "~/app/about/about.module#AboutModule" },
    { path: "news", loadChildren: "~/app/rss-reader/rss-reader.module#RssReaderModule" },
    { path: "praytimes", loadChildren: "~/app/pray-times/pray-times.module#PrayTimesModule" }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }

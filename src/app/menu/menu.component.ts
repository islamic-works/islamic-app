import { Component, Input, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { registerElement } from "nativescript-angular/element-registry";

registerElement("Fab", () => require("nativescript-floatingactionbutton").Fab);

@Component({
  moduleId: module.id,
  selector: "ns-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"]
})
export class MenuComponent implements OnInit {
  @Input() active: string;
  prayTimesActive: string;
  mussalaActive: string;
  glossaryActive: string;
  aboutActive: string;
  newsActive: string;

  constructor(private routerExtensions: RouterExtensions) {}

  ngOnInit() {
    this.prayTimesActive = this.active === "prayTimes" ? "-active" : "";
    this.mussalaActive = this.active === "mussala" ? "-active" : "";
    this.glossaryActive = this.active === "glossary" ? "-active" : "";
    this.aboutActive = this.active === "about" ? "-active" : "";
    this.newsActive = this.active === "news" ? "-active" : "";
  }

  onNavItemTap(navItemRoute: string) {
    this.routerExtensions.navigate([navItemRoute], {
      transition: {
        name: "fade"
      }
    });
  }
}

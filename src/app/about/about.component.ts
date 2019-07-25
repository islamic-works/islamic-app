import { Component, OnInit } from "@angular/core";
import { Page } from "tns-core-modules/ui/page";
import { alert } from "tns-core-modules/ui/dialogs";
import * as Utility from "tns-core-modules/utils/utils";

import { AboutService } from "./about.service";
import { Sponsor } from "./sponsor";

@Component({
  moduleId: module.id,
  selector: "ns-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"]
})
export class AboutComponent implements OnInit {
  active: string;

  showVersionCounter: number = 4; // number of taps to show version  :-)

  constructor(private page: Page, private aboutService: AboutService) { }

  ngOnInit() {
    this.active = "about";
    this.page.actionBarHidden = true;

  }
  get team():string {
    return this.aboutService.team;
  }
  get appName(): string {
    let appName =  this.aboutService.appName;
    console.log("appName: ",appName);
    return appName;
  }
  get appDescription(): string {
    return this.aboutService.appDescription;
  }
  get version(): number {
    return this.aboutService.version;
  }
  get sponsors(): Sponsor[] {
    return this.aboutService.sponsors;
  }
  onAboutTap() {
    this.showVersionCounter--;
    if (this.showVersionCounter === 0) {
      const options = {
        title: "Version",
        message: this.aboutService.version.toString(),
        okButtonText: "OK"
      };
      alert(options).then(() => { });
    }
  }

  openUrl(url: string) {
    Utility.openUrl(url);
  }
  openEmail(email: string) {
    Utility.openUrl("mailto:" + email);
  }
}

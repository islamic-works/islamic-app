import { Injectable } from "@angular/core";

import { SettingsService } from "../services/settings.service";

import { Sponsor } from "./sponsor";

@Injectable()
export class AboutService {

  constructor(private settings: SettingsService) { }

  get team(): string {
    return this.settings.team;
  }

  get appDescription(): string{
    return this.settings.appDescription;
  }
  get appName(): string {
    return this.settings.appName;
  }


  get version(): number {
    return this.settings.version;
  }

  get sponsors(): Sponsor[] {
    return this.settings.sponsors;
  }
}

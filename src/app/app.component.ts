import { Component, VERSION } from "@angular/core";
import { YoutubersService } from "./youtubers.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Ani";
  youtubersList;
  like(name) {
    console.log("like " + name);
  }

  constructor(public youtubersService: YoutubersService) {
    this.youtubersList = this.youtubersService.getYoutubers();
  }
}

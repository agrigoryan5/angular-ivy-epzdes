import { Component, OnInit } from "@angular/core";
import { YoutubersService } from "../youtubers.service";

@Component({
  selector: "app-youtubers",
  templateUrl: "./youtubers.component.html",
  styleUrls: ["./youtubers.component.css"]
})
export class YoutubersComponent implements OnInit {
  youtubersList;

  constructor(public youtubersService: YoutubersService) {
    this.youtubersList = this.youtubersService.getYoutubers();
  }
  like(name) {
    console.log("like " + name);
  }

  ngOnInit() {}
}

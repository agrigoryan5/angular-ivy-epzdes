import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-new-component",
  templateUrl: "./new-component.component.html",
  styleUrls: ["./new-component.component.css"]
})
export class NewComponentComponent {
  constructor() {}
  @Input() varEnfant;
  @Output() notify = new EventEmitter();

}

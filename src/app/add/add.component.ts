import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: "app-add",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.css"]
})
export class AddComponent {
  checkoutForm;
  constructor(private formBuilder: FormBuilder) {
    this.checkoutForm = this.formBuilder.group({
      name: "",
      followers: 0,
      description: ""
    });
  }

  onSubmit(data) {
    console.warn("Your youtuber has been submittend", data);
    this.checkoutForm.reset();
  }
}

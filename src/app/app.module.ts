import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { NewComponentComponent } from "./new-component/new-component.component";
import { YoutubersService } from "./youtubers.service";
import { AddComponent } from "./add/add.component";
import { YoutubersComponent } from "./youtubers/youtubers.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: "", component: YoutubersComponent },
      { path: "youtubers", component: YoutubersComponent },
      { path: "add", component: AddComponent }
    ])
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    NewComponentComponent,
    AddComponent,
    YoutubersComponent
  ],
  bootstrap: [AppComponent],
  providers: [YoutubersService]
})
export class AppModule {}

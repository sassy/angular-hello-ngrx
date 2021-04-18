import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";

import { AppComponent } from "./app.component";
import { counterReducer } from "./counter.reducer";
import { MyCounterComponent } from "./my-counter/my-counter.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({ count: counterReducer })
  ],
  declarations: [AppComponent, MyCounterComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

// routes
import { APP_ROUTES } from "./app.route";

// modules
import { PagesModule } from "./pages/pages.module";

// components
import { AppComponent } from "./app.component";
import { NofoundpageComponent } from "./404/nofoundpage/nofoundpage.component";

@NgModule({
  declarations: [AppComponent, NofoundpageComponent],
  imports: [BrowserModule, APP_ROUTES, PagesModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

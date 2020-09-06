import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

// routes
import { PAGES_ROUTES } from "./pages.route";

// modules
import { SharedModule } from "../shared/shared.module";

// components
import { PagesComponent } from "./pages.component";
import { InicioComponent } from "./inicio/inicio.component";
import { InstalacionesComponent } from "./instalaciones/instalaciones.component";
import { ConsultorioComponent } from "./consultorio/consultorio.component";
import { CurriculumComponent } from "./curriculum/curriculum.component";
import { GimnasioComponent } from "./gimnasio/gimnasio.component";

@NgModule({
  declarations: [
    PagesComponent,
    InicioComponent,
    InstalacionesComponent,
    ConsultorioComponent,
    CurriculumComponent,
    GimnasioComponent
  ],
  imports: [BrowserModule, PAGES_ROUTES, SharedModule]
})
export class PagesModule {}

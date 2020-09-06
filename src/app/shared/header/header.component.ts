import { Component, Renderer2, ElementRef, ViewChild } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html"
})
export class HeaderComponent {
  isVerMenu: boolean;
  @ViewChild("menu", { static: true }) menu: ElementRef;
  @ViewChild("iconMenu", { static: true }) iconMenu: ElementRef;

  constructor(private renderer: Renderer2) {
    this.isVerMenu = false;
  } // fin del constructor

  funIconMenu() {
    let tamanioPantalla: number = window.screen.width;

    if (tamanioPantalla <= 900) {
      if (!this.isVerMenu) {
        this.renderer.removeClass(this.menu.nativeElement, "ocultarMenu");
        this.renderer.addClass(this.iconMenu.nativeElement, "fa-times-circle");
        this.renderer.addClass(this.menu.nativeElement, "mostrarMenu");
        this.isVerMenu = true;
      } else {
        this.renderer.removeClass(this.menu.nativeElement, "mostrarMenu");
        this.renderer.removeClass(
          this.iconMenu.nativeElement,
          "fa-times-circle"
        );
        this.renderer.addClass(this.menu.nativeElement, "ocultarMenu");
        this.isVerMenu = false;
      }
    }
  } // fin de la función funIconMenu
} // fin de la clase HeaderComponent

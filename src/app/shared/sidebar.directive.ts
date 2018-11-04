import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appSidebar]'
})
export class SidebarDirective {
  @HostBinding('class.show') isOpen = true;

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}


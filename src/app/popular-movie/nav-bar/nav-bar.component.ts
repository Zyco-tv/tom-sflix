import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  isInputHidden: boolean = true;
  search = '';
  @Output() change = new EventEmitter();

  constructor() {}
  onSubmit() {
    this.change.emit(this.search);
  }
  onTeamSwitchBtnClick(): void {
    this.isInputHidden = !this.isInputHidden;
  }
}

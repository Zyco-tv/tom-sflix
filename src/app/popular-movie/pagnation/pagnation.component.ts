import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'pagnation',
  templateUrl: './pagnation.component.html',
  styleUrls: ['./pagnation.component.css'],
})
export class PagnationComponent implements OnInit {
  @Input() Current: number = 0;
  @Input() Totalpages: number = 0;
  @Input() case: string = '';
  @Output() NextPage = new EventEmitter();
  @Output() PrevPage = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  onNextClick() {
    this.NextPage.emit({ current: this.Current, case: this.case });
  }
  onPrevClick() {
    this.PrevPage.emit({ current: this.Current, case: this.case });
  }
  disablePrevBtn(current: number) {
    return { disabled: current == 1 };
  }
  disableNextBtn(current: number) {
    return { disabled: current == this.Totalpages };
  }
}

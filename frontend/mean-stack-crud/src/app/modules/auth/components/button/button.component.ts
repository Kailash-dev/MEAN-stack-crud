import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() buttonLabel!: string;
  @Output() passValueToParent: EventEmitter<any> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  clickEvent(){
    this.passValueToParent.emit(true)
  }
}

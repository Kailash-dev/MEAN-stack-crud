import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
@Input() typeValue!: string
@Output() passValueToParent: EventEmitter<any> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  getValue(event: any){
    console.log(event)
    this.passValueToParent.emit({label:this.typeValue,changedValue: event.target.value})
  }
}

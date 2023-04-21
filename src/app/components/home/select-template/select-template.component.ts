import { Component, Input, OnInit } from '@angular/core';
import { Item_temp } from 'src/app/models/item_template';

@Component({
  selector: 'app-select-template',
  templateUrl: './select-template.component.html',
  styleUrls: ['./select-template.component.css']
})
export class SelectTemplateComponent implements OnInit {

  @Input() template: Item_temp = new Item_temp();

  constructor() { }

  ngOnInit(): void {
  }

}

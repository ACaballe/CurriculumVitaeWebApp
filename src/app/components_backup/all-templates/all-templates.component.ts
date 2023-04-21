import { Component, OnInit } from '@angular/core';
import { Item_temp } from 'src/app/models/item_template';
import { ServiceTemplatesService } from 'src/app/services/service-templates.service';

@Component({
  selector: 'app-all-templates',
  templateUrl: './all-templates.component.html',
  styleUrls: ['./all-templates.component.css']
})
export class AllTemplatesComponent implements OnInit {

  templates: Item_temp[] = [];
  numTemplates: number = 0;

  constructor( private templateService: ServiceTemplatesService ) { }

  ngOnInit(): void {
    this.templates = this.templateService.getTemplates();
    this.numTemplates = this.templateService.getNumTemplates();
  }

}

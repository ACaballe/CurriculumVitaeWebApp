import { Injectable } from '@angular/core';
import { Item_temp } from '../models/item_template';

@Injectable({
  providedIn: 'root'
})
export class ServiceTemplatesService {

  templates: Item_temp[] = [
    {
      id: 0,
      title: "New Template",
      url: "",
      img: "../../assets/img/new_template.png"
    },
    {
      id: 1,
      title: "Royal",
      url: "../template/royal",
      img: "../../assets/img/cv_CaballéArnau.png"
    }
  ];

  numTemplates: number = 0;

  constructor() {  }

  getTemplates(){

    return this.templates;

  }

  getNumTemplates(){
    let numTemplate = 0;
    
    this.templates.forEach(template => {
      numTemplate++;
    });

    return numTemplate;
  }

}
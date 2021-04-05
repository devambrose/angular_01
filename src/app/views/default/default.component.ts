import {Component} from "@angular/core";

@Component({
  selector:'default-app',
  templateUrl:'./default.component.ts.html',
  styleUrls:['./default.component.scss']
})

export class DefaultComponent{
 title='app'

  events=[
    {
      name:'Ambrose Weeding',
      data:'24th march 3030'
    }
  ]
}

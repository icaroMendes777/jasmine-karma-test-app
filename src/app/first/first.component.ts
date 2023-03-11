import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent {


  propOne:number = 1;

  propTwo:number = 2;

  name: string = 'nome';

  sum ():number
  {
    return (this.propOne + this.propTwo);
  }

  incrementProp1():void
  {
    this.propOne ++;
  }



}

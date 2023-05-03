import { Component } from '@angular/core';

@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.scss']
})
export class CreatenoteComponent {

  show = true;


  showHide() {
    this.show = !this.show

  }
}

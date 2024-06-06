import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})

export class SearchComponent {
  searchString:string=''
  showInstString:string=''
  showAfetClickString:string=''
  showdata:boolean=false

  onInputChange(e: Event){
    const target = e.target as HTMLInputElement; 
    this.searchString = target.value;
  }

  onInputChangeInst(e: Event) {
    const target = e.target as HTMLInputElement;
    this.showdata = false; 
    this.showAfetClickString = target.value; 
  }
  

  showAfetClick(){
    this.showdata=true
  }
}

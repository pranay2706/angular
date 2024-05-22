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

  onInputChange(e:any){
    this.searchString=e.target.value
    console.log(this.searchString)
  }

  onInputChangeInst(e:any){
    this.showdata=false
    this.showAfetClickString=e.target.value
  }

  showAfetClick(){
    this.showdata=true
  }


}

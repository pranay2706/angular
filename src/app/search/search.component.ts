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
  showdata:string=''

  onInputChange(e:any){
    this.searchString=e.target.value
    console.log(this.searchString)
  }

  onInputChangeInst(e:any){
    this.showInstString=e.target.value
  }

  showAfetClick(){
    this.showdata=this.showAfetClickString
  }


}

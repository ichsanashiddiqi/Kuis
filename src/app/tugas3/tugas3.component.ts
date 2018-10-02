import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tugas3',
  templateUrl: './tugas3.component.html',
  styles: [`.amin{
     color :white;
   }`]

})
export class Tugas3Component implements OnInit {
  kalimat;
  status;
  log=[];
  pnjg=this.log.length;


  constructor() { }

  ngOnInit() {
  }
  onClick(){
    this.log.push(this.log.length+1);
    if(this.status === false){
      this.kalimat = 'POLITEKNIK';
      this.status =true;
    }else{
      this.kalimat='';
      this.status=false;
    }
  }

}

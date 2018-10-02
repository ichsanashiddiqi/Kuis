import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tugas',
  templateUrl: './tugas.component.html',
  styleUrls: ['./tugas.component.css']
})
export class TugasComponent implements OnInit {
  usernameStatus = false;
  usernameHasil = 'Menampilkan Detail';
  usernameTampil = ' ';
  cektombol = true;

  constructor() {
    setTimeout(() =>{
      this.usernameStatus = true;
    },2000)
   }

  ngOnInit() {
  }

  Hasil(){
    this.usernameHasil = 'Tulisan username yang anda tulis ada di atas';
  }


  cekusername(event: Event) {
    this.usernameTampil = (<HTMLInputElement>event.target).value;
  }  
  
  cek(){
    if(this.usernameTampil == ' '){
      this.cektombol = true;
    }else{
      this.cektombol = false;
    }
  }
}



import { Component, OnInit } from '@angular/core';
import {Mahasiswa} from '../shared/mahasiswa';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  nim='';
  nama='';
  kelas='';
  daftarmhs:Mahasiswa[]= [];
  mhs;

  constructor() { }

  ngOnInit() {
  }
  tambahmhs(){
  this.mhs = new Mahasiswa(this.nim, this.nama, this.kelas);
  this.daftarmhs.push(this.mhs);
  this.nim='';
  this.nama='';
  this.kelas='';
  }

}

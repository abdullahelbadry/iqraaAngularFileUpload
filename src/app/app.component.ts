import { initializeApp } from 'firebase/app';
import { Component, OnInit } from '@angular/core';
import {  } from '../environments/environment'
import { firebaseConfig } from './firebase.config';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    initializeApp(firebaseConfig)
  }
  title = 'App Component';
}

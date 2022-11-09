import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title = 'Abdullah Elbadry IQRAA NETWORK Task';
  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

}

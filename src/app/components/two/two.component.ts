import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {
  user:string;
  constructor(private UserService:UserService) { }

  ngOnInit() {
    // this.user = this.UserService.getFristUser();
    this.UserService.cast.subscribe(user => this.user = user);
  }
}

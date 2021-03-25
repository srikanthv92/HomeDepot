import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/service/user.service';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  value: any;
  pic: any;
  bucket: any[] = [];
  list: any[] = [];

  constructor(private userService: UserService) {
    // this.userService.getData().subscribe((data)=>{
    //   console.log(data);
    //  this.value = data;

    this.userService.getData().subscribe(res => {
      this.value = res;
      console.log(this.value);

      Object.entries(res).map(res => {
        this.bucket.push(res[1])
      });
    });

    // })

    this.userService.getPicture().subscribe(resp => {
      this.pic = resp;
      Object.entries(resp).map(res => {
        this.list.push(resp);
      })
    })
  }

  ngOnInit(): void {

  }


}

import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { MyPostService } from '../my-post.service';
import { news } from 'src/app/news.model';

@Component({
  selector: 'app-new-mypost',
  templateUrl: './new-mypost.page.html',
  styleUrls: ['./new-mypost.page.scss'],
})
export class NewMypostPage implements OnInit {
  myposts: news;
  constructor(private navCtrl: NavController, private postSvc: MyPostService) { }

  onSubmit(f: NgForm) {
    
    const mypost: news = {
      id: f.value.id,
      name: f.value.name,
      description: f.value.description,
      general: f.value.general,
      imageUrl1: f.value.imgUrl1,
      };
      console.log(mypost);
    this.postSvc.addPost(mypost).subscribe();
    
    this.goBack();
  }

  ngOnInit() {
  }

  goBack() {
    this.navCtrl.navigateBack('/my-post');
  }

}

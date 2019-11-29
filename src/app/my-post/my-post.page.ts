import { Component, OnInit } from '@angular/core';
import { MyPostService } from './my-post.service';
import { NavController, IonItemSliding } from '@ionic/angular';
import { Router } from '@angular/router';
import { news } from '../news.model';

@Component({
  selector: 'app-my-post',
  templateUrl: './my-post.page.html',
  styleUrls: ['./my-post.page.scss'],
})
export class MyPostPage implements OnInit {
  loadedNews: news[] = [];

  constructor(private mypostSvc: MyPostService, private navCtrl: NavController, private router: Router) { }

  ngOnInit() {
    this.mypostSvc.fetchPost().subsribe(
      (myposts) => {
        this.loadedNews = myposts;
      }
    );
  }

  ionViewWillEnter(){
    this.mypostSvc.fetchPost().subscribe(
      (myposts) => {
      this.loadedNews = myposts;
      }
      );
  }

  editNews(id: string, slidingItem: IonItemSliding) {
    slidingItem.close();
    this.router.navigate(['/', 'my-post', 'new-mypost', 'edit', id]);
  }

}

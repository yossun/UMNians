import { Component, OnInit } from '@angular/core';
import { news } from '../news.model';
import { HomeService } from '../home.service';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-savepost',
  templateUrl: './savepost.page.html',
  styleUrls: ['./savepost.page.scss'],
})
export class SavepostPage implements OnInit {
  myNews: news[] = [];

  constructor(private homeService: HomeService, private actionSheetCtrl: ActionSheetController) { }

  ngOnInit() {
    this.myNews = this.homeService.getMyNews();
    if (!this.myNews.length) {
      document.getElementById('flagDisplay').style.display = 'block';
    } else {
      document.getElementById('flagDisplay').style.display = 'none';
    }
  }

  ionViewWillEnter() {
    this.myNews = this.homeService.getMyNews();
    if (!this.myNews.length) {
      document.getElementById('flagDisplay').style.display = 'block';
    } else {
      document.getElementById('flagDisplay').style.display = 'none';
    }
  }

  onCancelMyNews(id: string) {
    this.actionSheetCtrl.create({
      header: 'Are you sure?',
      buttons: [
        {
          text: 'Yes.',
          handler: () => {
            this.homeService.removeFromMyNews(id);
            this.myNews = this.homeService.getMyNews();
            if (!this.myNews.length) {
              document.getElementById('flagDisplay').style.display = 'block';
            } else {
              document.getElementById('flagDisplay').style.display = 'none';
            }
          }
        },
        {
          text: 'No.',
          role: 'Cancel'
        }
      ]
    })
    .then(actionSheetEl => {
      actionSheetEl.present();
    });
  }
}


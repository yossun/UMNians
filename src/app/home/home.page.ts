import {Component} from '@angular/core';
import {news} from '../news.model';
import {HomeService} from '../home.service';
import {LoadingController} from '@ionic/angular';
import {SegmentChangeEventDetail} from '@ionic/core';
import {ModalController} from '@ionic/angular';
import {ProfilePage} from '../profile/profile.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  loadednews: news[];
  listedLoadednews: news[];

  constructor(
    private homeService: HomeService,
    private loadingCtrl: LoadingController,
    private modalCtrl: ModalController,
  ) {}

  ngOnInit() {
    this.loadednews = this.homeService.newsList;
    this.listedLoadednews = this.loadednews.slice(1);
  }

  onFilterUpdate(event: CustomEvent<SegmentChangeEventDetail>) {
    console.log(event.detail);
  }

  goProfil() {
    this.modalCtrl
      .create({
        component: ProfilePage,
      })
      .then((modalElement) => {
        modalElement.present();
      });
  }
  onAddNews(selectedNews: news) {
    console.log('Like');
    this.loadingCtrl
      .create({
        keyboardClose: true,
        message: 'Saving Article...',
      })
      .then((loadingEl) => {
        loadingEl.present();
        setTimeout(() => {
          this.homeService.addToMynews(selectedNews);
          loadingEl.dismiss();
        }, 1500);
      });
  }
}

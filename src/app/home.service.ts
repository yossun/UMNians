import { Injectable } from '@angular/core';
import { news } from './news.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private news1: news[] = [
    new news(
      'p1',
      'Ultima Sonora',
      'Ultima Sonora Raih Dua Emas Sekaligus dalam Festival Internasional',
      'Choir kampus Univ. Multimedia Nusantara',
      'https://ultimagz.com/wp-content/uploads/ulson-min-381x381.jpg',
    ),
    new news(
      'p2',
      'Qorie UMN',
      'UKM Qorie Memboyong Piala Usai Penampilan Perdana Red:Code',
      ' Unit Kegiatan Mahasiswa (UKM) pecinta Budaya Korea, Qorie menorehkan prestasi baru',
      'https://ultimagz.com/wp-content/uploads/1448872787839.jpg',
    ),
    new news(
      'p3',
      'Rencang',
      'Rencang Tumbuhkan Kepedulian Mahasiswa UMN',
      'Unit Kegiatan Mahasiswa (UKM),Rencang menyelenggarakan acara kegiatan sosial berupa donor darah ',
      'https://ultimagz.com/wp-content/uploads/IMG_9500.jpg',
    ),
    new news(
      'p4',
      'Mr & Mrs UMN',
      'Drama Musikal Penuhi Malam Unjuk Bakat Mr. & Ms. UMN 2019',
      'Penampilan drama musikal oleh salah satu pasangan finalis Mr. & Ms. UMN 2019 dalam Talent Night Mr. & Ms. UMN 2019',
      'https://ultimagz.com/wp-content/uploads/rezise-572x381.jpg',
    ),
    new news(
      'p5',
      'J-CAFE',
      'J-CAFE tampil bersama Qorie di U-Fest 2019',
      'UKM kesenian budaya Jepang',
      'https://pbs.twimg.com/profile_images/378800000254419608/3b875bfd7776adfc52a5d004c37f3c86_400x400.jpeg',
    ),
  ];

  private myNews: news[] = [];

  get newsList() {
    return [...this.news1];
  }

  getNewsCam(id: string) {
    return {...this.news1.find((p) => p.id === id)};
  }

  addToMynews(p: news) {
    this.myNews.push(p);
  }

  removeFromMyNews(id: string) {
    this.myNews = this.myNews.filter(p => {
      return p.id !== id;
    });
  }

  getMyNews() {
    return [...this.myNews];
  }

  constructor() { }
}

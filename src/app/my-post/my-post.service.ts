import { Injectable } from '@angular/core';
import { news } from '../news.model';
import { BehaviorSubject } from 'rxjs';
import { take, switchMap, tap, map} from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyPostService {

  _mypost = new BehaviorSubject<news[]>([

  ]);
  myposts: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  addPost(mypost: news) {
    return this.http
    .post<{ name: string }>('https://uas-project-952ff.firebaseio.com//ionic-app.json', { ...mypost })
    .pipe(
      switchMap(resp => {
        console.log(resp);
        return this.getAllNews();
      }),
      take(1),
      tap(
        (postArray) => {
          this._mypost.next(postArray.concat(mypost));
        }
      )
    );
  }

  fetchPost() {
    return this.http
    .get<{ [key: string]: news }>('https://uas-project-952ff.firebaseio.com//ionic-app.json')
    .pipe(
      map(resp => {
        const myposts = [];
        for (const key in resp) {
          if (resp.hasOwnProperty(key)) {
            myposts.push({
              id: resp[key].id,
              title: resp[key].name,
              location: resp[key].description,
              post: resp[key].general,
              imageUrl: resp[key].imageUrl1,
            });
          }
        }
        return myposts;
      }),
      tap(
        (myposts) => {
          this._mypost.next(myposts);
        }
      )
    );
  }

  pushData(mypost : news){

  }

  getAllNews(){
    return this._mypost.asObservable();
  }

  getNews(id: string) {
    return {...this.myposts.find(n => n.id === id)};
  }

  editNews(editPost : news,idPost : string ){
    
  }

}

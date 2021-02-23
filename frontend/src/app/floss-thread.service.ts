import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {FlossThread} from "./floss-thread";
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';


@Injectable()
export class FlossThreadService {
  constructor(private http: HttpClient) {

  }

  getItems(): Observable<FlossThread[]> {
    return this.http.get('assets/flossthreads.json').pipe(
      map(data => {
        // @ts-ignore
        let items = data["threads"];
        return items.map(function(item:any) {
          return {
            gamma: item.gamma,
            dmc: item.dmc,
            anchor: item.anchor,
            madeira: item.madeira,
            color: item.color
          }
        });
      })
    );
  }

}

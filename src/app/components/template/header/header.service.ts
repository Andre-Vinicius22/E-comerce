import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HeaderData } from './header-data.model';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  private _headerData = new BehaviorSubject<HeaderData>({
    title: 'Inicio',
    icon: 'home',
    routeUrl: '',
  });

  constructor() {}

  get headerData(): HeaderData {
    console.log(this._headerData.value);

    return this._headerData.value;
  }
  set headerData(headerDate: HeaderData) {
    this._headerData.next(headerDate);
  }
}

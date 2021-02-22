import { Component, OnInit, AfterViewInit } from '@angular/core';
import {FLOSS_THREAD_LIST} from "../mock-floss-thread";
import {invertColor} from '../app.component';


@Component({
  selector: 'app-floss-thread-list',
  templateUrl: './floss-thread-list.component.html',
  styleUrls: ['./floss-thread-list.component.less']
})
export class FlossThreadListComponent implements AfterViewInit, OnInit {

  flossThreadList = FLOSS_THREAD_LIST;

  constructor() {

  }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    document.querySelectorAll('.floss-thread .color').forEach(
      item => {
        let i = item as HTMLElement
        let c = item.getAttribute('data-color')
        i.style.backgroundColor = c || 'white'
        i.style.color = invertColor(c || 'black', true)
      }
    )

  }

}

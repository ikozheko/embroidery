import { Component, OnInit } from '@angular/core';
import {FlossThread} from "../floss-thread";
import {FLOSS_THREAD_LIST} from "../mock-floss-thread";


@Component({
  selector: 'app-floss-thread-list',
  templateUrl: './floss-thread-list.component.html',
  styleUrls: ['./floss-thread-list.component.less']
})
export class FlossThreadListComponent implements OnInit {

  flossThreadList = FLOSS_THREAD_LIST;

  constructor() {

  }

  ngOnInit(): void {

  }

}

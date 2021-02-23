import { Component, OnInit, AfterViewInit } from '@angular/core';
import { invertColor } from '../app.component';
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
import { FlossThreadService } from "../floss-thread.service";
import { FlossThread } from "../floss-thread";


@Component({
  selector: 'app-floss-thread-list',
  templateUrl: './floss-thread-list.component.html',
  styleUrls: ['./floss-thread-list.component.less'],
  providers: [
    FlossThreadService
  ]
})
export class FlossThreadListComponent implements AfterViewInit, OnInit {
  items: FlossThread[] = []

  iconSearch = faSearch;
  filter:string = ''

  onFilter() {
    let q = this.filter
    alert(q)
  }


  constructor(private flossThreadService: FlossThreadService) {}

  ngOnInit() {
    this.flossThreadService.getItems().subscribe(
      items => {
        items.forEach(item => {
          this.items.push({
            gamma: item.gamma,
            dmc: item.dmc,
            anchor: item.anchor,
            madeira: item.madeira,
            color: item.color
          })
        })
      }
    );
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

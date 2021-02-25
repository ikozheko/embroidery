import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch';
import { FlossThreadService } from '../floss-thread.service';
import { FlossThread } from '../floss-thread';
import { invertColor } from '../invert-color';


@Component({
  selector: 'app-floss-thread-list',
  templateUrl: './floss-thread-list.component.html',
  styleUrls: ['./floss-thread-list.component.less'],
  providers: [
    FlossThreadService
  ]
})
export class FlossThreadListComponent implements OnInit {


  constructor(private flossThreadService: FlossThreadService) {}
  items: FlossThread[] = [];

  iconSearch = faSearch;
  filter = '';

  getInvertColor(color: string): string {
    return invertColor(color);
  }

  onFilter(): void {
    const q = this.filter;
    alert(q);
  }

  ngOnInit(): void {
    this.flossThreadService.getItems().subscribe(
      items => {
        items.forEach(item => {
          this.items.push({
            gamma: item.gamma,
            dmc: item.dmc,
            anchor: item.anchor,
            madeira: item.madeira,
            color: item.color
          });
        });
      }
    );
  }
}

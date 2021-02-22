import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'frontend';
}


export function padZero(str: string, len?: number) {
  len = len || 2;
  let zeros = new Array(len).join('0');
  return (zeros + str).slice(-len);
}


export function invertColor(hex: string, wb: boolean) {
  if (hex.indexOf('#') === 0) {
    hex = hex.slice(1);
  }
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  if (hex.length !== 6) {
    throw new Error('Invalid HEX color.');
  }
  let r = parseInt(hex.slice(0, 2), 16),
    g = parseInt(hex.slice(2, 4), 16),
    b = parseInt(hex.slice(4, 6), 16);
  if (wb) {
    // http://stackoverflow.com/a/3943023/112731
    return (r * 0.299 + g * 0.587 + b * 0.114) > 186
      ? '#000000'
      : '#FFFFFF';
  }
  let r_i = (255 - r).toString(16);
  let g_i = (255 - g).toString(16);
  let b_i = (255 - b).toString(16);

  return "#" + padZero(r_i) + padZero(g_i) + padZero(b_i);
}

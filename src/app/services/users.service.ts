import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public items: any = [];

  constructor() {
    this.items = [
      { title: "one" },
      { title: "two" },
      { title: "three" },
      { title: "four" },
      { title: "five" },
      { title: "six" },
      { title: "seven" },
      { title: "eight" },
      { title: "nine" },
      { title: "ten" },
      { title: "eleven" },
      { title: "twelve" },
      { title: "thirteen" },
      { title: "fourteen" },
      { title: "unum" },
      { title: "duo" },
    ];
  }

  filterItems(searchTerm) {
    return this.items.filter(item => {
      return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }
}

import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from "rxjs/operators";
import { UsersService } from '../services/users.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.page.html'
})
export class HomePage {

    searchTerm: string = '';
    searchControl: FormControl;
    items: any;
    searching: any = false;
    sortDirection: string = '';

    constructor(public usersService: UsersService) {
        this.searchControl = new FormControl();
        this.sortDirection = "chevron-down-outline"
    }

    ngOnInit() {
        
        console.log("called ionviewdidload, setting filtered items")
        this.setFilteredItems();

        this.searchControl.valueChanges.subscribe(search => {

             console.log('searchControl.valueChanges()')
            this.searching = false;
            this.setFilteredItems();
            this.sortValues();

        });


    }

    sortValues(){
      console.log('would sort')
      if(this.sortDirection == "chevron-up-outline"){
        this.sortDirection = "chevron-down-outline";
        this.items.sort((a,b) => {
          if(a.value > b.value){
            return 1;
          }
          if(a.value < b.value){
            return -1;
          }
          return 0
        })
      } else {
        this.sortDirection = "chevron-up-outline"
        this.items.sort((a,b) => {
          if(a.value < b.value){
            return 1;
          }
          if(a.value > b.value){
            return -1;
          }
          return 0
        })
      }
    }

    onSearchInput(){
        this.searching = true;
        console.log('onSearchInput')
    }

    setFilteredItems() {

        console.log('setFilteredItems called');
        this.items = this.usersService.filterItems(this.searchTerm);

    }
}
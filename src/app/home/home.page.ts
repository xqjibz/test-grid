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

    constructor(public usersService: UsersService) {
        this.searchControl = new FormControl();
    }

    ionViewDidLoad() {

        console.log("called ionviewdidload, setting filtered items")
        this.setFilteredItems();

        this.searchControl.valueChanges.subscribe(search => {

             console.log('searchControl.valueChanges()')
            this.searching = false;
            this.setFilteredItems();

        });


    }

    onSearchInput(){
        this.searching = true;
        console.log('onSearchInput')
    }

    setFilteredItems() {

        this.items = this.usersService.filterItems(this.searchTerm);

    }
}
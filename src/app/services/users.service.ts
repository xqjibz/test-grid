import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public items: any = [];

  constructor() {
    this.items = [
      { title: "one", value: 1 },
      { title: "two", value: 2  },
      { title: "three", value: 3  },
      { title: "four", value: 4  },
      { title: "five", value: 5  },
      { title: "six", value: 6  },
      { title: "seven", value: 7  },
      { title: "eight", value: 8  },
      { title: "nine", value: 9  },
      { title: "ten", value: 10  },
      { title: "eleven", value: 11  },
      { title: "twelve", value: 12  },
      { title: "thirteen", value: 13  },
      { title: "fourteen", value: 14  },
      { title: "unum", value: 1  },
      { title: "duo", value: 2  },
    ];
  }

  filterItems(searchTerm) {
    return this.items.filter(item => {
      let returnValue = false;
      returnValue = item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
      if (returnValue){
        return returnValue
      }
      

      returnValue = item.value.toString().indexOf(searchTerm.toString()) > -1;
      return returnValue
    });
  }
}

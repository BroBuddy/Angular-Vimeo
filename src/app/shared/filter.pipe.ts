import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filteredTitle: string, filteredDuration: string): any {
    if (value.length === 0 || filteredTitle === '') {
      return value;
    }

    const resultArray = [];
    for (const item of value) {
      console.log(item);
      if (item['name'].toLowerCase().indexOf(filteredTitle) === 0 && item['duration'] >= filteredDuration) {
        resultArray.push(item);
      }
    }

    return resultArray;
  }

}

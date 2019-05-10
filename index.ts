import {  from, of, Observable } from 'rxjs'; 
import { mergeMap, map } from 'rxjs/operators';

export interface NameValuePair {
  id?: number;
  displayValue: string;
}

let arrayData: NameValuePair[] =
  [
    { id: 1, displayValue: "ABC" },
    { id: 2, displayValue: "DEF" },
    { id: 3, displayValue: "DFG" },
    { id: 4, displayValue: "XYZ" },
    { id: 5, displayValue: "ZAB" },
  ];

let sourceDataItems: Observable<NameValuePair> = from(arrayData);
let sourceDataArray: Observable<NameValuePair[]> = of(arrayData);

const source = sourceDataArray.pipe(mergeMap(x => x)).pipe(map(x => x.displayValue));

  
source.subscribe(
  {
   next: x => console.log('value: ' + x),
 // next: x => console.log('Observer got a next value: ' + x),
  error: err => console.error('Observer got an error: ' + err),
  complete: () => console.log('Observer got a complete notification'),
  });


//   {
//   next: x => console.log('Observer got a next value: ' + x),
//   error: err => console.error('Observer got an error: ' + err),
//   complete: () => console.log('Observer got a complete notification'),
// }
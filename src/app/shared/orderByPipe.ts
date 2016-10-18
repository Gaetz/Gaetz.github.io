/*
 * By Cory Shaw, fuelinteractive
 * Linted by Gaetz :P
 *
 * Example use
 *		Basic Array of single type: *ngFor="#todo of todoService.todos | orderBy : '-'"
 *		Multidimensional Array Sort on single column: *ngFor="#todo of todoService.todos | orderBy : ['-status']"
 *		Multidimensional Array Sort on multiple columns: *ngFor="#todo of todoService.todos | orderBy : ['status', '-title']"
 */

import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'orderBy', pure: false})
export class OrderBy implements PipeTransform {

    static _orderByComparator(a: string, b: string): number {

      if ((isNaN(parseFloat(a)) || !isFinite(parseFloat(a))) || (isNaN(parseFloat(b)) || !isFinite(parseFloat(b)))) {
        // Isn't a number so lowercase the string to properly compare
        if (a < b) { return -1; }
        if (a > b) { return 1; }
      } else {
        // Parse strings as numbers to compare properly
        if (parseFloat(a) < parseFloat(b)) { return -1; }
        if (parseFloat(a) > parseFloat(b)) { return 1; }
      }

      return 0; // equal each other
    }

    transform(input: any, [config = '+']): any {

        if (!Array.isArray(input)) { return input; }

        if (!Array.isArray(config) || (Array.isArray(config) && config.length === 1)) {
            let propertyToCheck: string = !Array.isArray(config) ? config : config[0];
            let desc = propertyToCheck.substr(0, 1) === '-';

            // Basic array
            if (!propertyToCheck || propertyToCheck === '-' || propertyToCheck === '+') {
                return !desc ? input.sort() : input.sort().reverse();
            } else {
                let property: string = propertyToCheck.substr(0, 1) === '+' || propertyToCheck.substr(0, 1) === '-'
                    ? propertyToCheck.substr(1)
                    : propertyToCheck;

                return input.sort(function(a: any, b: any) {
                    return !desc
                        ? OrderBy._orderByComparator(a[property], b[property])
                        : -OrderBy._orderByComparator(a[property], b[property]);
                });
            }
        } else {
            // Loop over property of the array in order and sort
            return input.sort(function(a: any, b: any) {
                for (let i = 0; i < config.length; i++) {
                    let descElse = config[i].substr(0, 1) === '-';
                    let propertyElse = config[i].substr(0, 1) === '+' || config[i].substr(0, 1) === '-'
                        ? config[i].substr(1)
                        : config[i];

                    let comparison = !descElse
                        ? OrderBy._orderByComparator(a[propertyElse], b[propertyElse])
                        : -OrderBy._orderByComparator(a[propertyElse], b[propertyElse]);

                    // Don't return 0 yet in case of needing to sort by next property
                    if (comparison !== 0) { return comparison; }
                }

                return 0; // equal each other
            });
        }
    }
}

import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'limitTo'
})
export class LimitToPipe implements PipeTransform {
    transform(day: string, args?: number): any {
        let value = day;
        if (args) {
            value = value.substring(0, args);
        }
        return value;
    }
}
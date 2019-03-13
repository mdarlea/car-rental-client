import * as moment from 'moment';
import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'format'
})
export class DateFormatPipe implements PipeTransform {
    transform(date: Date, args?: string): any {
        const format = (args) ? args : 'LLLL';
        return moment(date).format(format);
    }
}

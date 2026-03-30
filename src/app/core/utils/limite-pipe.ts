import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limite',
})
export class LimitePipe implements PipeTransform {
  transform(value: string, limit: number = 32, trail: string = "..."): string {
    return value.length > limit ? value.substring(0, limit) + trail : value
  }
}

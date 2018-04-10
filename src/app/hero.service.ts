import { Injectable } from '@angular/core';

import { Observable, Observer } from 'rxjs';

import { Hero } from './hero';
import { MessageService } from './message.service';
import { HEROES } from './mock-hero';

@Injectable()
export class HeroService {

  constructor(private messageService: MessageService) { }

    getHeroes(): Observable<Hero[]> {
    // Todo: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return Observable.of(HEROES);
  }
}

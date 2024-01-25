import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { faker } from '@faker-js/faker';
import { Prompt, Session } from '../models/session';

@Injectable()
export class ChatServiceApiService {
  getInitialSession(): Observable<Session> {
    return of({
      id: '0',
      date: new Date(),
      messages: this.generateParagraps(3),
      prompts: this.generateWords(),
    });
  }

  generateSessionByPromptId(id: string): Observable<Session> {
    return of(this.generateRundomSession(id));
  }

  private generateRundomSession(id: string): Session {
    return {
      id,
      date: new Date(),
      messages: this.generateParagraps(),
      prompts: this.generateWords(),
    };
  }

  private generateParagraps(count?: number, max = 3): string[] {
    let randomNumber = !count ? Math.floor(Math.random() * max) + 1 : count;
    const res = [];
    while (randomNumber) {
      res.push(faker.lorem.paragraph(randomNumber));
      randomNumber--;
    }
    return res;
  }

  private generateWords(max = 7): Prompt[] {
    const res = [];
    while (max) {
      let randomWord = faker.lorem.word({ strategy: 'any-length' });
      res.push({
        id: randomWord,
        title: randomWord,
      });
      max--;
    }
    return res;
  }
}

import { Injectable, Inject } from '@nestjs/common';
import { ChallengeItem } from './challenges';
import * as low from 'lowdb';
import * as FileSync from 'lowdb/adapters/FileSync';
import * as uuid from 'uuid/v4';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}


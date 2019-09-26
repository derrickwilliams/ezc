import { Injectable, Inject } from '@nestjs/common';
import { ChallengeItem } from './challenges';
import * as low from 'lowdb';
import * as FileSync from 'lowdb/adapters/FileSync';
import * as uuid from 'uuid/v4';

const applyId = coll => coll.map(c => ({
  ...{ id: uuid() },
  ...c,
}));

@Injectable()
export class ChallengesService {
  private adapter: any;
  private db: any;

  constructor(@Inject('DB_CONFIG') dbConfig) {
    this.init(dbConfig);
  }

  private init(dbConfig: any) {
    this.adapter = new FileSync(dbConfig.filePath);
    this.db = low(this.adapter);

    this.db.defaults({
      challenges: [],
      users: [],
    }).write();
  }

  state(): any {
    return this.db.getState();
  }

  load(): ChallengeItem[] {
    return this.db.get('challenges')
      .map(i => i as ChallengeItem);
  }

  add(challenge: ChallengeItem): any {
    const newChallenge = {
      id: uuid(),
      ...challenge,
      ...{ criteria: applyId(challenge.criteria || []) },
    };

    const res = this.db.get('challenges')
      .push(newChallenge)
      .write();

    return newChallenge;
  }
}

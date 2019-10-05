import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChallengesService } from './challenges.service';
import { ChallengesController } from './challenges.controller';
import { ServeStaticModule } from '@nestjs/serve-static';

import * as path from 'path';

const UPWARD_PATH = '..';
const dataRootPath = path.resolve(
  __dirname,
  UPWARD_PATH,
  './data',
);
const dbFileName = 'db.json';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: path.join(__dirname, '..', 'ui/build'),
    }),
  ],
  controllers: [AppController, ChallengesController],
  providers: [
    AppService,
    ChallengesService,
    {
      provide: 'DB_CONFIG',
      useValue: {
        filePath: path.resolve(
          dataRootPath,
          dbFileName,
        ),
      },
    },
  ],
})
export class AppModule {}

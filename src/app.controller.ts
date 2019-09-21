import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { ChallengesService } from './challenges.service';

@Controller()
export class AppController {
    constructor(
      private readonly appService: AppService,
      private readonly challengesService: ChallengesService,
    ) {}

    @Get()
    getHello(): string {
        return this.appService.getHello();
    }

    @Get('/state')
    getState(): string {
        return this.challengesService.state();
    }
}

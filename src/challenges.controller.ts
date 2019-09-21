import { Controller, Get, Post, Body } from '@nestjs/common';
import { ChallengesService } from './challenges.service';
import { ChallengeItem, ChallengesResponse } from './challenges';

@Controller('challenges')
export class ChallengesController {
    constructor(private readonly challengesService: ChallengesService) {}

    @Get()
    index(): ChallengesResponse {
        const response = {
          data: this.challengesService.load(),
        } as ChallengesResponse;

        return response;
    }

    @Post()
    create(@Body() challengeItem: ChallengeItem): any {
        const createResult = this.challengesService.add(challengeItem);

        return {
            data: createResult,
        };
    }
}

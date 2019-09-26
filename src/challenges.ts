export class ChallengeItem {
    title: string;
    criteria: any[] = [];
    judges: any[] = [];
    entries: any[] = [];

    constructor(title: string) {
        this.title = title;
    }
}

export class ChallengesResponse {
    readonly data: any[] = [];

    addItem(challenge: ChallengeItem) {
        this.data.push(challenge);
    }
}

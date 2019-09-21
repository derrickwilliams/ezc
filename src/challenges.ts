export class ChallengeItem {
    title: string;
    // judges: any[] = [];
    // entries: any[] = [];

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

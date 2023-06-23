export class Experience {
    id?: any;
    employer: string;
    position: string;
    startDate: Date;
    endDate: Date;

    constructor(employer: string, position: string, startDate: Date, endDate: Date) {
        this.employer = employer;
        this.position = position;
        this.startDate = startDate;
        this.endDate = endDate;
    }
}

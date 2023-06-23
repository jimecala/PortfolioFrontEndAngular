export class Education {
    id?: any;
    institution: string;
    degree: string;
    endDate: Date;

    constructor(institution: string, degree: string, endDate: Date) {
        this.institution = institution;
        this.degree = degree;
        this.endDate = endDate;
    }
}



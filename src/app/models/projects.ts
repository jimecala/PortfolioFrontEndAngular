export class Projects {
    id?: any;
    name: string;
    description: string;
    imgProject: string;

    constructor(name: string, description: string, imgProject: string) {
        this.name = name;
        this.description = description;
        this.imgProject = imgProject;
    }
}

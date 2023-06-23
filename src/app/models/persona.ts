export class Persona {
    id: any;
    name: string;
    lastName: string;
    position: string;
    email: string;
    aboutMe: string;
    imgProfile: string;
    imgBanner: string;


    constructor(name: string, lastName: string, position: string, aboutMe: string, email: string, imgProfile: string, imgBanner: string) {
        this.name = name;
        this.lastName = lastName;
        this.position = position;
        this.email = email;
        this.aboutMe = aboutMe;
        this.imgProfile = imgProfile;
        this.imgBanner = imgBanner;
    }
}
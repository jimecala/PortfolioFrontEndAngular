export class Persona {
    id: any;
    name : string;
    position : string;
    introduction : string;
    img : string;
    email : string;

    constructor(name: string,position: string,introduction: string,img: string,email: string){
        this.name = name;   
        this.position = position;
        this.introduction = introduction;
        this.img = img;
        this.email = email;
    }
}
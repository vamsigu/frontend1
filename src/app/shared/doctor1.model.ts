import { Availability } from "./availability.model";

export class Doctor1{
    public name: string;
    public description: string;
    public image: string;
    public email:string;
    public number:string;
    public available: Availability[];

    constructor(name:string,desc:string,image:string,email:string,number:string,available:Availability[]){
        this.name = name;
        this.description = desc;
        this.image = image;
        this.email=email;
        this.number=number;
        this.available = available
    }
}
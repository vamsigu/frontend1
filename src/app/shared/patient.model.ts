export  class Patient{
    public name: string;
    public email: string;
    public number: string;
    public address: string;
    public password : string

    constructor(name:string,email:string,number:string,address:string,password:string){
        this.name = name;
        this.email = email;
        this.number = number;
        this.address = address;
        this.password = password
    }
}
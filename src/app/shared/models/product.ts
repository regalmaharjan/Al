export class products{
    id!:number;
    price!:number;
    name!:string;
    favorite:boolean = false;
    tags?:string[];
    imageUrl!:string;
    arrivalTime!:string;
    origins!:string[];
  static tags: any;

}
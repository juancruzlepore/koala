export class Movie {
  name: string;
  creationDate: Date;
  addedBy: string;
  seen: boolean;

  constructor(name: string, creationDate: Date, addedBy: string, seen: boolean){
    this.name = name;
    this.creationDate = creationDate;
    this.addedBy = addedBy;
    this.seen = seen;
  }
}

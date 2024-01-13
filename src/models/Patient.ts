export class Patient {
    id: string;
    petName: string;
    ownerName: string;
    email: string;
    date: string;
    symptoms: string;

    constructor(id: string, petName: string, ownerName: string, email: string, date: string, symptoms: string) {
    this.id = id;
    this.petName = petName;
    this.ownerName = ownerName;
    this.email = email;
    this.date = date;
    this.symptoms = symptoms;
  }
}
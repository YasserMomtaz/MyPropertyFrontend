export class Apartment {
  constructor(
    public id: number = 0,
    public title: string = '',
    public address: string,
    public city: string = '',
    public area: string = '',
    public description: string = '',
    public miniDescription: string = '',
    public bedrooms: number = 1,
    public bathrooms: number = 1,
    public viewsCount: number = 1,
    public notes: string = '',
    public photos: string[] = [],
    public maxPrice: number,
    public type: string,
    public adDate: Date,
    public brokerPhone: string,
    public brokerEmail: string,
    public code:any=''!
  ) {}
}

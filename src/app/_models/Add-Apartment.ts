export class Add_Apartemnt {
  constructor(
    public userId?: string,
    public title?: string,
    public address?: string,
    public city?: string,
    public area?: number,
    public description?: string,
    public miniDescription?: string,
    public minPrice?: number,
    public maxPrice?: number,
    public type?: string,
    public adDate?: Date,
    public bedrooms?: number,
    public bathrooms?: number,
    public photoUrl?: string[]
  ) {}
}

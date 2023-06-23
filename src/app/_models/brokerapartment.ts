export class Brokerapartment {
    constructor(public id: number,
        public   title: string,
        public  brokerPhone: string,
        public  brokerEmail: string,
        public maxPrice: number,
        public  address: string,
        public  city: string,
        public  area: number,
        public  miniDescription: string,
        public  type: string,
        public  adDate: Date,
        public  bedrooms: number,
        public  bathrooms: number,
        public  photos: string[],){}
    }

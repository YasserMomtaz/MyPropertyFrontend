import { Apartment } from "./Apartment";

export class ApartmentListPaginationDto{

 
    
    constructor(public apartmentList:Apartment[]=[],public apartmentCount:number=0
    )
    {
    
    }
    
    }
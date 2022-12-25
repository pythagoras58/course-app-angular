
export interface Product{
  id : number;
  title : string;
  description : string;
  price : number;

  brand : string;

  category : string;
  rating : number;
  thumbnail : string;
}

export interface ProductResponse{
  total : number;
  skip : number;
  limit : number;
  products : Product[];
}


export interface ProductModel{
  id : number;
  title : string;
  description : string;
  price : number;
  rating : number;

  thumbnail : string;
}

export interface ProductResponse{
  total : number;
  skip : number;
  limit : number;
  product : ProductModel[];
}

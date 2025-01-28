


export interface Dessert {
  id: number;
  name: string;
  desc: string;
  price: number;
  image: string;    
  quantity?: number;
}

export interface CartItem {
  id: number;
  name: string;
  desc: string;
  price: number;
  image: string;    
  quantity: number;
}

interface stockType {
  qty: number;
}
export interface productItem {
  images : any,
  id:number;
  name: string;
  short_description: string;
  price_str: number;
  rating_average: number;
  real_price_str: number;
  thumbnail_url: string;
  stock_item: stockType;
  percent: number;
  slug:string;
  review_count:number;
  sku:number;
  quantity:number;
}

export interface Categories {
  id: number
  title: string
  slug: string
}

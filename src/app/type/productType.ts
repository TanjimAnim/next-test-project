export interface ProductDataType {
  id: number;
  title: string;
  pictures: string;
  price: number;
  targetPrice1: number;
  targetPrice2: number;
  targetPrice3: number;
  status: Status;
}

export enum Status {
  Published = "published",
}

export interface Seller {
  id: number;
  name: string;
}

export interface ShippableProduct {
  id: number;
  title: string;
  brandName: string;
  productType: string;
  category: string;
  subcategory: string;
  subcategory2: string;
  subcategory3: string;
  description1: string;
  description2: string;
  instructionsPurchase: string | null;
  productUrl: string | null;
  manufacturerSku: string;
  sellerSku: string;
  upc: string;
  specifications: string;
  additionalNotes: string;
  isRefurbished: string;
  notes2: string;
  msrp: number;
  poEtaDate: Date | null;
  warranty: string;
  pictures: Pictures; // Assuming pictures are an array of some type
  features: any; // Assuming features are of any type
  manufacturerCountry: string;
  price: number;
  seller: Seller;
}

export interface Pictures {
  list: string[];
}

export interface Product {
  id: number;
  seller: Seller;
  status: string;
  productType: string;
  shippableProduct: ShippableProduct | null;
  digitalProduct: any; // Assuming digitalProduct could be of any type
  priorityLevel: number;
}

export interface Campaign {
  id: number;
  name: string;
  endDate: Date;
}

export interface ProductObject {
  id: number;
  product: Product;
  price: number;
  targetPrice1: number;
  targetPrice2: number;
  targetPrice3: number;
  maxSaleLimit: number;
  inStock: number;
  campaign: Campaign;
}

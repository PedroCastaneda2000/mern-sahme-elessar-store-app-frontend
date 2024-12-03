export type User = {
  _id: string;
  email: string;
  name: string;
  addressLine1: string;
  city: string;
  country: string;
};

export type MenuItem = {
  _id: string;
  name: string;
  price: number;
};

export type Restaurant = {
  _id: string;
  user: string;
  restaurantName: string;
  city: string;
  country: string;
  deliveryPrice: number;
  estimatedDeliveryTime: number;
  cuisines: string[];
  menuItems: MenuItem[];
  imageUrl: string;
  lastUpdated: string;
};

export type Product = {
  _id: string;
  name: string;
  price: number;
  category: string;
  material: string;
  stone: string;
  status: string;
  imageUrl: string;
  lastUpdated: string;
};

export type ProductSearchResponse = {
  data: Product[];
  pagination: {
    total: number;
    page: number;
    pages: number;
  };
};

export type Products = {
  data: Product[];
  pagination: {
    total: number;
    page: number;
    pages: number;
  };
};

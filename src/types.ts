export type User = {
  _id: string;
  email: string;
  name: string;
  addressLine1: string;
  city: string;
  country: string;
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

export type OrderStatus =
  | "placed"
  | "paid"
  | "inProgress"
  | "outForDelivery"
  | "delivered";

export type Order = {
  _id: string;
  user: User;
  cartItems: {
    productId: string;
    name: string;
    quantity: string;
    imageUrl: string;
    material: string;
    stone: string;
  }[];
  deliveryDetails: {
    email: string;
    name: string;
    addressLine1: string;
    city: string;
  };
  totalAmount: number;
  status: OrderStatus;
  createdAt: string;
};

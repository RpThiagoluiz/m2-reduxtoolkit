export type Item = {
  id: string;
  title: string;
  description?: string;
  quantity: number;
  price: number;
  totalPrice: number;
};

export type ItemAdd = Omit<Item, "totalPrice" | "quantity">;

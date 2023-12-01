export type HouseType = {
  id: number;
  type: string;
  name: string;
  description: string;
  image: string;
  imageLg: string;
  country: string;
  address: string;
  bedrooms: string;
  bathrooms: string;
  surface: string;
  year: string;
  price: string;
  agent: {
    image: string;
    name: string;
    phone: string;
  };
};

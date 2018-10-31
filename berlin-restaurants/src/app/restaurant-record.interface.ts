export interface RestaurantRecord {
  id?: {
    $id: string;
  };
  name?: string;
  address?: string;
  category?: string;
  location?: string;
  lat?: number;
  lng?: number;
  subCategory?: Array<string>;
  polarity?: number;
  source?: string;
  details?: string;
}

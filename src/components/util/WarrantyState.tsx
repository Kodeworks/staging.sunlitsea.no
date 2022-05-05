export interface WarrantyData {
  required: boolean;
  data: string | null;
  label: string;
}

export interface WarrantyState {
  [id: string]: WarrantyData;
}

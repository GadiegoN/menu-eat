export interface Menu {
  id: string;
  name: string;
  description: string;
}

export type MenuType = {
  id: string;
  name: string;
  description?: string;
  createdAt: number;
};

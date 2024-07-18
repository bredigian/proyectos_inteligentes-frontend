import { TCatalogue, TCatalogueType } from '../types/catalogue.types';

import { API_URL } from '../const/api';
import { create } from 'zustand';

interface ICatalogueInterface {
  catalogue: TCatalogue[] | Error;
  filteredCatalogue: TCatalogue[];
  catalogueTypes: TCatalogueType[] | Error;

  getCatalogue: (param: string | null) => Promise<void>;
  getCatalogueTypes: () => Promise<void>;
}

export const useCatalogueStore = create<ICatalogueInterface>((set, get) => ({
  catalogue: [],
  filteredCatalogue: [],
  catalogueTypes: [],

  getCatalogue: async (id: string | null) => {
    try {
      const filteredData = (get().catalogue as TCatalogue[]).filter(
        (item) => item.typeId === id,
      );

      if (!id || filteredData.length === 0) {
        const response = await fetch(
          `${API_URL}/${!id ? 'products' : `products?id=${id}`}`,
          {
            method: 'GET',
            cache: 'no-cache',
          },
        );
        const result = await response.json();
        if (!result.ok) throw new Error(result.message);

        set({
          catalogue: result.data as TCatalogue[],
          filteredCatalogue: result.data as TCatalogue[],
        });
      } else {
        set({
          filteredCatalogue: filteredData,
        });
      }
    } catch (error) {
      set({ catalogue: error as Error });
      throw error;
    }
  },
  getCatalogueTypes: async () => {
    try {
      const response = await fetch(`${API_URL}/products/types`, {
        method: 'GET',
        cache: 'no-cache',
      });
      const result = await response.json();
      if (!result.ok) throw new Error(result.message);

      set({ catalogueTypes: result.data as TCatalogueType[] });
    } catch (error) {
      set({ catalogueTypes: error as Error });
      throw error;
    }
  },
}));

export type TCatalogue = {
  id: string;
  name: string;
  description: string;
  image: string;
  typeId: TCatalogueType['id'];
};

export type TCatalogueType = {
  id: string;
  name: string;
};

export interface IGetImagesRes {
  feed: {
    "xmlns:opensearch": string;
    xmlns: string;
    title: string;
    subtitle: string;
    updated: string;
    author: {
      name: string;
    };
    id: string;
    "opensearch:totalResults": string;
    "opensearch:startIndex": string;
    "opensearch:itemsPerPage": string;
    "opensearch:Query": {
      role: string;
      searchTerms: string;
      startPage: string;
    };
    link: Array<ILink>;
    entry: Array<IEntry> | IEntry;
  };
}

export interface ILink {
  href: string;
  rel?: string;
  type?: string;
}

interface IEntry {
  title: string;
  link: Array<ILink>;
  summary: string;
  ondemand: string;
  date: Array<IDate>;
  int: Array<IDate>;
  double: Array<IDate>;
  str: Array<IDate>;
}

interface IDate {
  name: string;
  content: string;
}

export interface ICacheEntity {
  cacheData: string;
}

export interface ICache {
  [key: string]: ICacheEntity;
}

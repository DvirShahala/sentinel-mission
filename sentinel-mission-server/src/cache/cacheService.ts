import { ICache, ICacheEntity } from "../types/types";

export class CacheService {
  protected cache: {};

  constructor() {
    this.cache = {};
  }

  public upsertEntity(cacheObject: ICacheEntity, key: string) {
    (this.cache as ICache)[key] = cacheObject;
  }

  public invalidateCache() {
    this.cache = {};
  }

  public getByKey(key: string): ICacheEntity {
    return (this.cache as ICache)[key];
  }

  public setCache(cache: ICache) {
    this.cache = cache;
  }
}

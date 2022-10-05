import { Injectable } from '@angular/core';
import * as LocalForage from 'localforage';

export enum StorageKey{

}


@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _storage:LocalForage;

  constructor() { 
    const options:LocalForageOptions = {
      driver: LocalForage.LOCALSTORAGE,
      name: 'claireStorage',
      storeName: 'keyvaluepairs'
    };

    this._storage = LocalForage.createInstance(options);
  }

  get storage():LocalForage{ return this._storage;}

  async setItem(key:StorageKey, payload:any){
    const strPayload = JSON.stringify(payload);
    await this._storage.setItem(key.toString(),strPayload);
  }


  async getItem(key:StorageKey){
    const value = await this._storage.getItem<string>(key.toString()) || '';
    return JSON.parse(value);
  }

  async removeItem(key:StorageKey){
    await this._storage.removeItem(key.toString());
  }
 
}

import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends BaseService {

  constructor(
    private base: BaseService
  ) {
    super(base.http)
   }

   public getCategory() {
    return this.base.getReq('/categories');
   }

   // Tek kategoriyi çekme
   public getCateg(categId:any) {
    return this.base.getReq('/categories/'+categId);
   }
}

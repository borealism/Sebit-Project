import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class PostService extends BaseService {

  constructor(
    private base: BaseService
  ) {
    super(base.http)
   }

   public getPost(){
    return this.base.getReq('/posts')
   }
}

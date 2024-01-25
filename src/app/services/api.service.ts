import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../datatypes/products';
import { ApiResult } from '../datatypes/ApiResult';
import { ILoginUser, IRegisterUser } from '../datatypes/user';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  originalPath = 'http://localhost:5000';
  constructor(private http: HttpClient) {}
  getAllProducts() {
    return this.http.get<ApiResult<IProduct[]>>(
      this.originalPath + '/products'
    );
  }
  getProductById(id: string) {
    return this.http.get<ApiResult<IProduct>>(
      this.originalPath + '/product' + id
    );
  }
  Register(User: IRegisterUser) {
    return this.http.post<ApiResult<any>>(
      this.originalPath + '/user/register',
      User
    );
  }
  Login(User: ILoginUser) {
    return this.http.post<ApiResult<any>>(
      this.originalPath + '/user/login',
      User
    );
  }
}

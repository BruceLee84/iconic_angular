// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class HttpserviceService {

//   constructor() { }
// }


import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  httpOptions = {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  constructor(private  http: HttpClient) { }

  addProduct(products){
    console.log("productService", products)
    return this.http.post<any>('http://localhost:3030/api/v7/product/addPro',products,this.httpOptions)
  }

  getProducts(){

    return this.http.get<any>('http://localhost:3030/api/v7/product/getAllPro');

  }

  Delete(uuid){
    return this.http.delete<any>(`http://localhost:3030/api/v7/product/deletePro?uuid=${uuid}`,this.httpOptions)
  }

}


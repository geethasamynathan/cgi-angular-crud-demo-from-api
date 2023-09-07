import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Brand } from '../brand';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { JsonPipe } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class BrandService {
baseUrl='https://localhost:7242/api/Brands';
  constructor(private http:HttpClient) { }

  //Http Header
  httpOptions={
    headers:new HttpHeaders({
      'Content-Type':'application/json'
    })
  };

  GetAllBrands():Observable<Brand>{
    return this.http.get<Brand>(this.baseUrl)
    .pipe(retry(1),catchError(this.errorHandler))
  }

AddNewBrand(data:any):Observable<Brand>{
  return this.http.post(this.baseUrl,JSON.stringify(data),this.httpOptions)
  .pipe(retry(1),catchError(this.errorHandler));
}

GetBrandId(id:any):Observable<Brand>{
  return this.http.get(this.baseUrl+'/'+id)
  .pipe(retry(1),catchError(this.errorHandler));
}

UpdateBrand(id:any,data:any):Observable<Brand>{
  return this.http.put<Brand>(this.baseUrl+id,JSON.stringify(data),this.httpOptions)
  .pipe(retry(1),catchError(this.errorHandler));
}

DeleteBrand(id:any){
  return this.http.delete<Brand>(this.baseUrl+'/'+id,this.httpOptions)
  .pipe(retry(1),catchError(this.errorHandler));
}

  errorHandler(error:any){
    let errorMessage ='';
    if(error.error instanceof ErrorEvent){
      //get Client side  error
      errorMessage=error.error.message;
    }else{
      //get server side error
      errorMessage = `error Code :${error.status} \m Message:${error.message}`;
    }
    console.log(errorMessage);
    return throwError(()=>{
      return errorMessage;
    })
  }
}

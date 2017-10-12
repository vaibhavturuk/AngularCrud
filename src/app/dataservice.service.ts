import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Request, Headers } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()
export class DataserviceService {

    constructor(private http: Http) {
        console.log('Data Service Connected...');
    }

    url = "http://localhost:65011/api/Home/";

    //get method
    getDataStudent() {
        return this.http.get('http://localhost:65011/api/Home')
            .map(response => response.json());
    }

    //post method 
    postStudent(registerStudent: any) {

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post('http://localhost:65011/api/Home', JSON.stringify(registerStudent), options)
            .map(res => res.json());
    }
    
    

 //update
    // update(resource) {
    //     return this.http.patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true }))
    //         .map(response => response.json());
    // }

   

    //temp
    update(user) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.url + user.id, JSON.stringify(user), { headers: headers })
            .map((res) => {
                return;
            });
    }

   delete(id: any) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.delete('http://localhost:65011/api/Home/' + id, options)
            .map((res: Response) => res.json());
    }

}

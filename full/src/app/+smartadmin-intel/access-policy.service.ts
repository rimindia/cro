import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';

import {AccessPolicy} from './access-policy';

@Injectable()
export class AccessPolicyService {

    /*allAccessUrl = "http://localhost:8080/accessPolicy/getAllAccessPolicies";*/
    accessUrl = "http://localhost:8080/accessPolicy/saveAccessPolicy";

    constructor(private http:Http) { }

    /*getAllAccess(): Observable<AccessPolicy[]> {
        return this.http.get(this.allAccessUrl)
            .map(this.extractData)
            .catch(this.handleError);

    }*/

    createAccess(access: AccessPolicy):Observable<number> {
        /*let cpHeaders
        cpHeaders= new Headers({ 'Content-Type': 'application/json' });
        cpHeaders = new Headers({ 'Authorization': 'Bearer' + 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImNyZWF0ZWQiOjE1MTQ0NTA2NDQ5ODEsImV4cCI6MTUxNDQ4NjY0NCwiaWF0IjoxNTE0NDUwNjQ0LCJhdXRob3JpdGllcyI6W3siYXV0aG9yaXR5IjoiUk9MRV9VU0VSIn0seyJhdXRob3JpdHkiOiJST0xFX0FETUlOIn1dfQ.8fckxOf43WfNz2QSaMNcTLUmgnKciT62OXMhkgLQia6Sx3lALonliNQGliS0pMfCNgzhHwtsM42CWMO9DhHE2Q' });
        cpHeaders= new Headers({ 'Access-Control-Allow-Origin': '*' });
        cpHeaders= new Headers({ 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE' });
        cpHeaders= new Headers({ 'Access-Control-Allow-Headers': 'Content-Type' });*/

        let cpHeaders= new Headers();
        cpHeaders.append('Content-Type', 'application/json' );
        cpHeaders.append('Authorization', 'Bearer ' + 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImNyZWF0ZWQiOjE1MTU0NzkwMTUyNzUsImV4cCI6MTUxNTUxNTAxNSwiaWF0IjoxNTE1NDc5MDE1LCJhdXRob3JpdGllcyI6W3siYXV0aG9yaXR5IjoiUk9MRV9VU0VSIn0seyJhdXRob3JpdHkiOiJST0xFX0FETUlOIn1dfQ.b8MAvxbQrz0NZ1r_0164fgMSXBKUecNC6jZFe34hwEV2GcY8iVZLjzkLGRTdvbkB9v5Njf9IsMbpphKFelPyFg' );
        cpHeaders.append('Access-Control-Allow-Origin', '*' );
        /*cpHeaders= new Headers({ 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE' });
        cpHeaders= new Headers({ 'Access-Control-Allow-Headers': 'Content-Type' });*/
        let options = new RequestOptions({ headers: cpHeaders });
        return this.http.post(this.accessUrl, access, options)
            /*.map(success => success.status)*/
            .map((res:Response) => res.json())
            .catch(this.handleError);
    }

    getAccessById(accessId: string): Observable<AccessPolicy> {
        /*let cpHeaders = new Headers({ 'Content-Type': 'application/json' });*/
        let cpHeaders
        cpHeaders= new Headers({ 'Content-Type': 'application/json' });
        cpHeaders = new Headers({ 'Authorization': 'Bearer' + 'token' });
        let cpParams = new URLSearchParams();
        cpParams.set('policyId', accessId);
        let options = new RequestOptions({ headers: cpHeaders, params: cpParams });
        return this.http.get(this.accessUrl, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    updateAccess(access: AccessPolicy):Observable<number> {
        /*let cpHeaders = new Headers({ 'Content-Type': 'application/json' });*/
        let cpHeaders
        cpHeaders= new Headers({ 'Content-Type': 'application/json' });
        cpHeaders = new Headers({ 'Authorization': 'Bearer' + 'token' });
        let options = new RequestOptions({ headers: cpHeaders });
        return this.http.put(this.accessUrl, access, options)
            .map(success => success.status)
            .catch(this.handleError);
    }

    deleteAccessById(accessId: string): Observable<number> {
        /*let cpHeaders = new Headers({ 'Content-Type': 'application/json' });*/
        let cpHeaders
        cpHeaders= new Headers({ 'Content-Type': 'application/json' });
        cpHeaders = new Headers({ 'Authorization': 'Bearer' + 'token' });
        let cpParams = new URLSearchParams();
        cpParams.set('policyId', accessId);
        let options = new RequestOptions({ headers: cpHeaders, params: cpParams });
        return this.http.delete(this.accessUrl, options)
            .map(success => success.status)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body;
    }
    private handleError (error: Response | any) {
        console.error(error.message || error);
        return Observable.throw(error.status);
    }

}

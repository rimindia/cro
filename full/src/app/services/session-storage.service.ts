import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';

@Injectable()
export class SessionStorageService extends LocalStorageService {
    constructor(){
        super({
            prefix:'titan-app',
            storageType:'localStorage'
        });
    }    
}
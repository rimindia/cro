import { Injectable } from '@angular/core';
import { LocalStorageService as lss } from 'angular-2-local-storage';

@Injectable()
export class SessionStorageService extends lss {
    constructor(){
        super({
            prefix:'titan-app',
            storageType:'localStorage'
        });
    }    
}
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class ItemsService{
	constructor(private http: Http){
		console.log('ItemsService Initialize...');
	}
	getItems(){
		console.log('ItemsService Initialize2...');
		return this.http.get("../../assets/items.json").map(res => res.json());
	}
}
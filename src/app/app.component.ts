/**
 * Created by cervantes on 25/11/16.
 */
import { Component, AfterViewInit, ElementRef} from '@angular/core';

import * as moment from 'moment';

import '../../public/css/styles.css';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
    constructor(private _elementRef : ElementRef){
        debugger;
        let x = [{name:'Cervantes', age: 28},{name:'Ingrid', age: 15}];
        console.log(_.map(x, 'name'));
        console.log(moment(new Date()).format('hh:mm'));
    }

    openModal() {
        console.log($('#modal1'));
        $('#modal1').modal();
    }

    changeColor(){
        $('#icon').css({color:'red'});
    }

    ngAfterViewInit() {
        // Component views are initialized
        console.log($.fn.jquery);        
    }
}

import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

    constructor(private _httpService: HttpService) { }
    tasks:any = [];
    task:any = [];
    ngOnInit() {

    }

    getAllTasks() {
        let observable = this._httpService.getTasks();

        observable.subscribe(data => {
            console.log("got tasks", data);
            this.tasks = data;
        });

    }
    getOneTask(params: Number) {
        let observable = this._httpService.getTask(params);
        // console.log(params);
        observable.subscribe(data => {
            console.log("got tasks", data);
            this.task = data;
        });

    }
}

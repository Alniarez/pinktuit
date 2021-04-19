import { Injectable, OnDestroy } from "@angular/core";

@Injectable({providedIn: "root"})
export class TimerService implements OnDestroy {

    private _now: Date = new Date();
    private timeUpdater: any;

    get now(): Date{
        return this._now;
    }

    constructor(){
        this.timeUpdater = setInterval(
            () => {
                this._now = new Date();
            } , 1);
    }

    ngOnDestroy(): void {
       clearInterval(this.timeUpdater);
    }

}
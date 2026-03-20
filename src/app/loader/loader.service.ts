import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";
import { tap, finalize, concatMap } from "rxjs/operators";

@Injectable(
    {
        providedIn:'root'
    }
)
export class LoaderService {
    loadingSubject = new BehaviorSubject<boolean>(false);
    loading$: Observable<boolean> = this.loadingSubject.asObservable();

    //This is to be called for not closing loaders for late api call and should not close until it finishes.
    secondLoadingSubject = new BehaviorSubject<boolean>(false);
    secondLoading$: Observable<boolean> = this.secondLoadingSubject.asObservable();

    constructor() {}
    //This is to close loader after API call
    showLoaderUntilCompleted<T>(obs$: Observable<T>): Observable<T> {
        return of(null).pipe(
            tap(() => this.loadingOn()),
            concatMap(() => obs$),
            finalize(() => this.loadingOff())
        );
    }

    //This is not to close loader after API call
    showLoaderButDontClose<T>(obs$: Observable<T>): Observable<T> {
        return of(null).pipe(
            tap(() => this.loadingOn()),
            concatMap(() => obs$),
            finalize(() => {})
        );
    }

    loadingOn() {
        this.loadingSubject.next(true);
    }

    loadingOff() {
        this.loadingSubject.next(false);
    }

    //Created this for late loading api calls which would be delayed and main
    secondShowLoaderUntilCompleted<T>(obs$: Observable<T>): Observable<T> {
        return of(null).pipe(
            tap(() => this.secondLoadingOn()),
            concatMap(() => obs$),
            finalize(() => this.secondLoadingOff())
        );
    }
    //This is to be called for not closing loaders for late api call and should not close until it finishes.
    secondLoadingOn() {
        this.secondLoadingSubject.next(true);
    }
    //This is to be called for not closing loaders for late api call and should not close until it finishes.
    secondLoadingOff() {
        this.secondLoadingSubject.next(false);
    }
}

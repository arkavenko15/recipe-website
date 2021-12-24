import { AuthService } from './../auth/auth.service';
import { DataStorageService } from './../services/data-storage.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy{
  private userSubscription: Subscription;
  public isAuthenticated: boolean = false;

  constructor(private dataStorageService: DataStorageService, private authService: AuthService){

  }

  ngOnInit() {
    this.userSubscription = this.authService.user.subscribe(
    user=> {
        this.isAuthenticated = !!user
    }
  )}

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

  onSaveData() {
    this.dataStorageService.storeRecipes();
  }
  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe();
  }

}

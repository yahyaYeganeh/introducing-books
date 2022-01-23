import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';



@Component({
    selector: 'cm-navbar',
    templateUrl: './navbar.component.html'
    ,
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {

    isCollapsed: boolean = false;
    loginLogoutText = 'Login';
    sub: Subscription = {} as Subscription;

    constructor(private router: Router) { }

    ngOnInit() {
      
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

   

    redirectToLogin() {
        this.router.navigate(['/login']);
    }

    

}

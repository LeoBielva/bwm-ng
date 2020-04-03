import { Injectable }       from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
    private url: string;

    constructor(
        private auth: AuthService,
        private router: Router
    ) {}

    private handleAuthState(): boolean {
        if(this.isLoginOrRegistered()){
            this.router.navigate(['/rentals']);
            return false;
        }
        else {
            return true;
        }

    }

    private handleNotAuthState(): boolean {
        if(this.isLoginOrRegistered()){
            return true;
        }
        else{
            this.router.navigate(['/login']);
            return false;
        }
    }
    private isLoginOrRegistered(): boolean {
        if(this.url.includes('login') || this.url.includes('register')){
            return true;
        }
        else {
            return false;
        }
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        this.url = state.url;
        
        if(this.auth.isAuthenticated()){
            return this.handleAuthState();
        }
        else {
            return this.handleNotAuthState();
        }
    }
}
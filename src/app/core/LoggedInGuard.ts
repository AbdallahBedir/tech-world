import {Injectable} from '@angular/core';
import {CanActivate,RouterStateSnapshot,ActivatedRouteSnapshot,Router} from '@angular/router';
import {AuthService} from './auth.service';

@Injectable()
export class LoggedInGuard implements CanActivate{
    constructor(private AuthService:AuthService,private router:Router){

    }
    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot
    ):boolean{
        this.AuthService.redirectUrl=state.url;
        if(!this.AuthService.isLoggedIn()){
            this.router.navigate(['NotAuthorized']);
            return false;
        }
        return true;
    }
}
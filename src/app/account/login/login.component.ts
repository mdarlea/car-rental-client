import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../shared/auth.service';
import { LoginModel } from '../shared/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  processing = false;
  modelState: any = null;
  user = new LoginModel();

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(event: any) {
    this.modelState = null;
    this.processing = true;
    this.authService
      .login(this.user)
      .subscribe(
            () => {
                // navigate to home page
                this.router.navigate(['/']);
            },
            (error) => {
                this.modelState = error;
                this.processing = false;
            });
  }

    launchFbLogin(event: Event) {
      event.preventDefault();
      FB.login((response: any) => {
        if (response.status === 'connected') {
          // Logged into the app and Facebook.
          const authResponse = response.authResponse;
          this.logInExternal('Facebook', authResponse.accessToken, authResponse.userID, authResponse.expiresIn);
        } else if (response.status === 'not_authorized') {
          // The person is logged into Facebook, but not the app.
        } else {
          // The person is not logged into Facebook, so we're not sure if
          // they are logged into this app or not.
        }
       }, {scope: 'public_profile,email'});
    }

    private logInExternal(provider: string, accessToken: string, userId: string, expiresIn?: number) {
          const externalLoginInfo = {
            provider,
            accessToken,
            expiresIn,
            providerKey: userId
          };

          this.processing = true;
          this.authService.loginExternal(externalLoginInfo).subscribe(result => {
            if (result.token) {
                // user has already registered, navigate to home page
                this.router.navigate(['/']);
             } else {
               // navigates to the registration page
               // ToDo: add new component and route
               this.router.navigate(['/account/registerexternal', result.provider, result.providerKey]);
             }
          }, error => this.modelState = error);
    }
}

import { Subscription } from 'rxjs';

import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';
import { LoaderService} from './core/services/loader.service';
import { Settings } from './core/settings';
import { environment} from '../environments/environment';
import { UserService} from './core/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('headerArea') headerArea: ElementRef;
  @ViewChild('scrollTop') scrollTop: ElementRef;
  @ViewChild('mainmenu') mainmenu: ElementRef;

  fixTotop = false;
  isLoggedIn = false;

  private subscription: Subscription;

  constructor(private loaderSvc: LoaderService,
              private router: Router,
              private userSvc: UserService,
              settings: Settings) {
      const configuration = settings.configuration;
      FB.init({
        appId: configuration.facebook.appId,
        cookie: true,  // enable cookies to allow the server to access
        // the session
        xfbml: true,  // parse social plugins on this page
        version: 'v3.2' // use graph api version 2.5
      });

      router.events.subscribe((routerEvent: Event) => {
            this.checkRouterEvent(routerEvent);
      });
    }

    ngOnInit() {
      const user = this.userSvc.getUser();
      this.isLoggedIn = !UserService.tokenIsExpired(user);

      this.subscription = this.userSvc.userChanged$.subscribe(u => {
        this.isLoggedIn = (u != null) && !UserService.tokenIsExpired(u);
      });
    }

    ngAfterViewInit() {
        /*---------------------------------
         All Window Scroll Function Start
        --------------------------------- */
        $(window).scroll(() => {
            // Header Fix Js Here
            if ($(window).scrollTop() >= 200) {
                this.fixTotop = true;
            } else {
                this.fixTotop = false;
            }

            // Scroll top Js Here
            if ($(window).scrollTop() >= 400) {
                $(this.scrollTop.nativeElement).slideDown(400);
            } else {
                $(this.scrollTop.nativeElement).slideUp(400);
            }
        });

        // SlickNav or Mobile Menu
        $(this.mainmenu.nativeElement).slicknav({
            label: '',
            prependTo: '#header-bottom .container .row'
        });

    }

    ngOnDestroy() {
      if (this.subscription) {
        this.subscription.unsubscribe();
      }
    }
    checkRouterEvent(routerEvent: Event): void {
        if (routerEvent instanceof NavigationStart) {
            this.loaderSvc.load(true);
        }

        if (routerEvent instanceof NavigationEnd ||
            routerEvent instanceof NavigationCancel ||
            routerEvent instanceof NavigationError) {
            this.loaderSvc.load(false);
        }
    }

    logOut(event: any) {
      event.preventDefault();

      if (environment.production) {
        this.userSvc.removeUser();
        this.router.navigate(['/account/login']);
      } else {
        FB.getLoginStatus((response) => {
          if (response.status === 'connected') {
            FB.logout((r) => {
              this.userSvc.removeUser();
              this.router.navigate(['/account/login']);
            });
          } else {
              this.userSvc.removeUser();
              this.router.navigate(['/account/login']);
          }
        });
      }
    }

    scrollToTop() {
      $('html, body').animate({
        scrollTop: 0
      }, 1500);
    }
}

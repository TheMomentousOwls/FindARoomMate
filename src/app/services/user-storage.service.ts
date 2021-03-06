import { User } from './../models/user.model';
import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';

const USERNAME_COOKIE_NAME = 'username';
const TOKEN_COOKIE_NAME = 'auth-token';
const PROFILE_PICTURE_NAME = 'profile-pic';

@Injectable()
export class UserStorageService {
  constructor(private cookieService: CookieService) {
  }

  isUserLogged(): boolean {
    return this.cookieService.check(TOKEN_COOKIE_NAME);
  }

  loginUser(username: string, authToken: string, profilePicture: string): void {
    this.cookieService.set(USERNAME_COOKIE_NAME, username);
    this.cookieService.set(TOKEN_COOKIE_NAME, authToken);
    this.cookieService.set(PROFILE_PICTURE_NAME, profilePicture);
  }

  logoutUser(): void {
    this.cookieService.deleteAll();
  }

  getLoggedUserProfilePicture(): string {
    return this.cookieService.get(PROFILE_PICTURE_NAME);
  }

  setUserInfo(user: User) {
    this.cookieService.set(USERNAME_COOKIE_NAME, user.username);
    this.cookieService.set(PROFILE_PICTURE_NAME, user.profilePictureUrl);
  }

  getLoggedUserUsername(): string {
    return this.cookieService.get(USERNAME_COOKIE_NAME);
  }

  getLoggedUserToken(): string {
    return this.cookieService.get(TOKEN_COOKIE_NAME);
  }
}

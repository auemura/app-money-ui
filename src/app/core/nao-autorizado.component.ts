import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LogoutService } from './../seguranca/logout.service';
import { ErrorHandlerService } from './error-handler.service';
import { AuthService } from './../seguranca/auth.service';

@Component({
  template: `
  <div class="container">
    <h1 class="text-center">Acesso negado!</h1>
    <li class="navbar-menuitem"><a href="javascript:;" (click)="logout()">Logout</a></li>
  </div>
  `,
})
export class NaoAutorizadoComponent implements OnInit {

  constructor(
    public auth: AuthService,
    private logoutService: LogoutService,
    private errorHandler: ErrorHandlerService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  logout() {
    this.logoutService.logout()
      .then(() => {
        this.router.navigate(['/login']);
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

}

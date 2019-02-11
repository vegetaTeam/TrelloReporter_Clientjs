import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {MembersService} from "../../services/APITrello/member.service";

@Component({
  selector: 'Reporter-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.sass']
})
export class HeadComponent implements OnInit {

  public isToggleActive: boolean = false;
  public user;

  constructor(private router: Router,
              private _memberService: MembersService) { }

  ngOnInit() {

    this._memberService.getMemberInfo().subscribe(
      next => this.user = next
    );

    this._memberService.loadMemberInfo();
  }

  /**
   * Muestra o oculta el toogle asignandole el valor contrario que tenga el isToggleActive.
   */
  public swToggle() {
    this.isToggleActive = !this.isToggleActive;
  }

  /**
   * Logout de la app
   * */
  public logout(){
    this.router.navigate(['']);
  }

}
import { Component } from '@angular/core';
import { MailService } from '../mail.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent {
Mail: any;

  constructor(private _mailService:MailService){

    _mailService.getmail().subscribe(
      (data:any)=>{
        console.log(data);
        this.Mail=data
      },(err:any)=>{
        alert('Internal Server Error')
      }
    )
  }

}

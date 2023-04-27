import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test_ea';
  constructor(private http: HttpClient) {}
  
  preview(){
      let model = {
        planId : '0004010',
        ssn : '000000067',
        enrollstatcd: 'abc',
        enrollsteP1CD: 'abc',
        enrollsteP2CD: 'abc',
        enrollsteP3CD: 'abc',
        enrollsteP4CD : 'abc'
      };
      let api_key = "Api_Key_Here";
      const headers = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${api_key}`
        });
      const requestOptions = { headers: headers };
      console.log("test");
      this.http.post('https://localhost:44390/api/enrollmentstatus', model, requestOptions).subscribe((item:any) => {
        window.location.href=item.enrollmentAppUrl;
      })
  }
}
  




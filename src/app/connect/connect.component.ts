import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import emailjs from 'emailjs-com';

emailjs.init('YOUR_USER_ID');

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css']
})
export class ConnectComponent implements OnInit {
  FormData: FormGroup;
  constructor(private form: FormBuilder) {

  }
  ngOnInit(){
    this.FormData = this.form.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
      message: new FormControl('')
    })
  }

  name: string;
  email: string;
  msg: string;

  generateMailtoLink() {
    const subject = encodeURIComponent('Form Submission');
    const body = encodeURIComponent(`Name: ${this.name}%0D%0AEmail: ${this.email}%0D%0AMessage: ${this.msg}`);
    // console.log(body)
    const link = `mailto:kvijayran3@gmail.com?subject=${subject}&body=${body}`;
    console.log(link)
    window.location.href = link
    // console.log("reset");
    // this.FormData.reset()
  }
  onSent(){
    // console.log("reset");
    // this.FormData.reset()
  }
  onSubmit(data){
    console.log("submitted!")
    window.location.href = 'mailto:kvijayran3@gmail.com?subject=Let us connect&body=Hello Iam ${data.value.name} and here is my email ${data.value.email}`; ${data.value.msg}'
  }
  // onSubmit(FormData){
  //   console.log(FormData)
  //   this.connect.postMessage(FormData)
  //   .subscribe(response => {
  //   location.href = 'https://mailthis.to/confirm'
  //   console.log(response)
  //   }, error => {
  //   console.warn(error.responseText)
  //   console.log({ error })
  //   })
  // }
}

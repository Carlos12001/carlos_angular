import { Component } from '@angular/core';
import { TestServiceService } from './services/test-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'carlos_angular';
  constructor(private TestServiceService: TestServiceService) { }


  ngOnInit(): void {
    this.TestServiceService.getAsientos().subscribe(data => {
      console.log(data);
    }
    );
  }

}

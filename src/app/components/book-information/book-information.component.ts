import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-information',
  templateUrl: './book-information.component.html',
  styleUrls: ['./book-information.component.css']
})
export class BookInformationComponent implements OnInit {
  constructor(private route: ActivatedRoute) { }

  params: any;

  ngOnInit() {
    this.route.paramMap
      .subscribe(params => {
        console.log(params);
        this.params = params;
        console.log(this.params);
      })
  }

}

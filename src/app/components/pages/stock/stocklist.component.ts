import { Component, OnInit } from '@angular/core';
import { StockServiceService } from 'src/app/services/stock.service';

@Component({
  selector: 'app-stocklist',
  templateUrl: './stocklist.component.html',
  styleUrls: ['./stocklist.component.css']
})
export class StocklistComponent implements OnInit {

  constructor(private service: StockServiceService) { }
  stock:any[] = []
  ngOnInit(): void {
    this.service.getStock().subscribe(data => {
      this.stock = data;
      console.log(this.stock)
    });
  }

}

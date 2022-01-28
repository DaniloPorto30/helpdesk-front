import { Component, OnInit, ViewChild  } from '@angular/core';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-graficos',
  templateUrl: './graficos.component.html',
  styleUrls: ['./graficos.component.scss']
})
export class GraficosComponent implements OnInit {

  chart = 'assets/img/sales-chart.svg'

  constructor() { }

  ngOnInit(): void {
  }

  canvas: any;
  ctx: any;
  @ViewChild('mychart') mychart:any;

  ngAfterViewInit() {
    this.canvas = this.mychart.nativeElement;
    this.ctx = this.canvas.getContext('2d');

    new Chart(this.ctx, {
      type: 'line',
      data: {
          datasets: [{
              label: 'Chamados atendidos',
              data: [0, 20, 40, 50],
              backgroundColor: "#6c63ff",
              borderColor: "#007ee7",
              fill: true,
          },
          {
            label: 'Chamados no periodo',
            data: [0, 20, 40, 60, 80, 100],
            backgroundColor: "#47a0e8",
            borderColor: "#007ee7",
            fill: true,
        }],
          labels: ['Agosto 2021', 'Setembro 2021', 'Outubro 2021', 'Novembro 2021', 'Dezembro 2021']
      },
  });
  }

}

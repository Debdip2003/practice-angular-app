import { Component, OnInit } from '@angular/core';
import { CustomPipePipe } from 'src/app/custom-pipe-pipe';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss'],
  imports: [CustomPipePipe],
})
export class PipesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

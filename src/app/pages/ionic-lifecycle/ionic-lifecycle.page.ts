import {
  Component,
  OnInit,
  OnDestroy,
  DoCheck,
  OnChanges,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: './ionic-lifecycle.page.html',
  styleUrls: ['./ionic-lifecycle.page.scss'],
  imports: [IonCol, IonRow, IonGrid],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IonicLifeCyclePage
  implements
    OnInit,
    OnDestroy,
    DoCheck,
    OnChanges,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked
{
  message: { name: string; timestamp: string }[] = [];
  currectActiveNumber!: number | null;

  addName(name: string) {
    const timestamp = performance.now().toFixed(0).toString();

    this.message.push({ name, timestamp });
  }

  constructor(private cdr: ChangeDetectorRef) {
    console.log('Constructor called');
    this.addName('Constructor called');
  }

  highlightColor(index: number) {
    setTimeout(() => {
      this.currectActiveNumber = index;
    }, 1000);
  }

  //angular life cycle hooks

  ngOnChanges() {
    // console.log(changes);

    console.log('ngOnChanges');
    this.addName('ngOnChanges called');
    this.highlightColor(1);
  }

  ngOnInit() {
    console.log('ngOnInit');
    this.addName('ngOnInit called');

    this.highlightColor(2);
  }

  ngDoCheck() {
    console.log('ngDoCheck');
    this.addName('ngDoCheck called');

    this.highlightColor(3);
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
    this.addName('ngAfterContentInIt called');

    this.highlightColor(4);
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
    this.addName('ngAfterContentChecked called');

    this.highlightColor(5);
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
    this.addName('ngAfterViewInit called');

    this.highlightColor(6);
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
    this.addName('ngAfterViewChecked called');

    this.highlightColor(7);
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
    this.addName('ngOnDestroy called');

    this.highlightColor(8);
  }

  //ionic life cycle hooks

  ionViewWillEnter() {
    console.log('ionViewWillEnter');
    this.addName('ionViewWillEnter called');

    this.highlightColor(9);
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter');
    this.addName('ionViewDidChange called');

    this.highlightColor(10);
  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave');
    this.addName('ionViewWillLeave called');

    this.highlightColor(11);
  }

  ionViewDidLeave() {
    console.log('ionViewDidLeave');
    this.addName('ionVIewDidLeave called');

    this.highlightColor(12);
  }
}

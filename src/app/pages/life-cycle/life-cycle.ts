import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  imports: [],
  templateUrl: './life-cycle.html',
  styleUrl: './life-cycle.css',
})
export class LifeCycle
  implements
    OnInit,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    DoCheck,
    OnDestroy
{
  ngOnInit(): void {
    console.log('ng OnInit');
  }

  ngAfterContentInit(): void {
    console.log('ng AfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('ng AfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('ng AfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('ng AfterViewChecked');
  }

  ngDoCheck(): void {
    console.log('ng DoCheck');
  }

  ngOnDestroy(): void {
    console.log('ng OnDestroy');
  }
}

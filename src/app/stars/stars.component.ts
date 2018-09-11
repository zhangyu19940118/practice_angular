import {Component, OnInit, Input, EventEmitter, Output, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit, OnChanges {

  @Input()
  public rating: number = 0;  // 父组件与子组件之间的数据传递

  @Output()
  private  ratingChange: EventEmitter<number> = new EventEmitter();

  public stars: boolean[];

  @Input()
  private readonly: boolean = true;

  constructor() { }

  ngOnInit() {

    // this.stars = [true, true, true, true, true];

    // this.stars = [];
    // for (let i = 1; i <= 5; i++) {
    //   this.stars.push(i > this.rating);
    // }

  }

  /*
  * 当输入属性初始化或是输入属性发生改变时将会调用该钩子*/
  ngOnChanges(changes: SimpleChanges): void {
    this.stars = [];
    for (let i = 1; i <= 5; i++) {
      this.stars.push(i > this.rating);
    }
  }

  clickStar(index: number) {
    if (!this.readonly) {
      this.rating = index + 1;
      // this.ngOnInit();
      this.ratingChange.emit(this.rating);
    }
  }


}

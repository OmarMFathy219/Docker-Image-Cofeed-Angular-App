import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {

  @Input() postId!: number;
  @Input() postImage!: string;
  @Input() posterImage!: string;
  @Input() posterName!: string;
  @Input() likeCount: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}

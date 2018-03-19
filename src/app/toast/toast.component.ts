import {Component, OnInit} from '@angular/core';
import * as Editor from 'tui-editor';
import * as showdown from 'showdown';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit {
  debug: boolean;
  public editor: Editor;
  private converter: showdown.Converter;

  constructor(private route: ActivatedRoute) {
    this.converter = new showdown.Converter({
      'tables': true,
      'strikeThrough': true
    });
    this.converter.setFlavor('github');
  }

  ngOnInit() {
    this.editor = new Editor({
      el: document.querySelector('#toastEditor'),
      initialEditType: 'wysiwyg',
      previewStyle: 'tab',
      height: 'auto'
    }, true, true);

    this.route.data
      .subscribe((data) => {
        this.debug = data.debug;
      });
  }


  html(markdownContent: String): String {
    return this.converter.makeHtml(markdownContent);
  }
}

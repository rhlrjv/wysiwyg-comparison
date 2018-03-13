import { Component, OnInit } from '@angular/core';
import * as Editor from 'tui-editor';
import * as showdown from 'showdown';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit {
  public editor: Editor;
  private converter: showdown.Converter;

  constructor() {
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

  }


  html(markdownContent: String): String {
    return this.converter.makeHtml(markdownContent);
  }

}

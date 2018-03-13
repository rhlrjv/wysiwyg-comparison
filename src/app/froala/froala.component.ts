import {Component} from '@angular/core';
import TurndownService from 'turndown';
import {gfm} from 'turndown-plugin-gfm';
import * as showdown from 'showdown';

@Component({
  selector: 'app-froala',
  templateUrl: './froala.component.html',
  styleUrls: ['./froala.component.css']
})
export class FroalaComponent {
  converter: any;
  turndownService: any;
  public editorContent: String = "Hello There!"

  public froalaOptions: Object = {
    charCounterCount: true,
    charCounterMax: 4000,
    colorsHEXInput: false,
    emoticonsSet: [],
    fileUpload: false,
    fontFamilySelection: false,
    fontSize: ['8', '10', '12', '14', '18', '30', '60', '96'],
    fontSizeSelection: true,
    toolbarButtons: ['bold', 'italic', '|',
      'paragraphFormat', 'formatOL', 'formatUL', 'quote', '|',
      'insertLink', 'insertImage', '|',
      'insertHR', 'undo', 'redo'],
    paragraphFormat: {
      N: 'Normal',
      H1: 'Heading 1',
      H2: 'Heading 2',
      H3: 'Heading 3',
    },
    LinkEditButtons: ['linkOpen', 'linkEdit', 'linkRemove'],
    LinkInsertButtons: ['linkBack'],
    linkList: [],
    pastePlain: false,
    pasteDeniedAttrs: ['class', 'id', 'style', 'font-family', 'font-size', 'color'],
    pasteAllowedStyleProps: [],
    htmlRemoveTags: ['script', 'style', 'base'],
    htmlDeniedTags:[],
    htmlExecuteScripts: false,
    htmlAllowedTags: ['a', 'br', 'div', 'dl', 'em', 'h1', 'h2', 'h3', 'hr', 'i', 'img', 'li', 'ol', 'p', 'span', 'strong', 'ul', 'blockquote'],
    shortcutsEnabled: ['bold', 'italic', 'indent', 'outdent', 'undo', 'redo', 'insertImage', 'createLink'],
    wordPasteModal: false,
    wordDeniedAttrs: ['style'],
    imageDefaultAlign: 'center',
    imageDefaultDisplay: 'block',
    imageEditButtons: ['imageReplace', 'imageRemove'],
    imageResize: false,
    imageTextNear: false,
    imageDefaultWidth: 0
  }

  constructor() {
    this.turndownService = new TurndownService({
      headingStyle: 'atx'
    });

    this.converter = new showdown.Converter();
    this.converter.setFlavor('github');
  }

  markdown(htmlContent: String): String {
    return this.turndownService.use(gfm).turndown(htmlContent);
  }

  html(markdownContent: String): String {
    return this.converter.makeHtml(markdownContent);
  }
}

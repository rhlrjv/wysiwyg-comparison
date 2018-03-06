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
    colorsText: ['#000000', '#ff0000', '#00ff00', 'REMOVE'],
    colorsBackground: ['#FFFF00', 'REMOVE'],
    colorsHEXInput: false,
    emoticonsSet: [],
    fileUpload: false,
    fontFamilySelection: false,
    fontSize: ['8', '10', '12', '14', '18', '30', '60', '96'],
    fontSizeSelection: true,
    toolbarButtons: ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', '|',
      'color', '|',
      'paragraphFormat', 'formatOL', 'formatUL', 'outdent', 'indent', 'quote', '|',
      'insertLink', 'insertImage', 'insertTable', '|',
      'insertHR', 'clearFormatting', 'undo', 'redo'],
    pastePlain: true,
    pasteDeniedAttrs: ['class', 'id', 'style', 'font-family', 'font-size', 'color'],
    pasteAllowedStyleProps: [],
    htmlRemoveTags: ['script', 'style', 'base'],
    htmlExecuteScripts: false,
    htmlAllowedTags: ['a', 'br', 'dd', 'div', 'dl', 'dt', 'em', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'hr', 'i', 'img', 'li', 'ol', 'p', 'span', 'strike', 'strong', 'tbody', 'td', 'tfoot', 'th', 'thead', 'title', 'tr', 'track', 'u', 'ul'],
    wordPasteModal: false
  }

  constructor() {
    this.turndownService = new TurndownService();

    this.converter = new showdown.Converter({
      'tables': true,
      'strikethrough': true
    });
    this.converter.setFlavor('github');
  }

  markdown(htmlContent: String): String {
    return this.turndownService.use(gfm).turndown(htmlContent);
  }

  html(markdownContent: String): String {
    return this.converter.makeHtml(markdownContent);
  }
}

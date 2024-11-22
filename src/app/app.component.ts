import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('editorContainer', { static: true }) editorContainer!: ElementRef;

  public editorInstance: any; // To hold the editor instance

  // ngAfterViewInit(): void {
  //   ClassicEditor.create(this.editorContainer.nativeElement, {
  //     // Editor configuration (optional)
  //     toolbar: ['bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote', 'heading', 'sourceEditing'],
  //     // plugins: ['List', 'Bold','Heading','SourceEditing'],
  //   })
  //     .then((editor: any) => {
  //       this.editorInstance = editor;
  //       console.log('Editor created:', editor);
  //     })
  //     .catch((error: any) => {
  //       console.error('There was a problem initializing the editor:', error);
  //     });
  // }

  // Cleanup the editor when the component is destroyed
  ngAfterViewInit(): void {
    ClassicEditor.create(this.editorContainer.nativeElement, {
      toolbar: ['bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote', 'heading',],
    })
      .then((editor: any) => {
        this.editorInstance = editor;
        console.log('Editor created:', editor);

        // Debugging: List all available toolbar items
        const availableItems = Array.from(editor.ui.componentFactory.names());
        console.log('Available toolbar items:', availableItems);
        
        // Check if the 'sourceEditing' item is available
        if (!availableItems.includes('sourceEditing')) {
          console.error('SourceEditing toolbar item is not available.');
        }
      })
      .catch((error: any) => {
        console.error('There was a problem initializing the editor:', error);
      });
  }
  
  ngOnDestroy(): void {
    if (this.editorInstance) {
      this.editorInstance.destroy();
    }
  }
}

// import { Component } from '@angular/core';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import { Editor } from '@ckeditor/ckeditor5-core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })
// export class AppComponent {
//   public Editor: typeof ClassicEditor = ClassicEditor;
//   public editorData = '<p>Hello, CKEditor 5!</p>';
// }






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

  ngAfterViewInit(): void {
    ClassicEditor.create(this.editorContainer.nativeElement, {
      // Editor configuration (optional)
      toolbar: ['bold', 'italic', 'link'],
    })
      .then((editor: any) => {
        this.editorInstance = editor;
        console.log('Editor created:', editor);
      })
      .catch((error: any) => {
        console.error('There was a problem initializing the editor:', error);
      });
  }

  // Cleanup the editor when the component is destroyed
  ngOnDestroy(): void {
    if (this.editorInstance) {
      this.editorInstance.destroy();
    }
  }
}

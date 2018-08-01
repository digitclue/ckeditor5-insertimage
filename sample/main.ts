import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import { ChangeImage } from '../src/changeimage';
import { InsertImage } from '../src/insertimage';

import '../theme/insertimage.css';

ClassicEditorBase
  .create(document.querySelector('#editor'), {
    plugins: [
      Essentials,
      Paragraph,
      Image,
      ImageCaption,
      ImageStyle,
      ImageToolbar,
      InsertImage,
      ChangeImage,
    ],

    toolbar: [
      'insertImage',
    ],

    image: {
      toolbar: [
        'imageStyle:full',
        'imageStyle:side',
        '|',
        'imageTextAlternative',
        'changeImage',
      ],
    },
  })
  .catch(err => {
    console.error(err.stack);
  });

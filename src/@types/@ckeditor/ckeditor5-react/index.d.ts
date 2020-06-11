declare module "@ckeditor/ckeditor5-react" {
  import { Component } from "react";

  export interface CKEditorProps {
    editor: any;
    config?: {};
    data?: string;
    onInit?: (editor: { data: string }) => void;
    onChange?: (event: React.ChangeEvent, editor: { getData: () => string }) => void;
    onBlur?: (event: React.FocusEvent<Element>, editor: Component) => void;
    onFocus?: (event: React.FocusEvent<Element>, editor: Component) => void;
    disabled?: boolean;
  }

  class CKEditor extends Component<CKEditorProps> {}

  export default CKEditor;
}

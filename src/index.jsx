import React from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import ReactDOM from "react-dom";

const App = () => (
  <div>
    <CKEditor editor={ClassicEditor} />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));

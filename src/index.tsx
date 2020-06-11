import React from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import ReactDOM from "react-dom";

const App = () => (
  <div>
    <CKEditor editor={ClassicEditor} data={"Text"} disabled={false} />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));

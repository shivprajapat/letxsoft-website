import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export default function BlogAditor() {
    const [description, setDescription] = useState({
        htmlValue: "<p></p>\n",
        editorState: EditorState.createEmpty()
    });

    const onEditorStateChange = editorValue => {
        const editorStateInHtml = draftToHtml(
            convertToRaw(editorValue.getCurrentContent())
        );

        setDescription({
            htmlValue: editorStateInHtml,
            editorState: editorValue
        });
    };
    return (
        <div className="editor-section">
            <Editor
                toolbarHidden={false}
                editorState={description.editorState}
                onEditorStateChange={onEditorStateChange}
                placeholder="hello placeholder"
            />
        </div>
    )
}

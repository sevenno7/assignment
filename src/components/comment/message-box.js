import React, { Component, PropTypes } from 'react';
import { EditorState } from 'draft-js';
import Editor from 'draft-js-plugins-editor';
import createEmojiPlugin from 'draft-js-emoji-plugin';
import 'draft-js-emoji-plugin/lib/plugin.css';

const emojiPlugin = createEmojiPlugin();
const { EmojiSuggestions } = emojiPlugin;

class MessageBox extends Component {
  constructor(props) {
    super(props);

    this.state = { editorState: EditorState.createEmpty() };
  }

  focus = () => this.editor.focus();

  onChange = (editorState) => {
    this.setState({ editorState });
  };

  submit = (e) => {
    e.preventDefault();
    this.props.onPost(this.state.editorState.getCurrentContent().getPlainText());
    this.setState({
      editorState: EditorState.createEmpty()
    });
  }

  render() {
    const {buttonLabel} = this.props;

    return (
      <section>
        <div className="col-sm-12 editor" onClick={this.focus}>
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            plugins={[emojiPlugin]}
            ref={element => {
              this.editor = element;
            }}
          />
          <EmojiSuggestions />
        </div>
        <div className="col-sm-12 margin-top-15 padding-right-0">
          <button type="submit" className="btn btn-default pull-right" onClick={this.submit}>{buttonLabel}</button>
        </div>
      </section>
    );
  }
}

MessageBox.defaultProps = {
  buttonLabel: 'Post'
}

MessageBox.propTypes = {
  onPost: PropTypes.func.isRequired,
  buttonLabel: PropTypes.string
}

export default MessageBox;
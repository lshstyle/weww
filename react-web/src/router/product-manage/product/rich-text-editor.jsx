import React from 'react'
import PropTypes from 'prop-types'
import { EditorState, convertToRaw, ContentState} from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';

import {BASE_IMG_URL} from '../../../utils/constants'

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

export default  class RichTextEditor  extends React.Component {

    static propTypes = {
        detail: PropTypes.string
    }

    constructor(props) {
        super(props)
        const html = this.props.detail
        if (html) {
            const contentBlock = htmlToDraft(html)
            if (contentBlock) {
                const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks)
                const editorState = EditorState.createWithContent(contentState)
                this.state = {
                    editorState
                }
            }
        } else {
            this.state = {
                editorState: EditorState.createEmpty()
            }
        }
    }

    state = {
        editorState: EditorState.createEmpty(),
      }
    
      onEditorStateChange = (editorState) => {
        this.setState({
          editorState,
        })
      }


      getDetail = () => {
        const { editorState } = this.state;
        return draftToHtml(convertToRaw(editorState.getCurrentContent()))
      }

      uploadImgCallback= (file)=> {
        return new Promise(
            (resolve, reject) => {
                const xhr = new XMLHttpRequest()
                xhr.open('post',  '/upload/add')
                const data = new FormData()
                data.append('file', file)
                xhr.send(data)
                xhr.addEventListener('load', () => {
                    const response = JSON.parse(xhr.responseText)
                    const url = BASE_IMG_URL+ response.data.name
                    resolve({data:{link:url}})
                })
                xhr.addEventListener('error', () => {
                    const response = JSON.parse(xhr.responseText)
                    reject(response)
                })
            }
        )
      }
    
      render() {
        const { editorState } = this.state;
        return (
            <Editor
              editorState={editorState}
               editorStyle={{border: '1px solid black', minHeight:200, paddingLeft: 10}}
              onEditorStateChange={this.onEditorStateChange}
              toolbar={{
                image: {uploadCallback: this.uploadImgCallback, alt: {present:true, mandatory:true}}
              }}
            />
        )
      }
}
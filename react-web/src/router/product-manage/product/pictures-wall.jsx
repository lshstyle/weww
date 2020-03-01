import React from  'react'
import {Icon ,Upload, Modal, message} from 'antd'

import httpStatus from '../../../utils/httpStatus'

export default class PicturesWall extends React.Component{

    state = {
        previewVisible: false,
        previewImage: '',
        fileList: []
    }

    handleCancel = () => {
        this.setState({previewVisible: false})
    }

    handlePreview = file => {
        this.setState({
            previewImage: file.url || file.thumbUrl,
            previewVisible: true
        })
    }

    handleChange = ({file, fileList}) => {
        if (file.status === 'done') {
            const result = file.response
            if (result.code === httpStatus.ADD) {
                message.success('上传图片成功！')
                const {fileName, name,id} = result.data
                const currFile = fileList[fileList.length-1]
                currFile.name= fileName
                currFile.uid = id
                currFile.url = "http://localhost:9090/img/" + name
            } else {
                message.error('上传图片失败！')
            }
        }
        this.setState({fileList})
    }

    render() {
        const {previewVisible, previewImage,fileList} = this.state
        const UploadButton = (
            <div>
                <Icon type='plus' />
                <div className='ant-upload-text'>Upload</div>
            </div>
        )

        return (
            <div>
                <Upload
                    action='/upload/add'
                    accept = 'image/*'
                    name='file'
                    listType='picture-card'
                    fileList={fileList}
                    onPreview={this.handlePreview}
                    onChange={this.handleChange}
                >
                    { fileList.length >= 3? null : UploadButton}
                </Upload>
                <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                    <img alt='图片' style={{width: '100%'}} src={previewImage} />
                </Modal>
            </div>
        )
    }
}
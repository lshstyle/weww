import React from  'react'
import {Icon ,Upload, Modal, message} from 'antd'
import PropTypes from 'prop-types'

import httpStatus from '../../../utils/httpStatus'
import {reqUploadDelete} from '../../../api'
import {BASE_IMG_URL} from '../../../utils/constants'

export default class PicturesWall extends React.Component{

    static propTypes = {
        imgs: PropTypes.string
    }

    constructor(props) {
        super(props)
        let fileList = []
        const imgs = this.props.imgs
        if (imgs && imgs.length > 0) {
            fileList = imgs.split(',').map((img, index) => ({
                uid: -index,
                name: img,
                url: BASE_IMG_URL+img,
                status: 'done'
            }))
            this.state = {
                previewVisible: false,
                previewImage: '',
                fileList
            }
        } else {
            this.state = {
                previewVisible: false,
                previewImage: '',
                fileList:[]
            }
        }
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

    handleChange = async ({file, fileList}) => {
        if (file.status === 'done') {
            const result = file.response
            if (result.code === httpStatus.ADD) {
                message.success('上传图片成功！')
                const {name,id} = result.data
                const currFile = fileList[fileList.length-1]
                currFile.name= name
                currFile.uid = id
                currFile.id = id
                currFile.url = BASE_IMG_URL + name
            } else {
                message.error('上传图片失败！')
            }
        } else if (file.status === 'removed') {
            const result = await reqUploadDelete(file.name)
            if (result.code === httpStatus.DELETE) {
                message.success('删除图片成功！')
            } else {
                message.error('删除图片失败！')
            }
        }
        this.setState({fileList})
    }

    getImgs = () => {
        return this.state.fileList.map(file =>file.name).join()
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
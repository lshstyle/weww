import React from 'react'

import memoryUtils from '../../utils/memoryUtil'
import './index.less'

export default class Home extends React.Component {

    render() {
        const user= memoryUtils.user
        return (
            <div className="home"> {user.userName} 欢迎使用系统！</div>
        )
    }
}
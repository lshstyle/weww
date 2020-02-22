import React from 'react'
import {withRouter} from 'react-router-dom'
import {Modal} from 'antd'

import './index.less'
import {formatDate} from '../../utils/dateUtil'
import memoryUtil from '../../utils/memoryUtil'
import storageUtil from '../../utils/storageUtil'
import {reqWeather} from '../../api'
import menuList from '../../config/menu'
import LinkButton from '../link-button'

class Header extends React.Component {

    state = {
        currTime : '',
        dayPictureUrl: '',
        weather: ''

    }

    componentDidMount() {
        this.getTime()
        this.getWeather()
    }

    getTime = () => {
        this.intervalId = setInterval(() => {
            const currTime = formatDate(Date.now())
            this.setState({currTime})
        }, 1000)
    }

    getWeather = async () => {
        const {dayPictureUrl, weather} = await reqWeather('武汉')
        this.setState({dayPictureUrl, weather})
    }

    getTitle = () => {
        const path = this.props.location.pathname
        let title 
        menuList.forEach(item => {
            if (item.key === path) {
                title = item.title
            } else if (item.child){
                const menu = item.child.find(cItem => cItem.key === path)
                if (menu) {
                    title = menu.title
                }
            }
        })
        return title
    }

    logout = () => {
        Modal.confirm({
            content: '确定退出吗？',
            onOk: () => {
              memoryUtil.user = {}
              storageUtil.removeUser()
              this.props.history.replace('/login')
            },
          })
    }

    componentWillUnmount() {
        clearInterval(this.intervalId)
    }

    render() {
        const {currTime, dayPictureUrl, weather} = this.state
        const userName = memoryUtil.user.userName
        const title = this.getTitle()
        return (
            <div className='header'>
                <div className='header-top'>
                    <span>欢迎，{userName}</span>
                    <LinkButton onClick={this.logout}>退出</LinkButton>
                </div>
                <div className='header-bottom'>
                    <div className='header-bottom-left'>{title}</div>
                    <div className='header-bottom-right'>
                        <span>{currTime}</span>
                        <img src={dayPictureUrl} alt='天气'/>
                        <span>{weather}</span>
                    </div>
                </div>
            </div>
        )
    }

}

export default withRouter(Header)

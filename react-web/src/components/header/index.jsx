import React from 'react'
import {withRouter} from 'react-router-dom'
import {Modal} from 'antd'
import {connect} from 'react-redux'
import {resetUser,resetMenus} from '../../redux/actions'

import './index.less'
import {formatDate} from '../../utils/dateUtil'
import {reqWeather} from '../../api'
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

    logout = () => {
        Modal.confirm({
            content: '确定退出吗？',
            onOk: () => {
              this.props.resetUser()
              this.props.resetMenus()
            },
          })
    }

    componentWillUnmount() {
        clearInterval(this.intervalId)
    }

    render() {
        const {currTime, dayPictureUrl, weather} = this.state
        const userName = this.props.user.name
        const title = this.props.headTitle
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

export default connect(
    state =>({headTitle: state.headTitle, user: state.user}),
    {resetUser, resetMenus}
)(withRouter(Header))

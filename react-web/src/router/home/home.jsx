import React from 'react'

import memoryUtils from '../../utils/memoryUtil'

export default class Home extends React.Component {

    render() {
        const user= memoryUtils.user
        return (
            <div>Home {user.userName}</div>
        )
    }
}
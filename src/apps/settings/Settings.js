/* eslint-disable no-shadow */
import React, { useState } from 'react'
import { connect } from 'react-redux'
import App from 'apps/App'
import Switch from 'components/desktop/atoms/Switch'
// import desktop from 'assets/img/preferences/preferences-desktop.svg';
import app from 'assets/img/preferences/preferences-app.svg'
import colors from 'assets/img/preferences/preferences-colors.svg'
import taskbar from 'assets/img/preferences/preferences-taskbar.svg'
// import language from 'assets/img/preferences/preferences-language.svg';
import time from 'assets/img/preferences/preferences-time.svg'
import notifications from 'assets/img/preferences/preferences-notifications.svg'
import cookies from 'assets/img/preferences/preferences-cookies.svg'
import info from 'assets/img/preferences/preferences-info.svg'
import lightmode from 'assets/img/preferences/color/lightmode.svg'
import darkmode from 'assets/img/preferences/color/darkmode.svg'
import basic from 'assets/img/preferences/taskbar/basic.svg'
import rounded from 'assets/img/preferences/taskbar/rounded.svg'
import {
    switchStyle,
    switchMode,
    updateTaskbarTransparency,
    changePrimary,
    switchIconType,
    switchDateHide,
    switchDateFormat,
    changeNotificationsPosition,
} from 'actions'
import icon from 'assets/img/apps/preferences.svg'
import notificationBoard from 'assets/img/preferences/notifications/notification-board.svg'
import {
    Content,
    Side,
    Section,
    Subsection,
    Picker,
    Mode,
    Position,
    PositionButton,
} from './styles'

const Settings = ({
    settings,
    switchMode,
    switchStyle,
    updateTaskbarTransparency,
    changePrimary,
    theme,
    switchIconType,
    switchDateHide,
    switchDateFormat,
    changeNotificationsPosition,
}) => {
    const { style, mode, primary } = theme
    const {
        isOpen,
        isMinimized,
        isMaximized,
        x,
        y,
        width,
        height,
        appName,
    } = settings
    const [rangeValue, updateRangeValue] = useState(30)
    const [color, updateColor] = useState('#FFFFFF')
    const pickerColors = [
        '#FF6900',
        '#FCB900',
        '#7BDCB5',
        '#00D084',
        '#8ED1FC',
        '#0693E3',
        '#EB144C',
        '#F78DA7',
        '#9900EF',
        color,
    ]
    return (
        <App
            isOpen={isOpen}
            isMinimized={isMinimized}
            isMaximized={isMaximized}
            x={x}
            y={y}
            width={width}
            height={height}
            appName={appName}
            minWidth='1008'
            minHeight='567'
            icon={icon}
        >
            <Content>
                <Side left>
                    <Section>
                        <span>
                            <img src={taskbar} alt='taskbar' />
                            <h1>Taskbar</h1>
                        </span>
                        <Subsection>
                            Transparency:
                            <input
                                style={{ width: '35%' }}
                                type='range'
                                min='0'
                                max='100'
                                value={rangeValue}
                                onChange={e => {
                                    updateRangeValue(e.target.value)
                                    updateTaskbarTransparency(
                                        e.target.value,
                                    )
                                }}
                            />
                        </Subsection>
                        <Subsection>
                            Icon type:
                            <Switch
                                left='icon'
                                right='text'
                                dispatch={switchIconType}
                                color={primary}
                            />
                        </Subsection>
                    </Section>
                    <Section>
                        <span>
                            <img src={app} alt='app' />
                            <h1>App</h1>
                        </span>
                        <Subsection>
                            <Mode
                                isActive={style === 'basic'}
                                left
                                color={primary}
                            >
                                <button
                                    type='button'
                                    onClick={() =>
                                        switchStyle('basic')
                                    }
                                >
                                    <img src={basic} alt='' />
                                    <div />
                                </button>
                                basic
                            </Mode>
                            <Mode
                                isActive={style === 'rounded'}
                                right
                                color={primary}
                            >
                                <button
                                    type='button'
                                    onClick={() =>
                                        switchStyle('rounded')
                                    }
                                >
                                    <img src={rounded} alt='' />
                                    <div />
                                </button>
                                rounded
                            </Mode>
                        </Subsection>
                    </Section>
                    <Section>
                        <span>
                            <img
                                src={notifications}
                                alt='notifications'
                            />
                            <h1>Notifications</h1>
                        </span>
                        <Subsection>
                            <span
                                style={{
                                    alignSelf: 'flex-start',
                                    width: 'auto',
                                }}
                            >
                                Notifications position:
                            </span>
                            <Position>
                                <img
                                    src={notificationBoard}
                                    alt='jd'
                                />
                                <PositionButton
                                    topLeft
                                    onClick={() =>
                                        changeNotificationsPosition(
                                            'topLeft',
                                        )
                                    }
                                    isActive={
                                        theme.notificationsPosition ===
                                        'topLeft'
                                    }
                                    bg={theme.primary}
                                />
                                <PositionButton
                                    topRight
                                    onClick={() =>
                                        changeNotificationsPosition(
                                            'topRight',
                                        )
                                    }
                                    isActive={
                                        theme.notificationsPosition ===
                                        'topRight'
                                    }
                                    bg={theme.primary}
                                />
                                <PositionButton
                                    bottomLeft
                                    onClick={() =>
                                        changeNotificationsPosition(
                                            'bottomLeft',
                                        )
                                    }
                                    isActive={
                                        theme.notificationsPosition ===
                                        'bottomLeft'
                                    }
                                    bg={theme.primary}
                                />
                                <PositionButton
                                    bottomRight
                                    onClick={() =>
                                        changeNotificationsPosition(
                                            'bottomRight',
                                        )
                                    }
                                    isActive={
                                        theme.notificationsPosition ===
                                        'bottomRight'
                                    }
                                    bg={theme.primary}
                                />
                            </Position>
                        </Subsection>
                    </Section>
                    <Section>
                        <span>
                            <img src={cookies} alt='cookies' />
                            <h1>cookies</h1>
                        </span>
                        <Subsection>
                            Feature not added yet!
                        </Subsection>
                    </Section>
                </Side>
                <Side right>
                    <Section>
                        <span>
                            <img src={colors} alt='colors' />
                            <h1>Colors</h1>
                        </span>
                        <Subsection>
                            <Mode
                                isActive={mode === 'light'}
                                left
                                color={primary}
                            >
                                <button
                                    type='button'
                                    onClick={() =>
                                        switchMode('light')
                                    }
                                >
                                    <img src={lightmode} alt='' />
                                    <div />
                                </button>
                                light
                            </Mode>
                            <Mode
                                isActive={mode === 'dark'}
                                right
                                color={primary}
                            >
                                <button
                                    type='button'
                                    onClick={() => switchMode('dark')}
                                >
                                    <img src={darkmode} alt='' />
                                    <div />
                                </button>
                                dark
                            </Mode>
                        </Subsection>
                        <Subsection>
                            <span
                                style={{
                                    alignSelf: 'flex-start',
                                    width: 'auto',
                                }}
                            >
                                Primary Color:
                            </span>
                            <Picker
                                disableAlpha
                                triangle='hide'
                                color={color}
                                onChange={e => {
                                    updateColor(e.hex)
                                    changePrimary(e.hex)
                                }}
                                colors={pickerColors}
                            />
                        </Subsection>
                    </Section>
                    <Section>
                        <span>
                            <img src={time} alt='date&time' />
                            <h1>Date & Time</h1>
                        </span>
                        <Subsection>
                            Format:
                            <Switch
                                left='24h'
                                right='12h'
                                dispatch={switchDateFormat}
                                color={primary}
                            />
                        </Subsection>
                        <Subsection>
                            Date:
                            <Switch
                                left='hide'
                                right='show'
                                dispatch={switchDateHide}
                                color={primary}
                            />
                        </Subsection>
                    </Section>
                    <Section>
                        <span>
                            <img src={info} alt='info' />
                            <h1>Info</h1>
                        </span>
                        <Subsection>HisaSystems</Subsection>
                    </Section>
                </Side>
            </Content>
        </App>
    )
}

const mapStateToProps = state => {
    return {
        settings: state.appsReducer.settings,
        theme: state.themeReducer,
    }
}

const mapDispatchToProps = dispatch => ({
    switchMode: mode => dispatch(switchMode(mode)),
    switchStyle: style => dispatch(switchStyle(style)),
    updateTaskbarTransparency: transparency =>
        dispatch(updateTaskbarTransparency(transparency)),
    changePrimary: color => dispatch(changePrimary(color)),
    switchIconType: type => dispatch(switchIconType(type)),
    switchDateHide: hide => dispatch(switchDateHide(hide)),
    switchDateFormat: format => dispatch(switchDateFormat(format)),
    changeNotificationsPosition: position =>
        dispatch(changeNotificationsPosition(position)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Settings)

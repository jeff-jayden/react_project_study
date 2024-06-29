import {useRef, useState} from 'react'
import '../style/comment.css'
// @ts-ignore
import avatar from '../assets/bozai.png'
import orderBy from 'lodash/orderBy'
import {v4 as uuid} from 'uuid'
import dayjs from "dayjs";


export function Comment() {
    const [activeTab, setActiveTab] = useState('hot')
    const [list, setList] = useState(defaultList)

    //删除评论
    const onDelete = (rpid: number) => {
        console.log(JSON.stringify(list))
        setList(list.filter(item => item.rpid != rpid))
    }

    // tab 高亮切换
    const onToggle = (type: string) => {
        setActiveTab(type)
        let newList
        if (type === 'time') {
            // 按照时间降序排序
            // orderBy(对谁进行排序, 按照谁来排, 顺序)
            newList = orderBy(list, 'ctime', 'desc')
        } else {
            // 按照喜欢数量降序排序
            newList = orderBy(list, 'like', 'desc')
        }
        setList(newList)
    }

    //发表评论
    const [content, setContent] = useState('')
    const inputRef = useRef(null)
    const onPublish = () => {
        setList([
            ...list,
            {
                rpid: 1,
                user: {
                    uid: '30009257',
                    avatar,
                    uname: 'hyh',
                },
                content: content,
                ctime: dayjs(new Date()).format('MM-DD hh:mm'),
                like: 66,
            }
        ])
        setContent('')
        // @ts-ignore
        inputRef.current.focus()
    }

    // @ts-ignore
    return (
        <div className="app">
            <div className="reply-navigation">
                <ul className="nav-bar">
                    <li className="nav-title">
                        <span className="nav-title-text">评论</span>
                        {/* 评论数量 */}
                        <span className="total-reply">{list.length}</span>
                    </li>
                    <li className="nav-sort">
                        {/* 高亮类名： active */}
                        {tabs.map((item: any) => {
                            return (
                                <div
                                    key={item.type}
                                    className={
                                        item.type === activeTab ? 'nav-item active' : 'nav-item'
                                    }
                                    onClick={() => onToggle(item.type)}
                                >
                                    <span className='nav-item'>{item.text}</span>
                                </div>
                            )
                        })}
                    </li>
                </ul>
            </div>
            <div className="reply-wrap">
                <div className="box-normal">
                    <div className="reply-box-avatar">
                        <div className="bili-avatar">
                            <img className="bili-avatar-img" src={avatar} alt="用户头像"/>
                        </div>
                    </div>
                    <div className="reply-box-wrap">
                        {/* 评论框 */}
                        <textarea
                            className="reply-box-textarea"
                            placeholder="发一条友善的评论"
                            ref={inputRef}
                            value={content}
                            onChange={e => setContent(e.target.value)}
                        />
                        {/* 发布按钮 */}
                        <div className="reply-box-send">
                            <div className="send-text" onClick={() => onPublish()}>发布</div>
                        </div>
                    </div>
                </div>
                {/* 评论列表 */}
                <div className="reply-list">
                    {/* 评论项 */}
                    {
                        list.map((item: any, index: number) => {
                            return (
                                <div className="reply-item" key={index}>
                                    {/* 头像 */}
                                    <div className="root-reply-avatar">
                                        <div className="bili-avatar">
                                            <img
                                                className="bili-avatar-img"
                                                src={item.user.avatar}
                                                alt=""
                                            />
                                        </div>
                                    </div>

                                    <div className="content-wrap">
                                        {/* 用户名 */}
                                        <div className="user-info">
                                            <div className="user-name">{item.user.uname}</div>
                                        </div>
                                        {/* 评论内容 */}
                                        <div className="root-reply">
                                            <span className="reply-content">{item.content}</span>
                                            <div className="reply-info">
                                                {/* 评论时间 */}
                                                <span className="reply-time">{item.ctime}</span>
                                                {/* 评论数量 */}
                                                <span className="reply-time">点赞数:{item.like}</span>
                                                <span className="delete-btn"
                                                      onClick={() => onDelete(item.rpid)}>删除</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}


const defaultList = [
    {
        // 评论id
        rpid: 3,
        // 用户信息
        user: {
            uid: '13258165',
            avatar,
            uname: '周杰伦',
        },
        // 评论内容
        content: '哎哟，不错哦',
        // 评论时间
        ctime: '10-18 08:15',
        like: 88,
    },
    {
        rpid: 2,
        user: {
            uid: '36080105',
            avatar,
            uname: '许嵩',
        },
        content: '我寻你千百度 日出到迟暮',
        ctime: '11-13 11:29',
        like: 88,
    },
    {
        rpid: 1,
        user: {
            uid: '30009257',
            avatar,
            uname: '黑马前端',
        },
        content: '学前端就来黑马',
        ctime: '10-19 09:00',
        like: 66,
    },
]
// 当前登录用户信息
const user = {
    // 用户id
    uid: '30009257',
    // 用户头像
    avatar,
    // 用户昵称
    uname: '黑马前端',
}

/**
 * 导航 Tab 的渲染和操作
 *
 * 1. 渲染导航 Tab 和高亮
 * 2. 评论列表排序
 *  最热 => 喜欢数量降序
 *  最新 => 创建时间降序
 */

// 导航 Tab 数组
const tabs = [
    {type: 'hot', text: '最热'},
    {type: 'time', text: '最新'},
]




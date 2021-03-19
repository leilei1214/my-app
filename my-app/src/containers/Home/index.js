import React, { Component } from 'react'
import './css/style.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import ev_1 from './檔案1.jpg'
import ev_2 from './檔案2.jpg'
import ev_3 from './檔案5.jpg'
import ev_4 from './檔案6.jpg'
import ev_5 from './檔案7.jpg'
import ev_6 from './檔案9.jpg'
import ev_7 from './檔案10.jpg'
import ev_8 from './檔案13.jpg'


export default class Home extends Component {
    
    state = {
        imgs:[
            './檔案1.jpg',
            './檔案2.jpg',
            './檔案5.jpg',
            './檔案6.jpg',
            './檔案7.jpg',
            './檔案9.jpg',
            './檔案10.jpg',
            './檔案13.jpg',
        ],   // 圖片數組
            showIndex: 0, //顯示第幾個圖片
            timer: null,  // 定時器
            show: false   // 前後按鈕顯示
    }
    render() {
        const settings = {
        
            dots: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1000, 
            responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
          
    }
        return (
            <div className="Home">
                <div className="title">
                    關於我們
                </div>
                <div className="content_title">
                    環境介紹
                </div>
                <Slider {...settings}>

                    <div className="pic"> 
                        <img src={ev_1} alt="環境1" />                    
                    </div>
                    <div className="pic">
                        <img src={ev_2} alt="" />
                    </div>
                    <div className="pic">
                        <img src={ev_3} alt="" />
                    </div>
                    <div className="pic">
                        <img src={ev_4} alt="" />
                    </div>
                    <div className="pic">
                        <img src={ev_5} alt="" />
                    </div>
                    <div className="pic">
                        <img src={ev_6} alt="" />
                    </div>
                    <div className="pic">
                        <img src={ev_7} alt="" />
                    </div>
                    <div className="pic">
                        <img src={ev_8} alt="" />
                    </div> 
                </Slider>
                <div className="row content">
                    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                        <div className="btn-image"><div className="album_list"><img src={ev_1} alt="環境1" /></div></div>
                    </div>               
                    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                        <div className="btn-image"><div className="album_list"><img src={ev_2} alt="" /></div></div>
                    </div>                
              
                    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                        <div className="btn-image"><div className="album_list"><img src={ev_5} alt="" /></div></div>
                    </div>                
                    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                        <div className="btn-image"><div className="album_list"><img src={ev_6} alt="" /></div></div>
                    </div>                
                    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                        <div className="btn-image"><div className="album_list"><img src={ev_8} alt="" /></div></div>
                    </div>                
                    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                        <div className="btn-image"><div className="album_list"><img src={ev_7} alt="" /></div></div>
                    </div> 
                    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                        <div className="btn-image"><div className="album_list"><img src={ev_3} alt="" /></div></div>
                    </div>                
                    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                        <div className="btn-image"><div className="album_list"><img src={ev_4} alt="" /></div></div>
                    </div>                 
                </div>
            </div>
        )
    }
}

// import bg from './bg.jpg'

// export default className Home extends Component {
//     state = {
//         message: "",
//         messageList: []
//     };
//     inputText = (event) => {
//         const { name, value } = event.target;
//         this.setState({[name]: value})
//     }
//     onSubmit = (event) => {
//         const { message, messageList } = this.state;

//         this.setState({
//             messageList: [...messageList, message],
//             message: ""
//         })
//         event.preventDefault();
//     }
//     render() {
//         const styles = {
//             backgroundImage: {
//                 backgroundImage: `url(${bg})`
//             }
//         }
//         const showMessageList = this.state.messageList.map((item, index) => {
//             return <li key={ index }><strong>user: </strong>{ item }</li>
//         })
//         return (
//             <div className="Home" style={ styles.backgroundImage }>
//                 <div className="chat">
//                     <div className="chat-main">
//                         <div className="chat-message">
//                             <ul>{ showMessageList }</ul>
//                         </div>
//                         <form 
//                             className="chat-posts"
//                             onSubmit = { this.onSubmit }
//                         >
//                             <input
//                                 type = "text"
//                                 name = "message"
//                                 placeholder="請輸入欲輸入的訊息"
//                                 value = { this.state.message }
//                                 onChange = { this.inputText }
//                             /></div></div>
//                             <input type="submit" value="送出"/></div></div>
//                         </form>
//                     </div>
//                     <div className="chat-online">
//                         <ul>
//                             <li><strong>lei</strong><em>on</em></li>
//                             <li><strong>maple</strong><em>on</em></li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

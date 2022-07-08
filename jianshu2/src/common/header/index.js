import React,{Component} from "react";
import { HeaderWrapper,
	Logo,
	Nav,
	NavItem,
	SearchWrapper,
	NavSearch,
	SearchInfo,
	SearchInfoTitle,
	SearchInfoSwitch,
	SearchInfoList,
	SearchInfoItem,
	Addition,
	Button } from "./style";

import {CSSTransition} from 'react-transition-group'
import {connect} from 'react-redux'
import { actionCreators } from "./store";
import { toJS } from "immutable";
import { mouseEnter } from "./store/actionCreators";



class Header extends Component{

    searchInfoShow = ()=>{
        const {list,page,handleMouseEnter,handleMouseLeave,mouseIn,focused,changePage,totalPage} = this.props
        const pageList = []
        // List是一个immutable对象，需要先转换成正常的JS对象,才能进行操作
        const JSList = list.toJS()
        // 先检测LIST是否为空，防止在页面初始化的时候读取不到值
        if(JSList.length){
            for(let i=(page-1)*10;i<page*10;i++){
                pageList.push(<SearchInfoItem key={JSList[i]}>{JSList[i]}</SearchInfoItem>)
            }

        }
        
        if(focused || mouseIn){
            return(
                <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <SearchInfoTitle>
                    热门搜索
                    <SearchInfoSwitch onClick={()=>changePage(page,totalPage)}><i ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe851;</i>换一批</SearchInfoSwitch>
                </SearchInfoTitle>
                <div>
                   {pageList}
                </div>
            </SearchInfo>
    
            )
        }else{
            return null
        }
    
    } 
    render(){
        const {focused,handleBlur,handleFocus,list} = this.props
        return(
            <HeaderWrapper>
            <Logo/>
            <Nav>
                <NavItem className="left active">首页</NavItem>
                <NavItem className="left">下载APP</NavItem>
                <NavItem className="right">登录</NavItem>
                <NavItem className="right"><span className="iconfont">&#xe636;</span></NavItem>
                <SearchWrapper>
                <CSSTransition timeout={200} in={focused} classNames="slide">
                <NavSearch className={focused ? "focused" : ""} onFocus={()=>handleFocus(list)} onBlur={handleBlur}></NavSearch>
                </CSSTransition>
                <span className={focused ? "focused iconfont zoom" : "iconfont zoom"}>&#xe614;</span>
               {this.searchInfoShow()}
                </SearchWrapper>
            </Nav>
            <Addition>
                <Button className="writting"><span className="iconfont">&#xe615;</span>写文章</Button>
                <Button className="reg">注册</Button>
            </Addition>
        </HeaderWrapper>
        )
        
    }
}


const mapStateToProps = (state) =>{
    return{
        focused:state.get('header').get('focused'),
        list:state.getIn(['header','list']),
        page:state.getIn(['header','page']),
        totalPage:state.getIn(['header','totalPage']),
        mouseIn:state.getIn(['header','mouseIn'])
        
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        handleFocus(list ){
            dispatch(actionCreators.getList(list))
            dispatch(actionCreators.searchFocus())
            
    },
    handleBlur(){
        dispatch(actionCreators.searchBlur())
    },
    handleMouseEnter(){
        dispatch(actionCreators.mouseEnter())
    },
    handleMouseLeave(){
        dispatch(actionCreators.mouseLeave())
    },
    changePage(page,totalPage){
        if(page<totalPage){
            dispatch(actionCreators.changeToNewPage(page+1))
        }
        else{
            dispatch(actionCreators.changeToNewPage(1))
        }

       
    }
}}
export default connect(mapStateToProps,mapDispatchToProps)(Header)
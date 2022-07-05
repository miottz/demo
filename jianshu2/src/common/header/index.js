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

const searchInfoShow = (show)=>{
    if(show){
        return(
            <SearchInfo >
            <SearchInfoTitle>
                热门搜索
                <SearchInfoSwitch>换一批</SearchInfoSwitch>
            </SearchInfoTitle>
            <div>
                <SearchInfoItem>教育</SearchInfoItem>
                <SearchInfoItem>教育</SearchInfoItem>
                <SearchInfoItem>教育</SearchInfoItem>
                <SearchInfoItem>教育</SearchInfoItem>
                <SearchInfoItem>教育</SearchInfoItem>
                <SearchInfoItem>教育</SearchInfoItem>
            </div>
        </SearchInfo>

        )
    }else{
        return null
    }

} 

 const Header = (props)=>{
        const {focused,handleBlur,handleFocus} = props
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
                    <NavSearch className={focused ? "focused" : ""} onFocus={handleFocus} onBlur={handleBlur}></NavSearch>
                    </CSSTransition>
                    <span className={focused ? "focused iconfont" : "iconfont"}>&#xe614;</span>
                   {searchInfoShow(focused)}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className="writting"><span className="iconfont">&#xe615;</span>写文章</Button>
                    <Button className="reg">注册</Button>
                </Addition>
			</HeaderWrapper>
        )
}

const mapStateToProps = (state) =>{
    return{
        focused:state.get('header').get('focused')
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        handleFocus(){
            dispatch(actionCreators.searchFocus())
    },
    handleBlur(){
        dispatch(actionCreators.searchBlur())
    }
}}
export default connect(mapStateToProps,mapDispatchToProps)(Header)
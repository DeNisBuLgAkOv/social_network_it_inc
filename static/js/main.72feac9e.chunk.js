(this.webpackJsonpnew_social_network=this.webpackJsonpnew_social_network||[]).push([[0],{10:function(e,t,s){e.exports={dialogs:"Dialogs_dialogs__2xw7E",dialog:"Dialogs_dialog__LCnYb",messages:"Dialogs_messages__2BO8o",message:"Dialogs_message__1C9mB"}},20:function(e,t,s){e.exports={postsBlock:"MyPosts_postsBlock__NzxG4"}},22:function(e,t,s){e.exports={photo:"users_photo__3RoKM",selectedPage:"users_selectedPage__QJMNA"}},34:function(e,t,s){e.exports={header:"Header_header__yD6yM"}},36:function(e,t,s){e.exports={item:"Posts_item__3gfG2"}},38:function(e,t,s){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__TobT7"}},47:function(e,t,s){},48:function(e,t,s){},77:function(e,t,s){"use strict";s.r(t);var n=s(1),a=s.n(n),c=s(15),i=s.n(c),r=(s(47),s(48),s(7)),o=s(3),l=s(34),d=s.n(l),u=s(0),j=function(){return Object(u.jsx)("header",{className:d.a.header,children:Object(u.jsx)("img",{src:"https://oir.mobi/uploads/posts/2020-01/1579842194_46-p-chernie-emblemi-57.png"})})},g=s(8),p=s.n(g),b=function(){return Object(u.jsxs)("nav",{className:p.a.nav,children:[Object(u.jsx)("div",{className:p.a.item,children:Object(u.jsx)(r.b,{to:"/profile",activeClassName:p.a.activeLink,children:"Profile"})}),Object(u.jsx)("div",{className:p.a.item,children:Object(u.jsx)(r.b,{to:"/dialogs",activeClassName:p.a.activeLink,children:"Messages"})}),Object(u.jsx)("div",{className:p.a.item,children:Object(u.jsx)(r.b,{to:"/users",activeClassName:p.a.activeLink,children:"Users"})}),Object(u.jsx)("div",{className:p.a.item,children:Object(u.jsx)(r.b,{to:"/news",activeClassName:p.a.activeLink,children:"News"})}),Object(u.jsx)("div",{className:p.a.item,children:Object(u.jsx)(r.b,{to:"/music",activeClassName:p.a.activeLink,children:"Music"})})]})},O=s(16),h=s(2),f={posts:[{id:1,message:"hi",likeCount:12},{id:2,message:"hid",likeCount:12},{id:3,message:"hifddf",likeCount:20},{id:4,message:"hisdfdsf",likeCount:14}],newPostText:""},m=s(20),x=s.n(m),v=s(36),P=s.n(v),_=function(e){return Object(u.jsxs)("div",{className:P.a.item,children:[Object(u.jsx)("img",{src:"https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg"}),e.message,Object(u.jsx)("div",{children:Object(u.jsx)("span",{children:"like"})})]})},C=function(e){var t=e.posts.map((function(e){return Object(u.jsx)(_,{message:e.message,likeCount:e.likeCount})})),s=a.a.createRef();return Object(u.jsxs)("div",{className:x.a.postsBlock,children:[Object(u.jsx)("h3",{children:"My Post"}),Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{children:Object(u.jsx)("textarea",{ref:s,value:e.newPostText,onChange:function(){var t,n=null===(t=s.current)||void 0===t?void 0:t.value;n&&e.updateNewPostText(n)}})}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{onClick:function(){e.addPost()},children:"Add Post"})}),Object(u.jsx)("div",{className:x.a.posts,children:t})]})]})},N=s(9),w=Object(N.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{updateNewPostText:function(t){var s=function(e){return{type:"UPDATE-NEW-POST-TEXT",newText:e}}(t);e(s)},addPost:function(){e({type:"ADD-POST"})}}}))(C),T=s(38),S=s.n(T),E=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{children:Object(u.jsx)("img",{src:"https://cdn1.ozone.ru/s3/multimedia-a/c1200/6057606094.jpg"})}),Object(u.jsx)("div",{className:S.a.descriptionBlock,children:"ava+ description"})]})},k=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(E,{}),Object(u.jsx)(w,{})]})},y=s(10),U=s.n(y),F=function(e){var t="/dialogs/"+e.id;return Object(u.jsx)("div",{className:U.a.dialog,children:Object(u.jsx)(r.b,{to:t,children:e.name})})},L=function(e){return Object(u.jsx)("div",{className:U.a.message,children:e.message})},A=function(e){var t=e.dialogsPage.newMessageBody,s=e.dialogsPage.dialogs.map((function(e){return Object(u.jsx)(F,{name:e.name,id:e.id})})),n=e.dialogsPage.messages.map((function(e){return Object(u.jsx)(L,{message:e.message})}));return Object(u.jsxs)("div",{className:U.a.dialogs,children:[Object(u.jsx)("div",{className:U.a.dialogs_items,children:s}),Object(u.jsxs)("div",{className:U.a.messages,children:[Object(u.jsx)("div",{children:n}),Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{children:Object(u.jsx)("input",{onChange:function(t){var s=t.target.value;s&&e.updateNewMessageBody(s)},value:t,placeholder:"enter message"})}),Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{onClick:function(){e.sendMessage()},children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c "})," "]})]})]})]})},D={dialogs:[{id:1,name:"Dimysh"},{id:2,name:"Den"},{id:3,name:"Art\u0401m"},{id:4,name:"Slava"}],messages:[{id:1,message:"Hi"},{id:2,message:"Hisdvsd"},{id:3,message:"Hidsfdsfsdfdsf"},{id:4,message:"Hisdfsdfsdfsdfsdfsdf"}],newMessageBody:""},M=Object(N.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{updateNewMessageBody:function(t){e(function(e){return{type:"UPDATE-NEW-MESSAGE-BODY",body:e}}(t))},sendMessage:function(){e({type:"SEND-MEASSAGE"})}}}))(A),B=s(39),I=s(40),G=s(42),z=s(41),R={users:[],pageSize:5,totalUsersCount:20,currentPage:1,isFetching:!0},W=s(21),H=s.n(W),J=s(22),Y=s.n(J),X=s.p+"static/media/user.4583aa6f.png",K=function(e){for(var t=Math.ceil(e.totalUsersCount/e.pageSize),s=[],n=1;n<=t;n++)s.push(n);return console.log(e.totalUsersCount,e.pageSize),Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{children:[s.map((function(t){return Object(u.jsx)("span",{onClick:function(){e.onPageChanged(t)},className:e.currentPage===t?Y.a.selectedPage:"",children:t})})),"s                "]}),e.users.map((function(t){return Object(u.jsxs)("div",{children:[Object(u.jsxs)("span",{children:[Object(u.jsx)("div",{children:Object(u.jsx)(r.b,{to:"/profile/".concat(t.id),children:Object(u.jsx)("img",{src:null!=t.photos.small?t.photos.small:X,className:Y.a.photo})})}),Object(u.jsx)("div",{children:t.followed?Object(u.jsx)("button",{onClick:function(){e.unfollow(t.id)},children:" UNFollow"}):Object(u.jsx)("button",{onClick:function(){e.follow(t.id)},children:"Follow"})})]}),Object(u.jsxs)("span",{children:[Object(u.jsxs)("span",{children:[Object(u.jsx)("div",{children:t.name}),Object(u.jsx)("div",{children:t.status})]}),Object(u.jsxs)("span",{children:[Object(u.jsx)("div",{children:"u.location.city"}),Object(u.jsx)("div",{children:"u.location.country"})]})]})]},t.id)}))]})},Q=s.p+"static/media/preloader.3b867e4e.svg",q=function(e){Object(G.a)(s,e);var t=Object(z.a)(s);function s(){var e;Object(B.a)(this,s);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){e.props.setCurrentPage(t),e.props.toggleIsFetching(!0),H.a.get("https://social-network.samuraijs.com/api/1.0/users?page=".concat(t,"&count=").concat(e.props.pageSize)).then((function(t){e.props.toggleIsFetching(!1),e.props.setUsers(t.data.items)}))},e}return Object(I.a)(s,[{key:"componentDidMount",value:function(){var e=this;this.props.toggleIsFetching(!0),H.a.get("https://social-network.samuraijs.com/api/1.0/users?page=".concat(this.props.currentPage,"&count=").concat(this.props.pageSize)).then((function(t){e.props.toggleIsFetching(!1),e.props.setUsers(t.data.items),e.props.setUsersTotalCount(t.data.totalCount)}))}},{key:"render",value:function(){return Object(u.jsxs)(u.Fragment,{children:[this.props.isFetching?Object(u.jsx)("img",{src:Q}):null,Object(u.jsx)(K,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow})]})}}]),s}(a.a.Component),V=Object(N.b)((function(e){return{users:e.usersPage.users,pageSize:e.usersPage.pageSize,totalUsersCount:e.usersPage.totalUsersCount,currentPage:e.usersPage.currentPage,isFetching:e.usersPage.isFetching}}),{follow:function(e){return{type:"FOLLOW",userId:e}},unfollow:function(e){return{type:"UNFOLLOW",userId:e}},setUsers:function(e){return{type:"SET_USERS",users:e}},setCurrentPage:function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},setUsersTotalCount:function(e){return{type:"SET_TOTAL_USERS_COUNT",totalUsersCount:e}},toggleIsFetching:function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}}})(q);var Z=function(){return Object(u.jsx)(r.a,{children:Object(u.jsxs)("div",{className:"app-wrapper",children:[Object(u.jsx)(j,{}),Object(u.jsx)(b,{}),Object(u.jsxs)("div",{className:"app_wrapper_content",children:[Object(u.jsx)(o.a,{path:"/dialogs",render:function(){return Object(u.jsx)(M,{})}}),Object(u.jsx)(o.a,{path:"/profile",render:function(){return Object(u.jsx)(k,{})}}),Object(u.jsx)(o.a,{path:"/users",render:function(){return Object(u.jsx)(V,{})}})]})]})})},$=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,78)).then((function(t){var s=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;s(e),n(e),a(e),c(e),i(e)}))},ee=s(23),te=Object(ee.a)({profilePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":return Object(h.a)(Object(h.a)({},e),{},{newPostText:"",posts:[].concat(Object(O.a)(e.posts),[{id:5,message:e.newPostText,likeCount:0}])});case"UPDATE-NEW-POST-TEXT":return Object(h.a)(Object(h.a)({},e),{},{newPostText:t.newText});default:return e}},dialogsPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE-NEW-MESSAGE-BODY":return Object(h.a)(Object(h.a)({},e),{},{newMessageBody:t.body});case"SEND-MEASSAGE":var s=e.newMessageBody;return Object(h.a)(Object(h.a)({},e),{},{messages:[].concat(Object(O.a)(e.messages),[{id:5,message:s}])});default:return e}},usersPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(h.a)(Object(h.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(h.a)(Object(h.a)({},e),{},{followed:!0}):e}))});case"UNFOLLOW":return Object(h.a)(Object(h.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(h.a)(Object(h.a)({},e),{},{followed:!1}):e}))});case"SET_USERS":return Object(h.a)(Object(h.a)({},e),{},{users:t.users});case"SET_CURRENT_PAGE":return Object(h.a)(Object(h.a)({},e),{},{currentPage:t.currentPage});case"SET_TOTAL_USERS_COUNT":return Object(h.a)(Object(h.a)({},e),{},{totalUsersCount:t.totalUsersCount});case"TOGGLE_IS_FETCHING":return Object(h.a)(Object(h.a)({},e),{},{isFetching:t.isFetching});default:return e}}}),se=Object(ee.b)(te);i.a.render(Object(u.jsxs)(N.a,{store:se,children:[Object(u.jsx)(Z,{}),"  "]}),document.getElementById("root")),$()},8:function(e,t,s){e.exports={nav:"Navbar_nav__2bApI",item:"Navbar_item__1344C",activeLink:"Navbar_activeLink__2k6Ll"}}},[[77,1,2]]]);
//# sourceMappingURL=main.72feac9e.chunk.js.map
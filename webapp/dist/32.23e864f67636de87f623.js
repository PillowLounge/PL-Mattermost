webpackJsonp([32],{1716:function(e,t,a){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=a(6),n=o(s),d=a(2),u=o(d),i=a(5),l=o(i),f=a(4),c=o(f),p=a(3),v=o(p),h=a(164),m=o(h),w=a(15),y=o(w),C=a(42),_=o(C),b=a(41),g=r(b),L=a(186),E=r(L),k=a(1668),U=a(11),F=r(U),P=a(8),x=o(P),B=a(0),O=o(B),T=a(1),j=o(T);a(80);var S=8,A=function(e){function t(e){(0,u.default)(this,t);var a=(0,c.default)(this,(t.__proto__||(0,n.default)(t)).call(this,e));a.onUserChanged=a.onUserChanged.bind(a),(0,O.default)("#root").attr("class","channel-view"),/(iPad|iPhone|iPod)/g.test(navigator.userAgent)&&(0,O.default)("body").addClass("ios");var r=_.default.get(x.default.Preferences.CATEGORY_DISPLAY_SETTINGS,"selected_font",x.default.DEFAULT_FONT);return F.applyFont(r),a.state={user:y.default.getCurrentUser()},a.state.user||g.emitUserLoggedOutEvent("/login"),a}return(0,v.default)(t,e),(0,l.default)(t,[{key:"isValidState",value:function(){return null!=this.state.user}},{key:"onUserChanged",value:function(){var e=y.default.getCurrentUser();F.areObjectsEqual(this.state.user,e)||this.setState({user:e})}},{key:"componentDidMount",value:function(){E.initialize(),y.default.addChangeListener(this.onUserChanged),window.addEventListener("focus",this.onFocusListener),window.addEventListener("blur",this.onBlurListener),(0,O.default)("body").on("mouseenter mouseleave",".post",function(e){"mouseenter"===e.type?((0,O.default)(this).parent("div").prev(".date-separator, .new-separator").addClass("hovered--after"),(0,O.default)(this).parent("div").next(".date-separator, .new-separator").addClass("hovered--before")):((0,O.default)(this).parent("div").prev(".date-separator, .new-separator").removeClass("hovered--after"),(0,O.default)(this).parent("div").next(".date-separator, .new-separator").removeClass("hovered--before"))}),(0,O.default)("body").on("mouseenter mouseleave",".search-item__container .post",function(e){"mouseenter"===e.type?((0,O.default)(this).closest(".search-item__container").find(".date-separator").addClass("hovered--after"),(0,O.default)(this).closest(".search-item__container").next("div").find(".date-separator").addClass("hovered--before")):((0,O.default)(this).closest(".search-item__container").find(".date-separator").removeClass("hovered--after"),(0,O.default)(this).closest(".search-item__container").next("div").find(".date-separator").removeClass("hovered--before"))}),(0,O.default)("body").on("mouseenter mouseleave",".post.post--comment.same--root",function(e){"mouseenter"===e.type?((0,O.default)(this).parent("div").prev(".date-separator, .new-separator").addClass("hovered--comment"),(0,O.default)(this).parent("div").next(".date-separator, .new-separator").addClass("hovered--comment")):((0,O.default)(this).parent("div").prev(".date-separator, .new-separator").removeClass("hovered--comment"),(0,O.default)(this).parent("div").next(".date-separator, .new-separator").removeClass("hovered--comment"))}),(0,O.default)(window).on("keydown.preventBackspace",function(e){e.which!==S||(0,O.default)(e.target).is("input, textarea")||e.preventDefault()}),"true"===window.mm_config.EnableCustomEmoji&&(0,k.loadEmoji)(!1)}},{key:"componentWillUnmount",value:function(){(0,O.default)("#root").attr("class",""),E.close(),y.default.removeChangeListener(this.onUserChanged),(0,O.default)("body").off("click.userpopover"),(0,O.default)("body").off("mouseenter mouseleave",".post"),(0,O.default)("body").off("mouseenter mouseleave",".post.post--comment.same--root"),(0,O.default)(".modal").off("show.bs.modal"),(0,O.default)(window).off("keydown.preventBackspace"),window.removeEventListener("focus",this.onFocusListener),window.removeEventListener("blur",this.onBlurListener)}},{key:"render",value:function(){return this.isValidState()?j.default.cloneElement(this.props.children,{user:this.state.user}):j.default.createElement(m.default,null)}},{key:"onFocusListener",value:function(){g.emitBrowserFocus(!0)}},{key:"onBlurListener",value:function(){g.emitBrowserFocus(!1)}}]),t}(j.default.Component);t.default=A,A.propTypes={children:j.default.PropTypes.object}}});
//# sourceMappingURL=32.23e864f67636de87f623.js.map
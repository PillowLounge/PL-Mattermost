webpackJsonp([28],{1720:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(6),u=l(n),r=a(2),d=l(r),c=a(5),i=l(c),o=a(4),s=l(o),f=a(3),m=l(f),p=a(41),E=a(1),g=l(E),h=a(13),v=a(37),M=a(1659),_=l(M),w=function(e){function t(){return(0,d.default)(this,t),(0,s.default)(this,(t.__proto__||(0,u.default)(t)).apply(this,arguments))}return(0,m.default)(t,e),(0,i.default)(t,[{key:"componentDidMount",value:function(){"true"===window.mm_license.MFA&&"true"===window.mm_config.EnableMultifactorAuthentication||v.browserHistory.push("/")}},{key:"render",value:function(){var e=void 0;return e="true"===window.mm_config.EnforceMultifactorAuthentication?g.default.createElement("div",{className:"signup-header"},g.default.createElement("a",{href:"#",onClick:function(e){e.preventDefault(),(0,p.emitUserLoggedOutEvent)("/login")}},g.default.createElement("span",{className:"fa fa-chevron-left"}),g.default.createElement(h.FormattedMessage,{id:"web.header.logout",defaultMessage:"Logout"}))):g.default.createElement("div",{className:"signup-header"},g.default.createElement(v.Link,{to:"/"},g.default.createElement("span",{className:"fa fa-chevron-left"}),g.default.createElement(h.FormattedMessage,{id:"web.header.back",defaultMessage:"Back"}))),g.default.createElement("div",{className:"inner-wrap sticky"},g.default.createElement("div",{className:"content"},g.default.createElement("div",null,e,g.default.createElement("div",{className:"col-sm-12"},g.default.createElement("div",{className:"signup-team__container"},g.default.createElement("h3",null,g.default.createElement(h.FormattedMessage,{id:"mfa.setupTitle",defaultMessage:"Multi-factor Authentication Setup"})),g.default.createElement("img",{className:"signup-team-logo",src:_.default}),g.default.createElement("div",{id:"mfa"},g.default.cloneElement(this.props.children,{})))))))}}]),t}(g.default.Component);t.default=w,w.defaultProps={},w.propTypes={location:g.default.PropTypes.object.isRequired,children:g.default.PropTypes.node}}});
//# sourceMappingURL=28.ea184961525ae8ad8d36.js.map
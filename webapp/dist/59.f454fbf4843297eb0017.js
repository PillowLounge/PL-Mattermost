webpackJsonp([59],{1680:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(6),r=l(n),o=a(2),u=l(o),s=a(4),i=l(s),d=a(5),c=l(d),m=a(3),p=l(m),f=a(332),h=l(f),v=a(13),y=a(1),g=l(y),_=a(347),b=l(_),E=a(569),M=function(e){function t(e){(0,u.default)(this,t);var a=(0,i.default)(this,(t.__proto__||(0,r.default)(t)).call(this,e));return a.handleAllow=a.handleAllow.bind(a),a.handleDeny=a.handleDeny.bind(a),a.state={},a}return(0,p.default)(t,e),(0,c.default)(t,null,[{key:"propTypes",get:function(){return{location:g.default.PropTypes.object.isRequired,params:g.default.PropTypes.object.isRequired}}}]),(0,c.default)(t,[{key:"componentWillMount",value:function(){var e=this;(0,E.getOAuthAppInfo)(this.props.location.query.client_id,function(t){e.setState({app:t})})}},{key:"componentDidMount",value:function(){var e=document.getElementById("antiClickjack");e&&e.parentNode.removeChild(e)}},{key:"handleAllow",value:function(){var e=this,t=this.props.location.query;(0,E.allowOAuth2)(t,function(e){e.redirect&&(window.location.href=e.redirect)},function(t){e.setState({error:t.message})})}},{key:"handleDeny",value:function(){window.location.replace(this.props.location.query.redirect_uri+"?error=access_denied")}},{key:"render",value:function(){var e=this.state.app;if(!e)return null;var t=void 0;t=e.icon_url?e.icon_url:b.default;var a=void 0;return this.state.error&&(a=g.default.createElement("div",{className:"prompt__error form-group"},g.default.createElement(h.default,{error:this.state.error}))),g.default.createElement("div",{className:"container-fluid"},g.default.createElement("div",{className:"prompt"},g.default.createElement("div",{className:"prompt__heading"},g.default.createElement("div",{className:"prompt__app-icon"},g.default.createElement("img",{src:t,width:"50",height:"50",alt:""})),g.default.createElement("div",{className:"text"},g.default.createElement(v.FormattedHTMLMessage,{id:"authorize.title",defaultMessage:"<strong>{appName}</strong> would like to connect to your <strong>Mattermost</strong> user account",values:{appName:e.name}}))),g.default.createElement("p",null,g.default.createElement(v.FormattedHTMLMessage,{id:"authorize.app",defaultMessage:"The app <strong>{appName}</strong> would like the ability to access and modify your basic information.",values:{appName:e.name}})),g.default.createElement("h2",{className:"prompt__allow"},g.default.createElement(v.FormattedHTMLMessage,{id:"authorize.access",defaultMessage:"Allow <strong>{appName}</strong> access?",values:{appName:e.name}})),g.default.createElement("div",{className:"prompt__buttons"},g.default.createElement("button",{type:"submit",className:"btn btn-link authorize-btn",onClick:this.handleDeny},g.default.createElement(v.FormattedMessage,{id:"authorize.deny",defaultMessage:"Deny"})),g.default.createElement("button",{type:"submit",className:"btn btn-primary authorize-btn",onClick:this.handleAllow},g.default.createElement(v.FormattedMessage,{id:"authorize.allow",defaultMessage:"Allow"}))),a))}}]),t}(g.default.Component);t.default=M}});
//# sourceMappingURL=59.f454fbf4843297eb0017.js.map
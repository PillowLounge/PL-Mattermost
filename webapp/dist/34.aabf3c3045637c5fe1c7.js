webpackJsonp([34],{1709:function(n,e,t){"use strict";function o(n){if(n&&n.__esModule)return n;var e={};if(null!=n)for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t]);return e.default=n,e}function i(n){return n&&n.__esModule?n:{default:n}}Object.defineProperty(e,"__esModule",{value:!0});var a=t(6),r=i(a),u=t(2),l=i(u),s=t(5),d=i(s),c=t(4),g=i(c),h=t(3),f=i(h),m=t(20),k=o(m),p=t(37),I=t(1660),v=i(I),_=t(1664),y=t(1675),b=i(y),H=t(23),C=i(H),w=function(n){function e(n){(0,l.default)(this,e);var t=(0,g.default)(this,(e.__proto__||(0,r.default)(e)).call(this,n));return t.handleIntegrationChange=t.handleIntegrationChange.bind(t),t.originalIncomingHook=null,t}return(0,f.default)(e,n),(0,d.default)(e,[{key:"componentDidMount",value:function(){v.default.addChangeListener(this.handleIntegrationChange),"true"===window.mm_config.EnableIncomingWebhooks&&(0,_.loadIncomingHooks)()}},{key:"componentWillUnmount",value:function(){v.default.removeChangeListener(this.handleIntegrationChange)}},{key:"handleIntegrationChange",value:function(){var n=this,e=C.default.getCurrentId();this.setState({hooks:v.default.getIncomingWebhooks(e),loading:!v.default.hasReceivedIncomingWebhooks(e)}),this.state.loading||(this.originalIncomingHook=this.state.hooks.filter(function(e){return e.id===n.props.location.query.id})[0],this.setState({displayName:this.originalIncomingHook.display_name,description:this.originalIncomingHook.description,channelId:this.originalIncomingHook.channel_id}))}},{key:"performAction",value:function(n){var e=this;this.originalIncomingHook.id&&(n.id=this.originalIncomingHook.id),k.updateIncomingHook(n,function(){p.browserHistory.push("/"+e.props.team.name+"/integrations/incoming_webhooks")},function(n){e.setState({saving:!1,serverError:n.message})})}},{key:"header",value:function(){return{id:"integrations.edit",defaultMessage:"Edit"}}},{key:"footer",value:function(){return{id:"update_incoming_webhook.update",defaultMessage:"Update"}}}]),e}(b.default);e.default=w}});
//# sourceMappingURL=34.aabf3c3045637c5fe1c7.js.map
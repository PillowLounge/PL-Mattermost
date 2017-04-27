webpackJsonp([33],{1710:function(t,o,e){"use strict";function i(t){if(t&&t.__esModule)return t;var o={};if(null!=t)for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(o[e]=t[e]);return o.default=t,o}function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(o,"__esModule",{value:!0});var a=e(6),r=n(a),s=e(2),g=n(s),l=e(5),u=n(l),d=e(4),h=n(d),f=e(3),c=n(f),k=e(1),m=n(k),_=e(20),p=i(_),b=e(37),v=e(1660),O=n(v),w=e(1664),y=e(1676),H=n(y),M=e(242),C=n(M),E=e(13),S=e(23),U=n(S),I=function(t){function o(t){(0,g.default)(this,o);var e=(0,h.default)(this,(o.__proto__||(0,r.default)(o)).call(this,t));return e.handleIntegrationChange=e.handleIntegrationChange.bind(e),e.handleConfirmModal=e.handleConfirmModal.bind(e),e.handleUpdate=e.handleUpdate.bind(e),e.submitCommand=e.submitCommand.bind(e),e.confirmModalDismissed=e.confirmModalDismissed.bind(e),e.originalOutgoingHook=null,e.state={showConfirmModal:!1},e}return(0,c.default)(o,t),(0,u.default)(o,[{key:"componentDidMount",value:function(){O.default.addChangeListener(this.handleIntegrationChange),"true"===window.mm_config.EnableOutgoingWebhooks&&(0,w.loadOutgoingHooks)()}},{key:"componentWillUnmount",value:function(){O.default.removeChangeListener(this.handleIntegrationChange)}},{key:"handleIntegrationChange",value:function(){var t=this,o=U.default.getCurrentId();if(this.setState({hooks:O.default.getOutgoingWebhooks(o),loading:!O.default.hasReceivedOutgoingWebhooks(o)}),!this.state.loading){this.originalOutgoingHook=this.state.hooks.filter(function(o){return o.id===t.props.location.query.id})[0],this.setState({displayName:this.originalOutgoingHook.display_name,description:this.originalOutgoingHook.description,channelId:this.originalOutgoingHook.channel_id,contentType:this.originalOutgoingHook.content_type,triggerWhen:this.originalOutgoingHook.trigger_when});var e="";if(this.originalOutgoingHook.trigger_words){var i=0;for(i=0;i<this.originalOutgoingHook.trigger_words.length;i++)e+=this.originalOutgoingHook.trigger_words[i]+"\n"}var n="";if(this.originalOutgoingHook.callback_urls){var a=0;for(a=0;a<this.originalOutgoingHook.callback_urls.length;a++)n+=this.originalOutgoingHook.callback_urls[a]+"\n"}this.setState({triggerWords:e,callbackUrls:n})}}},{key:"performAction",value:function(t){this.newHook=t,this.originalOutgoingHook.id&&(t.id=this.originalOutgoingHook.id),this.originalOutgoingHook.token&&(t.token=this.originalOutgoingHook.token);var o=this.originalOutgoingHook.trigger_words.length===t.trigger_words.length&&this.originalOutgoingHook.trigger_words.every(function(o,e){return o===t.trigger_words[e]}),e=this.originalOutgoingHook.callback_urls.length===t.callback_urls.length&&this.originalOutgoingHook.callback_urls.every(function(o,e){return o===t.callback_urls[e]});this.originalOutgoingHook.content_type===t.content_type&&o&&e?this.submitCommand():(this.handleConfirmModal(),this.setState({saving:!1}))}},{key:"handleUpdate",value:function(){this.setState({saving:!0,serverError:"",clientError:""}),this.submitCommand()}},{key:"handleConfirmModal",value:function(){this.setState({showConfirmModal:!0})}},{key:"confirmModalDismissed",value:function(){this.setState({showConfirmModal:!1})}},{key:"submitCommand",value:function(){var t=this;p.updateOutgoingHook(this.newHook,function(){b.browserHistory.push("/"+t.props.team.name+"/integrations/outgoing_webhooks")},function(o){t.setState({saving:!1,showConfirmModal:!1,serverError:o.message})})}},{key:"header",value:function(){return{id:"integrations.edit",defaultMessage:"Edit"}}},{key:"footer",value:function(){return{id:"update_outgoing_webhook.update",defaultMessage:"Update"}}},{key:"renderExtra",value:function(){var t=m.default.createElement(E.FormattedMessage,{id:"update_outgoing_webhook.update",defaultMessage:"Update"}),o=m.default.createElement(E.FormattedMessage,{id:"update_outgoing_webhook.confirm",defaultMessage:"Edit Outgoing Webhook"}),e=m.default.createElement(E.FormattedMessage,{id:"update_outgoing_webhook.question",defaultMessage:"Your changes may break the existing outgoing webhook. Are you sure you would like to update it?"});return m.default.createElement(C.default,{title:o,message:e,confirmButton:t,show:this.state.showConfirmModal,onConfirm:this.handleUpdate,onCancel:this.confirmModalDismissed})}}]),o}(H.default);o.default=I}});
//# sourceMappingURL=33.98287a4f5aa36ed71f59.js.map
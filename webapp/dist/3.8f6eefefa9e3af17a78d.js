webpackJsonp([3],{592:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(6),o=s(l),n=a(2),d=s(n),r=a(4),u=s(r),i=a(5),m=s(i),f=a(3),h=s(f),p=a(1),c=s(p),g=a(336),M=s(g),b=a(13),k=a(37),_=a(15),y=s(_),E=a(1660),v=s(E),w=a(8),H=s(w),T=function(e){function t(e){(0,d.default)(this,t);var a=(0,u.default)(this,(t.__proto__||(0,o.default)(t)).call(this,e));a.handleIntegrationChange=a.handleIntegrationChange.bind(a),a.handleKeyPress=a.handleKeyPress.bind(a);var s=y.default.getCurrentId();return a.state={type:a.props.location.query.type,id:a.props.location.query.id,oauthApps:v.default.getOAuthApps(s),loading:!v.default.hasReceivedOAuthApps(s)},a}return(0,h.default)(t,e),(0,m.default)(t,null,[{key:"propTypes",get:function(){return{team:c.default.PropTypes.object,location:c.default.PropTypes.object,loading:c.default.PropTypes.bool}}}]),(0,m.default)(t,[{key:"componentDidMount",value:function(){v.default.addChangeListener(this.handleIntegrationChange),window.addEventListener("keypress",this.handleKeyPress)}},{key:"componentWillUnmount",value:function(){v.default.removeChangeListener(this.handleIntegrationChange),window.removeEventListener("keypress",this.handleKeyPress)}},{key:"handleIntegrationChange",value:function(){var e=y.default.getCurrentId();this.setState({oauthApps:v.default.getOAuthApps(e),loading:!v.default.hasReceivedOAuthApps(e)})}},{key:"handleKeyPress",value:function(e){"Enter"===e.key&&k.browserHistory.push("/"+this.props.team.name+"/integrations/"+this.state.type)}},{key:"render",value:function(){var e=null,t=null,a=null;if(!0===this.props.loading)return c.default.createElement("div",null);if(this.state.type===H.default.Integrations.COMMAND)e=c.default.createElement(b.FormattedMessage,{id:"installed_commands.header",defaultMessage:"Slash Commands"}),t=c.default.createElement("p",null,c.default.createElement(b.FormattedHTMLMessage,{id:"add_command.doneHelp",defaultMessage:'Your slash command has been set up. The following token will be sent in the outgoing payload. Please use it to verify the request came from your Mattermost team (see <a href="https://docs.mattermost.com/developer/slash-commands.html">documentation</a> for further details).'})),a=c.default.createElement("p",{className:"word-break--all"},c.default.createElement(b.FormattedHTMLMessage,{id:"add_command.token",defaultMessage:"<b>Token</b>: {token}",values:{token:v.default.getCommand(this.props.team.id,this.state.id).token}}));else if(this.state.type===H.default.Integrations.INCOMING_WEBHOOK)e=c.default.createElement(b.FormattedMessage,{id:"installed_incoming_webhooks.header",defaultMessage:"Incoming Webhooks"}),t=c.default.createElement("p",null,c.default.createElement(b.FormattedHTMLMessage,{id:"add_incoming_webhook.doneHelp",defaultMessage:'Your incoming webhook has been set up. Please send data to the following URL (see <a href=\\"https://docs.mattermost.com/developer/webhooks-incoming.html\\">documentation</a> for further details).'})),a=c.default.createElement("p",{className:"word-break--all"},c.default.createElement(b.FormattedHTMLMessage,{id:"add_incoming_webhook.url",defaultMessage:"<b>URL</b>: {url}",values:{url:window.location.origin+"/hooks/"+this.state.id}}));else if(this.state.type===H.default.Integrations.OUTGOING_WEBHOOK)e=c.default.createElement(b.FormattedMessage,{id:"installed_outgoing_webhooks.header",defaultMessage:"Outgoing Webhooks"}),t=c.default.createElement("p",null,c.default.createElement(b.FormattedHTMLMessage,{id:"add_outgoing_webhook.doneHelp",defaultMessage:'Your outgoing webhook has been set up. The following token will be sent in the outgoing payload. Please use it to verify the request came from your Mattermost team (see <a href=\\"https://docs.mattermost.com/developer/webhooks-outgoing.html\\">documentation</a> for further details).'})),a=c.default.createElement("p",{className:"word-break--all"},c.default.createElement(b.FormattedHTMLMessage,{id:"add_outgoing_webhook.token",defaultMessage:"<b>Token</b>: {token}",values:{token:v.default.getOutgoingWebhook(this.props.team.id,this.state.id).token}}));else if(this.state.type===H.default.Integrations.OAUTH_APP){for(var s={},l=0;l<this.state.oauthApps.length;l++)if(this.state.oauthApps[l].id===this.state.id){s=this.state.oauthApps[l];break}s&&(e=c.default.createElement(b.FormattedMessage,{id:"installed_oauth_apps.header",defaultMessage:"OAuth 2.0 Applications"}),t=[],t.push(c.default.createElement("p",{key:"add_oauth_app.doneHelp"},c.default.createElement(b.FormattedHTMLMessage,{id:"add_oauth_app.doneHelp",defaultMessage:'Your OAuth 2.0 application has been set up. Please use the following Client ID and Client Secret when requesting authorization for your application (see <a href="https://docs.mattermost.com/developer/oauth-2-0-applications.html">documentation</a> for further details).'}))),t.push(c.default.createElement("p",{key:"add_oauth_app.clientId"},c.default.createElement(b.FormattedHTMLMessage,{id:"add_oauth_app.clientId",defaultMessage:"<b>Client ID:</b> {id}",values:{id:this.state.id}})," ",c.default.createElement("br",null),c.default.createElement(b.FormattedHTMLMessage,{id:"add_oauth_app.clientSecret",defaultMessage:"<b>Client Secret:</b> {secret}",values:{secret:s.client_secret}}))),t.push(c.default.createElement("p",{key:"add_oauth_app.doneUrlHelp"},c.default.createElement(b.FormattedHTMLMessage,{id:"add_oauth_app.doneUrlHelp",defaultMessage:"The following are your authorized redirect URL(s)."}))),a=c.default.createElement("p",{className:"word-break--all"},c.default.createElement(b.FormattedHTMLMessage,{id:"add_oauth_app.url",defaultMessage:"<b>URL(s)</b>: {url}",values:{url:s.callback_urls}})))}return c.default.createElement("div",{className:"backstage-content row"},c.default.createElement(M.default,null,c.default.createElement(k.Link,{to:"/"+this.props.team.name+"/integrations/"+this.state.type},e),c.default.createElement(b.FormattedMessage,{id:"integrations.add",defaultMessage:"Add"})),c.default.createElement("div",{className:"backstage-form backstage-form__confirmation"},c.default.createElement("h4",{className:"backstage-form__title"},c.default.createElement(b.FormattedMessage,{id:"integrations.successful",defaultMessage:"Setup Successful"})),t,a,c.default.createElement("div",{className:"backstage-form__footer"},c.default.createElement(k.Link,{className:"btn btn-primary",type:"submit",to:"/"+this.props.team.name+"/integrations/"+this.state.type},c.default.createElement(b.FormattedMessage,{id:"integrations.done",defaultMessage:"Done"})))))}}]),t}(c.default.Component);t.default=T}});
//# sourceMappingURL=3.8f6eefefa9e3af17a78d.js.map
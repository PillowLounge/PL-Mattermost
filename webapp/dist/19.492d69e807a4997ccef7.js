webpackJsonp([19],{1711:function(e,t,a){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var d=a(6),s=l(d),o=a(2),r=l(o),i=a(4),m=l(i),u=a(5),c=l(u),f=a(3),p=l(f),_=a(1665),h=l(_),g=a(2010),k=l(g),y=a(20),v=n(y),T=a(11),C=n(T),E=a(1),M=l(E),b=a(13),P=function(e){function t(e){(0,r.default)(this,t);var a=(0,m.default)(this,(t.__proto__||(0,s.default)(t)).call(this,e));return a.regenCommandToken=a.regenCommandToken.bind(a),a.deleteCommand=a.deleteCommand.bind(a),a}return(0,p.default)(t,e),(0,c.default)(t,null,[{key:"propTypes",get:function(){return{team:M.default.PropTypes.object,user:M.default.PropTypes.object,users:M.default.PropTypes.object,commands:M.default.PropTypes.array,loading:M.default.PropTypes.bool,isAdmin:M.default.PropTypes.bool}}}]),(0,c.default)(t,[{key:"regenCommandToken",value:function(e){v.regenCommandToken(e.id)}},{key:"deleteCommand",value:function(e){v.deleteCommand(e.id)}},{key:"commandCompare",value:function(e,t){var a=e.display_name;a||(a=C.localizeMessage("installed_commands.unnamed_command","Unnamed Slash Command"));var n=t.display_name;return n||(n=C.localizeMessage("installed_commands.unnamed_command","Unnamed Slash Command")),a.localeCompare(n)}},{key:"render",value:function(){var e=this,t=this.props.commands.sort(this.commandCompare).map(function(t){var a=e.props.isAdmin||e.props.user.id===t.creator_id;return M.default.createElement(k.default,{key:t.id,team:e.props.team,command:t,onRegenToken:e.regenCommandToken,onDelete:e.deleteCommand,creator:e.props.users[t.creator_id]||{},canChange:a})});return M.default.createElement(h.default,{header:M.default.createElement(b.FormattedMessage,{id:"installed_commands.header",defaultMessage:"Installed Slash Commands"}),addText:M.default.createElement(b.FormattedMessage,{id:"installed_commands.add",defaultMessage:"Add Slash Command"}),addLink:"/"+this.props.team.name+"/integrations/commands/add",emptyText:M.default.createElement(b.FormattedMessage,{id:"installed_commands.empty",defaultMessage:"No slash commands found"}),helpText:M.default.createElement(b.FormattedMessage,{id:"installed_commands.help",defaultMessage:"Create slash commands for use in external integrations. Please see {link} to learn more.",values:{link:M.default.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://docs.mattermost.com/developer/slash-commands.html"},M.default.createElement(b.FormattedMessage,{id:"installed_commands.helpLink",defaultMessage:"documentation"}))}}),searchPlaceholder:C.localizeMessage("installed_commands.search","Search Slash Commands"),loading:this.props.loading},t)}}]),t}(M.default.Component);t.default=P},2010:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(6),d=n(l),s=a(2),o=n(s),r=a(4),i=n(r),m=a(5),u=n(m),c=a(3),f=n(c),p=a(1),_=n(p),h=a(335),g=a(13),k=a(1666),y=n(k),v=function(e){function t(e){(0,o.default)(this,t);var a=(0,i.default)(this,(t.__proto__||(0,d.default)(t)).call(this,e));return a.handleRegenToken=a.handleRegenToken.bind(a),a.handleDelete=a.handleDelete.bind(a),a.matchesFilter=a.matchesFilter.bind(a),a}return(0,f.default)(t,e),(0,u.default)(t,null,[{key:"propTypes",get:function(){return{team:_.default.PropTypes.object.isRequired,command:_.default.PropTypes.object.isRequired,onRegenToken:_.default.PropTypes.func.isRequired,onDelete:_.default.PropTypes.func.isRequired,filter:_.default.PropTypes.string,creator:_.default.PropTypes.object.isRequired,canChange:_.default.PropTypes.bool.isRequired}}}]),(0,u.default)(t,[{key:"handleRegenToken",value:function(e){e.preventDefault(),this.props.onRegenToken(this.props.command)}},{key:"handleDelete",value:function(){this.props.onDelete(this.props.command)}},{key:"matchesFilter",value:function(e,t){return!t||(-1!==e.display_name.toLowerCase().indexOf(t)||-1!==e.description.toLowerCase().indexOf(t)||-1!==e.trigger.toLowerCase().indexOf(t))}},{key:"render",value:function(){var e=this.props.command,t=this.props.filter?this.props.filter.toLowerCase():"";if(!this.matchesFilter(e,t))return null;var a=void 0;a=e.display_name?e.display_name:_.default.createElement(g.FormattedMessage,{id:"installed_commands.unnamed_command",defaultMessage:"Unnamed Slash Command"});var n=null;e.description&&(n=_.default.createElement("div",{className:"item-details__row"},_.default.createElement("span",{className:"item-details__description"},e.description)));var l="- /"+e.trigger;e.auto_complete&&e.auto_complete_hint&&(l+=" "+e.auto_complete_hint);var d=null;return this.props.canChange&&(d=_.default.createElement("div",{className:"item-actions"},_.default.createElement("a",{href:"#",onClick:this.handleRegenToken},_.default.createElement(g.FormattedMessage,{id:"installed_integrations.regenToken",defaultMessage:"Regenerate Token"}))," - ",_.default.createElement(h.Link,{to:"/"+this.props.team.name+"/integrations/commands/edit?id="+e.id},_.default.createElement(g.FormattedMessage,{id:"installed_integrations.edit",defaultMessage:"Edit"}))," - ",_.default.createElement(y.default,{messageId:"installed_commands.delete.confirm",onDelete:this.handleDelete}))),_.default.createElement("div",{className:"backstage-list__item"},_.default.createElement("div",{className:"item-details"},_.default.createElement("div",{className:"item-details__row"},_.default.createElement("span",{className:"item-details__name"},a),_.default.createElement("span",{className:"item-details__trigger"},l)),n,_.default.createElement("div",{className:"item-details__row"},_.default.createElement("span",{className:"item-details__token"},_.default.createElement(g.FormattedMessage,{id:"installed_integrations.token",defaultMessage:"Token: {token}",values:{token:e.token}}))),_.default.createElement("div",{className:"item-details__row"},_.default.createElement("span",{className:"item-details__creation"},_.default.createElement(g.FormattedMessage,{id:"installed_integrations.creation",defaultMessage:"Created by {creator} on {createAt, date, full}",values:{creator:this.props.creator.username,createAt:e.create_at}})))),d)}}]),t}(_.default.Component);t.default=v}});
//# sourceMappingURL=19.492d69e807a4997ccef7.js.map
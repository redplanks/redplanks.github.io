!function(e){"use strict";var o=e.querySelector("#app");o.baseUrl="/",""===window.location.port&&(o.baseUrl="/history-2016/"),o.displayInstalledToast=function(){Polymer.dom(e).querySelector("platinum-sw-cache").disabled||Polymer.dom(e).querySelector("#caching-complete").show()},o.addEventListener("dom-change",function(){console.log("Our app is ready to rock!")}),window.addEventListener("WebComponentsReady",function(){}),window.addEventListener("paper-header-transform",function(o){var r=Polymer.dom(e).querySelector("#mainToolbar .app-name"),a=Polymer.dom(e).querySelector("#mainToolbar .middle-container"),n=Polymer.dom(e).querySelector("#mainToolbar .bottom-container"),t=o.detail,l=t.height-t.condensedHeight,s=Math.min(1,t.y/l),c=.5,i=l-t.y,d=l/(1-c),m=Math.max(c,i/d+c),y=1-s;Polymer.Base.transform("translate3d(0,"+100*s+"%,0)",a),Polymer.Base.transform("scale("+y+") translateZ(0)",n),Polymer.Base.transform("scale("+m+") translateZ(0)",r)}),o.scrollPageToTop=function(){o.$.mainToolbar.scrollToTop(!0)},o.closeDrawer=function(){o.$.paperDrawerPanel.closeDrawer()};var r=e.querySelector('template[is="dom-bind"]');e.addEventListener("WebComponentsReady",function(){r.selected=0})}(document);
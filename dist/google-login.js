!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.GoogleLogin=t(require("react")):e.GoogleLogin=t(e.react)}(this,function(e){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=7)}([function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=n(6),c=n.n(s),a=n(2),u=(n.n(a),function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}()),l=function(e){function t(e){o(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.signIn=n.signIn.bind(n),n.state={disabled:!0},n}return i(t,e),u(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.clientId,o=t.cookiePolicy,r=t.loginHint,i=t.hostedDomain,s=t.autoLoad,c=t.fetchBasicProfile,a=t.redirectUri,u=t.discoveryDocs,l=t.onFailure,f=t.uxMode;!function(e,t,n,o){var r=e.getElementsByTagName(t)[0],i=r,s=r;s=e.createElement(t),s.id=n,s.src="//apis.google.com/js/client:platform.js",i.parentNode.insertBefore(s,i),s.onload=o}(document,"script","google-login",function(){var t={client_id:n,cookiepolicy:o,login_hint:r,hosted_domain:i,fetch_basic_profile:c,discoveryDocs:u,ux_mode:f,redirect_uri:a};window.gapi.load("auth2",function(){e.setState({disabled:!1}),window.gapi.auth2.getAuthInstance()||window.gapi.auth2.init(t).then(function(t){t.isSignedIn.get()&&e._handleSigninSuccess(t.currentUser.get())},function(e){return l(e)}),s&&e.signIn()})})}},{key:"signIn",value:function(e){var t=this;if(e&&e.preventDefault(),!this.state.disabled){var n=window.gapi.auth2.getAuthInstance(),o=this.props,r=o.offline,i=o.redirectUri,s=o.onSuccess,c=o.onRequest,a=o.fetchBasicProfile,u=o.onFailure,l=o.prompt,f=o.scope,p=o.responseType,d={response_type:p,redirect_uri:i,fetch_basic_profile:a,prompt:l,scope:f};c(),r?n.grantOfflineAccess(d).then(function(e){return s(e)},function(e){return u(e)}):n.signIn(d).then(function(e){return t._handleSigninSuccess(e)},function(e){return u(e)})}}},{key:"_handleSigninSuccess",value:function(e){var t=e.getBasicProfile(),n=e.getAuthResponse();e.googleId=t.getId(),e.tokenObj=n,e.tokenId=n.id_token,e.accessToken=n.access_token,e.profileObj={googleId:t.getId(),imageUrl:t.getImageUrl(),email:t.getEmail(),name:t.getName(),givenName:t.getGivenName(),familyName:t.getFamilyName()},this.props.onSuccess(e)}},{key:"render",value:function(){var e=this.props,t=e.tag,n=e.style,o=e.className,r=e.disabledStyle,i=e.buttonText,s=e.children,a=this.state.disabled||this.props.disabled,u={display:"inline-block",background:"#d14836",color:"#fff",width:190,paddingTop:10,paddingBottom:10,borderRadius:2,border:"1px solid transparent",fontSize:16,fontWeight:"bold",fontFamily:"Roboto"},l=function(){return n||(o&&!n?{}:u)}(),f=function(){return a?Object.assign({},l,r):l}();return c.a.createElement(t,{onClick:this.signIn,style:f,type:"button",disabled:a,className:o},s||i)}}]),t}(s.Component);l.defaultProps={tag:"button",buttonText:"Login with Google",scope:"profile email",responseType:"permission",prompt:"",cookiePolicy:"single_host_origin",fetchBasicProfile:!0,uxMode:"popup",disabledStyle:{opacity:.6},onRequest:function(){},offline:!1},t.default=l},function(e,t,n){"use strict";var o=n(4),r=n(5),i=n(3);e.exports=function(){function e(e,t,n,o,s,c){c!==i&&r(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t};return n.checkPropTypes=o,n.PropTypes=n,n}},function(e,t,n){e.exports=n(1)()},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";function o(e){return function(){return e}}var r=function(){};r.thatReturns=o,r.thatReturnsFalse=o(!1),r.thatReturnsTrue=o(!0),r.thatReturnsNull=o(null),r.thatReturnsThis=function(){return this},r.thatReturnsArgument=function(e){return e},e.exports=r},function(e,t,n){"use strict";function o(e,t,n,o,i,s,c,a){if(r(t),!e){var u;if(void 0===t)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,o,i,s,c,a],f=0;u=new Error(t.replace(/%s/g,function(){return l[f++]})),u.name="Invariant Violation"}throw u.framesToPop=1,u}}var r=function(e){};e.exports=o},function(t,n){t.exports=e},function(e,t,n){e.exports=n(0)}])});
//# sourceMappingURL=google-login.js.map
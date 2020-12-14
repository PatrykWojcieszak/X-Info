(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{107:function(e,t,n){e.exports={CrewPerson:"CrewPerson_CrewPerson__3bcBn",Name:"CrewPerson_Name__1NRtT",Agency:"CrewPerson_Agency__2CHj5"}},108:function(e,t,n){e.exports={Ship:"Ship_Ship__Izgkk"}},109:function(e,t,n){e.exports={LinkBtn:"MediaLink_LinkBtn__pirMn"}},110:function(e,t,n){e.exports={Launch:"Launch_Launch__322og",Row:"Launch_Row__k86HG",Rocket:"Launch_Rocket__2DdRc",InfoContainer:"Launch_InfoContainer__39AJ_",InfoWrapper:"Launch_InfoWrapper__XiVbo",AdditionalInfo:"Launch_AdditionalInfo__Z2Jyv",AdditionalInfo__Content:"Launch_AdditionalInfo__Content__15_u8",YoutubeContainer:"Launch_YoutubeContainer__A1vfb",MediaContainer:"Launch_MediaContainer__2WSVQ"}},114:function(e,t,n){"use strict";n.r(t);var a=n(49),i=n(4),c=n(0),r=n.n(c),o=n(6),s=n(23),l=n(52),d=n(14),u=n(58),f=n(63),j=n(61),b=n(107),h=n.n(b),p=function(e){var t=e.name,n=e.img,a=e.agency;return Object(i.jsxs)("div",{className:h.a.CrewPerson,children:[Object(i.jsx)("img",{src:n,alt:"astronaut"}),Object(i.jsx)("h3",{className:h.a.Name,children:t}),Object(i.jsx)("h3",{className:h.a.Agency,children:a})]})},m=r.a.memo(p),O=n(108),v=n.n(O),x=function(e){var t=e.name,n=e.img;return Object(i.jsxs)("div",{className:v.a.Ship,children:[Object(i.jsx)("img",{src:n,alt:"ship"}),Object(i.jsxs)("h3",{children:["NAME: ",Object(i.jsx)("span",{children:t})]})]})},y=r.a.memo(x),g=n(51),A=n(109),_=n.n(A),k=function(e){var t=e.name,n=e.icon,a=e.brand,c=e.link,r=["fas",n];return a&&(r=["fab",n]),Object(i.jsx)("a",{href:c,target:"_blank",rel:"noopener noreferrer",children:Object(i.jsxs)("div",{className:_.a.LinkBtn,children:[Object(i.jsx)(g.a,{icon:r}),Object(i.jsx)("h4",{children:t})]})})},N=r.a.memo(k),I=n(65),w=n(60),S=n(54),C=n(66),E=n(110),L=n.n(E),M={query:{flight_number:0},options:{limit:1,select:{name:1,date_local:1,date_utc:1,flight_number:1,details:1,links:1,success:1,failures:1},populate:[{path:"launchpad",select:{name:1,full_name:1}},{path:"rocket",select:{name:1,id:1}},{path:"crew",select:{name:1,agency:1,image:1}},{path:"ships",select:{name:1,image:1}},"payloads",{path:"cores",populate:[{path:"landpad",select:{name:1,full_name:1}}]}]}},P=n(47);t.default=function(){var e,t,n,r,b,h,p,O,v,x,g,A,_,k,E,D,B,R,z,Z,G,F,U=Object(o.h)().flight_number,T=M;T.query.flight_number=U;var H=Object(l.a)("https://api.spacexdata.com/v4/launches/query",T),Y=Object(a.a)(H,3),W=Y[0],V=(Y[1],Y[2]);Object(c.useEffect)((function(){V()}),[V]);var Q=Object(i.jsx)("img",{src:C.a,alt:"Falcon 9"});"Falcon 1"===(null===(e=W.docs[0])||void 0===e?void 0:e.rocket.name)?Q=Object(i.jsx)("img",{src:w.a,alt:"Falcon 1"}):"Falcon 9"===(null===(t=W.docs[0])||void 0===t?void 0:t.rocket.name)?Q=Object(i.jsx)("img",{src:C.a,alt:"Falcon 9"}):"Falcon Heavy"===(null===(n=W.docs[0])||void 0===n?void 0:n.rocket.name)?Q=Object(i.jsx)("img",{src:I.a,alt:"Falcon Heavy"}):"Starship"===(null===(r=W.docs[0])||void 0===r?void 0:r.rocket.name)&&(Q=Object(i.jsx)("img",{src:S.a,alt:"Starship"}));var J=Object(i.jsx)(i.Fragment,{});void 0!==W.docs[0]&&W.docs[0].crew.length>0&&(J=Object(i.jsxs)("div",{className:L.a.AdditionalInfo,children:[Object(i.jsx)("h2",{children:"CREW"}),Object(i.jsx)("div",{className:L.a.AdditionalInfo__Content,children:W.docs[0].crew.map((function(e,t){return Object(i.jsx)(m,{name:e.name,img:e.image,agency:e.agency},t)}))})]}));var q=Object(i.jsx)(i.Fragment,{});return void 0!==W.docs[0]&&W.docs[0].ships.length>0&&(q=Object(i.jsxs)("div",{className:L.a.AdditionalInfo,children:[Object(i.jsx)("h2",{children:"USED SHIPS"}),Object(i.jsx)("div",{className:L.a.AdditionalInfo__Content,children:W.docs[0].ships.map((function(e,t){return Object(i.jsx)(y,{name:e.name,img:e.image},t)}))})]})),Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)(s.b.div,{initial:"initial",animate:"in",exit:"out",variants:P.d,children:[Object(i.jsxs)("div",{className:L.a.Launch,children:[void 0!==W.docs[0]?Object(i.jsx)(u.a,{showMoreDetailsButton:!1,details:W.docs[0].details,launchName:W.docs[0].name,date_local:W.docs[0].date_local,date_utc:W.docs[0].date_utc,rocketName:W.docs[0].rocket.name,launchSiteName:W.docs[0].launchpad.full_name,flightNumber:W.docs[0].flight_number,patchImg:W.docs[0].links.patch.small,success:W.docs[0].success,failures:W.docs[0].failures,launchId:W.docs[0].id}):null,Object(i.jsxs)("div",{className:L.a.Row,children:[Object(i.jsx)(d.b,{to:"/vehicles/".concat(null===(b=W.docs[0])||void 0===b?void 0:b.rocket.name),children:Object(i.jsxs)("div",{className:L.a.Rocket,children:[Object(i.jsx)("h3",{children:null===(h=W.docs[0])||void 0===h?void 0:h.rocket.name}),Q]})}),Object(i.jsxs)("div",{className:L.a.InfoContainer,children:[Object(i.jsx)("div",{className:L.a.InfoWrapper,children:null===(p=W.docs[0])||void 0===p?void 0:p.payloads.map((function(e,t){return Object(i.jsxs)("div",{children:[Object(i.jsxs)("h2",{children:["PAYLOAD #",t+1]}),Object(i.jsx)(f.a,{title:"NAME",value:"".concat(e.name)}),Object(i.jsx)(f.a,{title:"CUSTOMER",value:"".concat(e.customers)}),Object(i.jsx)(f.a,{title:"MANUFACTURER",value:"".concat(e.manufacturers)}),Object(i.jsx)(f.a,{title:"TYPE",value:"".concat(e.type)}),Object(i.jsx)(f.a,{title:"MASS",value:"".concat(e.mass_kg," kg | ").concat(e.mass_lbs," lb")}),Object(i.jsx)(f.a,{title:"ORBIT",value:"".concat(e.orbit)})]},t)}))}),Object(i.jsx)("div",{className:L.a.InfoWrapper,children:null===(O=W.docs[0])||void 0===O?void 0:O.cores.map((function(e,t){return Object(i.jsxs)("div",{children:[Object(i.jsxs)("h2",{children:["CORE #",t+1]}),Object(i.jsx)(f.a,{title:"LANDING",value:e.landing_success?"SUCCESSFUL":"FAILED"}),Object(i.jsx)(f.a,{title:"LANDING TYPE",value:e.landing_type}),Object(i.jsx)(f.a,{title:"LANDING PAD",value:e.landpad.name}),Object(i.jsx)(f.a,{title:"REUSED",value:e.reused?"YES":"NO"}),Object(i.jsx)(f.a,{title:"FLIGHTS",value:"".concat(e.flight)})]},t)}))})]})]}),J,q,Object(i.jsx)("div",{className:L.a.YoutubeContainer,children:Object(i.jsx)("iframe",{title:"spacex video",width:"560",height:"315",src:"https://www.youtube.com/embed/".concat(null===(v=W.docs[0])||void 0===v?void 0:v.links.youtube_id),frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})]}),Object(i.jsxs)("div",{style:{padding:"0 1rem"},children:[(null===(x=W.docs[0])||void 0===x?void 0:x.links.flickr.original.length)>0?Object(i.jsx)(j.a,{images:W.docs[0].links.flickr.original}):null,Object(i.jsxs)("div",{className:L.a.MediaContainer,children:[null!==(null===(g=W.docs[0])||void 0===g?void 0:g.links.reddit.campaign)?Object(i.jsx)(N,{name:"CAMPAIGN",icon:"reddit-alien",brand:!0,link:null===(A=W.docs[0])||void 0===A?void 0:A.links.reddit.campaign}):null,null!==(null===(_=W.docs[0])||void 0===_?void 0:_.links.reddit.launch)?Object(i.jsx)(N,{name:"LAUNCH",icon:"reddit-alien",brand:!0,link:null===(k=W.docs[0])||void 0===k?void 0:k.links.reddit.launch}):null,null!==(null===(E=W.docs[0])||void 0===E?void 0:E.links.reddit.media)?Object(i.jsx)(N,{name:"MEDIA",icon:"reddit-alien",brand:!0,link:null===(D=W.docs[0])||void 0===D?void 0:D.links.reddit.media}):null,null!==(null===(B=W.docs[0])||void 0===B?void 0:B.links.wikipedia)?Object(i.jsx)(N,{name:"WIKIPEDIA",icon:"wikipedia-w",brand:!0,link:null===(R=W.docs[0])||void 0===R?void 0:R.links.wikipedia}):null,null!==(null===(z=W.docs[0])||void 0===z?void 0:z.links.article)?Object(i.jsx)(N,{name:"ARTICLE",icon:"file-alt",brand:!1,link:null===(Z=W.docs[0])||void 0===Z?void 0:Z.links.article}):null,null!==(null===(G=W.docs[0])||void 0===G?void 0:G.links.presskit)?Object(i.jsx)(N,{name:"PRESS KIT",icon:"newspaper",brand:!1,link:null===(F=W.docs[0])||void 0===F?void 0:F.links.presskit}):null]})]})]})})}},47:function(e,t,n){"use strict";n.d(t,"d",(function(){return a})),n.d(t,"b",(function(){return i})),n.d(t,"e",(function(){return c})),n.d(t,"f",(function(){return r})),n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return s}));var a={initial:{opacity:0},in:{transition:{duration:1,ease:"easeOut"},opacity:1,staggerChildren:1},out:{opacity:0,transition:{duration:.25,ease:"easeOut"}}},i={hidden:{opacity:0,y:100},show:{opacity:1,y:0,transition:{duration:1.25}}},c={hidden:{opacity:0,x:100},show:{opacity:1,x:0,transition:{duration:.5,type:"tween"}},exit:{opacity:0,x:-100}},r={initial:{opacity:0,y:100},in:{transition:{duration:1,ease:"easeOut"},opacity:1,y:0,staggerChildren:1},out:{y:100,opacity:0,transition:{duration:.4,ease:"easeOut"}}},o={enter:function(e){return{x:e>0?1e3:-1e3,opacity:0}},center:{zIndex:1,x:0,opacity:1},exit:function(e){return{zIndex:0,x:e<0?1e3:-1e3,opacity:0}}},s={hidden:{opacity:0},show:{opacity:1,transition:{duration:.8}}}},50:function(e,t,n){"use strict";var a=n(4),i=n(0),c=n.n(i),r=n(53),o=n.n(r),s=function(e){var t=e.name,n=e.selected,i=e.clicked,c=[o.a.Button];return n&&c.push(o.a.Selected),Object(a.jsx)("button",{onClick:i,className:c.join(" "),children:t})};t.a=c.a.memo(s)},51:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var a=n(24),i=n(15),c=n.n(i),r=n(0),o=n.n(r);function s(e){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function j(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function b(e){return t=e,(t-=0)===t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}function h(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var n,a=t.indexOf(":"),i=b(t.slice(0,a)),c=t.slice(a+1).trim();return i.startsWith("webkit")?e[(n=i,n.charAt(0).toUpperCase()+n.slice(1))]=c:e[i]=c,e}),{})}var p=!1;try{p=!0}catch(y){}function m(e){return null===e?null:"object"===s(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"===typeof e?{prefix:"fas",iconName:e}:void 0}function O(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?l({},e,t):{}}function v(e){var t=e.forwardedRef,n=f(e,["forwardedRef"]),i=n.icon,c=n.mask,r=n.symbol,o=n.className,s=n.title,d=m(i),b=O("classes",[].concat(j(function(e){var t,n=e.spin,a=e.pulse,i=e.fixedWidth,c=e.inverse,r=e.border,o=e.listItem,s=e.flip,d=e.size,u=e.rotation,f=e.pull,j=(l(t={"fa-spin":n,"fa-pulse":a,"fa-fw":i,"fa-inverse":c,"fa-border":r,"fa-li":o,"fa-flip-horizontal":"horizontal"===s||"both"===s,"fa-flip-vertical":"vertical"===s||"both"===s},"fa-".concat(d),"undefined"!==typeof d&&null!==d),l(t,"fa-rotate-".concat(u),"undefined"!==typeof u&&null!==u&&0!==u),l(t,"fa-pull-".concat(f),"undefined"!==typeof f&&null!==f),l(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(j).map((function(e){return j[e]?e:null})).filter((function(e){return e}))}(n)),j(o.split(" ")))),h=O("transform","string"===typeof n.transform?a.c.transform(n.transform):n.transform),y=O("mask",m(c)),g=Object(a.a)(d,u({},b,{},h,{},y,{symbol:r,title:s}));if(!g)return function(){var e;!p&&console&&"function"===typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",d),null;var A=g.abstract,_={ref:t};return Object.keys(n).forEach((function(e){v.defaultProps.hasOwnProperty(e)||(_[e]=n[e])})),x(A[0],_)}v.displayName="FontAwesomeIcon",v.propTypes={border:c.a.bool,className:c.a.string,mask:c.a.oneOfType([c.a.object,c.a.array,c.a.string]),fixedWidth:c.a.bool,inverse:c.a.bool,flip:c.a.oneOf(["horizontal","vertical","both"]),icon:c.a.oneOfType([c.a.object,c.a.array,c.a.string]),listItem:c.a.bool,pull:c.a.oneOf(["right","left"]),pulse:c.a.bool,rotation:c.a.oneOf([0,90,180,270]),size:c.a.oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:c.a.bool,symbol:c.a.oneOfType([c.a.bool,c.a.string]),title:c.a.string,transform:c.a.oneOfType([c.a.string,c.a.object]),swapOpacity:c.a.bool},v.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var x=function e(t,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"===typeof n)return n;var i=(n.children||[]).map((function(n){return e(t,n)})),c=Object.keys(n.attributes||{}).reduce((function(e,t){var a=n.attributes[t];switch(t){case"class":e.attrs.className=a,delete n.attributes.class;break;case"style":e.attrs.style=h(a);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=a:e.attrs[b(t)]=a}return e}),{attrs:{}}),r=a.style,o=void 0===r?{}:r,s=f(a,["style"]);return c.attrs.style=u({},c.attrs.style,{},o),t.apply(void 0,[n.tag,u({},c.attrs,{},s)].concat(j(i)))}.bind(null,o.a.createElement)},52:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(49),i=n(0),c=n(55),r=n.n(c),o=function(e,t){var n=Object(i.useState)(!0),c=Object(a.a)(n,2),o=c[0],s=c[1],l=Object(i.useState)({docs:[],totalDocs:0,offset:0,limit:0,totalPages:0,page:0,pagingCounter:0,hasPrevPage:!1,hasNextPage:!1,prevPage:0,nextPage:0}),d=Object(a.a)(l,2),u=d[0],f=d[1];return[u,o,Object(i.useCallback)((function(){r.a.post(e,t).then((function(e){f(e.data),s(!1)})).catch((function(e){console.log(e)}))}),[t,e])]}},53:function(e,t,n){e.exports={Button:"Button_Button__3Hk_6",Selected:"Button_Selected__1vq-S"}},54:function(e,t,n){"use strict";t.a=n.p+"static/media/st.a5fb8e5b.png"},58:function(e,t,n){"use strict";var a=n(4),i=n(0),c=n.n(i),r=n(14),o=n(50),s=n(59),l=n.n(s),d=function(e){var t=e.showMoreDetailsButton,n=e.details,i=e.launchName,c=e.date_utc,s=(e.date_local,e.rocketName),d=e.launchSiteName,u=e.flightNumber,f=e.patchImg,j=e.success,b=e.failures,h=(e.launchId,new Date(c));return Object(a.jsxs)("div",{className:l.a.LatestLaunch,children:[Object(a.jsxs)("div",{className:l.a.LeftContainer,children:[Object(a.jsx)("img",{src:f,alt:"mission patch"}),t?Object(a.jsx)(r.b,{to:"/launch/".concat(u),children:Object(a.jsx)(o.a,{name:"MORE DETAILS"})}):null]}),Object(a.jsxs)("div",{className:l.a.RightContainer,children:[Object(a.jsxs)("div",{className:l.a.MainInfoContainer,children:[Object(a.jsx)("h2",{children:i}),Object(a.jsxs)("p",{children:[n," "]}),Object(a.jsxs)("h4",{className:l.a.LaunchNumber,children:["#",u]}),Object(a.jsxs)("div",{className:l.a.DetailsWrapper,children:[Object(a.jsxs)("div",{className:l.a.TitlesContainer,children:[Object(a.jsx)("h4",{children:"LAUNCH SITE:"}),Object(a.jsx)("h4",{children:"ROCKET:"}),Object(a.jsx)("h4",{children:"DATE:"}),Object(a.jsx)("h4",{children:"LAUNCH:"})]}),Object(a.jsxs)("div",{className:l.a.ValuesContainer,children:[Object(a.jsx)("h4",{children:d}),Object(a.jsx)("h4",{children:s}),Object(a.jsx)("h4",{children:h.toDateString()}),Object(a.jsx)("h4",{style:{color:j?"#4BB543":"#FA113D"},children:j?"SUCCESSFUL":"FAILURE"})]})]})]}),!j&&b.length>0?Object(a.jsxs)("div",{className:l.a.FailureContainer,children:[Object(a.jsx)("h4",{children:"FAILURES:"}),Object(a.jsx)("ul",{children:b.map((function(e,t){return Object(a.jsx)("li",{children:e.reason},t)}))})]}):null]})]})};t.a=c.a.memo(d)},59:function(e,t,n){e.exports={LatestLaunch:"LaunchExtendedInfo_LatestLaunch__qxtpB",LeftContainer:"LaunchExtendedInfo_LeftContainer__3XUj3",RightContainer:"LaunchExtendedInfo_RightContainer__2_zoT",MainInfoContainer:"LaunchExtendedInfo_MainInfoContainer__11ws1",LaunchNumber:"LaunchExtendedInfo_LaunchNumber__Sb8qi",DetailsWrapper:"LaunchExtendedInfo_DetailsWrapper__2fLje",TitlesContainer:"LaunchExtendedInfo_TitlesContainer__3bVtz",ValuesContainer:"LaunchExtendedInfo_ValuesContainer__2aBQ3",FailureContainer:"LaunchExtendedInfo_FailureContainer__1XJ_k"}},60:function(e,t,n){"use strict";t.a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAAC9CAMAAABWOGUEAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAACxMAAAsTAQCanBgAAAJzUExURf///0ZGRtbW1vPz8/z8/Pr6+uTk5P///83Nzebl5hgYGPPz89HR0dXV1crKyhEREScnJ83NzXp6ejk5OQkJCVpaWg0NDSMjIzw8PMnJydDPz0BAQNHQ0Pb299ra2dTU1ElJSczMzczMzEdHR/z8+/Dw8c/OzvDw8ERERPr6+uLi4enp6Pr5+MbHyNDQ0TExMdjY2CsrK/39/gAAAHh3d1JSUwMDA97e3jU1NVZ2kdzc3JOouJ6vvNfU0R0dHevm4czLzFZWVqCgoHqTqGVkZLq8v19eXszMzLXDzq+6w+Pe2oyis2ppad/Z1XJycnd3d8DAwG5ubtDb4MXQ2GeGnfLo5Nrk5j5fgufHzSJJcdGGkl19loSarVFRUYyMjG9ubv///7OysvPu7b/K0k9PT05yj4qJiQQaUMZVZGh+mAw5aOHs7YqLi4CAgNvb2+zs7NnZ2fX19dfX10hISPLy8mpqauS8wsDDxTIyMnGOo2dmZurv8cZsfPnv6Md7iJubmzRSdYyKi9R4hAFHd39+fo+OjoyMjOjo6OXl5d7e3dTU1Nna2uLi4sDAwNHS0s7Q0tzc3EBAQMnJyrm5ufb29isrK/f392ZmZlBQUISCg1ZWVnh3d5mZmiEhIY2Ai7vBxcWgqMG1uR4eHl1cXCwrK5N0h05NTfHb3xgXGGppaT4+PkREREhISNHR0czNzfDw8M7Oz/Dw8Pj4+NbW1tfX1////4iJiVVUVC0uLhkxYAsLC1JSUkFBQfHW27ZhchgYGNi1u4VhecypsOv49gYGBmdnZyoqKlpYWFVVVTY2NqWjpK2pqqmmp7W2th4eHg4ODkdwTFynrLIAAADRdFJOU////xL83f//NP///////////zb//xH///z//93///////83/////3f//////v+b////////////////////////Sgv/////FP////////8uBWX//////////////ysV/9v////A/////////1JhSMBW8b8S3h3//9r/jf////8i//b//4HVoZNzKDmZ3jre/2zt7ijc3d5w2/7g0ULn/////27p5f+Q/4DksdV4p4fBj9LJ9tz4kZZj/9vw4v//rP/////oP/TosMD////X8sUAMq/S5QAABWVJREFUeNrt3OdT21gQAHChXDzIlrEBU6STLQiWORs7tqluGBkXOpjeIfQeIL2HIYHUS27mkkuf9J7rvffe9CedDGlf7pO5eZubt3+A5zf79j1pV5IJCVAQGIMxGIMxGIMxGIMxGIMx/x5z7+aCwZRvUcwnQsGc4D3698phYDa8T1JW4jUYmI2sWqEnzkQhYI7xIknpibVITfyYtxiRtwhW4u0oekz5KZvIlwhmM3EcOSY6Z0jiYgVMEEfQZ+ZNkmFJuYAJYn0UMSa67iT/BGOeQ52ZOSr5CSb+dYoXk2t5hplFjZktYZ9i5o+hxVTMe2IYagVDbEaL2SyQybZk3qIy5huNxFG0mFxBbZIPPRljlI+9E4gxKgMdO/RWl2kjaoyDe1rAGIMxGIMx/82hxz27NiHGHDV6OBtL5plXMO+gxWzhaZZlOZpfiVOvo8V4aNpE86SnJBYnK5BiZqnTtp3MaY9gjl21tyHFrFtv4UWGizVxZrPZqD+OFkM5WJF3KFQrBfxSIlqMQm1KokmLKh8OBlRmMAZjXlSMfOixct8EAbPJLFCWPMFIAMBUfMCEBwYGwqLaIYeBR4rZelZXXFBQUKzJsLvsdrszBSlml0bWFOuUTleqHGgxaS9nKNN1GqU2NSErJycnEwjmlZyEhASMAY/JwpnBmXmRM4MxuGZwZnBmcGYwBt/p4WXCmYkfo/Vr0jV+Z2ZOlhxoMVvPpj/f+GvRZua8Xev3Z2hdCUWxyEKKWXdGYWBF2kGp9LEQEE+uBIWHLFEIBIiZHqUWGU4NZFxPkclwpp0YgzEYs1YYUA8y8DJhDMZgDMZgDMZgzP/g5oohqweBdJRktljGN7XpYWSGKx0ZCQanYhgr8l6b5trd3uAQjMbfxPm6vQvtQDCsN1hT0wRkazN1ZYP5EN4s2pZHikxZqwrE1j5DqTnRV+OthDEs4utsk25fZwscjNddBQSzs7NqEMyFkuENj1/1h3BtqnZY4NxCZBus+tXdtAE5xtbqa3l8ziDHiEnVVWO+FYz1VdTXpuTS4G73WBOQZWKSaJW3EsgyMbRaAaZmbNX7rRAwK1dt7mqN19sGIDNvUHyp2Onu2Q2jgPm68KfNBAHj0ONL2fb2FnczjAJOMvFVVZV74ewmI5itzcSe3sKoGTVr6ulucQ/BwHDsxMjuNiOQ3cSNuSthFLDc+JuCLcFuEFtbEWviyla/MDXqEyFgSoyEUOkbUiGfz5Re7ckm9va0eJv16KcQLN3dXuPumQLRHdiqHZ1jE0AGjHU7JyeEhW4YGDpclWcVmvUgvolj6/aXTcEYvSocSeGh7I67d78cBIBp9U0eWlhcPLBvB3qMpdV36FDnYlfXgQ4AmbFc//b27QNdXV0QMG3Xx8fHv9q3bxzAMikMtmvXvvumo2NHK0Ho0Tb+mxQ83dQ29f3qHBjts4PyTfnPf+76Icr/hbj3daS+vr+2v79wNWp33UCH6Q08+KGgQJeerivWFcvx2Se9CJdJOhiY2aXUaO1Opd+pTT0soawZKRo4KAUe/KX0/3rjod25jBYj9T1Kk6TA3/ck6Y4rYQ9ijPRjozS99OfSYanhp5t9qDFSY+/M71R4ubfh0S30mL5A4x/0wHKgvDHeV8jX4k9Eo7/85gnfb5Cm/ZcBYFJ+jkQaJSklfQY9Rup76CqSHX0ZjQAwl0OpoUvlkjR8Dj1m+9KovajwcJq0/SB6zJ5IyO/MyQrE/0trgekP6bRFkWkImO03R+uVrtoLH0HATNePFmlctaOX0gBg7hReyJQxhaEUAJjhwvpUjTPSHzqHHtP7eX2tU+ksCkWG0WMahu9fvHXlyhfnL34cN+YfHFngjTsIKcwAAAAASUVORK5CYII="},61:function(e,t,n){"use strict";var a=n(49),i=n(4),c=n(0),r=n(23),o=n(3),s=n(51),l=n(62),d=n.n(l),u=n(47);t.a=function(e){var t=e.images,n=Object(c.useState)([0,0]),l=Object(a.a)(n,2),f=Object(a.a)(l[0],2),j=f[0],b=f[1],h=l[1],p=Object(o.y)(0,t.length,j),m=function(e){h([j+e,e])};return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:d.a.Gallery,children:[Object(i.jsx)(r.a,{initial:!1,custom:b,children:Object(i.jsx)(r.b.img,{src:t[p],custom:b,variants:u.a,initial:"enter",animate:"center",exit:"exit",transition:{x:{type:"spring",stiffness:300,damping:30},opacity:{duration:.2}},drag:"x",dragConstraints:{left:0,right:0},dragElastic:1,onDragEnd:function(e,t){var n=t.offset,a=t.velocity,i=function(e,t){return Math.abs(e)*t}(n.x,a.x);i<-1e4?m(1):i>1e4&&m(-1)}},j)}),Object(i.jsx)("div",{className:d.a.Next,onClick:function(){return m(1)},children:Object(i.jsx)(s.a,{icon:"arrow-right"})}),Object(i.jsx)("div",{className:d.a.Prev,onClick:function(){return m(-1)},children:Object(i.jsx)(s.a,{icon:"arrow-left"})})]})})}},62:function(e,t,n){e.exports={Gallery:"Gallery_Gallery__ys1c1",Next:"Gallery_Next__3xB76",Prev:"Gallery_Prev__1kqcT"}},63:function(e,t,n){"use strict";var a=n(4),i=n(0),c=n.n(i),r=n(64),o=n.n(r),s=function(e){var t=e.title,n=e.value;return Object(a.jsxs)("div",{className:o.a.InfoLine,children:[Object(a.jsx)("h3",{className:o.a.Title,children:t}),Object(a.jsx)("h3",{className:o.a.Value,children:n})]})};t.a=c.a.memo(s)},64:function(e,t,n){e.exports={InfoLine:"InfoLine_InfoLine__2NeOq",Title:"InfoLine_Title__1W7yV",Value:"InfoLine_Value__3z6v9"}},65:function(e,t,n){"use strict";t.a=n.p+"static/media/falconHeavy.dd38d022.png"},66:function(e,t,n){"use strict";t.a=n.p+"static/media/falcon9.7187de50.png"}}]);
//# sourceMappingURL=4.881d7726.chunk.js.map
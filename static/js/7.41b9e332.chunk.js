(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[7],{144:function(e,a,n){e.exports={Loader:"Spinner_Loader__3IzaG",load5:"Spinner_load5__3wknN"}},145:function(e,a,n){e.exports={Launches:"Launches_Launches__r6Yzf",Latest:"Launches_Latest__2G5-m",Content:"Launches_Content__3a_9p",ButtonsWrapper:"Launches_ButtonsWrapper__2uMMx"}},146:function(e,a,n){e.exports={ScrollToTop:"ScrollToTop_ScrollToTop__3V3ot"}},180:function(e,a,n){"use strict";n.r(a);var t=n(80),o=n(3),c=n(0),i=n(9),r=n(42),s=n(74),d=n(97),l=n(87),u=n(144),m=n.n(u),h=function(){return Object(o.jsx)("div",{className:m.a.Loader,children:"Loading..."})},p=n(145),f=n.n(p),b=n(72),j=n(77),y=n.n(j),O=n(8),L={query:{upcoming:!1},options:{limit:1,select:{name:1,date_local:1,date_utc:1,flight_number:1,details:1,links:1,success:1,failures:1},sort:{flight_number:"desc"},populate:[{path:"launchpad",select:{name:1,full_name:1}},{path:"rocket",select:{name:1}}]}},g=n(32);var S=function(){return function(e,a){if(Object(O.checkCacheValid)(a,"latestLaunch"))return null;e({type:g.b}),y.a.post("https://api.spacexdata.com/v4/launches/query",L).then((function(a){var n;e((n=a.data,{type:g.c,payload:n}))})).catch((function(a){var n;e((n=a,{type:g.a,payload:n}))}))}},x={query:{upcoming:!1},options:{page:1,limit:10,select:{name:1,date_local:1,date_utc:1,success:1,links:1,flight_number:1},sort:{flight_number:"desc"},populate:[{path:"launchpad",select:{name:1,full_name:1}},{path:"rocket",select:{name:1}},{path:"payloads",select:{customers:1,nationalities:1}}]}},_=n(29);var v=function(e){return function(a,n){if(Object(O.checkCacheValid)(n,"pastLaunches")&&1===e)return null;a({type:_.b});var t=x;t.options.page=e,y.a.post("https://api.spacexdata.com/v4/launches/query",t).then((function(e){var n;a((n=e.data,{type:_.c,payload:n}))})).catch((function(e){var n;a((n=e,{type:_.a,payload:n}))}))}},N=n(98),C=n(43),I=n(76),T=n(146),M=n.n(T),A=function(){return Object(o.jsx)("div",{className:M.a.ScrollToTop,children:Object(o.jsx)(I.a,{icon:"arrow-down",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})}})})};a.default=Object(C.b)((function(e){return{latestLaunch:e.latestLaunch.latestLaunch,loadingLatestLaunch:e.latestLaunch.loading,pastLaunches:e.pastLaunches.pastLaunches,loadingPastLaunches:e.pastLaunches.loading,upcomingLaunches:e.upcomingLaunches.upcomingLaunches,loadingUpcomingLaunches:e.upcomingLaunches.loading}}),(function(e){return{onFetchLatestLaunch:function(){return e(S())},onFetchPastLaunches:function(a){return e(v(a))},onFetchUpcomingLaunches:function(){return e(Object(N.a)())}}}))((function(e){var a=Object(c.useState)(!1),n=Object(t.a)(a,2),u=n[0],m=n[1],p=Object(c.useState)(!0),j=Object(t.a)(p,2),y=j[0],O=j[1],L=Object(i.h)().launchType,g=e.onFetchLatestLaunch,S=e.onFetchPastLaunches,x=e.onFetchUpcomingLaunches,_=function(){m(!0),O(!1)};Object(c.useEffect)((function(){S(1),g(),x(),"past"===L&&_()}),[g,S,x,L]);var v=Object(o.jsx)(o.Fragment,{});e.loadingUpcomingLaunches||(v=Object(o.jsx)(r.b.div,{variants:b.g,initial:"initial",animate:"in",exit:"out",style:{width:"100%",position:"relative"},children:e.upcomingLaunches.docs.map((function(e,a){return Object(o.jsx)(d.a,{launchName:null===e||void 0===e?void 0:e.name,launchDateUtc:null===e||void 0===e?void 0:e.date_utc,rocketName:null===e||void 0===e?void 0:e.rocket.name,launchSiteName:null===e||void 0===e?void 0:e.launchpad.full_name,customer:e.payloads[0].customers[0],flightNumber:null===e||void 0===e?void 0:e.flight_number,nationality:e.payloads[0].nationalities[0]},a)}))}));var N=Object(o.jsx)(o.Fragment,{});return e.pastLaunches.docs.length>0&&(N=Object(o.jsxs)(r.b.div,{variants:b.g,initial:"initial",animate:"in",exit:"out",style:{width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",position:"relative"},children:[e.pastLaunches.docs.map((function(e,a){return Object(o.jsx)(d.a,{launchName:e.name,launchDateUtc:e.date_utc,rocketName:e.rocket.name,launchSiteName:e.launchpad.full_name,customer:e.payloads[0].customers[0],flightNumber:e.flight_number,success:e.success,nationality:e.payloads[0].nationalities[0]},a)})),e.pastLaunches.nextPage?Object(o.jsxs)("div",{style:{marginTop:"2rem",position:"relative"},children:[u&&e.loadingPastLaunches?Object(o.jsx)(h,{}):null,Object(o.jsx)(s.a,{name:"LOAD MORE",clicked:function(){S(e.pastLaunches.nextPage)}})]}):null]})),Object(o.jsxs)(r.b.div,{initial:"initial",animate:"in",exit:"out",variants:b.e,className:f.a.Launches,children:[Object(o.jsx)("div",{className:f.a.Latest,children:e.latestLaunch.docs[0]?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h2",{children:"LATEST LAUNCH"}),Object(o.jsx)(l.a,{showMoreDetailsButton:!0,details:e.latestLaunch.docs[0].details,launchName:e.latestLaunch.docs[0].name,date_local:e.latestLaunch.docs[0].date_local,date_utc:e.latestLaunch.docs[0].date_utc,rocketName:e.latestLaunch.docs[0].rocket.name,launchSiteName:e.latestLaunch.docs[0].launchpad.full_name,flightNumber:e.latestLaunch.docs[0].flight_number,patchImg:e.latestLaunch.docs[0].links.patch.small,success:e.latestLaunch.docs[0].success,failures:e.latestLaunch.docs[0].failures,launchId:e.latestLaunch.docs[0].id})]}):null}),Object(o.jsxs)("div",{className:f.a.Content,children:[e.loadingUpcomingLaunches&&e.loadingPastLaunches?null:Object(o.jsxs)("div",{className:f.a.ButtonsWrapper,children:[Object(o.jsx)(s.a,{selected:y,clicked:function(){m(!1),O(!0)},name:"UPCOMING LAUNCHES"}),Object(o.jsx)(s.a,{selected:u,clicked:_,name:"PAST LAUNCHES"})]}),Object(o.jsx)(r.a,{children:y?v:null}),Object(o.jsx)(r.a,{children:u?N:null})]}),u||y?Object(o.jsx)(A,{}):null]})}))},72:function(e,a,n){"use strict";n.d(a,"e",(function(){return t})),n.d(a,"b",(function(){return o})),n.d(a,"f",(function(){return c})),n.d(a,"g",(function(){return i})),n.d(a,"a",(function(){return r})),n.d(a,"c",(function(){return s})),n.d(a,"d",(function(){return d}));var t={initial:{opacity:0},in:{transition:{duration:1,ease:"easeOut"},opacity:1,staggerChildren:1},out:{opacity:0,transition:{duration:.25,ease:"easeOut"}}},o={hidden:{opacity:0,y:100},show:{opacity:1,y:0,transition:{duration:1.25}},exit:{opacity:0,y:100,transition:{duration:.75,ease:"easeOut"}}},c={hidden:{opacity:0,x:100},show:{opacity:1,x:0,transition:{duration:.5,type:"tween"}},exit:{opacity:0,x:-100}},i={initial:{opacity:0,y:100},in:{transition:{duration:1,ease:"easeOut"},opacity:1,y:0,staggerChildren:1},out:{y:100,opacity:0,transition:{duration:.4,ease:"easeOut"}}},r={enter:function(e){return{x:e>0?1e3:-1e3,opacity:0}},center:{zIndex:1,x:0,opacity:1},exit:function(e){return{zIndex:0,x:e<0?1e3:-1e3,opacity:0}}},s={hidden:{opacity:0},show:{opacity:1,transition:{duration:.8}}},d={initial:{opacity:0},in:{transition:{duration:1,ease:"easeOut"},opacity:1}}},74:function(e,a,n){"use strict";var t=n(3),o=n(0),c=n.n(o),i=n(78),r=n.n(i),s=function(e){var a=e.name,n=e.selected,o=e.clicked,c=[r.a.Button];return n&&c.push(r.a.Selected),Object(t.jsx)("button",{onClick:o,className:c.join(" "),children:a})};a.a=c.a.memo(s)},76:function(e,a,n){"use strict";n.d(a,"a",(function(){return O}));var t=n(44),o=n(18),c=n.n(o),i=n(0),r=n.n(i);function s(e){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function u(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){d(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function m(e,a){if(null==e)return{};var n,t,o=function(e,a){if(null==e)return{};var n,t,o={},c=Object.keys(e);for(t=0;t<c.length;t++)n=c[t],a.indexOf(n)>=0||(o[n]=e[n]);return o}(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)n=c[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function h(e){return function(e){if(Array.isArray(e)){for(var a=0,n=new Array(e.length);a<e.length;a++)n[a]=e[a];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function p(e){return a=e,(a-=0)===a?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,a){return a?a.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var a}function f(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,a){var n,t=a.indexOf(":"),o=p(a.slice(0,t)),c=a.slice(t+1).trim();return o.startsWith("webkit")?e[(n=o,n.charAt(0).toUpperCase()+n.slice(1))]=c:e[o]=c,e}),{})}var b=!1;try{b=!0}catch(g){}function j(e){return null===e?null:"object"===s(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"===typeof e?{prefix:"fas",iconName:e}:void 0}function y(e,a){return Array.isArray(a)&&a.length>0||!Array.isArray(a)&&a?d({},e,a):{}}function O(e){var a=e.forwardedRef,n=m(e,["forwardedRef"]),o=n.icon,c=n.mask,i=n.symbol,r=n.className,s=n.title,l=j(o),p=y("classes",[].concat(h(function(e){var a,n=e.spin,t=e.pulse,o=e.fixedWidth,c=e.inverse,i=e.border,r=e.listItem,s=e.flip,l=e.size,u=e.rotation,m=e.pull,h=(d(a={"fa-spin":n,"fa-pulse":t,"fa-fw":o,"fa-inverse":c,"fa-border":i,"fa-li":r,"fa-flip-horizontal":"horizontal"===s||"both"===s,"fa-flip-vertical":"vertical"===s||"both"===s},"fa-".concat(l),"undefined"!==typeof l&&null!==l),d(a,"fa-rotate-".concat(u),"undefined"!==typeof u&&null!==u&&0!==u),d(a,"fa-pull-".concat(m),"undefined"!==typeof m&&null!==m),d(a,"fa-swap-opacity",e.swapOpacity),a);return Object.keys(h).map((function(e){return h[e]?e:null})).filter((function(e){return e}))}(n)),h(r.split(" ")))),f=y("transform","string"===typeof n.transform?t.c.transform(n.transform):n.transform),g=y("mask",j(c)),S=Object(t.a)(l,u({},p,{},f,{},g,{symbol:i,title:s}));if(!S)return function(){var e;!b&&console&&"function"===typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",l),null;var x=S.abstract,_={ref:a};return Object.keys(n).forEach((function(e){O.defaultProps.hasOwnProperty(e)||(_[e]=n[e])})),L(x[0],_)}O.displayName="FontAwesomeIcon",O.propTypes={border:c.a.bool,className:c.a.string,mask:c.a.oneOfType([c.a.object,c.a.array,c.a.string]),fixedWidth:c.a.bool,inverse:c.a.bool,flip:c.a.oneOf(["horizontal","vertical","both"]),icon:c.a.oneOfType([c.a.object,c.a.array,c.a.string]),listItem:c.a.bool,pull:c.a.oneOf(["right","left"]),pulse:c.a.bool,rotation:c.a.oneOf([0,90,180,270]),size:c.a.oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:c.a.bool,symbol:c.a.oneOfType([c.a.bool,c.a.string]),title:c.a.string,transform:c.a.oneOfType([c.a.string,c.a.object]),swapOpacity:c.a.bool},O.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var L=function e(a,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"===typeof n)return n;var o=(n.children||[]).map((function(n){return e(a,n)})),c=Object.keys(n.attributes||{}).reduce((function(e,a){var t=n.attributes[a];switch(a){case"class":e.attrs.className=t,delete n.attributes.class;break;case"style":e.attrs.style=f(t);break;default:0===a.indexOf("aria-")||0===a.indexOf("data-")?e.attrs[a.toLowerCase()]=t:e.attrs[p(a)]=t}return e}),{attrs:{}}),i=t.style,r=void 0===i?{}:i,s=m(t,["style"]);return c.attrs.style=u({},c.attrs.style,{},r),a.apply(void 0,[n.tag,u({},c.attrs,{},s)].concat(h(o)))}.bind(null,r.a.createElement)},78:function(e,a,n){e.exports={Button:"Button_Button__I880D",Selected:"Button_Selected__1jxpF"}},81:function(e,a,n){"use strict";a.a=n.p+"static/media/noImage.8874b81b.png"},86:function(e,a,n){e.exports={Launch:"LaunchShortInfo_Launch__2Ro9Z",Top:"LaunchShortInfo_Top__2EvHJ",Name_Date:"LaunchShortInfo_Name_Date__2Yu_1",Column:"LaunchShortInfo_Column__1g_0T",Row:"LaunchShortInfo_Row__3eDP3",LaunchNumber:"LaunchShortInfo_LaunchNumber__392yZ",Content:"LaunchShortInfo_Content__3u9Az",Content__Element:"LaunchShortInfo_Content__Element__1YrR_",Title:"LaunchShortInfo_Title__3KQQV",Value:"LaunchShortInfo_Value__1fMyi",Flag:"LaunchShortInfo_Flag__3ELc7"}},87:function(e,a,n){"use strict";var t=n(3),o=n(0),c=n.n(o),i=n(19),r=n(74),s=n(88),d=n.n(s),l=n(81),u=function(e){var a=e.showMoreDetailsButton,n=e.details,o=e.launchName,c=e.date_utc,s=(e.date_local,e.rocketName),u=e.launchSiteName,m=e.flightNumber,h=e.patchImg,p=e.success,f=e.failures,b=(e.launchId,new Date(c)),j=p?"SUCCESSFUL":"FAILURE";return b>new Date&&(j="NOT LAUNCHED YET"),Object(t.jsx)(i.b,{style:{cursor:a?"pointer":"default"},to:a?"/launch/".concat(m):null,children:Object(t.jsxs)("div",{className:d.a.LatestLaunch,children:[Object(t.jsxs)("div",{className:d.a.LeftContainer,children:[Object(t.jsx)("img",{src:h||l.a,alt:"mission patch"}),a?Object(t.jsx)(r.a,{name:"MORE DETAILS"}):null]}),Object(t.jsxs)("div",{className:d.a.RightContainer,children:[Object(t.jsxs)("div",{className:d.a.MainInfoContainer,children:[Object(t.jsx)("h2",{children:o}),Object(t.jsxs)("p",{children:[n," "]}),Object(t.jsxs)("h4",{className:d.a.LaunchNumber,children:["#",m]}),Object(t.jsxs)("div",{className:d.a.DetailsWrapper,children:[Object(t.jsxs)("div",{className:d.a.TitlesContainer,children:[Object(t.jsx)("h4",{children:"LAUNCH SITE:"}),Object(t.jsx)("h4",{children:"ROCKET:"}),Object(t.jsx)("h4",{children:"DATE:"}),Object(t.jsx)("h4",{children:"LAUNCH:"})]}),Object(t.jsxs)("div",{className:d.a.ValuesContainer,children:[Object(t.jsx)("h4",{children:u}),Object(t.jsx)("h4",{children:s}),Object(t.jsx)("h4",{children:b.toDateString()}),Object(t.jsx)("h4",{style:{color:p?"#4BB543":"#FA113D"},children:j})]})]})]}),!p&&f.length>0?Object(t.jsxs)("div",{className:d.a.FailureContainer,children:[Object(t.jsx)("h4",{children:"FAILURES:"}),Object(t.jsx)("ul",{children:f.map((function(e,a){return Object(t.jsx)("li",{children:e.reason},a)}))})]}):null]})]})})};a.a=c.a.memo(u)},88:function(e,a,n){e.exports={LatestLaunch:"LaunchExtendedInfo_LatestLaunch__jmLvg",LeftContainer:"LaunchExtendedInfo_LeftContainer__6bKsI",RightContainer:"LaunchExtendedInfo_RightContainer__2R_Gb",MainInfoContainer:"LaunchExtendedInfo_MainInfoContainer__3RVaY",LaunchNumber:"LaunchExtendedInfo_LaunchNumber__3RU74",DetailsWrapper:"LaunchExtendedInfo_DetailsWrapper__-95Tw",TitlesContainer:"LaunchExtendedInfo_TitlesContainer__37_Tr",ValuesContainer:"LaunchExtendedInfo_ValuesContainer__2XXCy",FailureContainer:"LaunchExtendedInfo_FailureContainer__1xbv9"}},97:function(e,a,n){"use strict";var t=n(3),o=n(0),c=n.n(o),i=n(19),r=n(86),s=n.n(r),d=[{name:"Afghanistan",code:"AF"},{name:"Albania",code:"AL"},{name:"Algeria",code:"DZ"},{name:"American Samoa",code:"AS"},{name:"Andorra",code:"AD"},{name:"Angola",code:"AO"},{name:"Anguilla",code:"AI"},{name:"Antarctica",code:"AQ"},{name:"Antigua and Barbuda",code:"AG"},{name:"Argentina",code:"AR"},{name:"Armenia",code:"AM"},{name:"Aruba",code:"AW"},{name:"Australia",code:"AU"},{name:"Austria",code:"AT"},{name:"Azerbaijan",code:"AZ"},{name:"Bahamas (the)",code:"BS"},{name:"Bahrain",code:"BH"},{name:"Bangladesh",code:"BD"},{name:"Barbados",code:"BB"},{name:"Belarus",code:"BY"},{name:"Belgium",code:"BE"},{name:"Belize",code:"BZ"},{name:"Benin",code:"BJ"},{name:"Bermuda",code:"BM"},{name:"Bhutan",code:"BT"},{name:"Bolivia (Plurinational State of)",code:"BO"},{name:"Bonaire, Sint Eustatius and Saba",code:"BQ"},{name:"Bosnia and Herzegovina",code:"BA"},{name:"Botswana",code:"BW"},{name:"Bouvet Island",code:"BV"},{name:"Brazil",code:"BR"},{name:"British Indian Ocean Territory (the)",code:"IO"},{name:"Brunei Darussalam",code:"BN"},{name:"Bulgaria",code:"BG"},{name:"Burkina Faso",code:"BF"},{name:"Burundi",code:"BI"},{name:"Cabo Verde",code:"CV"},{name:"Cambodia",code:"KH"},{name:"Cameroon",code:"CM"},{name:"Canada",code:"CA"},{name:"Cayman Islands (the)",code:"KY"},{name:"Central African Republic (the)",code:"CF"},{name:"Chad",code:"TD"},{name:"Chile",code:"CL"},{name:"China",code:"CN"},{name:"Christmas Island",code:"CX"},{name:"Cocos (Keeling) Islands (the)",code:"CC"},{name:"Colombia",code:"CO"},{name:"Comoros (the)",code:"KM"},{name:"Congo (the Democratic Republic of the)",code:"CD"},{name:"Congo (the)",code:"CG"},{name:"Cook Islands (the)",code:"CK"},{name:"Costa Rica",code:"CR"},{name:"Croatia",code:"HR"},{name:"Cuba",code:"CU"},{name:"Cura\xe7ao",code:"CW"},{name:"Cyprus",code:"CY"},{name:"Czechia",code:"CZ"},{name:"C\xf4te d'Ivoire",code:"CI"},{name:"Denmark",code:"DK"},{name:"Djibouti",code:"DJ"},{name:"Dominica",code:"DM"},{name:"Dominican Republic (the)",code:"DO"},{name:"Ecuador",code:"EC"},{name:"Egypt",code:"EG"},{name:"El Salvador",code:"SV"},{name:"Equatorial Guinea",code:"GQ"},{name:"Eritrea",code:"ER"},{name:"Estonia",code:"EE"},{name:"Eswatini",code:"SZ"},{name:"Ethiopia",code:"ET"},{name:"Falkland Islands (the) [Malvinas]",code:"FK"},{name:"Faroe Islands (the)",code:"FO"},{name:"Fiji",code:"FJ"},{name:"Finland",code:"FI"},{name:"France",code:"FR"},{name:"French Guiana",code:"GF"},{name:"French Polynesia",code:"PF"},{name:"French Southern Territories (the)",code:"TF"},{name:"Gabon",code:"GA"},{name:"Gambia (the)",code:"GM"},{name:"Georgia",code:"GE"},{name:"Germany",code:"DE"},{name:"Ghana",code:"GH"},{name:"Gibraltar",code:"GI"},{name:"Greece",code:"GR"},{name:"Greenland",code:"GL"},{name:"Grenada",code:"GD"},{name:"Guadeloupe",code:"GP"},{name:"Guam",code:"GU"},{name:"Guatemala",code:"GT"},{name:"Guernsey",code:"GG"},{name:"Guinea",code:"GN"},{name:"Guinea-Bissau",code:"GW"},{name:"Guyana",code:"GY"},{name:"Haiti",code:"HT"},{name:"Heard Island and McDonald Islands",code:"HM"},{name:"Holy See (the)",code:"VA"},{name:"Honduras",code:"HN"},{name:"Hong Kong",code:"HK"},{name:"Hungary",code:"HU"},{name:"Iceland",code:"IS"},{name:"India",code:"IN"},{name:"Indonesia",code:"ID"},{name:"Iran (Islamic Republic of)",code:"IR"},{name:"Iraq",code:"IQ"},{name:"Ireland",code:"IE"},{name:"Isle of Man",code:"IM"},{name:"Israel",code:"IL"},{name:"Italy",code:"IT"},{name:"Jamaica",code:"JM"},{name:"Japan",code:"JP"},{name:"Jersey",code:"JE"},{name:"Jordan",code:"JO"},{name:"Kazakhstan",code:"KZ"},{name:"Kenya",code:"KE"},{name:"Kiribati",code:"KI"},{name:"Korea (the Democratic People's Republic of)",code:"KP"},{name:"South Korea",code:"KR"},{name:"Kuwait",code:"KW"},{name:"Kyrgyzstan",code:"KG"},{name:"Lao People's Democratic Republic (the)",code:"LA"},{name:"Latvia",code:"LV"},{name:"Lebanon",code:"LB"},{name:"Lesotho",code:"LS"},{name:"Liberia",code:"LR"},{name:"Libya",code:"LY"},{name:"Liechtenstein",code:"LI"},{name:"Lithuania",code:"LT"},{name:"Luxembourg",code:"LU"},{name:"Macao",code:"MO"},{name:"Madagascar",code:"MG"},{name:"Malawi",code:"MW"},{name:"Malaysia",code:"MY"},{name:"Maldives",code:"MV"},{name:"Mali",code:"ML"},{name:"Malta",code:"MT"},{name:"Marshall Islands (the)",code:"MH"},{name:"Martinique",code:"MQ"},{name:"Mauritania",code:"MR"},{name:"Mauritius",code:"MU"},{name:"Mayotte",code:"YT"},{name:"Mexico",code:"MX"},{name:"Micronesia (Federated States of)",code:"FM"},{name:"Moldova (the Republic of)",code:"MD"},{name:"Monaco",code:"MC"},{name:"Mongolia",code:"MN"},{name:"Montenegro",code:"ME"},{name:"Montserrat",code:"MS"},{name:"Morocco",code:"MA"},{name:"Mozambique",code:"MZ"},{name:"Myanmar",code:"MM"},{name:"Namibia",code:"NA"},{name:"Nauru",code:"NR"},{name:"Nepal",code:"NP"},{name:"Netherlands (the)",code:"NL"},{name:"New Caledonia",code:"NC"},{name:"New Zealand",code:"NZ"},{name:"Nicaragua",code:"NI"},{name:"Niger (the)",code:"NE"},{name:"Nigeria",code:"NG"},{name:"Niue",code:"NU"},{name:"Norfolk Island",code:"NF"},{name:"Northern Mariana Islands (the)",code:"MP"},{name:"Norway",code:"NO"},{name:"Oman",code:"OM"},{name:"Pakistan",code:"PK"},{name:"Palau",code:"PW"},{name:"Palestine, State of",code:"PS"},{name:"Panama",code:"PA"},{name:"Papua New Guinea",code:"PG"},{name:"Paraguay",code:"PY"},{name:"Peru",code:"PE"},{name:"Philippines (the)",code:"PH"},{name:"Pitcairn",code:"PN"},{name:"Poland",code:"PL"},{name:"Portugal",code:"PT"},{name:"Puerto Rico",code:"PR"},{name:"Qatar",code:"QA"},{name:"Republic of North Macedonia",code:"MK"},{name:"Romania",code:"RO"},{name:"Russian Federation (the)",code:"RU"},{name:"Rwanda",code:"RW"},{name:"R\xe9union",code:"RE"},{name:"Saint Barth\xe9lemy",code:"BL"},{name:"Saint Helena, Ascension and Tristan da Cunha",code:"SH"},{name:"Saint Kitts and Nevis",code:"KN"},{name:"Saint Lucia",code:"LC"},{name:"Saint Martin (French part)",code:"MF"},{name:"Saint Pierre and Miquelon",code:"PM"},{name:"Saint Vincent and the Grenadines",code:"VC"},{name:"Saint Vincent and the Grenadines",code:"VC"},{name:"Samoa",code:"WS"},{name:"San Marino",code:"SM"},{name:"Sao Tome and Principe",code:"ST"},{name:"Saudi Arabia",code:"SA"},{name:"Senegal",code:"SN"},{name:"Serbia",code:"RS"},{name:"Seychelles",code:"SC"},{name:"Sierra Leone",code:"SL"},{name:"Singapore",code:"SG"},{name:"Sint Maarten (Dutch part)",code:"SX"},{name:"Slovakia",code:"SK"},{name:"Slovenia",code:"SI"},{name:"Solomon Islands",code:"SB"},{name:"Somalia",code:"SO"},{name:"South Africa",code:"ZA"},{name:"South Georgia and the South Sandwich Islands",code:"GS"},{name:"South Sudan",code:"SS"},{name:"Spain",code:"ES"},{name:"Sri Lanka",code:"LK"},{name:"Sudan (the)",code:"SD"},{name:"Suriname",code:"SR"},{name:"Svalbard and Jan Mayen",code:"SJ"},{name:"Sweden",code:"SE"},{name:"Switzerland",code:"CH"},{name:"Syrian Arab Republic",code:"SY"},{name:"Taiwan (Province of China)",code:"TW"},{name:"Tajikistan",code:"TJ"},{name:"Tanzania, United Republic of",code:"TZ"},{name:"Thailand",code:"TH"},{name:"Timor-Leste",code:"TL"},{name:"Togo",code:"TG"},{name:"Tokelau",code:"TK"},{name:"Tonga",code:"TO"},{name:"Trinidad and Tobago",code:"TT"},{name:"Tunisia",code:"TN"},{name:"Turkey",code:"TR"},{name:"Turkmenistan",code:"TM"},{name:"Turks and Caicos Islands (the)",code:"TC"},{name:"Tuvalu",code:"TV"},{name:"Uganda",code:"UG"},{name:"Ukraine",code:"UA"},{name:"United Arab Emirates (the)",code:"AE"},{name:"United Kingdom of Great Britain and Northern Ireland (the)",code:"GB"},{name:"United States Minor Outlying Islands (the)",code:"UM"},{name:"United States",code:"US"},{name:"Uruguay",code:"UY"},{name:"Uzbekistan",code:"UZ"},{name:"Vanuatu",code:"VU"},{name:"Venezuela (Bolivarian Republic of)",code:"VE"},{name:"Viet Nam",code:"VN"},{name:"Virgin Islands (British)",code:"VG"},{name:"Virgin Islands (U.S.)",code:"VI"},{name:"Wallis and Futuna",code:"WF"},{name:"Western Sahara",code:"EH"},{name:"Yemen",code:"YE"},{name:"Zambia",code:"ZM"},{name:"Zimbabwe",code:"ZW"},{name:"\xc5land Islands",code:"AX"}],l=function(e){var a=e.launchName,n=e.launchDateUtc,o=e.rocketName,c=e.launchSiteName,r=e.customer,l=e.flightNumber,u=e.success,m=function(e){var a;return null===(a=d.find((function(a){return a.name===e})))||void 0===a?void 0:a.code}(e.nationality),h=new Date(n);return Object(t.jsx)(i.b,{to:"/launch/".concat(l),children:Object(t.jsxs)("div",{className:s.a.Launch,children:[Object(t.jsxs)("div",{className:s.a.Top,children:[Object(t.jsxs)("div",{className:s.a.Name_Date,children:[Object(t.jsx)("h2",{children:a}),Object(t.jsx)("h4",{children:h.toDateString()})]}),Object(t.jsxs)("div",{className:s.a.Column,children:[Object(t.jsxs)("div",{className:s.a.Row,children:[Object(t.jsx)("h4",{children:"ROCKET: "}),Object(t.jsx)("h3",{children:o})]}),void 0!==u?Object(t.jsxs)("div",{className:s.a.Row,children:[Object(t.jsx)("h4",{children:"LAUNCH: "}),Object(t.jsx)("h3",{style:{color:u?"#4BB543":"#FA113D"},children:u?"SUCCESSFUL":"FAILURE"})]}):null]}),Object(t.jsxs)("h4",{className:s.a.LaunchNumber,children:["#",l]})]}),Object(t.jsxs)("div",{className:s.a.Content,children:[Object(t.jsxs)("div",{className:s.a.Content__Element,children:[Object(t.jsx)("h4",{className:s.a.Title,children:"LAUNCH SITE: "}),Object(t.jsx)("h4",{className:s.a.Title,children:"CUSTOMER: "})]}),Object(t.jsxs)("div",{className:s.a.Content__Element,children:[Object(t.jsx)("h4",{className:s.a.Value,children:c}),Object(t.jsx)("h4",{className:s.a.Value,children:r})]})]}),Object(t.jsx)("img",{className:s.a.Flag,src:"https://www.countryflags.io/".concat(m,"/flat/64.png"),alt:"flag"})]})})};a.a=c.a.memo(l)},98:function(e,a,n){"use strict";n.d(a,"a",(function(){return s}));var t=n(77),o=n.n(t),c=n(8),i={query:{upcoming:!0},options:{select:{name:1,date_local:1,date_utc:1,flight_number:1},sort:{flight_number:"asc"},populate:[{path:"launchpad",select:{name:1,full_name:1}},{path:"rocket",select:{name:1}},{path:"payloads",select:{customers:1,nationalities:1}}]}},r=n(26);var s=function(){return function(e,a){if(Object(c.checkCacheValid)(a,"upcomingLaunches"))return null;e({type:r.b}),o.a.post("https://api.spacexdata.com/v4/launches/query",i).then((function(a){var n;e((n=a.data,{type:r.c,payload:n}))})).catch((function(a){var n;e((n=a,{type:r.a,payload:n}))}))}}}}]);
//# sourceMappingURL=7.41b9e332.chunk.js.map
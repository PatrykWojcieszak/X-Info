(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[1],{26:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return r}));var a="FETCH_UPCOMING_LAUNCHES_START",c="FETCH_UPCOMING_LAUNCHES_SUCCESS",r="FETCH_UPCOMING_LAUNCHES_FAIL"},27:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return r}));var a="FETCH_NEXT_LAUNCH_START",c="FETCH_NEXT_LAUNCH_SUCCESS",r="FETCH_NEXT_LAUNCH_FAIL"},28:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return r}));var a="FETCH_RECENT_LAUNCHES_START",c="FETCH_RECENT_LAUNCHES_SUCCESS",r="FETCH_RECENT_LAUNCHES_FAIL"},29:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return r}));var a="FETCH_PAST_LAUNCHES_START",c="FETCH_PAST_LAUNCHES_SUCCESS",r="FETCH_PAST_LAUNCHES_FAIL"},30:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return r}));var a="FETCH_ROCKET_START",c="FETCH_ROCKET_SUCCESS",r="FETCH_ROCKET_FAIL"},31:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return r}));var a="FETCH_LAUNCH_START",c="FETCH_LAUNCH_SUCCESS",r="FETCH_LAUNCH_FAIL"},32:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return r}));var a="FETCH_LATEST_LAUNCH_START",c="FETCH_LATEST_LAUNCH_SUCCESS",r="FETCH_LATEST_LAUNCH_FAIL"},33:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return r}));var a="FETCH_STARLINK_START",c="FETCH_STARLINK_SUCCESS",r="FETCH_STARLINK_FAIL"},37:function(e,t,n){e.exports={NavElement:"NavElement_NavElement__2pEq4",NavElement__Active:"NavElement_NavElement__Active__3cuvv"}},47:function(e,t,n){e.exports={Nav:"Nav_Nav__3-IyI"}},48:function(e,t,n){e.exports={Footer:"Footer_Footer__31zqB"}},57:function(e,t,n){},62:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var a=n(3),c=n(0),r=n.n(c),o=n(24),i=n.n(o),u=(n(57),n(9)),s=n(42),l=n(19),d=n(37),g=n.n(d),b=function(e){var t=e.name,n=e.link,c=e.exact;return Object(a.jsx)(l.c,{to:n,exact:c,className:g.a.NavElement,activeClassName:g.a.NavElement__Active,children:t})},j=r.a.memo(b),h=n(47),f=n.n(h),O=function(){return Object(a.jsxs)("div",{className:f.a.Nav,children:[Object(a.jsx)(j,{name:"HOME",link:"/home",exact:!0}),Object(a.jsx)(j,{name:"LAUNCHES",link:"/launches/upcoming",exact:!0}),Object(a.jsx)(j,{name:"VEHICLES",link:"/vehicles",exact:!0}),Object(a.jsx)(j,{name:"STARLINK",link:"/starlink",exact:!0}),Object(a.jsx)(j,{name:"ABOUT",link:"/about",exact:!0})]})},_=n(48),E=n.n(_),v=function(){return Object(a.jsx)("div",{className:E.a.Footer,children:Object(a.jsxs)("h3",{children:["Created by:"," ",Object(a.jsxs)("a",{href:"https://github.com/PatrykWojcieszak",target:"_blank",rel:"noopener noreferrer",children:[" ","Patryk Wojcieszak"]})," ","using"," ",Object(a.jsx)("a",{href:"https://github.com/r-spacex/SpaceX-API",target:"_blank",rel:"noopener noreferrer",children:"Spacex-Api"})]})})},p=(n(62),r.a.lazy((function(){return Promise.all([n.e(0),n.e(12),n.e(6)]).then(n.bind(null,179))}))),C=r.a.lazy((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,180))})),T=r.a.lazy((function(){return n.e(10).then(n.bind(null,177))})),x=r.a.lazy((function(){return n.e(9).then(n.bind(null,183))})),L=r.a.lazy((function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,182))})),P=r.a.lazy((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,181))})),A=r.a.lazy((function(){return Promise.all([n.e(0),n.e(5),n.e(11)]).then(n.bind(null,184))}));var S,N=function(){var e=Object(u.g)(),t=Object(a.jsx)(s.a,{exitBeforeEnter:!0,children:Object(a.jsxs)(u.d,{location:e,children:[Object(a.jsx)(u.b,{path:"/home",exact:!0,render:function(){return Object(a.jsx)(p,{})}}),Object(a.jsx)(u.b,{path:"/launches/:launchType",exact:!0,render:function(){return Object(a.jsx)(C,{})}}),Object(a.jsx)(u.b,{path:"/launch/:flight_number",exact:!0,render:function(){return Object(a.jsx)(P,{})}}),Object(a.jsx)(u.b,{path:"/vehicles",exact:!0,render:function(){return Object(a.jsx)(x,{})}}),Object(a.jsx)(u.b,{path:"/vehicles/:vehicle",exact:!0,render:function(){return Object(a.jsx)(L,{})}}),Object(a.jsx)(u.b,{path:"/starlink",exact:!0,render:function(){return Object(a.jsx)(A,{})}}),Object(a.jsx)(u.b,{path:"/about",exact:!0,render:function(){return Object(a.jsx)(T,{})}}),Object(a.jsx)(u.a,{to:"/home"})]},e.pathname)});return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(O,{}),Object(a.jsx)(c.Suspense,{fallback:Object(a.jsx)("p",{children:"Loading..."}),children:t}),"/about"!==e.pathname?Object(a.jsx)(v,{}):null]})},m=function(e){e&&e instanceof Function&&n.e(13).then(n.bind(null,178)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),r(e),o(e)}))},F=n(43),H=n(8),U=n(50),y=n(16),k=n(5),I=n(15),D=function(e,t){return Object(I.a)(Object(I.a)({},e),t)},R=n(27),K=(S={},Object(k.a)(S,H.DEFAULT_KEY,null),Object(k.a)(S,"nextLaunch",{docs:[],totalDocs:0,offset:0,limit:0,totalPages:0,page:0,pagingCounter:0,hasPrevPage:!1,hasNextPage:!1,prevPage:0,nextPage:0}),Object(k.a)(S,"loading",!0),S);var w,z=n(28),Y=(w={},Object(k.a)(w,H.DEFAULT_KEY,null),Object(k.a)(w,"recentLaunches",{docs:[],totalDocs:0,offset:0,limit:0,totalPages:0,page:0,pagingCounter:0,hasPrevPage:!1,hasNextPage:!1,prevPage:0,nextPage:0}),Object(k.a)(w,"loading",!0),w);var B,M=n(26),X=(B={},Object(k.a)(B,H.DEFAULT_KEY,null),Object(k.a)(B,"upcomingLaunches",{docs:[],totalDocs:0,offset:0,limit:0,totalPages:0,page:0,pagingCounter:0,hasPrevPage:!1,hasNextPage:!1,prevPage:0,nextPage:0}),Object(k.a)(B,"loading",!0),B);var G,q=n(36),J=n(29),W=(G={},Object(k.a)(G,H.DEFAULT_KEY,null),Object(k.a)(G,"pastLaunches",{docs:[],totalDocs:0,offset:0,limit:0,totalPages:0,page:0,pagingCounter:0,hasPrevPage:!1,hasNextPage:!1,prevPage:0,nextPage:0}),Object(k.a)(G,"loading",!0),G);var V=n(30),Q={rocket:{docs:[],totalDocs:0,offset:0,limit:0,totalPages:0,page:0,pagingCounter:0,hasPrevPage:!1,hasNextPage:!1,prevPage:0,nextPage:0},loading:!0};var Z=n(31),$={launch:{docs:[],totalDocs:0,offset:0,limit:0,totalPages:0,page:0,pagingCounter:0,hasPrevPage:!1,hasNextPage:!1,prevPage:0,nextPage:0},loading:!0};var ee,te=n(32),ne={latestLaunch:(ee={},Object(k.a)(ee,H.DEFAULT_KEY,null),Object(k.a)(ee,"docs",[]),Object(k.a)(ee,"totalDocs",0),Object(k.a)(ee,"offset",0),Object(k.a)(ee,"limit",0),Object(k.a)(ee,"totalPages",0),Object(k.a)(ee,"page",0),Object(k.a)(ee,"pagingCounter",0),Object(k.a)(ee,"hasPrevPage",!1),Object(k.a)(ee,"hasNextPage",!1),Object(k.a)(ee,"prevPage",0),Object(k.a)(ee,"nextPage",0),ee),loading:!0};var ae=n(33),ce={starlinks:{docs:[],totalDocs:0,offset:0,limit:0,totalPages:0,page:0,pagingCounter:0,hasPrevPage:!1,hasNextPage:!1,prevPage:0,nextPage:0},loading:!0};var re=Object(y.c)({nextLaunch:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R.b:return D(e,{loading:!0});case R.c:return D(e,Object(k.a)({nextLaunch:t.payload,loading:!1},H.DEFAULT_KEY,Object(H.generateCacheTTL)()));case R.a:return D(e,{loading:!1});default:return e}},recentLaunches:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case z.b:return D(e,{loading:!0});case z.c:return D(e,Object(k.a)({recentLaunches:t.payload,loading:!1},H.DEFAULT_KEY,Object(H.generateCacheTTL)()));case z.a:return D(e,{loading:!1});default:return e}},upcomingLaunches:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M.b:return D(e,{loading:!0});case M.c:return D(e,Object(k.a)({upcomingLaunches:t.payload,loading:!1},H.DEFAULT_KEY,Object(H.generateCacheTTL)()));case M.a:return D(e,{loading:!1});default:return e}},pastLaunches:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case J.b:return D(e,{loading:!0});case J.c:var n;return Object(I.a)(Object(I.a)({},e),{},(n={},Object(k.a)(n,H.DEFAULT_KEY,Object(H.generateCacheTTL)()),Object(k.a)(n,"pastLaunches",Object(I.a)(Object(I.a)(Object(I.a)({},e.pastLaunches),t.payload),{},{docs:[].concat(Object(q.a)(e.pastLaunches.docs),Object(q.a)(t.payload.docs))})),Object(k.a)(n,"loading",!1),n));case J.a:return D(e,{loading:!1});default:return e}},rocket:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case V.b:return D(e,{loading:!0});case V.c:return D(e,{rocket:t.payload,loading:!1});case V.a:return D(e,{loading:!1});default:return e}},launch:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Z.b:return D(e,{loading:!0});case Z.c:return D(e,{launch:t.payload,loading:!1});case Z.a:return D(e,{loading:!1});default:return e}},latestLaunch:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case te.b:return D(e,{loading:!0});case te.c:return D(e,Object(k.a)({latestLaunch:t.payload,loading:!1},H.DEFAULT_KEY,Object(H.generateCacheTTL)()));case te.a:return D(e,{loading:!1});default:return e}},starlink:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ae.b:return D(e,{loading:!0});case ae.c:return D(e,{starlinks:t.payload,loading:!1});case ae.a:return D(e,{loading:!1});default:return e}}}),oe=[U.a],ie=y.d,ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(y.e)(re,e,ie(y.a.apply(void 0,oe),Object(H.cacheEnhancer)({log:!0})))},se=n(44),le=n(17),de=n(41);se.b.add(le.a,le.d,le.g,le.b,le.c,de.b,de.a,le.e,le.f);var ge=ue();i.a.render(Object(a.jsx)(F.a,{store:ge,children:Object(a.jsx)(l.a,{children:Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(N,{})})})}),document.getElementById("root")),m()}},[[69,2,3]]]);
//# sourceMappingURL=main.36db2e78.chunk.js.map
(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[11],{173:function(t,n,i){t.exports={Starlink:"Starlink_Starlink__3XQrk",StarlinkInfo:"Starlink_StarlinkInfo__pjfNh"}},184:function(t,n,i){"use strict";i.r(n);var e=i(3),a=i(0),r=i(155),o=i(174),c=i(43),s=i(173),u=i.n(s),l=i(42),p=i(72),d=i(77),h=i.n(d),y={query:{longitude:{$ne:null}},options:{pagination:!1}},f=i(33);var b=function(){return function(t){t({type:f.b}),h.a.post("https://api.spacexdata.com/v4/starlink/query",y).then((function(n){var i;t((i=n.data,{type:f.c,payload:i}))})).catch((function(n){var i;t((i=n,{type:f.a,payload:i}))}))}};n.default=Object(c.b)((function(t){return{starlinks:t.starlink.starlinks}}),(function(t){return{onFetchStarlink:function(){return t(b())}}}))((function(t){var n=t.onFetchStarlink,i=t.starlinks;Object(a.useEffect)((function(){var t=setInterval((function(){n()}),3e3);return function(){clearInterval(t)}}),[]);var c=[];i&&i.docs.map((function(t){var n=(null===t||void 0===t?void 0:t.spaceTrack.TLE_LINE0.substring(2,null===t||void 0===t?void 0:t.spaceTrack.TLE_LINE0.length))+" \n"+(null===t||void 0===t?void 0:t.spaceTrack.TLE_LINE1)+"\n"+(null===t||void 0===t?void 0:t.spaceTrack.TLE_LINE2),i=Object(r.getLatLngObj)(n);c.push({lat:i.lat,lng:i.lng,alt:.9,radius:.01,color:"white"})}));var s=Object(e.jsx)(e.Fragment,{});return c&&(s=Object(e.jsx)(o.a,{globeImageUrl:"//unpkg.com/three-globe/example/img/earth-night.jpg",pointsData:c,pointAltitude:.001,pointColor:"color"})),Object(e.jsxs)(l.b.div,{initial:"initial",animate:"in",exit:"out",variants:p.e,className:u.a.Starlink,children:[Object(e.jsxs)("div",{className:u.a.StarlinkInfo,children:[Object(e.jsx)("h2",{children:"STARLINK"}),Object(e.jsxs)("h3",{children:[Object(e.jsx)("b",{children:"Starlink"})," is a satellite internet constellation being constructed by"," ",Object(e.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"www.spacex.com",children:"SpaceX"})," ","providing satellite Internet access."]}),Object(e.jsxs)("h4",{children:["Starlinks on the orbit: ",t.starlinks.docs.length]})]}),s]})}))},72:function(t,n,i){"use strict";i.d(n,"e",(function(){return e})),i.d(n,"b",(function(){return a})),i.d(n,"f",(function(){return r})),i.d(n,"g",(function(){return o})),i.d(n,"a",(function(){return c})),i.d(n,"c",(function(){return s})),i.d(n,"d",(function(){return u}));var e={initial:{opacity:0},in:{transition:{duration:1,ease:"easeOut"},opacity:1,staggerChildren:1},out:{opacity:0,transition:{duration:.25,ease:"easeOut"}}},a={hidden:{opacity:0,y:100},show:{opacity:1,y:0,transition:{duration:1.25}},exit:{opacity:0,y:100,transition:{duration:.75,ease:"easeOut"}}},r={hidden:{opacity:0,x:100},show:{opacity:1,x:0,transition:{duration:.5,type:"tween"}},exit:{opacity:0,x:-100}},o={initial:{opacity:0,y:100},in:{transition:{duration:1,ease:"easeOut"},opacity:1,y:0,staggerChildren:1},out:{y:100,opacity:0,transition:{duration:.4,ease:"easeOut"}}},c={enter:function(t){return{x:t>0?1e3:-1e3,opacity:0}},center:{zIndex:1,x:0,opacity:1},exit:function(t){return{zIndex:0,x:t<0?1e3:-1e3,opacity:0}}},s={hidden:{opacity:0},show:{opacity:1,transition:{duration:.8}}},u={initial:{opacity:0},in:{transition:{duration:1,ease:"easeOut"},opacity:1}}}}]);
//# sourceMappingURL=11.2113de17.chunk.js.map
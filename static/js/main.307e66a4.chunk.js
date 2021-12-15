(this.webpackJsonpmap=this.webpackJsonpmap||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(4),l=n.n(c),o=(n(17),n(11)),i=n(3),s=(n(18),n(2)),d=n(6),u=n(1),b="col-3 text-start px-0",j=function(e){var t=e.placemark,n=e.deletePointHandler,r=e.index;return Object(u.jsx)(d.b,{draggableId:t.id,index:r,children:function(e){return Object(u.jsx)("div",Object(s.a)(Object(s.a)(Object(s.a)({ref:e.innerRef},e.draggableProps),e.dragHandleProps),{},{children:Object(u.jsxs)("li",{className:"row w-100 mt-1 align-items-center",children:[Object(u.jsxs)("h5",{className:"col-3 text-start px-3",children:["Point #",t.id.replace(/id/,"")]}),Object(u.jsxs)("h6",{className:b,children:["Latitude: ",t.lat.toFixed(4)]}),Object(u.jsxs)("h6",{className:b,children:["Longitude: ",t.lon.toFixed(4)]}),Object(u.jsx)("button",{className:"btn btn-outline-danger btn-sm col-3",onClick:function(){return n(t)},children:"DELETE"})]})}))}},t.id)},m=function(e){var t=e.handleDrag,n=e.placemarks,r=e.deletePointHandler;return Object(u.jsx)(d.a,{onDragEnd:t,children:Object(u.jsx)(d.c,{droppableId:"placemarks",children:function(e){return Object(u.jsx)("div",Object(s.a)(Object(s.a)({},e.droppableProps),{},{ref:e.innerRef,children:Object(u.jsxs)("ul",{className:"list-unstyled align-self-start px-2 w-100",children:[n.map((function(e,t){return Object(u.jsx)(j,{index:t,placemark:e,deletePointHandler:r},e.id)})),e.placeholder]})}))}})})},p=n(7),h=function(e){var t=e.placemarks,n=e.pathDots,r=e.currentPlacemark,a=e.handlePlacemarkDrag;return Object(u.jsx)(p.d,{children:Object(u.jsx)(p.a,{className:"\nmap-container w-100 h-50 align-self-center\n",state:{center:[r.lat,r.lon],zoom:9},children:t&&t.map((function(e){return Object(u.jsxs)("div",{children:[Object(u.jsx)(p.b,{modules:["geoObject.addon.balloon"],geometry:[e.lat,e.lon],properties:{balloonContent:"Latitude: ".concat(e.lat.toFixed(4),"\n\t\t\t\t\t\t\t\t\t\tLongitude: ").concat(e.lon.toFixed(4)),iconContent:"".concat(e.id.replace(/id/,""))},options:{draggable:!0,hasBalloon:!0,hideIconOnBalloonOpen:!1,openBalloonOnClick:!0},onDragEnd:function(t){return a(t,e)}}),n.length>1&&Object(u.jsx)(p.c,{geometry:n,options:{balloonCloseButton:!1,strokeColor:"#000",strokeWidth:4,strokeOpacity:.5}})]},e.id)}))})})},f=function(){return Object(u.jsx)("div",{className:"\nh-5 text-danger position-relative align-self-center border border-2 border-danger",children:"Enter numbers please"})},x=function(e){var t=e.handleFormSubmit,n=Object(r.useRef)(null),a=Object(r.useState)(!0),c=Object(i.a)(a,2),l=c[0],o=c[1],s="";return Object(u.jsx)("form",{action:"",onSubmit:function(e){return t(e,n,s)},children:Object(u.jsxs)("div",{className:"mb-3 p-2",children:[Object(u.jsx)("label",{htmlFor:"coordinatesInput",className:"form-label",children:Object(u.jsx)("h2",{children:"Enter points:"})}),l?"":Object(u.jsx)(f,{}),Object(u.jsx)("input",{ref:n,type:"text",className:"form-control",id:"coordinatesInput",placeholder:"enter coordinates here (latitude and longitude)",autoComplete:"off",onChange:function(){return function(e){if(n.current){var t=n.current.value;if(isNaN(Number(t.replace(/\s/gi,""))))return e(!1),void(n.current.value="");e(!0),s=t}}(o)}})]})})};var O=function(){var e=Object(r.useState)([]),t=Object(i.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)([]),l=Object(i.a)(c,2),s=l[0],d=l[1],b=Object(r.useState)({id:"id0",lat:53.2038,lon:50.1606}),j=Object(i.a)(b,2),p=j[0],f=j[1];return Object(u.jsxs)("div",{className:"App container-sm d-flex p-2 flex-column vh-100 vw-100 justify-content-center",children:[Object(u.jsx)("h2",{className:"text-center text-white bg-primary bg-gradient border border-0 rounded w-30 p-2 align-self-center position-absolute",style:{zIndex:"3",top:"8px"},children:"Routes Editor"}),Object(u.jsx)(h,{placemarks:n,pathDots:s,currentPlacemark:p,handlePlacemarkDrag:function(e,t){var r=Object(i.a)(e.originalEvent.target.geometry._coordinates,2),c=r[0],l=r[1],o=Array.from(n),s={id:t.id,lat:c,lon:l},u=Number(t.id.replace(/id/,""));o.splice(u,1,s),a(o),d(o.map((function(e){return[e.lat,e.lon]}))),f(s)}}),Object(u.jsxs)("div",{className:"border border-2 rounded w-100 h-50 mt-1 d-flex flex-column",children:[Object(u.jsx)(x,{handleFormSubmit:function(e,t,r){if(e.preventDefault(),t.current&&r){var c=r.split(" ").splice(0,2);if(c[0]&&c[1]){var l=Number(c[0]),i=Number(c[1]),u={id:"id"+n.length,lat:l,lon:i};a([].concat(Object(o.a)(n),[u])),d([].concat(Object(o.a)(s),[[l,i]])),f(u)}t.current.value=""}}}),Object(u.jsx)("hr",{className:"w-75 align-self-center mt-0 mb-2 text-gray",style:{height:"2px"}}),n&&Object(u.jsx)(m,{handleDrag:function(e){if(e.destination){var t=Array.from(n),r=t.splice(e.source.index,1),c=Object(i.a)(r,1)[0];t.splice(e.destination.index,0,c),a(t),d(t.map((function(e){return[e.lat,e.lon]})))}},placemarks:n,deletePointHandler:function(e){var t=n.filter((function(t){return t.id!==e.id}));a(t),d(t.map((function(e){return[e.lat,e.lon]}))),f(n[n.length-1])}})]})]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,28)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,l=t.getTTFB;n(e),r(e),a(e),c(e),l(e)}))};l.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(O,{})}),document.getElementById("root")),g()}},[[27,1,2]]]);
//# sourceMappingURL=main.307e66a4.chunk.js.map
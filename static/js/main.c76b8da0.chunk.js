(this.webpackJsonpfinal=this.webpackJsonpfinal||[]).push([[0],{15:function(t,e,c){},16:function(t,e,c){"use strict";c.r(e);var n=c(0),s=c(1),i=c.n(s),a=c(2),j=c.n(a),r=(c(15),c(4),c(7)),u=function(t){var e=t.src;return Object(n.jsx)("img",{src:e,alt:"image",class:"pic"})},o=c.p+"static/media/i1.acca3401.png",d=c.p+"static/media/i2.d24bc5e9.jpg",l=c.p+"static/media/i3.5ad544d8.jpg",b=c.p+"static/media/i4.64761ff7.jpg",O=c.p+"static/media/i5.8445a2eb.jpg",h=c.p+"static/media/i6.2832b769.jpg",x=function(){var t=[Object(n.jsx)(u,{src:o}),Object(n.jsx)(u,{src:d}),Object(n.jsx)(u,{src:l}),Object(n.jsx)(u,{src:b}),Object(n.jsx)(u,{src:O}),Object(n.jsx)(u,{src:h})],e=Object(s.useState)(0),c=Object(r.a)(e,2),i=c[0],a=c[1];return Object(n.jsxs)("div",{className:"imgcarrousel",children:[t.map((function(t,e){return Object(n.jsx)("div",{className:"img",style:{transform:"translateX(".concat(i,"%)")},children:t},e)})),Object(n.jsx)("button",{id:"prev_Button",onClick:function(){a(0===i?-100*(t.length-1):i+100)},children:"Previous"}),Object(n.jsx)("button",{id:"next_Button",onClick:function(){i===-100*(t.length-1)?a(0):a(i-100)},children:"Next"})]})},p=c(5),f=c(6),v=c(9),g=c(8),m=[],C=[],k=function(t){return Object(n.jsxs)("h3",{children:["\u10de\u10dd\u10e1\u10e2\u10d8 - ",t.header]})},S=function(t){return Object(n.jsxs)("p",{children:[t.text," \u10de\u10dd\u10e1\u10e2\u10d8\u10e1 \u10d0\u10e6\u10ec\u10d4\u10e0\u10d0"]})},y=function(){return Object(n.jsxs)(s.Fragment,{children:[Object(n.jsxs)("div",{children:[m[1],C[1]]}),Object(n.jsxs)("div",{children:[m[2],C[2]]}),Object(n.jsxs)("div",{children:[m[3],C[3]]}),Object(n.jsxs)("div",{children:[m[4],C[4]]}),Object(n.jsxs)("div",{children:[m[5],C[5]]}),Object(n.jsxs)("div",{children:[m[6],C[6]]}),Object(n.jsxs)("div",{children:[m[7],C[7]]}),Object(n.jsxs)("div",{children:[m[8],C[8]]}),Object(n.jsxs)("div",{children:[m[9],C[9]]}),Object(n.jsxs)("div",{children:[m[10],C[10]]})]})},F=function(t){Object(v.a)(c,t);var e=Object(g.a)(c);function c(t){var s;return Object(p.a)(this,c),(s=e.call(this,t)).handlePlusClick=function(){"string"===typeof s.state.count?s.setState({count:0}):(s.setState({count:s.state.count+1}),m.push(Object(n.jsx)(k,{header:s.state.count})),C.push(Object(n.jsx)(S,{text:s.state.count})),10===s.state.count&&s.setState({count:0}))},s.handleMinusClick=function(){if("string"===typeof s.state.count)s.setState({count:0});else{s.setState({count:s.state.count-1});var t=m.indexOf(s.state.count);m.splice(t,1);var e=C.indexOf(s.state.count);C.splice(e,1),-10===s.state.count&&s.setState({count:0})}},s.state={count:"\u10d3\u10d0\u10d0\u10ed\u10d8\u10e0\u10d4\u10d7 - \u10d0\u10dc + ",arr:[]},s}return Object(f.a)(c,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("button",{onClick:this.handleMinusClick,children:"-"}),Object(n.jsx)("input",{type:"text",value:this.state.count}),Object(n.jsx)("button",{onClick:this.handlePlusClick,children:"+"}),Object(n.jsx)(y,{})]})}}]),c}(i.a.Component);var P=function(){return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(F,{}),Object(n.jsx)(x,{})]})},B=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(e){var c=e.getCLS,n=e.getFID,s=e.getFCP,i=e.getLCP,a=e.getTTFB;c(t),n(t),s(t),i(t),a(t)}))};j.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(P,{})}),document.getElementById("root")),B()},4:function(t,e,c){}},[[16,1,2]]]);
//# sourceMappingURL=main.c76b8da0.chunk.js.map
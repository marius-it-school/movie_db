(this.webpackJsonpmovie_db=this.webpackJsonpmovie_db||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(7),o=n.n(i),r=(n(12),n(6)),s=n(2),u=(n(13),n(14),n(0));var j=function(e){var t=e.movie;return Object(u.jsxs)("div",{className:"movie-card",children:[Object(u.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(t.poster),alt:t.title}),Object(u.jsx)("h2",{children:t.title}),Object(u.jsxs)("h3",{children:["Vote: ",t.vote]})]})};n(16);var v=function(e){var t=e.movies;return Object(u.jsx)("div",{className:"movie-list",children:t.map((function(e){return Object(u.jsx)(j,{movie:e},e.id)}))})};n(17);var d=function(){return Object(u.jsx)("div",{className:"loading",children:"Loading..."})};n(18);var l=function(e){var t=e.handleSearch,n=e.handleReset,a=Object(c.useState)(""),i=Object(s.a)(a,2),o=i[0],r=i[1];return Object(u.jsxs)("span",{children:[Object(u.jsx)("input",{className:"search-input",type:"text",value:o,onChange:function(e){r(e.target.value)},onKeyDown:function(e){o&&"Enter"===e.key&&t(o)},placeholder:"Type a movie name..."}),Object(u.jsx)("span",{className:"reset-btn",onClick:function(){r(""),n()},children:"RESET"})]})},h="90db55b9dcc02761d6a6051a96002649";var b=function(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(!1),o=Object(s.a)(i,2),j=o[0],b=o[1],f=Object(c.useState)(1),p=Object(s.a)(f,2),m=p[0],O=p[1],x=Object(c.useState)(!1),g=Object(s.a)(x,2),S=g[0],w=g[1];function y(){b(!0);fetch("".concat("https://api.themoviedb.org/3/movie/587807/recommendations","?page=").concat(m,"&api_key=").concat(h)).then((function(e){return e.json()})).then((function(e){var t=e.results.map((function(e){return{id:e.id,title:e.title,overview:e.overview,vote:e.vote_average,poster:e.poster_path}}));b(!1),a((function(e){return[].concat(Object(r.a)(e),Object(r.a)(t))}))}))}return Object(c.useEffect)((function(){j||S||y()}),[m]),Object(c.useEffect)((function(){1===m&&document.addEventListener("scroll",(function(e){var t=e.target.documentElement;t.scrollTop+t.clientHeight===t.scrollHeight&&O((function(e){return e+1}))}))}),[m]),Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("header",{className:"App-header",children:Object(u.jsx)(l,{handleSearch:function(e){a([]),w(!0),b(!0),fetch("".concat("https://api.themoviedb.org/3/search/movie","?query=").concat(e,"&api_key=").concat(h)).then((function(e){return e.json()})).then((function(e){var t=e.results.map((function(e){return{id:e.id,title:e.title,overview:e.overview,vote:e.vote_average,poster:e.poster_path}}));b(!1),a(t)}))},handleReset:function(){a([]),w(!1),1===m?y():O(1)}})}),Object(u.jsxs)("main",{children:[Object(u.jsx)(v,{movies:n}),j&&Object(u.jsx)(d,{})]})]})};o.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(b,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.3747bfde.chunk.js.map
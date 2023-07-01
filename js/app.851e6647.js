(function(){"use strict";var t={8336:function(t,a,e){var r=e(6369),s=function(){var t=this,a=t._self._c;return a("div",{staticClass:"center",attrs:{id:"app"}},[a("Header"),a("ProductDetails"),a("Footer")],1)},n=[],i=function(){var t=this;t._self._c;return t._m(0)},o=[function(){var t=this,a=t._self._c;return a("div",[a("header",{staticClass:"header center"},[a("div",{staticClass:"header__left"},[a("a",{attrs:{href:"index.html"}},[a("img",{attrs:{src:e(6949),alt:"logo"}})]),a("a",{staticClass:"header__left_heading",attrs:{href:"index.html"}},[t._v("Interno")])]),a("nav",{staticClass:"header__right"},[a("a",{staticClass:"header__link-site",attrs:{href:"index.html"}},[t._v("Home")]),a("a",{staticClass:"header__link-site",attrs:{href:"project.html"}},[t._v("Project")]),a("a",{staticClass:"header__link-site",attrs:{href:"blog.html"}},[t._v("Blog")])])])])}],l={name:"Header",data(){return{}},methods:{}},c=l,u=e(1001),d=(0,u.Z)(c,i,o,!1,null,"2b38719a",null),f=d.exports,_=function(){var t=this;t._self._c;return t._m(0)},v=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"advantages center"},[a("article",{staticClass:"advantages__item_1"},[a("div",{staticClass:"advantages__logo"},[a("a",{attrs:{href:"index.html"}},[a("img",{attrs:{src:e(6949),alt:"logo"}})]),a("a",{staticClass:"advantages_heading",attrs:{href:"index.html"}},[t._v("Interno")])]),a("div",{staticClass:"advantages__text"},[t._v(" It is a long established fact that a reader will be distracted lookings. ")])]),a("article",{staticClass:"advantages__item_2"},[a("p",{staticClass:"advantages_heading_small"},[t._v("Pages")]),a("a",{staticClass:"advantages__text",attrs:{href:"index.html"}},[t._v("Home")]),a("a",{staticClass:"advantages__text",attrs:{href:"project.html"}},[t._v("Project")]),a("a",{staticClass:"advantages__text",attrs:{href:"blog.html"}},[t._v("Blog")])]),a("article",{staticClass:"advantages__item_3"},[a("p",{staticClass:"advantages_heading_small"},[t._v("Contact")]),a("p",{staticClass:"advantages__text"},[t._v("55 East Birchwood Ave. Brooklyn, New York 11201")]),a("p",{staticClass:"advantages__text"},[t._v("contact@interno.com")]),a("p",{staticClass:"advantages__text"},[t._v("(123) 456 - 7890")])])])}],h={name:"Footer",data(){return{logoUrl:"./assets/logo.png"}},methods:{}},p=h,g=(0,u.Z)(p,_,v,!1,null,"2fab01ff",null),A=g.exports,m=function(){var t=this,a=t._self._c;return a("div",{staticClass:"product_box"},[a("h1",[t._v(t._s(t.product.name))]),a("img",{attrs:{src:e(697),width:"200px"}}),a("p",[t._v(t._s(t.formattedPrice))]),a("p",[t._v(t._s(t.isAvailable()))])])},C=[],b={name:"ProductDetails",data(){return{product:{name:"Product 1",price:"99.99",imgUrl:"",available:0}}},computed:{formattedPrice(){let t=`$${this.product.price}`;return t}},methods:{isAvailable(){return this.product.available>0?"Available":"Out of stock"}}},x=b,w=(0,u.Z)(x,m,C,!1,null,"7fc663ea",null),y=w.exports,B={name:"App",components:{Header:f,ProductDetails:y,Footer:A}},D=B,P=(0,u.Z)(D,s,n,!1,null,null,null),j=P.exports;r.ZP.config.productionTip=!1,new r.ZP({render:t=>t(j)}).$mount("#app")},6949:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAiCAYAAADVhWD8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGySURBVHgBzZdNTsJAFMf/M/Pc4w3wBDZBF67oDbgBHyewEvbENRHwBDV6AI/AXkPwCByBPTDPmWqaoCX0c+gv6aZdzC9v3kefgCNWYdDYgTwoeBJ8LYT0mNEA2DxoaMYjoUI+w5FPhDYDvjnMl/EXATYmfyldJoqAor4S6JjzrERqSpOxEiC6N4cHJgINziBRqszqbTS2EohyID+FZGxOKBIzzeyhBCRyYqMhFRZckoglc2RsbjDRu60OlEwmGSPS1OpiYeqyiQpIfU2xCKoRSS3jQiSVjCuRkzI2WV2JnJSBorErEctRmeXrsK9huqpDEmVsnpiwjOGYRBmtlNPrwTGZjzAw7V30cQb+yRDRDGfiQMZOYa5g5qTlQEYRciatWJt5tUFBYhlbQVmjwiye5X532epOrlq9p0sN/VBEKp7ae6kCgfRYkZve5KAP3Xan82U43ECJEDmII2NWhw4ysNXbedL71mD6kjc6kcxPOWfrK3eD+frYNyHFF/LKCJCPGhDJSMVt1IDfnJGl/VQXQUbL1xnmUBIyWsZrghTEhbbAMpGCZX1kNNcjXyy519sq+AZAyZ7tfirtGAAAAABJRU5ErkJggg=="},697:function(t,a,e){t.exports=e.p+"img/product1.5cec05c6.png"}},a={};function e(r){var s=a[r];if(void 0!==s)return s.exports;var n=a[r]={exports:{}};return t[r].call(n.exports,n,n.exports,e),n.exports}e.m=t,function(){var t=[];e.O=function(a,r,s,n){if(!r){var i=1/0;for(u=0;u<t.length;u++){r=t[u][0],s=t[u][1],n=t[u][2];for(var o=!0,l=0;l<r.length;l++)(!1&n||i>=n)&&Object.keys(e.O).every((function(t){return e.O[t](r[l])}))?r.splice(l--,1):(o=!1,n<i&&(i=n));if(o){t.splice(u--,1);var c=s();void 0!==c&&(a=c)}}return a}n=n||0;for(var u=t.length;u>0&&t[u-1][2]>n;u--)t[u]=t[u-1];t[u]=[r,s,n]}}(),function(){e.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(a,{a:a}),a}}(),function(){e.d=function(t,a){for(var r in a)e.o(a,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:a[r]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)}}(),function(){e.p="/vue-html/"}(),function(){var t={143:0};e.O.j=function(a){return 0===t[a]};var a=function(a,r){var s,n,i=r[0],o=r[1],l=r[2],c=0;if(i.some((function(a){return 0!==t[a]}))){for(s in o)e.o(o,s)&&(e.m[s]=o[s]);if(l)var u=l(e)}for(a&&a(r);c<i.length;c++)n=i[c],e.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return e.O(u)},r=self["webpackChunkvue_html"]=self["webpackChunkvue_html"]||[];r.forEach(a.bind(null,0)),r.push=a.bind(null,r.push.bind(r))}();var r=e.O(void 0,[998],(function(){return e(8336)}));r=e.O(r)})();
//# sourceMappingURL=app.851e6647.js.map
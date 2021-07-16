(function(e){function t(t){for(var i,n,r=t[0],d=t[1],l=t[2],c=0,u=[];c<r.length;c++)n=r[c],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&u.push(o[n][0]),o[n]=0;for(i in d)Object.prototype.hasOwnProperty.call(d,i)&&(e[i]=d[i]);h&&h(t);while(u.length)u.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],i=!0,r=1;r<a.length;r++){var d=a[r];0!==o[d]&&(i=!1)}i&&(s.splice(t--,1),e=n(n.s=a[0]))}return e}var i={},o={app:0},s=[];function n(t){if(i[t])return i[t].exports;var a=i[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=i,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(a,i,function(t){return e[t]}.bind(null,i));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],d=r.push.bind(r);r.push=t,r=r.slice();for(var l=0;l<r.length;l++)t(r[l]);var h=d;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";a("85ec")},"0b1e":function(e,t,a){"use strict";a("6a3e")},2124:function(e,t,a){e.exports=a.p+"img/cp1.2e91b345.png"},2916:function(e,t,a){},"2db4":function(e,t,a){e.exports=a.p+"img/cp3.264c2f9c.png"},"2e1a":function(e,t,a){},"3b2a":function(e,t,a){},"4bed":function(e,t,a){e.exports=a.p+"img/cp2.0553b5da.jpeg"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("v-app",[a("ReactionBasic")],1)],1)},s=[],n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("v-parallax",{attrs:{src:"https://imagens.usp.br/wp-content/uploads/Pra%C3%A7a_Rel%C3%B3gio_273-19_Foto-Cec%C3%ADlia-Bastos-05.jpg"}},[i("v-layout",{attrs:{"white--text":"","align-center":"",column:"","justify-center":""}},[i("img",{attrs:{src:a("e700"),height:"350"}}),i("h3",{staticClass:" display-3 ma-2 text-xs-center"},[e._v("Projeto de PEF3208")]),i("h2",{staticClass:"subheading"},[e._v("Simulação 2D - Grupo 6")])])],1),i("h1",[e._v("Membros do grupo")]),i("v-container",{staticClass:"lighten-5"},[i("v-row",{attrs:{"no-gutters":""}},[e._l(e.membros,(function(t,a){return[i("v-col",{key:a},[i("v-card",{staticClass:"card-member"},[i("img",{staticStyle:{width:"150px","border-radius":"50%","margin-top":"5%"},attrs:{src:t.img}}),i("h2",{staticClass:"name-member"},[e._v(e._s(t.name))])])],1),2===a?i("v-responsive",{key:"width-"+t,attrs:{width:"100%"}}):e._e()]}))],2)],1),i("h1",[e._v("Sobre nosso projeto")]),i("p",{staticStyle:{"padding-left":"50px","padding-right":"50px"}},[e._v(" O objetivo deste projeto é, por meio de técnicas de programação, criar simulações dinâmicas e precisas de exercicios da lista P1A. No projeto utilizamos Javascript como nossa linguagem base, Vue.js como framework para criacao de interfaces, Matter.js como biblioteca para simulaçäo de física e LaTeX para renderizar equações. ")]),i("h1",{attrs:{id:"estrutura-simulada"}},[e._v("Estruturas simuladas")]),i("v-row",{attrs:{dense:""}},[e._l(e.simulations,(function(t){return i("v-col",{key:t.ex},[i("v-card",{staticClass:"mx-auto card-simulation"},[i("v-card-text",[i("div",[e._v("Simulação")]),i("p",{staticClass:"display-1 text--primary"},[e._v(e._s(t.name))]),i("div",{staticClass:"text--primary"},[e._v(" Referente ao exercicio "+e._s(t.ex)+" da lista P1A ")])]),i("v-card-actions",[i("v-btn",{staticStyle:{color:"rgba(0, 76, 165)"},attrs:{text:""},on:{click:function(a){a.stopPropagation(),t.dialog=!0,e.renderKey++}}},[e._v(" Abrir ")])],1)],1)],1)})),e._l(e.simulations,(function(t){return i("v-dialog",{key:t.ex+"dialog",attrs:{width:"90vw"},model:{value:t.dialog,callback:function(a){e.$set(t,"dialog",a)},expression:"s.dialog"}},[1===t.ex?i("ReactionP1A1",{key:e.renderKey+"p1a1"}):e._e(),2===t.ex?i("ReactionP1A2",{key:e.renderKey+"p1a2"}):e._e(),3===t.ex?i("ReactionP1A3",{key:e.renderKey+"p1a3"}):e._e(),4===t.ex?i("ReactionP1A4",{key:e.renderKey+"p1a4"}):e._e(),5===t.ex?i("ReactionP1A5",{key:e.renderKey+"p1a5"}):e._e()],1)}))],2)],1)},r=[],d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-row",{attrs:{"no-gutters":"",align:"stretch"}},[a("v-col",{attrs:{cols:"8"}},[a("div",{staticClass:"card-render",attrs:{id:"render-p1"}},[a("div",{ref:"label-holder-1",staticClass:"label-holder"})])]),a("v-col",{attrs:{cols:"4"}},[a("v-card",{staticClass:"mx-auto card-info",attrs:{outlined:""}},[a("script",{attrs:{type:"application/javascript",src:"https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2/MathJax.js?config=TeX-AMS_HTML"}}),a("h1",[e._v("Viga em balanço (Peso pontual)")]),e.devTools?a("div",[a("h2",[e._v("Mouse position: "+e._s(e.absolute))]),a("h2",[e._v("inRange: "+e._s(e.inRange))]),a("h2",[e._v("Largura da Barra: "+e._s(e.size)+" centimetros")]),e.inRange?a("div",[a("h2",[e._v("X Clicado: "+e._s(e.clickX))]),a("h2",[e._v("Y Clicado: "+e._s(e.clickY))]),a("h2",[e._v("l: "+e._s(e.l))]),a("h2",[e._v("Forca: "+e._s(e.f)+" N")]),a("h2",[e._v("Ya: "+e._s(e.f)+" N")]),a("h2",[e._v("Ma: "+e._s(e.ma)+" N")])]):e._e()]):e._e(),e.devTools?e._e():a("div",[a("VueMathjax",{attrs:{formula:e.info}}),a("VueMathjax",{attrs:{formula:e.sumFx}}),a("VueMathjax",{attrs:{formula:e.sumFy}}),0!=e.f?a("VueMathjax",{attrs:{formula:e.f1}}):e._e(),0!=e.f?a("VueMathjax",{attrs:{formula:e.f2}}):e._e()],1)])],1)],1)},l=[],h=a("1da1"),c=(a("96cf"),a("d3b7"),a("b8bf")),u=a.n(c),b=a("7b93"),m={name:"App",components:{VueMathjax:b["VueMathjax"]},computed:{f1:function(){return"$$ {V}_a = F \\rightarrow {V}_a = "+Math.round(100*this.f)/100+"N$$"},f2:function(){return"$$ {M}_a = F \\cdot l \\rightarrow "+Math.round(100*this.f)/100+" \\cdot"+Math.round(this.l/100*100)/100+" ="+Math.round(100*this.ma)/100+"$$"},info:function(){return"$$ F = "+Math.round(100*this.f)/100+" N ,\\ T = "+Math.round(100*this.sizeAvailable)/100+"cm ,\\ l ="+Math.round(100*this.l)/100+"cm $$"}},data:function(){return{clickX:"",clickY:"",absolute:"",inRange:!0,l:0,size:0,sizeAvailable:0,ma:0,rb:0,f:0,devTools:!1,sumFx:"$$\\sum {F}_x = 0$$",sumFy:"$$\\sum {F}_y = 0 \\rightarrow {V}_a - F = 0 $$",sumMa:"$$\\sum {M}_a = 0$$",bodiesDom:[],bodies:[],bodiesPositions:[],width:0,height:0}},mounted:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){var a,i,o,s,n,r,d,l,h,c,b,m;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,new Promise((function(e){setTimeout(e,1e3)}));case 2:for(e.height=document.getElementById("render-p1").clientHeight,e.width=document.getElementById("render-p1").clientWidth,a=u.a.Engine.create(),i=u.a.Render.create({element:document.querySelector("#render-p1"),engine:a,options:{height:e.height,width:e.width,showDebug:e.devTools}}),o=u.a.Bodies.rectangle(e.width/2,e.height-e.height/40,e.width,e.height/20,{isStatic:!0}),s=u.a.Bodies.rectangle(e.width/40,e.height/2,e.width/20,e.height,{isStatic:!0}),e.size=.6*e.width,n=u.a.Bodies.rectangle(.3*e.width+e.width/20,e.height/2,.6*e.width,e.height/20,{isStatic:!0,label:"boxA",render:{visible:!0}}),r=u.a.Constraint.create({bodyA:s,pointA:{x:e.width/40,y:e.height/40},bodyB:n,pointB:{x:.6*-e.width/2,y:e.height/40}}),d=u.a.Constraint.create({bodyA:s,pointA:{x:e.width/40,y:-e.height/40},bodyB:n,pointB:{x:.6*-e.width/2,y:-e.height/40}}),e.sizeAvailable=.6*e.width,l=u.a.Mouse.create(i.canvas),e.absolute=l.absolute,h=u.a.MouseConstraint.create(a,{mouse:l,constraint:{render:{visible:!0}}}),u.a.Events.on(h,"startdrag",(function(t){if("boxA"==t.body.label){var a=t.mouse.absolute;e.calculateSizes(a.x,a.y,e.width)}})),u.a.Events.on(h,"enddrag",(function(t){if(console.log(t),"boxA"==t.body.label){var a=t.mouse.absolute;e.calculateReactions(a.y)}})),i.mouse=l,u.a.World.add(a.world,[n,o,s,h,r,d]),console.log("w:",e.width,"h:",e.height),e.createLabel(e.width/20,e.height/20,0,e.height/2-e.height/40,"A_point","A"),e.createLabel(e.width/20,e.height/20,.64*e.width+e.width/20,e.height/2-e.height/40,"viga","Viga"),e.bodiesDom=document.querySelectorAll(".label"),e.bodies=[],c=0,b=e.bodiesDom.length;c<b;c++)m=u.a.Bodies.rectangle(0,0,0,0),e.bodiesDom[c].id=m.id,e.bodies.push(m);u.a.World.add(a.world,e.bodies),window.requestAnimationFrame(e.update),window.onresize=e.onResize(),u.a.Runner.run(a),u.a.Render.run(i);case 31:case"end":return t.stop()}}),t)})))()},methods:{calculateSizes:function(e,t,a){this.clickX=e,this.clickY=t,this.l=e-a/20},calculateReactions:function(e){this.inRange&&(this.f=e-this.clickY,this.ma=this.f*this.l/100)},update:function(){for(var e=0,t=this.bodiesDom.length;e<t;e++){for(var a,i,o=this.bodiesDom[e],s=null,n=0,r=this.bodies.length;n<r;n++)if(this.bodies[n].id==o.id){s=this.bodies[n];break}null!==s&&(o.style.transform="translate( "+(null===this||void 0===this||null===(a=this.bodiesPositions[e])||void 0===a?void 0:a.x)+"px, "+(null===this||void 0===this||null===(i=this.bodiesPositions[e])||void 0===i?void 0:i.y)+"px )")}window.requestAnimationFrame(this.update)},createLabel:function(e,t,a,i,o,s){var n=document.createElement("div");n.id=o,n.className="label",n.style.cssText="height:"+t+"px; width:"+e+"px;";var r=document.createTextNode(s);n.appendChild(r),this.bodiesPositions.push({x:a,y:i}),this.$refs["label-holder-1"].appendChild(n)},onResize:function(){console.log("resized")}}},f=m,g=(a("b1e5"),a("2877")),p=a("6544"),v=a.n(p),w=a("b0af"),_=a("62ad"),x=a("0fd9"),y=Object(g["a"])(f,d,l,!1,null,null,null),M=y.exports;v()(y,{VCard:w["a"],VCol:_["a"],VRow:x["a"]});var $=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-row",{attrs:{"no-gutters":"",align:"stretch"}},[a("v-col",{attrs:{cols:"8"}},[a("div",{staticClass:"card-render",attrs:{id:"render-p2"}},[a("div",{ref:"label-holder-2",staticClass:"label-holder"})])]),a("v-col",{attrs:{cols:"4"}},[a("v-card",{staticClass:"mx-auto card-info",attrs:{outlined:""}},[a("script",{attrs:{type:"application/javascript",src:"https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2/MathJax.js?config=TeX-AMS_HTML"}}),a("h1",[e._v("Viga em balanço (Peso distribuido)")]),e.devTools?a("div",[a("h2",[e._v("Mouse position: "+e._s(e.absolute))]),a("h2",[e._v("inRange: "+e._s(e.inRange))]),a("h2",[e._v("Largura da Barra: "+e._s(e.size)+" centimetros")]),e.inRange?a("div",[a("h2",[e._v("X Clicado: "+e._s(e.clickX))]),a("h2",[e._v("Y Clicado: "+e._s(e.clickY))]),a("h2",[e._v("l: "+e._s(e.l))]),a("h2",[e._v("Forca: "+e._s(e.f)+" N")]),a("h2",[e._v("Ya: "+e._s(e.f)+" N")]),a("h2",[e._v("Ma: "+e._s(e.ma)+" N")])]):e._e()]):e._e(),e.devTools?e._e():a("div",[a("VueMathjax",{attrs:{formula:e.info}}),a("VueMathjax",{attrs:{formula:e.sumFx}}),a("VueMathjax",{attrs:{formula:e.sumFy}}),0!=e.f?a("VueMathjax",{attrs:{formula:e.fya}}):e._e(),a("VueMathjax",{attrs:{formula:e.sumMa}}),0!=e.f?a("VueMathjax",{attrs:{formula:e.fma}}):e._e()],1)])],1)],1)},A=[],R={name:"App",components:{VueMathjax:b["VueMathjax"]},computed:{fma:function(){return"$$ {M}_A = \\frac{Pl^{2}}{2} \\rightarrow \\frac{"+Math.round(100*this.f)/100+"\\cdot"+Math.round(this.sizeAvailable/100*100)/100+"^{2}}{2} ="+Math.round(this.ma/100*100)+"$$"},fya:function(){return"$$ {Y}_A = F \\cdot l \\rightarrow "+Math.round(100*this.f)/100+" \\cdot"+Math.round(this.sizeAvailable/100*100)/100+" ="+Math.round(100*this.ya)/100+"$$"},info:function(){return"$$ F = "+Math.round(100*this.f)/100+" N ,\\ l = "+Math.round(100*this.sizeAvailable)/100+"cm $$"}},data:function(){return{clickX:"",clickY:"",absolute:"",inRange:!0,l:0,size:0,sizeAvailable:0,ya:0,ma:0,rb:0,f:0,devTools:!1,sumFx:"$$\\sum {F}_x = 0 \\rightarrow {X}_A = 0 $$",sumFy:"$$\\sum {F}_y = 0 \\rightarrow {Y}_A = F \\cdot l $$",sumMa:"$$\\sum {M}_A = 0 \\rightarrow {M}_A = \\frac{F \\cdot l^{2}}{2} $$",bodiesDom:[],bodies:[],bodiesPositions:[],width:0,height:0}},mounted:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){var a,i,o,s,n,r,d,l,h,c,b,m;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,new Promise((function(e){setTimeout(e,1e3)}));case 2:for(e.height=document.getElementById("render-p2").clientHeight,e.width=document.getElementById("render-p2").clientWidth,a=u.a.Engine.create(),i=u.a.Render.create({element:document.querySelector("#render-p2"),engine:a,options:{height:e.height,width:e.width,showDebug:e.devTools}}),o=u.a.Bodies.rectangle(e.width/2,e.height-e.height/40,e.width,e.height/20,{isStatic:!0}),s=u.a.Bodies.rectangle(e.width/40,e.height/2,e.width/20,e.height,{isStatic:!0}),e.size=.6*e.width,n=u.a.Bodies.rectangle(.3*e.width+e.width/20,e.height/2,.6*e.width,e.height/20,{isStatic:!0,label:"boxA",render:{visible:!0}}),r=u.a.Constraint.create({bodyA:s,pointA:{x:e.width/40,y:e.height/40},bodyB:n,pointB:{x:.6*-e.width/2,y:e.height/40}}),d=u.a.Constraint.create({bodyA:s,pointA:{x:e.width/40,y:-e.height/40},bodyB:n,pointB:{x:.6*-e.width/2,y:-e.height/40}}),e.sizeAvailable=.6*e.width,l=u.a.Mouse.create(i.canvas),e.absolute=l.absolute,h=u.a.MouseConstraint.create(a,{mouse:l,constraint:{render:{visible:!0}}}),u.a.Events.on(h,"startdrag",(function(t){if("boxA"==t.body.label){var a=t.mouse.absolute;e.calculateSizes(a.x,a.y,e.width)}})),u.a.Events.on(h,"enddrag",(function(t){if(console.log(t),"boxA"==t.body.label){var a=t.mouse.absolute;e.calculateReactions(a.y)}})),i.mouse=l,u.a.World.add(a.world,[n,o,s,h,r,d]),console.log("w:",e.width,"h:",e.height),e.createLabel(e.width/20,e.height/20,0,e.height/2-e.height/40,"A_point","A"),e.createLabel(e.width/20,e.height/20,.64*e.width+e.width/20,e.height/2-e.height/40,"viga","Viga"),e.bodiesDom=document.querySelectorAll(".label2"),e.bodies=[],c=0,b=e.bodiesDom.length;c<b;c++)m=u.a.Bodies.rectangle(0,0,0,0),e.bodiesDom[c].id=m.id,e.bodies.push(m);u.a.World.add(a.world,e.bodies),window.requestAnimationFrame(e.update),window.onresize=e.onResize(),u.a.Runner.run(a),u.a.Render.run(i);case 31:case"end":return t.stop()}}),t)})))()},methods:{calculateSizes:function(e,t,a){this.clickX=e,this.clickY=t,this.l=e-a/20},calculateReactions:function(e){this.inRange&&(this.f=e-this.clickY,this.ya=this.f*this.sizeAvailable/100,this.ma=this.f*(this.sizeAvailable/100*(this.sizeAvailable/100))/2)},update:function(){for(var e=0,t=this.bodiesDom.length;e<t;e++){for(var a,i,o=this.bodiesDom[e],s=null,n=0,r=this.bodies.length;n<r;n++)if(this.bodies[n].id==o.id){s=this.bodies[n];break}null!==s&&(o.style.transform="translate( "+(null===this||void 0===this||null===(a=this.bodiesPositions[e])||void 0===a?void 0:a.x)+"px, "+(null===this||void 0===this||null===(i=this.bodiesPositions[e])||void 0===i?void 0:i.y)+"px )")}window.requestAnimationFrame(this.update)},createLabel:function(e,t,a,i,o,s){var n=document.createElement("div");n.id=o,n.className="label2",n.style.cssText="height:"+t+"px; width:"+e+"px;";var r=document.createTextNode(s);n.appendChild(r),this.bodiesPositions.push({x:a,y:i}),this.$refs["label-holder-2"].appendChild(n)},onResize:function(){console.log("resized")}}},j=R,V=(a("d234"),Object(g["a"])(j,$,A,!1,null,null,null)),C=V.exports;v()(V,{VCard:w["a"],VCol:_["a"],VRow:x["a"]});var B=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-row",{attrs:{"no-gutters":"",align:"stretch"}},[a("v-col",{attrs:{cols:"8"}},[a("div",{staticClass:"card-render",attrs:{id:"render-p3"}},[a("div",{ref:"label-holder-3",staticClass:"label-holder"})])]),a("v-col",{attrs:{cols:"4"}},[a("v-card",{staticClass:"mx-auto card-info",attrs:{outlined:""}},[a("script",{attrs:{type:"application/javascript",src:"https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2/MathJax.js?config=TeX-AMS_HTML"}}),a("h1",[e._v("Viga triangular em balanço (Peso distribuido)")]),e.devTools?a("div",[a("h2",[e._v("Mouse position: "+e._s(e.absolute))]),a("h2",[e._v("inRange: "+e._s(e.inRange))]),a("h2",[e._v("Largura da Barra: "+e._s(e.size)+" centimetros")]),e.inRange?a("div",[a("h2",[e._v("X Clicado: "+e._s(e.clickX))]),a("h2",[e._v("Y Clicado: "+e._s(e.clickY))]),a("h2",[e._v("l: "+e._s(e.l))]),a("h2",[e._v("Forca: "+e._s(e.f)+" N")]),a("h2",[e._v("Ya: "+e._s(e.f)+" N")]),a("h2",[e._v("Ma: "+e._s(e.ma)+" N")])]):e._e()]):e._e(),e.devTools?e._e():a("div",[a("VueMathjax",{attrs:{formula:e.info}}),a("VueMathjax",{attrs:{formula:e.sumFx}}),a("VueMathjax",{attrs:{formula:e.sumFy}}),0!=e.f?a("VueMathjax",{attrs:{formula:e.fya}}):e._e(),a("VueMathjax",{attrs:{formula:e.sumMa}}),0!=e.f?a("VueMathjax",{attrs:{formula:e.fma}}):e._e()],1)])],1)],1)},z=[],F={name:"App",components:{VueMathjax:b["VueMathjax"]},computed:{fma:function(){return"$$ {M}_A = \\frac{F \\cdot l^{2}}{6} \\rightarrow \\frac{"+Math.round(100*this.f)/100+"\\cdot"+Math.round(this.sizeAvailable/100*100)/100+"^{2}}{6} ="+Math.round(this.ma/100*100)+"$$"},fya:function(){return"$$ {Y}_A = \\frac{F \\cdot l}{2} \\rightarrow \\frac{"+Math.round(100*this.f)/100+" \\cdot"+Math.round(this.sizeAvailable/100*100)/100+"}{2} ="+Math.round(100*this.ya)/100+"$$"},info:function(){return"$$ F = "+Math.round(100*this.f)/100+" N ,\\ l = "+Math.round(100*this.sizeAvailable)/100+"cm $$"}},data:function(){return{clickX:"",clickY:"",absolute:"",inRange:!0,l:0,size:0,sizeAvailable:0,ma:0,ya:0,rb:0,f:0,devTools:!1,sumFx:"$$\\sum {F}_x = 0 \\rightarrow {X}_A = 0 $$",sumFy:"$$\\sum {F}_y = 0 \\rightarrow {Y}_A = \\frac{F \\cdot l}{2} $$",sumMa:"$$\\sum {M}_a = 0 \\rightarrow {M}_A = \\frac{F \\cdot l^{2}}{6} $$",bodiesDom:[],bodies:[],bodiesPositions:[],width:0,height:0}},mounted:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){var a,i,o,s,n,r,d,l,h,c,b;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,new Promise((function(e){setTimeout(e,1e3)}));case 2:for(e.height=document.getElementById("render-p3").clientHeight,e.width=document.getElementById("render-p3").clientWidth,a=u.a.Engine.create(),i=u.a.Render.create({element:document.querySelector("#render-p3"),engine:a,options:{height:e.height,width:e.width,showDebug:e.devTools}}),o=u.a.Bodies.rectangle(e.width/2,e.height-e.height/40,e.width,e.height/20,{isStatic:!0}),s=u.a.Bodies.rectangle(e.width/40,e.height/2,e.width/20,e.height,{isStatic:!0}),e.size=.6*e.width,n=[{x:e.width/20,y:e.height/2+e.height/35},{x:e.width/20,y:e.height/2-e.height/35},{x:500,y:e.height/2+e.height/35}],r=u.a.Body.create({position:u.a.Vertices.centre(n),vertices:n,isStatic:!0,label:"boxA"}),e.sizeAvailable=.6*e.width,d=u.a.Mouse.create(i.canvas),e.absolute=d.absolute,l=u.a.MouseConstraint.create(a,{mouse:d,constraint:{render:{visible:!0}}}),u.a.Events.on(l,"startdrag",(function(t){if("boxA"==t.body.label){var a=t.mouse.absolute;e.calculateSizes(a.x,a.y,e.width)}})),u.a.Events.on(l,"enddrag",(function(t){if(console.log(t),"boxA"==t.body.label){var a=t.mouse.absolute;e.calculateReactions(a.y)}})),i.mouse=d,u.a.World.add(a.world,[r,o,s,l]),console.log("w:",e.width,"h:",e.height),e.createLabel(e.width/20,e.height/20,0,e.height/2-e.height/40,"A_point","A"),e.createLabel(e.width/20,e.height/20,.64*e.width+e.width/20,e.height/2-e.height/40,"viga","Viga"),e.bodiesDom=document.querySelectorAll(".label3"),e.bodies=[],h=0,c=e.bodiesDom.length;h<c;h++)b=u.a.Bodies.rectangle(0,0,0,0),e.bodiesDom[h].id=b.id,e.bodies.push(b);u.a.World.add(a.world,e.bodies),window.requestAnimationFrame(e.update),window.onresize=e.onResize(),u.a.Runner.run(a),u.a.Render.run(i);case 30:case"end":return t.stop()}}),t)})))()},methods:{calculateSizes:function(e,t,a){this.clickX=e,this.clickY=t,this.l=e-a/20},calculateReactions:function(e){this.inRange&&(this.f=e-this.clickY,this.ma=this.f*Math.pow(this.sizeAvailable/100,2)/6,this.ya=this.f*(this.sizeAvailable/100)/2)},update:function(){for(var e=0,t=this.bodiesDom.length;e<t;e++){for(var a,i,o=this.bodiesDom[e],s=null,n=0,r=this.bodies.length;n<r;n++)if(this.bodies[n].id==o.id){s=this.bodies[n];break}null!==s&&(o.style.transform="translate( "+(null===this||void 0===this||null===(a=this.bodiesPositions[e])||void 0===a?void 0:a.x)+"px, "+(null===this||void 0===this||null===(i=this.bodiesPositions[e])||void 0===i?void 0:i.y)+"px )")}window.requestAnimationFrame(this.update)},createLabel:function(e,t,a,i,o,s){var n=document.createElement("div");n.id=o,n.className="label3",n.style.cssText="height:"+t+"px; width:"+e+"px;";var r=document.createTextNode(s);n.appendChild(r),this.bodiesPositions.push({x:a,y:i}),this.$refs["label-holder-3"].appendChild(n)},onResize:function(){console.log("resized")}}},P=F,k=(a("0b1e"),Object(g["a"])(P,B,z,!1,null,null,null)),T=k.exports;v()(k,{VCard:w["a"],VCol:_["a"],VRow:x["a"]});var S=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-row",{attrs:{"no-gutters":"",align:"stretch"}},[a("v-col",{attrs:{cols:"8"}},[a("div",{staticClass:"card-render",attrs:{id:"render-p4"}},[a("div",{staticClass:"label-holder",attrs:{id:"label-holder-4"}})])]),a("v-col",{attrs:{cols:"4"}},[a("v-card",{staticClass:"mx-auto card-info",attrs:{outlined:""}},[a("script",{attrs:{type:"application/javascript",src:"https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2/MathJax.js?config=TeX-AMS_HTML"}}),a("h1",[e._v("Viga bi-apoiada (Peso pontual)")]),e.devTools?a("div",[a("h2",[e._v("Coordenadas mouse: "+e._s(e.absolute))]),a("h2",[e._v("Dentro do range: "+e._s(e.inRange))]),a("h2",[e._v("Largura da Barra: "+e._s(e.size)+" centimetros")]),a("h2",[e._v("Largura Disponivel para calculo: "+e._s(e.sizeAvailable)+" centimetros")]),e.inRange?a("div",[a("h2",[e._v("X Clicado: "+e._s(e.clickX))]),a("h2",[e._v("Y Clicado: "+e._s(e.clickY))]),a("h2",[e._v("Da: "+e._s(e.da)+", Db: "+e._s(e.db))]),a("h2",[e._v("Força: "+e._s(e.f)+" N")]),a("h2",[e._v("Reacao em A: "+e._s(e.ra)+" N")]),a("h2",[e._v("Reacao em B: "+e._s(e.rb)+" N")])]):e._e()]):e._e(),e.devTools?e._e():a("div",[a("VueMathjax",{attrs:{formula:e.info}}),0!=e.da?a("VueMathjax",{attrs:{formula:e.distances}}):e._e(),a("VueMathjax",{attrs:{formula:e.sumMa}}),0!=e.f?a("VueMathjax",{attrs:{formula:e.f1}}):e._e(),0!=e.f?a("VueMathjax",{attrs:{formula:e.f2}}):e._e(),a("VueMathjax",{attrs:{formula:e.sumFy}}),e.f?a("VueMathjax",{attrs:{formula:e.f3}}):e._e(),e.f?a("VueMathjax",{attrs:{formula:e.f4}}):e._e()],1)])],1)],1)},D=[],E={name:"App",components:{VueMathjax:b["VueMathjax"]},data:function(){return{clickX:"",clickY:"",absolute:"",inRange:!1,da:0,db:0,size:0,sizeAvailable:0,ra:0,rb:0,f:0,sumMa:"$$\\sum {M}_a = 0$$",sumFy:"$$\\sum {F}_y = 0$$",devTools:!1,bodiesDom:[],bodies:[],bodiesPositions:[],width:0,height:0}},computed:{f1:function(){return"$$"+Math.round(100*this.f)/100+"\\cdot"+Math.round(100*this.da)/100+"- {R}_b \\cdot"+Math.round(100*this.sizeAvailable)/100+" = 0 $$"},f2:function(){return"$$ {R}_b = \\frac{ "+Math.round(100*this.da)/100+" \\cdot "+Math.round(100*this.f)/100+" }{ "+Math.round(100*this.sizeAvailable)/100+" } \\rightarrow {R}_b = "+Math.round(100*this.rb)/100+" $$"},f3:function(){return"$${R}_a -"+Math.round(100*this.f)/100+" + {R}_b = 0$$"},f4:function(){return"$${R}_a ="+Math.round(100*this.f)/100+" - "+Math.round(100*this.rb)/100+" \\rightarrow {R}_a ="+Math.round(100*this.ra)/100+"$$"},distances:function(){return"$${D}_a = "+Math.round(100*this.da)/100+" \\ {D}_b = "+Math.round(100*this.db)/100+"$$"},info:function(){return"$$ F = "+Math.round(100*this.f)/100+",\\ l = "+Math.round(100*this.sizeAvailable)/100+"$$"}},mounted:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){var a,i,o,s,n,r,d,l,h,c,b,m,f;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,new Promise((function(e){setTimeout(e,1e3)}));case 2:for(console.log(document.querySelector("#render-p4").offsetWidth),e.height=document.getElementById("render-p4").clientHeight,e.width=document.getElementById("render-p4").clientWidth,a=u.a.Engine.create(),i=u.a.Render.create({element:document.querySelector("#render-p4"),engine:a,options:{height:e.height,width:e.width,showDebug:e.devTools}}),o=u.a.Bodies.rectangle(e.width/2,e.height-e.height/40,e.width,e.height/20,{isStatic:!0}),e.size=.8*e.width,s=u.a.Bodies.rectangle(e.width/2,e.height/1.4,.8*e.width,e.height/20,{isStatic:!0,label:"boxA"}),n=u.a.Constraint.create({bodyA:o,pointA:{x:-e.width/8,y:0},bodyB:s,pointB:{x:-e.width/4,y:0}}),r=u.a.Constraint.create({bodyA:o,pointA:{x:-3*e.width/8,y:0},bodyB:s,pointB:{x:-e.width/4,y:0}}),d=u.a.Constraint.create({bodyA:o,pointA:{x:e.width/8,y:0},bodyB:s,pointB:{x:e.width/4,y:0}}),l=u.a.Constraint.create({bodyA:o,pointA:{x:3*e.width/8,y:0},bodyB:s,pointB:{x:e.width/4,y:0}}),h=u.a.Mouse.create(i.canvas),e.absolute=h.absolute,c=u.a.MouseConstraint.create(a,{mouse:h,constraint:{render:{visible:!0}}}),e.sizeAvailable=e.width/4*2,u.a.Events.on(c,"startdrag",(function(t){if("boxA"==t.body.label){var a=t.mouse.absolute;e.calculateSizes(a.x,a.y,e.width/4,e.width/4*3)}})),u.a.Events.on(c,"enddrag",(function(t){if("boxA"==t.body.label){var a=t.mouse.absolute;e.calculateReactions(a.y)}})),i.mouse=h,u.a.World.add(a.world,[s,o,c,n,r,d,l]),e.createLabel("auto","auto",e.width/8*2,e.height-e.height/10,"Ra","A"),e.createLabel("auto","auto",e.width/8*6,e.height-e.height/10,"Rb","B"),e.bodiesDom=document.querySelectorAll(".label-p4"),e.bodies=[],b=0,m=e.bodiesDom.length;b<m;b++)f=u.a.Bodies.rectangle(0,0,0,0),e.bodiesDom[b].id=f.id,e.bodies.push(f);u.a.World.add(a.world,e.bodies),window.requestAnimationFrame(e.update),u.a.Runner.run(a),u.a.Render.run(i);case 31:case"end":return t.stop()}}),t)})))()},methods:{calculateSizes:function(e,t,a,i){this.clickX=e,this.clickY=t,e>=a&&e<=i?(this.inRange=!0,this.da=e-a,this.db=this.sizeAvailable-this.da):(this.inRange=!1,this.ra=0,this.rb=0,this.f=0)},calculateReactions:function(e){this.inRange&&(this.f=e-this.clickY,this.rb=this.f*this.da/this.sizeAvailable,this.ra=this.f-this.rb)},update:function(){for(var e=0,t=this.bodiesPositions.length;e<t;e++){for(var a,i,o=this.bodiesDom[e],s=null,n=0,r=this.bodies.length;n<r;n++)if(this.bodies[n].id==o.id){s=this.bodies[n];break}null!==s&&(o.style.transform="translate( "+(null===this||void 0===this||null===(a=this.bodiesPositions[e])||void 0===a?void 0:a.x)+"px, "+(null===this||void 0===this||null===(i=this.bodiesPositions[e])||void 0===i?void 0:i.y)+"px )")}window.requestAnimationFrame(this.update)},createLabel:function(e,t,a,i,o,s){var n=document.createElement("div");n.id=o,n.className="label-p4",n.style.cssText="height:"+t+"px; width:"+e+"px;";var r=document.createTextNode(s);n.appendChild(r),this.bodiesPositions.push({x:a,y:i}),document.getElementById("label-holder-4").appendChild(n)}}},Y=E,N=(a("8ea6"),Object(g["a"])(Y,S,D,!1,null,null,null)),X=N.exports;v()(N,{VCard:w["a"],VCol:_["a"],VRow:x["a"]});var L=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-row",{attrs:{"no-gutters":"",align:"stretch"}},[a("v-col",{attrs:{cols:"8"}},[a("div",{staticClass:"card-render",attrs:{id:"render-p5"}},[a("div",{staticClass:"label-holder",attrs:{id:"label-holder-5"}})])]),a("v-col",{attrs:{cols:"4"}},[a("v-card",{staticClass:"mx-auto card-info",attrs:{outlined:""}},[a("script",{attrs:{type:"application/javascript",src:"https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2/MathJax.js?config=TeX-AMS_HTML"}}),a("h1",[e._v("Viga bi-apoiada (Peso distribuido)")]),e.devTools?a("div",[a("h2",[e._v("Coordenadas mouse: "+e._s(e.absolute))]),a("h2",[e._v("Dentro do range: "+e._s(e.inRange))]),a("h2",[e._v("Largura da Barra: "+e._s(e.size)+" centimetros")]),a("h2",[e._v("Largura Disponivel para calculo: "+e._s(e.sizeAvailable)+" centimetros")]),e.inRange?a("div",[a("h2",[e._v("X Clicado: "+e._s(e.clickX))]),a("h2",[e._v("Y Clicado: "+e._s(e.clickY))]),a("h2",[e._v("Da: "+e._s(e.da)+", Db: "+e._s(e.db))]),a("h2",[e._v("Força: "+e._s(e.f)+" N")]),a("h2",[e._v("Reacao em A: "+e._s(e.ra)+" N")]),a("h2",[e._v("Reacao em B: "+e._s(e.rb)+" N")])]):e._e()]):e._e(),e.devTools?e._e():a("div",[a("VueMathjax",{attrs:{formula:e.info}}),a("VueMathjax",{attrs:{formula:e.sumMa}}),0!=e.f?a("VueMathjax",{attrs:{formula:e.fyb}}):e._e(),a("VueMathjax",{attrs:{formula:e.sumFx}}),a("VueMathjax",{attrs:{formula:e.sumFy}}),0!=e.f?a("VueMathjax",{attrs:{formula:e.fya}}):e._e()],1)])],1)],1)},O=[],q={name:"App",components:{VueMathjax:b["VueMathjax"]},data:function(){return{clickX:"",clickY:"",absolute:"",inRange:!1,ya:0,yb:0,da:0,db:0,size:0,sizeAvailable:0,ra:0,rb:0,f:0,sumFx:"$$\\sum {F}_X = 0 \\rightarrow {X}_B = 0 $$",sumFy:"$$\\sum {F}_Y = 0 \\rightarrow {Y}_A + {Y}_B = F \\cdot l \\rightarrow {Y}_A = F \\cdot l -  \\frac{F \\cdot l }{2} = \\frac{F \\cdot l }{2} $$",sumMa:"$$\\sum {M}_a = 0 \\rightarrow \\frac{F \\cdot l^{2} }{2} = {Y}_B \\cdot l \\rightarrow {Y}_B = \\frac{F \\cdot l}{2} $$",devTools:!1,bodiesDom:[],bodies:[],bodiesPositions:[],width:0,height:0}},computed:{fyb:function(){return"$$ {Y}_B = \\frac{"+Math.round(100*this.f)/100+"\\cdot"+Math.round(100*this.sizeAvailable)/100/100+"}{2} ="+Math.round(100*this.ya)/100+" $$"},fya:function(){return"$$ {Y}_A = \\frac{"+Math.round(100*this.f)/100+"\\cdot"+Math.round(100*this.sizeAvailable)/100/100+"}{2} ="+Math.round(100*this.ya)/100+" $$"},distances:function(){return"$${D}_a = "+Math.round(100*this.da)/100+" \\ {D}_b = "+Math.round(100*this.db)/100+"$$"},info:function(){return"$$ F = "+Math.round(100*this.f)/100+",\\ l = "+Math.round(100*this.sizeAvailable)/100+"$$"}},mounted:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){var a,i,o,s,n,r,d,l,h,c,b,m,f;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,new Promise((function(e){setTimeout(e,1e3)}));case 2:for(console.log(document.querySelector("#render-p5").offsetWidth),e.height=document.getElementById("render-p5").clientHeight,e.width=document.getElementById("render-p5").clientWidth,a=u.a.Engine.create(),i=u.a.Render.create({element:document.querySelector("#render-p5"),engine:a,options:{height:e.height,width:e.width,showDebug:e.devTools}}),o=u.a.Bodies.rectangle(e.width/2,e.height-e.height/40,e.width,e.height/20,{isStatic:!0}),e.size=.8*e.width,s=u.a.Bodies.rectangle(e.width/2,e.height/1.4,.8*e.width,e.height/20,{isStatic:!0,label:"boxA"}),n=u.a.Constraint.create({bodyA:o,pointA:{x:-e.width/8,y:0},bodyB:s,pointB:{x:-e.width/4,y:0}}),r=u.a.Constraint.create({bodyA:o,pointA:{x:-3*e.width/8,y:0},bodyB:s,pointB:{x:-e.width/4,y:0}}),d=u.a.Constraint.create({bodyA:o,pointA:{x:e.width/8,y:0},bodyB:s,pointB:{x:e.width/4,y:0}}),l=u.a.Constraint.create({bodyA:o,pointA:{x:3*e.width/8,y:0},bodyB:s,pointB:{x:e.width/4,y:0}}),h=u.a.Mouse.create(i.canvas),e.absolute=h.absolute,c=u.a.MouseConstraint.create(a,{mouse:h,constraint:{render:{visible:!0}}}),e.sizeAvailable=e.width/4*2,u.a.Events.on(c,"startdrag",(function(t){if("boxA"==t.body.label){var a=t.mouse.absolute;e.calculateSizes(a.x,a.y,e.width/4,e.width/4*3)}})),u.a.Events.on(c,"enddrag",(function(t){if("boxA"==t.body.label){var a=t.mouse.absolute;e.calculateReactions(a.y)}})),i.mouse=h,u.a.World.add(a.world,[s,o,c,n,r,d,l]),e.createLabel("auto","auto",e.width/8*2,e.height-e.height/10,"Ra","A"),e.createLabel("auto","auto",e.width/8*6,e.height-e.height/10,"Rb","B"),e.bodiesDom=document.querySelectorAll(".label-p5"),e.bodies=[],b=0,m=e.bodiesDom.length;b<m;b++)f=u.a.Bodies.rectangle(0,0,0,0),e.bodiesDom[b].id=f.id,e.bodies.push(f);u.a.World.add(a.world,e.bodies),window.requestAnimationFrame(e.update),u.a.Runner.run(a),u.a.Render.run(i);case 31:case"end":return t.stop()}}),t)})))()},methods:{calculateSizes:function(e,t,a,i){this.clickX=e,this.clickY=t,e>=a&&e<=i?(this.inRange=!0,this.da=e-a,this.db=this.sizeAvailable-this.da):(this.inRange=!1,this.ra=0,this.rb=0,this.f=0)},calculateReactions:function(e){this.inRange&&(this.f=e-this.clickY,this.ya=this.f*this.sizeAvailable/100/2)},update:function(){for(var e=0,t=this.bodiesPositions.length;e<t;e++){for(var a,i,o=this.bodiesDom[e],s=null,n=0,r=this.bodies.length;n<r;n++)if(this.bodies[n].id==o.id){s=this.bodies[n];break}null!==s&&(o.style.transform="translate( "+(null===this||void 0===this||null===(a=this.bodiesPositions[e])||void 0===a?void 0:a.x)+"px, "+(null===this||void 0===this||null===(i=this.bodiesPositions[e])||void 0===i?void 0:i.y)+"px )")}window.requestAnimationFrame(this.update)},createLabel:function(e,t,a,i,o,s){var n=document.createElement("div");n.id=o,n.className="label-p5",n.style.cssText="height:"+t+"px; width:"+e+"px;";var r=document.createTextNode(s);n.appendChild(r),this.bodiesPositions.push({x:a,y:i}),document.getElementById("label-holder-5").appendChild(n)}}},W=q,I=(a("8856"),Object(g["a"])(W,L,O,!1,null,null,null)),H=I.exports;v()(I,{VCard:w["a"],VCol:_["a"],VRow:x["a"]});var J={name:"HelloWorld",props:{},components:{ReactionP1A1:M,ReactionP1A2:C,ReactionP1A3:T,ReactionP1A4:X,ReactionP1A5:H},data:function(){return{renderKey:0,model:null,membros:[{name:"Barbara Medeiros",img:a("2124"),nusp:"11871393"},{name:"Felipe Perrella",img:a("4bed"),nusp:"11871393"},{name:"Marina Ribeiro",img:a("2db4"),nusp:"11871393"},{name:"Matheus Rosa",img:a("590c"),nusp:"11871393"},{name:"Thamires Nascimento",img:a("6db6"),nusp:"11871393"}],simulations:[{name:"Viga em balanço (Peso pontual)",ex:1,dialog:!1},{name:"Viga em balanço (Peso distribuido)",ex:2,dialog:!1},{name:"Viga triangular em balanço (Peso distribuido)",ex:3,dialog:!1},{name:"Viga bi-apoiada (Peso pontual)",ex:4,dialog:!1},{name:"Viga bi-apoiada (Peso distribuido)",ex:5,dialog:!1}]}}},K=J,G=(a("716c"),a("8336")),Q=a("99d9"),U=a("a523"),Z=a("169a"),ee=a("a722"),te=a("8b9c"),ae=a("6b53"),ie=Object(g["a"])(K,n,r,!1,null,"8f0f7cfc",null),oe=ie.exports;v()(ie,{VBtn:G["a"],VCard:w["a"],VCardActions:Q["a"],VCardText:Q["b"],VCol:_["a"],VContainer:U["a"],VDialog:Z["a"],VLayout:ee["a"],VParallax:te["a"],VResponsive:ae["a"],VRow:x["a"]});var se={name:"App",components:{ReactionBasic:oe}},ne=se,re=(a("034f"),a("7496")),de=Object(g["a"])(ne,o,s,!1,null,null,null),le=de.exports;v()(de,{VApp:re["a"]});var he=a("f309");i["a"].use(he["a"]);var ce=new he["a"]({});i["a"].config.productionTip=!1,new i["a"]({vuetify:ce,render:function(e){return e(le)}}).$mount("#app")},"590c":function(e,t,a){e.exports=a.p+"img/cp4.e35bd7b1.jpeg"},"6a3e":function(e,t,a){},"6db6":function(e,t,a){e.exports=a.p+"img/cp5.994dadd7.jpeg"},"716c":function(e,t,a){"use strict";a("2916")},7354:function(e,t,a){},"85ec":function(e,t,a){},8856:function(e,t,a){"use strict";a("7354")},"8ea6":function(e,t,a){"use strict";a("e4cb")},b1e5:function(e,t,a){"use strict";a("3b2a")},d234:function(e,t,a){"use strict";a("2e1a")},e4cb:function(e,t,a){},e700:function(e,t,a){e.exports=a.p+"img/minerva.e6c73b8c.png"}});
//# sourceMappingURL=app.92670084.js.map
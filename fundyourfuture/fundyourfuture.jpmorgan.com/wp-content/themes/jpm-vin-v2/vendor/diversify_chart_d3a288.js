jQuery(document).ready(function(a){var b=new MobileDetect(window.navigator.userAgent),c=null!=(b.mobile()||b.phone()||b.tablet());!function(b){function c(a,b){return b.value-a.value}function q(){for(var a=1,b=d.length;b>a;a++)if(!d[a].selected&&!d[a].forceSelect)return!1;return!0}function r(){for(var a=0,b=1,c=d.length;c>b;b++)(d[b].selected||d[b].forceSelect||d[b].hover)&&a++;return a}function s(a){if(a.selectAll){var b=!d[0].selected;d.forEach(function(a){a.selected=b||a.forceSelect,a.hover=b})}else a.selected=!a.selected,a.hover=a.selected;d[0].selected=q(),G()}function t(a,b){a.selectAll?d.forEach(function(a){a.hover=b}):a.hover=b,G()}function z(a){a.selected=!a.selected,a.hover=a.selected,d[0].selected=q(),G()}function A(a,b){a.hover=b,G()}function G(){h=r()<=2,u.classed("active",function(a){return a.selected||a.forceSelect||a.hover}),w.style("opacity",function(a){return a[0].ref.selected||a[0].ref.forceSelect||a[0].ref.hover?1:0}),y.style("display",h?"block":"none"),E.attr("fill",function(a){return a.selected||a.forceSelect||a.hover?a.color:"#d0d0d0"}).attr("stroke-width",function(a){return a.selected||a.forceSelect||a.hover?5:0}),F.style("display",function(a){return a.selected||a.forceSelect||a.hover?"block":"none"})}for(var d=b.data,e=d[1].years.length,f=[],g=[],h=!0,i=0;e>i;i++){f[i]=[];for(var j=1,k=d.length;k>j;j++)f[i].push({id:j-1,ref:d[j],value:d[j].years[i]});f[i].sort(c);var l=41*i+32;f[i].map(function(a,b){a.x=l,a.y=41*b+22,g[a.id]||(g[a.id]=[]),g[a.id].push(a)})}var m=[].concat.apply([],f),n=d3.select("#diversify_widget"),o=n.select("svg"),p=n.select("ul");n.style("display","block");var u=p.selectAll("li").data(d).enter().append("li").text(function(b){var c=b.name.split(" | ");return"es"==a("[data-last-column]").data("lang")?c[0]:"it"==a("[data-last-column]").data("lang")?c[1]:void 0}).classed("active",function(a){return a.selected||a.forceSelect}).on("click",s).call(function(a){b.isMobile?a.on("touch",s):(a.on("mouseenter",function(a){t(a,!0)}),a.on("mouseleave",function(a){t(a,!1)}))});u.append("span").style("background-color",function(a){return a.color||"transparent"}),o.selectAll("circle").data(m).enter().append("circle").attr("fill","#d0d0d0").attr("cy",function(a){return a.y}).attr("cx",function(a){return a.x}).attr("r",18);var v=d[1].years.length;o.selectAll("text").data(d3.range(v+2)).enter().append("text").attr("class","legend").attr("fill","#000").attr("pointer-events","none").attr("text-anchor","middle").attr("y",function(a){return v+1==a?41*(b.data.length-1)+35:41*(b.data.length-1)+21}).attr("x",function(a){return a>=v?41*v+48:41*a+33}).text(function(c){var d=a("[data-last-column]").data("last-column").split(" - ");return v==c?d[0]:v+1==c?d[1]:b.startYear+c});var w=o.selectAll("g").data(g).enter().append("g").style("opacity",function(a){return a[0].ref.selected||a[0].ref.forceSelect?1:0}),x=d3.svg.line().x(function(a){return a.x}).y(function(a){return a.y}).interpolate("linear"),y=w.append("path").style("display",function(a){return a[0].ref.selected||a[0].ref.forceSelect?"block":"none"}).attr("pointer-events","none").attr("d",x).attr("stroke",function(a){return a[0].ref.color}).attr("stroke-width",4).attr("fill","none");w.selectAll("circle").data(function(a){return a}).enter().append("circle").on("click",function(a){z(a.ref)}).call(function(a){b.isMobile?a.on("touch",function(a){z(a.ref)}):(a.on("mouseenter",function(a){A(a.ref,!0)}),a.on("mouseleave",function(a){A(a.ref,!1)}))}).attr("fill",function(a){return a.ref.color}).attr("cy",function(a){return a.y}).attr("cx",function(a){return a.x}).attr("r",18).attr("stroke-opacity",.5).attr("stroke-width",5).attr("stroke",function(a){return a.ref.color});var B=w.selectAll("g").data(function(a){return a}).enter().append("g").attr("transform",function(a){return"translate("+(a.x-22)+", "+(a.y-22)+")"});B.append("text").attr("fill","#fff").attr("pointer-events","none").attr("text-anchor","middle").attr("y",21).attr("x",22).text(function(a){return a.value.toString().replace(".",",")}),B.append("text").attr("fill","#fff").attr("pointer-events","none").attr("text-anchor","middle").attr("y",34).attr("x",22).text("%");var C=o.append("g").attr("transform","translate("+(41*f.length+25)+", 0)"),D=d.slice(1).sort(c),E=C.selectAll("circle").data(D).enter().append("circle").on("click",z).call(function(a){b.isMobile?a.on("touch",z):(a.on("mouseenter",function(a){A(a,!0)}),a.on("mouseleave",function(a){A(a,!1)}))}).attr("fill",function(a){return a.selected||a.forceSelect?a.color:"#d0d0d0"}).attr("stroke-opacity",.5).attr("stroke-width",function(a){return a.selected||a.forceSelect?5:0}).attr("stroke",function(a){return a.color}).attr("cy",function(a,b){return 41*b+22}).attr("cx",22).attr("r",18),F=C.selectAll("g").data(D).enter().append("g").style("display",function(a){return a.selected||a.forceSelect?"block":"none"}).attr("transform",function(a,b){return"translate(0, "+41*b+")"});F.append("text").attr("fill","#fff").attr("pointer-events","none").attr("text-anchor","middle").attr("y",21).attr("x",22).text(function(a){return a.value.toString().replace(".",",")}),F.append("text").attr("fill","#fff").attr("pointer-events","none").attr("text-anchor","middle").attr("y",34).attr("x",22).text("%")}({isMobile:c,startYear:2006,data:[{name:"Selecc. Todas | Seleziona tutto",selectAll:!0},{name:"Cartera mixta | Portafoglio",color:"#f6be00",years:[4.4,.7,-20.8,25.8,18.7,1.4,10.9,3.6,15.7,6],value:6.1,forceSelect:!0},{name:"Renta Variable ME | Azioni ME",color:"#f89837",years:[18.6,26.1,-50.8,73.4,27.5,-15.4,16.8,-6.5,11.8,-4.9],value:2.5},{name:"Materias primas | Materie prime",color:"#927cb5",years:[-8.4,5.1,-32.7,15.8,24.9,-10.4,-2.6,-13.4,-5.5,-16.1],value:-6.4},{name:"Renta Variable MD | Azioni MS",color:"#8d766c",years:[7.9,-1.2,-37.2,26.7,20.1,-1.8,14.7,21.9,20.1,11],value:6.7},{name:"Deuda ME | Debito ME",color:"#e2a4c3",years:[-1.2,-4,-5,22,19.6,12.9,16.2,-12.3,20.9,13.4],value:9.1},{name:"REITS | REITs",color:"#838484",years:[20.6,-25.9,-34.1,23.5,36.4,10.9,18.3,-1.3,44.8,13.9],value:7.2},{name:"Hedge Funds | Hedge Funds",color:"#c3add9",years:[10.8,10.6,-19,18.6,10.2,-2.4,7.3,9.1,3.7,-1.1],value:3.1},{name:"Bonos HY | Obbligazioni HY",color:"#6595b7",years:[1.7,-7,-23.1,54.4,22.8,6.6,17.8,2.7,13.9,8.4],value:8.9},{name:"Renta Fija Gob | Obbligazioni gov.",color:"#97b9cc",years:[-4.8,-.3,15.9,-.6,13.3,9.9,.3,-8.4,13,7.7],value:5.6},{name:"Bonos IG | Obbligazioni IG",color:"#bdbb38",years:[-4.1,-3.7,-3.9,15.5,13.2,7.8,9.5,-4,17.5,7.4],value:6.4},{name:"Liquidez | Liquidit\xe0",color:"#ad895d",years:[3,4.4,5.7,2.3,1.1,1.7,1.2,.2,.3,.1],value:1.7}]})});
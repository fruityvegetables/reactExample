(this.webpackJsonpreactexample=this.webpackJsonpreactexample||[]).push([[0],{18:function(e,t,a){e.exports=a(40)},40:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(11),c=a.n(l),i=a(12),s=a(13),u=a(14),o=a(17),m=a(16);var h=function(e){return r.a.createElement("div",{className:"container".concat(e.fluid?"-fluid":"")},e.children)};var d=function(e){return r.a.createElement("div",{className:"row".concat(e.fluid?"-fluid":"")},e.children)};var v=function(e){var t=e.size.split(" ").map((function(e){return"col-"+e})).join(" ");return r.a.createElement("div",{className:t},e.children)};var E=function(e){return r.a.createElement("div",{className:"card text-center"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h2",null,e.heading)),r.a.createElement("div",{className:"card-body"},e.children))};var f=function(e){return r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"search"},"Search:"),r.a.createElement("input",{onChange:e.handleInputChange,value:e.value,name:"search",type:"text",className:"form-control",placeholder:"Search For a Movie",id:"search"}),r.a.createElement("br",null),r.a.createElement("button",{onClick:e.handleFormSubmit,className:"btn btn-primary"},"Search")))};var p=function(e){return r.a.createElement("div",{className:"text-center"},r.a.createElement("img",{alt:e.title,className:"img-fluid",src:e.src,style:{margin:"0 auto"}}),r.a.createElement("h3",null,"Director(s): ",e.director),r.a.createElement("h3",null,"Genre: ",e.genre),r.a.createElement("h3",null,"Released: ",e.released))},g=a(15),b=a.n(g),N=function(e){return b.a.get("https://www.omdbapi.com/?t="+e+"&apikey=trilogy")},y=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={result:{},search:""},e.searchMovies=function(t){N(t).then((function(t){return e.setState({result:t.data})})).catch((function(e){return console.log(e)}))},e.handleInputChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(i.a)({},n,r))},e.handleFormSubmit=function(t){t.preventDefault(),e.searchMovies(e.state.search)},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.searchMovies("Midsommar")}},{key:"render",value:function(){return console.log("RENDERED"),r.a.createElement(h,null,r.a.createElement(d,null,r.a.createElement(v,{size:"md-8"},r.a.createElement(E,{heading:this.state.result.Title||"Search for a Movie to Begin"},r.a.createElement(p,{title:this.state.result.Title,src:this.state.result.Poster,director:this.state.result.Director,genre:this.state.result.Genre,released:this.state.result.Released}))),r.a.createElement(v,{size:"md-4"},r.a.createElement(E,{heading:"Search"},r.a.createElement(f,{value:this.state.search,handleInputChange:this.handleInputChange,handleFormSubmit:this.handleFormSubmit})))))}}]),a}(n.Component);var S=function(){return r.a.createElement(y,null)};c.a.render(r.a.createElement(S,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.1f905c86.chunk.js.map
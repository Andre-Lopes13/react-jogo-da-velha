(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){"use strict";n.r(t);var a=n(8),r=n(1),o=n(2),s=n(4),i=n(3),c=n(5),l=n(0),u=n.n(l),h=n(7),m=n.n(h);n(19);function d(e){return u.a.createElement("button",{className:"square",onClick:e.onClick},e.value)}var p=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(o.a)(t,[{key:"renderSquare",value:function(e){var t=this;return u.a.createElement(d,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)},key:e})}},{key:"render",value:function(){for(var e=0,t=[],n=0;n<3;n++){for(var a=[],r=0;r<3;r++,e++)a.push(this.renderSquare(e));t.push(u.a.createElement("div",{className:"board-row",key:"row-"+n},a))}return t}}]),t}(u.a.Component),f=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(s.a)(this,Object(i.a)(t).call(this,e))).state={history:[{squares:Array(9).fill(null),clicado:null}],stepNumber:0,xIsNext:!0,historyAscending:!0},n}return Object(c.a)(t,e),Object(o.a)(t,[{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),n=t[t.length-1].squares.slice();b(n)||n[e]||(n[e]=this.state.xIsNext?"X":"O",this.setState({history:t.concat([{squares:n,clicado:e}]),stepNumber:t.length,xIsNext:!this.state.xIsNext}))}},{key:"handleToggleOrder",value:function(e){this.setState({historyAscending:e})}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0})}},{key:"render",value:function(){var e,t=this,n=this.state.history,a=n[this.state.stepNumber],r=b(a.squares),o=n.map(function(e,n){var a=n?"Ir para o movimento "+n+" \n Movimento feito por : \n "+(n%2===0?'"X"':' "O" \n')+"em : ("+Math.floor(e.clicado/3+1)+","+Math.floor(e.clicado%3+1)+")":"Ir para o come\xe7o do jogo",r=n===t.state.stepNumber?{fontWeight:"bold"}:{fontWeight:"normal"};return u.a.createElement("li",{key:n,style:r},u.a.createElement("button",{onClick:function(){return t.jumpTo(n)},style:r},a))});return this.state.historyAscending||o.reverse(),e=r?"Winner: "+r:"Next player: "+(this.state.xIsNext?"X":"O"),u.a.createElement("div",{className:"game"},u.a.createElement("div",{className:"game-board"},u.a.createElement(p,{squares:a.squares,onClick:function(e){return t.handleClick(e)}})),u.a.createElement("div",{className:"game-info"},u.a.createElement("div",null,e),u.a.createElement("ol",null,o),u.a.createElement("div",null,"Ordena\xe7\xe3o do Hist\xf3rico de Movimentos",u.a.createElement(v,{option:"Crescente",onChange:function(){return t.handleToggleOrder(!0)},checked:this.state.historyAscending}),u.a.createElement(v,{option:"Decrescente",onChange:function(){return t.handleToggleOrder(!1)},checked:!this.state.historyAscending}))))}}]),t}(u.a.Component);function v(e){var t=e.option,n=t.slice(0,1).toUpperCase()+t.slice(1);return u.a.createElement("div",null,u.a.createElement("input",{type:"radio",id:t,name:t,value:t,checked:e.checked,onChange:e.onChange}),u.a.createElement("label",{htmlFor:t},n))}function b(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<t.length;n++){var r=Object(a.a)(t[n],3),o=r[0],s=r[1],i=r[2];if(e[o]&&e[o]===e[s]&&e[o]===e[i])return e[o]}return null}m.a.createRoot(document.getElementById("root")).render(u.a.createElement(f,null))},19:function(e,t,n){},9:function(e,t,n){e.exports=n(10)}},[[9,2,1]]]);
//# sourceMappingURL=main.7dc27fcf.chunk.js.map
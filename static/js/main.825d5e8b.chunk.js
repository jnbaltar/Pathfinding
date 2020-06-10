(this.webpackJsonppathfinder=this.webpackJsonppathfinder||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},function(e,t,n){e.exports=n(27)},,,,,function(e,t,n){},,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(9),s=n.n(r),o=(n(19),n(10)),u=(n(23),n(2)),l=n(4),c=n(5),d=n(7),f=n(6),h=n(13),v=n.n(h),m=(n(24),function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props,t=e.col,n=e.isFinish,a=e.isStart,r=e.isWall,s=e.onMouseDown,o=e.onMouseEnter,u=e.onMouseUp,l=e.row,c=n?"node-finish":a?"node-start":r?"node-wall":"";return i.a.createElement("div",{id:"node-".concat(l,"-").concat(t),className:"node ".concat(c),onMouseDown:function(){return s(l,t)},onMouseEnter:function(){return o(l,t)},onMouseUp:function(){return u()}})}}]),n}(a.Component)),p=n(8);function g(e,t,n){var a=[];t.distance=0;for(var i=function(e){var t,n=[],a=Object(p.a)(e);try{for(a.s();!(t=a.n()).done;){var i,r=t.value,s=Object(p.a)(r);try{for(s.s();!(i=s.n()).done;){var o=i.value;n.push(o)}}catch(u){s.e(u)}finally{s.f()}}}catch(u){a.e(u)}finally{a.f()}return n}(e);i.length;){k(i);var r=i.shift();if(!r.isWall){if(r.distance===1/0)return a;if(r.isVisited=!0,a.push(r),r===n)return a;y(r,e)}}}function k(e){e.sort((function(e,t){return e.distance-t.distance}))}function y(e,t){var n,a=function(e,t){var n=[],a=e.col,i=e.row;i>0&&n.push(t[i-1][a]);i<t.length-1&&n.push(t[i+1][a]);a>0&&n.push(t[i][a-1]);a<t[0].length-1&&n.push(t[i][a+1]);return n.filter((function(e){return!e.isVisited}))}(e,t),i=Object(p.a)(a);try{for(i.s();!(n=i.n()).done;){var r=n.value;r.distance=e.distance+1,r.previousNode=e}}catch(s){i.e(s)}finally{i.f()}}function b(e,t){var n=[],a=e.col,i=e.row;return i>0&&n.push(t[i-1][a]),a<t[0].length-1&&n.push(t[i][a+1]),i<t.length-1&&n.push(t[i+1][a]),a>0&&n.push(t[i][a-1]),n.filter((function(e){return!e.isVisited&&!e.isWall}))}n(25),n(26);var E=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).state={grid:[],algHasRan:!1,mouseIsPressed:!1},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=w();this.setState({grid:e})}},{key:"componentDidUpdate",value:function(){console.log("Grid Updated")}},{key:"handleMouseDown",value:function(e,t){var n=M(this.state.grid,e,t);this.setState({grid:n,mouseIsPressed:!0})}},{key:"handleMouseEnter",value:function(e,t){if(this.state.mouseIsPressed){var n=M(this.state.grid,e,t);this.setState({grid:n})}}},{key:"handleMouseUp",value:function(){this.setState({mouseIsPressed:!1})}},{key:"animateAlgorithm",value:function(e,t){for(var n=this,a=function(a){if(a===e.length)return setTimeout((function(){n.animatePath(t)}),10*a),{v:void 0};setTimeout((function(){var t=e[a];document.getElementById("node-".concat(t.row,"-").concat(t.col)).className="node node-visited"}),10*a)},i=0;i<=e.length;i++){var r=a(i);if("object"===typeof r)return r.v}}},{key:"animatePath",value:function(e){for(var t=function(t){setTimeout((function(){var n=e[t];document.getElementById("node-".concat(n.row,"-").concat(n.col)).className="node node-shortest-path"}),50*t)},n=0;n<e.length;n++)t(n)}},{key:"visualizeDijkstra",value:function(){console.log("Visualize Dijkstra's");var e=this.state.grid,t=e[10][15],n=e[10][35],a=g(e,t,n),i=function(e){for(var t=[],n=e;null!==n;)t.unshift(n),n=n.previousNode;return t}(n);this.animateAlgorithm(a,i)}},{key:"visualizeDFS",value:function(){console.log("Visualize DFS");var e=this.state.grid,t=e[10][15],n=(e[10][35],function(e,t,n){for(var a=[],i=[],r=t;!r.isFinish;){var s=b(r,e);a.push(r),r.isVisited=!0;for(var o=0;o<s.length;o++)if(!r.isWall){i.push(r),r=s[o];break}if(0===s.length){if(0===i.length)break;r=i.pop()}}return{visitedNodesInOrder:a,path:i}}(e,t)),a=n.visitedNodesInOrder,i=n.path;this.animateAlgorithm(a,i)}},{key:"visualizeBFS",value:function(){console.log("Visualize BFS");var e=this.state.grid,t=(e[10][15],e[10][35],(void 0).visitedNodesInOrder),n=(void 0).path;this.animateAlgorithm(t,n)}},{key:"visualize",value:function(){if(this.state.algHasRan){var e=S(this.state.grid);this.setState({grid:e,algHasRan:!1})}else this.visualizeDijkstra(),this.setState({algHasRan:!0})}},{key:"generateRand",value:function(){var e=O(this.state.grid);this.setState({grid:e,mouseIsPressed:!0})}},{key:"render",value:function(){var e=this,t=this.state,n=t.grid,a=t.mouseIsPressed;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"box-1"},i.a.createElement("div",{className:"btn btn-two",onClick:function(){return e.visualizeDFS()}},i.a.createElement("span",null,"DFS")),i.a.createElement("div",{className:"btn btn-two",onClick:function(){return e.visualizeDijkstra()}},i.a.createElement("span",null,"Dikjstra's Algorithm")),i.a.createElement("div",{className:"btn btn-one",onClick:function(){return e.generateRand()}},i.a.createElement("span",null,"Generate Maze")),i.a.createElement("img",{src:v.a,className:"App-logo",alt:"logo"})),i.a.createElement("div",{className:"grid"},n.map((function(t,n){return i.a.createElement("div",{key:n},t.map((function(t,n){var r=t.row,s=t.col,o=t.isFinish,u=t.isStart,l=t.isWall;return i.a.createElement(m,{key:n,col:s,isFinish:o,isStart:u,isWall:l,mouseIsPressed:a,onMouseDown:function(t,n){return e.handleMouseDown(t,n)},onMouseEnter:function(t,n){return e.handleMouseEnter(t,n)},onMouseUp:function(){return e.handleMouseUp()},row:r})})))}))))}}]),n}(a.Component),w=function(){for(var e=[],t=0;t<20;t++){for(var n=[],a=0;a<50;a++)n.push(j(a,t));e.push(n)}return e},j=function(e,t){return{col:e,row:t,isStart:10===t&&15===e,isFinish:10===t&&35===e,distance:1/0,isVisited:!1,isWall:!1,previousNode:null}},M=function(e,t,n){var a=e.slice(),i=a[t][n],r=Object(u.a)(Object(u.a)({},i),{},{isWall:!i.isWall});return a[t][n]=r,a},O=function(e){for(var t=e.slice(),n=0;n<t.length;n++)for(var a=0;a<t[0].length;a++){if(Math.round(.7*Math.random())){var i=t[n][a],r=Object(u.a)(Object(u.a)({},i),{},{isWall:!i.isWall});t[n][a]=r}}return t},S=function(e){return e.slice()};var D=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(o.a,null,i.a.createElement("title",null,"Josh's Pathfinder")),i.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[14,1,2]]]);
//# sourceMappingURL=main.825d5e8b.chunk.js.map
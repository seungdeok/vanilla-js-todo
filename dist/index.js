(()=>{"use strict";const t=class{constructor(t,e={}){this.target=t,this.props=e,this.setup(),this.render(),this.mounted()}setup(){}template(){return""}render(){this.target.innerHTML=this.template()}mounted(){}setState(t){let e=!1;for(const s in Object.keys(t))this.state[s]!==t[s]&&(e=!0);e&&(this.state={...this.state,newState:t},this.render(),this.mounted(),this.updated())}updated(){}};new class extends t{setup(){this.state={data:[]}}template(){return'\n      <div>\n        <div class="input-wrap"></div>\n        <div class="content-wrap"></div>\n      </div>\n    '}mounted(){}}(document.querySelector(".App"),{})})();
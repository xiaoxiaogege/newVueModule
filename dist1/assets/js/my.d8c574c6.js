(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["my"],{"0a26":function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var i=n("ad06"),a=n("78eb"),o=n("9884"),s=n("ea8e"),c=function(t){var e=t.parent,n=t.bem,c=t.role;return{mixins:[Object(o["a"])(e),a["a"]],props:{name:null,value:null,disabled:Boolean,iconSize:[Number,String],checkedColor:String,labelPosition:String,labelDisabled:Boolean,shape:{type:String,default:"round"},bindGroup:{type:Boolean,default:!0}},computed:{disableBindRelation:function(){return!this.bindGroup},isDisabled:function(){return this.parent&&this.parent.disabled||this.disabled},direction:function(){return this.parent&&this.parent.direction||null},iconStyle:function(){var t=this.checkedColor||this.parent&&this.parent.checkedColor;if(t&&this.checked&&!this.isDisabled)return{borderColor:t,backgroundColor:t}},tabindex:function(){return this.isDisabled||"radio"===c&&!this.checked?-1:0}},methods:{onClick:function(t){var e=this,n=t.target,i=this.$refs.icon,a=i===n||i.contains(n);this.isDisabled||!a&&this.labelDisabled?this.$emit("click",t):(this.toggle(),setTimeout((function(){e.$emit("click",t)})))},genIcon:function(){var t=this.$createElement,e=this.checked,a=this.iconSize||this.parent&&this.parent.iconSize;return t("div",{ref:"icon",class:n("icon",[this.shape,{disabled:this.isDisabled,checked:e}]),style:{fontSize:Object(s["a"])(a)}},[this.slots("icon",{checked:e})||t(i["a"],{attrs:{name:"success"},style:this.iconStyle})])},genLabel:function(){var t=this.$createElement,e=this.slots();if(e)return t("span",{class:n("label",[this.labelPosition,{disabled:this.isDisabled}])},[e])}},render:function(){var t=arguments[0],e=[this.genIcon()];return"left"===this.labelPosition?e.unshift(this.genLabel()):e.push(this.genLabel()),t("div",{attrs:{role:c,tabindex:this.tabindex,"aria-checked":String(this.checked)},class:n([{disabled:this.isDisabled,"label-disabled":this.labelDisabled},this.direction]),on:{click:this.onClick}},[e])}}}},"0c6f":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-contact-card",{attrs:{type:t.cardType,name:t.currentContact.name,tel:t.currentContact.tel},on:{click:function(e){t.showList=!0}}}),n("van-popup",{attrs:{position:"bottom"},model:{value:t.showList,callback:function(e){t.showList=e},expression:"showList"}},[n("van-contact-list",{attrs:{list:t.list},on:{add:t.onAdd,edit:t.onEdit,select:t.onSelect},model:{value:t.chosenContactId,callback:function(e){t.chosenContactId=e},expression:"chosenContactId"}})],1),n("van-popup",{attrs:{position:"bottom"},model:{value:t.showEdit,callback:function(e){t.showEdit=e},expression:"showEdit"}},[n("van-contact-edit",{attrs:{"contact-info":t.editingContact,"is-edit":t.isEdit},on:{save:t.onSave,delete:t.onDelete}})],1),n("mTabbar")],1)},a=[],o=(n("4de4"),n("d81d"),n("b0c0"),n("ade3")),s=(n("68ef"),n("a71a"),n("9d70"),n("3743"),n("4d75"),n("d282")),c=n("a142"),l=n("6605"),r=n("ad06"),d=Object(s["a"])("popup"),u=d[0],h=d[1],f=u({mixins:[Object(l["a"])()],props:{round:Boolean,duration:[Number,String],closeable:Boolean,transition:String,safeAreaInsetBottom:Boolean,closeIcon:{type:String,default:"cross"},closeIconPosition:{type:String,default:"top-right"},position:{type:String,default:"center"},overlay:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!0}},beforeCreate:function(){var t=this,e=function(e){return function(n){return t.$emit(e,n)}};this.onClick=e("click"),this.onOpened=e("opened"),this.onClosed=e("closed")},render:function(){var t,e=arguments[0];if(this.shouldRender){var n=this.round,i=this.position,a=this.duration,o="center"===i,s=this.transition||(o?"van-fade":"van-popup-slide-"+i),l={};if(Object(c["b"])(a)){var d=o?"animationDuration":"transitionDuration";l[d]=a+"s"}return e("transition",{attrs:{name:s},on:{afterEnter:this.onOpened,afterLeave:this.onClosed}},[e("div",{directives:[{name:"show",value:this.value}],style:l,class:h((t={round:n},t[i]=i,t["safe-area-inset-bottom"]=this.safeAreaInsetBottom,t)),on:{click:this.onClick}},[this.slots(),this.closeable&&e(r["a"],{attrs:{role:"button",tabindex:"0",name:this.closeIcon},class:h("close-icon",this.closeIconPosition),on:{click:this.close}})])])}}}),b=(n("1a04"),n("1146"),n("e3b3"),n("d9d2"),n("bc1b"),n("2fcb"),n("d8ea"),n("c31d"));function m(t){return t=t.replace(/[^-|\d]/g,""),/^((\+86)|(86))?(1)\d{10}$/.test(t)||/^0[0-9-]{10,13}$/.test(t)}var v,p=n("7744"),g=n("565f"),C=n("b650"),k=n("8bbf"),y=n.n(k),O=n("ea8e"),S=n("b1d2"),B=Object(s["a"])("dialog"),w=B[0],j=B[1],x=B[2],D=w({mixins:[Object(l["a"])()],props:{title:String,width:[Number,String],message:String,className:null,callback:Function,beforeClose:Function,messageAlign:String,cancelButtonText:String,cancelButtonColor:String,confirmButtonText:String,confirmButtonColor:String,showCancelButton:Boolean,transition:{type:String,default:"van-dialog-bounce"},showConfirmButton:{type:Boolean,default:!0},overlay:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!1}},data:function(){return{loading:{confirm:!1,cancel:!1}}},methods:{onClickOverlay:function(){this.handleAction("overlay")},handleAction:function(t){var e=this;this.$emit(t),this.value&&(this.beforeClose?(this.loading[t]=!0,this.beforeClose(t,(function(n){!1!==n&&e.loading[t]&&e.onClose(t),e.loading.confirm=!1,e.loading.cancel=!1}))):this.onClose(t))},onClose:function(t){this.close(),this.callback&&this.callback(t)},onOpened:function(){this.$emit("opened")},onClosed:function(){this.$emit("closed")},genButtons:function(){var t,e=this,n=this.$createElement,i=this.showCancelButton&&this.showConfirmButton;return n("div",{class:[S["e"],j("footer",{buttons:i})]},[this.showCancelButton&&n(C["a"],{attrs:{size:"large",loading:this.loading.cancel,text:this.cancelButtonText||x("cancel")},class:j("cancel"),style:{color:this.cancelButtonColor},on:{click:function(){e.handleAction("cancel")}}}),this.showConfirmButton&&n(C["a"],{attrs:{size:"large",loading:this.loading.confirm,text:this.confirmButtonText||x("confirm")},class:[j("confirm"),(t={},t[S["c"]]=i,t)],style:{color:this.confirmButtonColor},on:{click:function(){e.handleAction("confirm")}}})])}},render:function(){var t,e=arguments[0];if(this.shouldRender){var n=this.message,i=this.messageAlign,a=this.slots(),o=this.slots("title")||this.title,s=o&&e("div",{class:j("header",{isolated:!n&&!a})},[o]),c=(a||n)&&e("div",{class:j("content")},[a||e("div",{domProps:{innerHTML:n},class:j("message",(t={"has-title":o},t[i]=i,t))})]);return e("transition",{attrs:{name:this.transition},on:{afterEnter:this.onOpened,afterLeave:this.onClosed}},[e("div",{directives:[{name:"show",value:this.value}],attrs:{role:"dialog","aria-labelledby":this.title||n},class:[j(),this.className],style:{width:Object(O["a"])(this.width)}},[s,c,this.genButtons()])])}}});function E(t){return document.body.contains(t)}function $(){v&&v.$destroy(),v=new(y.a.extend(D))({el:document.createElement("div"),propsData:{lazyRender:!1}}),v.$on("input",(function(t){v.value=t}))}function I(t){return c["f"]?Promise.resolve():new Promise((function(e,n){v&&E(v.$el)||$(),Object(b["a"])(v,I.currentOptions,t,{resolve:e,reject:n})}))}I.defaultOptions={value:!0,title:"",width:"",message:"",overlay:!0,className:"",lockScroll:!0,transition:"van-dialog-bounce",beforeClose:null,overlayClass:"",overlayStyle:null,messageAlign:"",getContainer:"body",cancelButtonText:"",cancelButtonColor:null,confirmButtonText:"",confirmButtonColor:null,showConfirmButton:!0,showCancelButton:!1,closeOnPopstate:!1,closeOnClickOverlay:!1,callback:function(t){v["confirm"===t?"resolve":"reject"](t)}},I.alert=I,I.confirm=function(t){return I(Object(b["a"])({showCancelButton:!0},t))},I.close=function(){v&&(v.value=!1)},I.setDefaultOptions=function(t){Object(b["a"])(I.currentOptions,t)},I.resetDefaultOptions=function(){I.currentOptions=Object(b["a"])({},I.defaultOptions)},I.resetDefaultOptions(),I.install=function(){y.a.use(D)},I.Component=D,y.a.prototype.$dialog=I;var T=I,L={size:[Number,String],value:null,loading:Boolean,disabled:Boolean,activeColor:String,inactiveColor:String,activeValue:{type:null,default:!0},inactiveValue:{type:null,default:!1}},z=n("78eb"),A=n("543e"),V=Object(s["a"])("switch"),P=V[0],F=V[1],N=P({mixins:[z["a"]],props:L,computed:{checked:function(){return this.value===this.activeValue},style:function(){return{fontSize:Object(O["a"])(this.size),backgroundColor:this.checked?this.activeColor:this.inactiveColor}}},methods:{onClick:function(t){if(this.$emit("click",t),!this.disabled&&!this.loading){var e=this.checked?this.inactiveValue:this.activeValue;this.$emit("input",e),this.$emit("change",e)}},genLoading:function(){var t=this.$createElement;if(this.loading){var e=this.checked?this.activeColor:this.inactiveColor;return t(A["a"],{class:F("loading"),attrs:{color:e}})}}},render:function(){var t=arguments[0],e=this.checked,n=this.loading,i=this.disabled;return t("div",{class:F({on:e,loading:n,disabled:i}),attrs:{role:"switch","aria-checked":String(e)},style:this.style,on:{click:this.onClick}},[t("div",{class:F("node")},[this.genLoading()])])}}),R=Object(s["a"])("contact-edit"),M=R[0],G=R[1],J=R[2],K={tel:"",name:""},_=M({props:{isEdit:Boolean,isSaving:Boolean,isDeleting:Boolean,showSetDefault:Boolean,setDefaultLabel:String,contactInfo:{type:Object,default:function(){return Object(b["a"])({},K)}},telValidator:{type:Function,default:m}},data:function(){return{data:Object(b["a"])(Object(b["a"])({},K),this.contactInfo),errorInfo:{name:"",tel:""}}},watch:{contactInfo:function(t){this.data=Object(b["a"])(Object(b["a"])({},K),t)}},methods:{onFocus:function(t){this.errorInfo[t]=""},getErrorMessageByKey:function(t){var e=this.data[t].trim();switch(t){case"name":return e?"":J("nameInvalid");case"tel":return this.telValidator(e)?"":J("telInvalid")}},onSave:function(){var t=this,e=["name","tel"].every((function(e){var n=t.getErrorMessageByKey(e);return n&&(t.errorInfo[e]=n),!n}));e&&!this.isSaving&&this.$emit("save",this.data)},onDelete:function(){var t=this;T.confirm({message:J("confirmDelete")}).then((function(){t.$emit("delete",t.data)}))}},render:function(){var t=this,e=arguments[0],n=this.data,i=this.errorInfo,a=function(e){return function(){return t.onFocus(e)}};return e("div",{class:G()},[e("div",{class:G("fields")},[e(g["a"],{attrs:{clearable:!0,maxlength:"30",label:J("name"),placeholder:J("nameEmpty"),errorMessage:i.name},on:{focus:a("name")},model:{value:n.name,callback:function(e){t.$set(n,"name",e)}}}),e(g["a"],{attrs:{clearable:!0,type:"tel",label:J("tel"),placeholder:J("telEmpty"),errorMessage:i.tel},on:{focus:a("tel")},model:{value:n.tel,callback:function(e){t.$set(n,"tel",e)}}})]),this.showSetDefault&&e(p["a"],{attrs:{title:this.setDefaultLabel,border:!1},class:G("switch-cell")},[e(N,{attrs:{size:24},on:{change:function(e){t.$emit("change-default",e)}},model:{value:n.isDefault,callback:function(e){t.$set(n,"isDefault",e)}}})]),e("div",{class:G("buttons")},[e(C["a"],{attrs:{block:!0,round:!0,type:"danger",text:J("save"),loading:this.isSaving},on:{click:this.onSave}}),this.isEdit&&e(C["a"],{attrs:{block:!0,round:!0,text:J("delete"),loading:this.isDeleting},on:{click:this.onDelete}})])])}}),q=(n("dde9"),n("9b7e"),n("dc1b"),n("515a"),n("2638")),H=n.n(q),W=n("ba31"),Q=n("a3e2"),U=n("0a26"),X=Object(s["a"])("radio"),Y=X[0],Z=X[1],tt=Y({mixins:[Object(U["a"])({bem:Z,role:"radio",parent:"vanRadio"})],computed:{currentValue:{get:function(){return this.parent?this.parent.value:this.value},set:function(t){(this.parent||this).$emit("input",t)}},checked:function(){return this.currentValue===this.name}},methods:{toggle:function(){this.currentValue=this.name}}}),et=n("9884"),nt=Object(s["a"])("radio-group"),it=nt[0],at=nt[1],ot=it({mixins:[Object(et["b"])("vanRadio"),z["a"]],props:{value:null,disabled:Boolean,direction:String,checkedColor:String,iconSize:[Number,String]},watch:{value:function(t){this.$emit("change",t)}},render:function(){var t=arguments[0];return t("div",{class:at([this.direction]),attrs:{role:"radiogroup"}},[this.slots()])}}),st=Object(s["a"])("contact-list"),ct=st[0],lt=st[1],rt=st[2];function dt(t,e,n,i){var a=e.list&&e.list.map((function(n,a){function o(){Object(W["a"])(i,"input",n.id),Object(W["a"])(i,"select",n,a)}function s(){return t(tt,{attrs:{name:n.id,iconSize:16,checkedColor:S["g"]},on:{click:o}})}function c(){return t(r["a"],{attrs:{name:"edit"},class:lt("edit"),on:{click:function(t){t.stopPropagation(),Object(W["a"])(i,"edit",n,a)}}})}function l(){var i=[n.name+"，"+n.tel];return n.isDefault&&e.defaultTagText&&i.push(t(Q["a"],{attrs:{type:"danger",round:!0},class:lt("item-tag")},[e.defaultTagText])),i}return t(p["a"],{key:n.id,attrs:{isLink:!0,center:!0,valueClass:lt("item-value")},class:lt("item"),scopedSlots:{icon:c,default:l,"right-icon":s},on:{click:o}})}));return t("div",H()([{class:lt()},Object(W["b"])(i)]),[t(ot,{attrs:{value:e.value},class:lt("group")},[a]),t("div",{class:lt("bottom")},[t(C["a"],{attrs:{round:!0,block:!0,type:"danger",text:e.addText||rt("addText")},class:lt("add"),on:{click:function(){Object(W["a"])(i,"add")}}})])])}dt.props={value:null,list:Array,addText:String,defaultTagText:String};var ut=ct(dt),ht=(n("fd82"),Object(s["a"])("contact-card")),ft=ht[0],bt=ht[1],mt=ht[2];function vt(t,e,n,i){var a=e.type,o=e.editable;function s(t){o&&Object(W["a"])(i,"click",t)}function c(){return"add"===a?e.addText||mt("addText"):[t("div",[mt("name")+"："+e.name]),t("div",[mt("tel")+"："+e.tel])]}return t(p["a"],H()([{attrs:{center:!0,border:!1,isLink:o,valueClass:bt("value"),icon:"edit"===a?"contact":"add-square"},class:bt([a]),on:{click:s}},Object(W["b"])(i)]),[c()])}vt.props={tel:String,name:String,addText:String,editable:{type:Boolean,default:!0},type:{type:String,default:"add"}};var pt,gt=ft(vt),Ct=n("26fc"),kt={components:(pt={mTabbar:Ct["a"]},Object(o["a"])(pt,gt.name,gt),Object(o["a"])(pt,ut.name,ut),Object(o["a"])(pt,_.name,_),Object(o["a"])(pt,f.name,f),pt),data:function(){return{chosenContactId:null,editingContact:{},showList:!1,showEdit:!1,isEdit:!1,list:[{name:"张三",tel:"13000000000",id:0}]}},computed:{cardType:function(){return null!==this.chosenContactId?"edit":"add"},currentContact:function(){var t=this.chosenContactId;return null!==t?this.list.filter((function(e){return e.id===t}))[0]:{}}},created:function(){},mounted:function(){},methods:{onAdd:function(){this.editingContact={id:this.list.length},this.isEdit=!1,this.showEdit=!0},onEdit:function(t){this.isEdit=!0,this.showEdit=!0,this.editingContact=t},onSelect:function(){this.showList=!1},onSave:function(t){this.showEdit=!1,this.showList=!1,this.isEdit?this.list=this.list.map((function(e){return e.id===t.id?t:e})):this.list.push(t),this.chosenContactId=t.id},onDelete:function(t){this.showEdit=!1,this.list=this.list.filter((function(e){return e.id!==t.id})),this.chosenContactId===t.id&&(this.chosenContactId=null)}}},yt=kt,Ot=n("2877"),St=Object(Ot["a"])(yt,i,a,!1,null,null,null);e["default"]=St.exports},"2fcb":function(t,e,n){},"515a":function(t,e,n){},"78eb":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var i={inject:{vanField:{default:null}},watch:{value:function(){var t=this.vanField;t&&(t.resetValidation(),t.validateWithTrigger("onChange"))}},created:function(){var t=this.vanField;t&&!t.children&&(t.children=this)}}},d81d:function(t,e,n){"use strict";var i=n("23e7"),a=n("b727").map,o=n("1dde"),s=n("ae40"),c=o("map"),l=s("map");i({target:"Array",proto:!0,forced:!c||!l},{map:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},d8ea:function(t,e,n){},d9d2:function(t,e,n){},dc1b:function(t,e,n){},dde9:function(t,e,n){},fd82:function(t,e,n){}}]);
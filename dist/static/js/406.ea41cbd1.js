"use strict";(self["webpackChunkvue_waimai"]=self["webpackChunkvue_waimai"]||[]).push([[406],{6794:function(e,t,s){s.d(t,{Z:function(){return m}});var a=s(3396),n=s(7139);const d={class:"header"};function r(e,t,s,r,i,o){const l=(0,a.up)("van-icon");return(0,a.wg)(),(0,a.iD)("div",d,[(0,a.Wm)(l,{name:"arrow-left",class:"icon",onClick:r.toBack},null,8,["onClick"]),(0,a._)("div",null,(0,n.zw)(s.title),1),s.edit?((0,a.wg)(),(0,a.iD)("div",{key:0,class:"edit",onClick:t[0]||(t[0]=(...e)=>r.handleEdit&&r.handleEdit(...e))},(0,n.zw)(r.store.state.edit?"编辑":"完成"),1)):(0,a.kq)("",!0)])}var i=s(2483),o=s(9733),l=s(65),c={props:["title","edit"],setup(){const e=(0,i.tv)(),t=(0,l.oR)(),s=()=>{e.back()},a=()=>{t.state.cartList.length?(t.commit("edit"),t.commit("ChangeDelete")):o.F.fail("请添加商品到购物车!")};return{toBack:s,handleEdit:a,store:t}}},u=s(89);const v=(0,u.Z)(c,[["render",r],["__scopeId","data-v-1b4411f3"]]);var m=v},5406:function(e,t,s){s.r(t),s.d(t,{default:function(){return m}});var a=s(3396);function n(e,t,s,n,d,r){const i=(0,a.up)("Header"),o=(0,a.up)("van-address-edit");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(i,{title:n.address},null,8,["title"]),(0,a.Wm)(o,{"area-list":e.areaList,"show-delete":"","show-set-default":"","show-search-result":"","address-info":e.addressInfo,"area-columns-placeholder":["请选择","请选择","请选择"],onSave:n.onSave,onDelete:n.onDelete},null,8,["area-list","address-info","onSave","onDelete"])],64)}var d=s(6794),r=s(4870),i=s(2483),o=s(65),l=s(9733),c={components:{Header:d.Z},setup(){const e=(0,i.yj)(),t=(0,i.tv)(),s=(0,o.oR)(),n=(0,r.qj)({areaList:{province_list:{11e4:"广东省",12e4:"浙江省"},city_list:{110100:"广州市",110200:"深圳市",120100:"杭州市",120200:"宁波市"},county_list:{110101:"天河区",110102:"海珠区",120102:"上城区",130102:"下城区"}},addressInfo:{}}),d=a=>{"add"===e.query.type?s.commit("addAddress",a):s.commit("editAddress",a),(0,l.F)("保存成功"),setTimeout((()=>{t.back()}),1e3)},c=e=>{s.commit("deleteAddress",e),(0,l.F)("删除成功"),setTimeout((()=>{t.back()}),1e3)},u=()=>{s.state.userAddress.forEach((t=>{t.id===Number(e.query.id)&&(n.addressInfo=t)}))},v=(0,a.Fl)((()=>"add"===e.query.type?"地址新增":"地址编辑"));return(0,a.bv)((()=>{u()})),{...(0,r.BK)(n),onSave:d,onDelete:c,address:v}}},u=s(89);const v=(0,u.Z)(c,[["render",n],["__scopeId","data-v-7b6638f9"]]);var m=v}}]);
//# sourceMappingURL=406.ea41cbd1.js.map
import{C as c}from"./ChainsScene-BFD58PR0.js";import{d as u,r as i,a as f,c as d,o as m}from"./index-CLjOvJ4p.js";const x=u({__name:"StressView",setup(p){const t=i({});f(()=>{l()});const l=(s=200,n=25)=>{let o=0;for(let e=0;e<s;e++){const a=e%n===0,r=e%n;a&&e!==0&&o++,t.value[e]={id:e,parentId:o*n,x:r*200,y:a?o*400:o*400+200}}};return(s,n)=>(m(),d(c,{value:t.value,"onUpdate:value":n[0]||(n[0]=o=>t.value=o)},null,8,["value"]))}});export{x as default};

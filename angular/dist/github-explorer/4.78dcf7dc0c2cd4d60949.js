(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{SJHc:function(t,o,n){"use strict";n.r(o),n.d(o,"RepositoryModule",(function(){return d}));var r=n("ofXK"),s=n("fXoL"),e=n("12M8"),i=n("tyNb"),c=n("2MiI");let p=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=s.Bb({type:t,selectors:[["app-repository-info"]],inputs:{repository:"repository"},decls:24,vars:7,consts:[[1,"repository-info"],[1,"repository-info__header"],[3,"src","alt"],[1,"repository-info__container"],[1,"repository-info__list"]],template:function(t,o){1&t&&(s.Kb(0,"div",0),s.Kb(1,"header",1),s.Ib(2,"img",2),s.Kb(3,"div",3),s.Kb(4,"strong"),s.cc(5),s.Jb(),s.Kb(6,"p"),s.cc(7),s.Jb(),s.Jb(),s.Jb(),s.Kb(8,"ul",4),s.Kb(9,"li"),s.Kb(10,"strong"),s.cc(11),s.Jb(),s.Kb(12,"span"),s.cc(13,"Stars"),s.Jb(),s.Jb(),s.Kb(14,"li"),s.Kb(15,"strong"),s.cc(16),s.Jb(),s.Kb(17,"span"),s.cc(18,"Forks"),s.Jb(),s.Jb(),s.Kb(19,"li"),s.Kb(20,"strong"),s.cc(21),s.Jb(),s.Kb(22,"span"),s.cc(23,"Issues abertas"),s.Jb(),s.Jb(),s.Jb(),s.Jb()),2&t&&(s.xb(2),s.Tb("src",null==o.repository?null:o.repository.owner.avatar_url,s.Zb)("alt",null==o.repository?null:o.repository.owner.login),s.xb(3),s.dc(null==o.repository?null:o.repository.full_name),s.xb(2),s.dc(null==o.repository?null:o.repository.description),s.xb(4),s.dc(null==o.repository?null:o.repository.stargazers_count),s.xb(5),s.dc(null==o.repository?null:o.repository.forks_count),s.xb(5),s.dc(null==o.repository?null:o.repository.open_issues_count))},styles:[".repository-info[_ngcontent-%COMP%]{margin-top:80px}.repository-info__header[_ngcontent-%COMP%]{align-items:center;display:flex}.repository-info__header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:120px;height:120px;border-radius:50%}.repository-info__container[_ngcontent-%COMP%]{margin-left:24px}.repository-info__container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#3d3d4d;font-size:36px}.repository-info__container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:18px;color:#737380;margin-top:4px}.repository-info__list[_ngcontent-%COMP%]{display:flex;list-style:none;margin-top:40px}.repository-info__list[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{display:block;font-size:36px;color:#3d3d4d}.repository-info__list[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;margin-top:4px;color:#6c6c8c}.repository-info__list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] + li[_ngcontent-%COMP%]{margin-left:80px}"]}),t})();var l=n("xFg+");function b(t,o){if(1&t&&(s.Kb(0,"li"),s.Kb(1,"a",2),s.Ib(2,"app-bar-info",3),s.Jb(),s.Jb()),2&t){const t=o.$implicit;s.xb(1),s.Tb("href",t.html_url,s.Zb),s.xb(1),s.Tb("title",t.title)("description",t.user.login)}}let a=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=s.Bb({type:t,selectors:[["app-list-issues"]],inputs:{issues:"issues"},decls:2,vars:1,consts:[[1,"list"],[4,"ngFor","ngForOf"],[3,"href"],[3,"title","description"]],template:function(t,o){1&t&&(s.Kb(0,"ul",0),s.bc(1,b,3,3,"li",1),s.Jb()),2&t&&(s.xb(1),s.Tb("ngForOf",o.issues))},directives:[r.i,l.a],styles:[""]}),t})();const u=[{path:"",component:(()=>{class t{constructor(t,o){this.repositoryService=t,this.route=o}ngOnInit(){this.route.params.subscribe(t=>{const o=`${t.owner}/${t.repository}`;this.repositoryService.getRepositoryData(o).subscribe(t=>{this.repository=t}),this.repositoryService.getIssue(o).subscribe(t=>{this.issues=t})})}}return t.\u0275fac=function(o){return new(o||t)(s.Hb(e.a),s.Hb(i.a))},t.\u0275cmp=s.Bb({type:t,selectors:[["app-repository"]],decls:4,vars:3,consts:[[1,"about"],[3,"showButtonBack"],[3,"repository"],[3,"issues"]],template:function(t,o){1&t&&(s.Kb(0,"div",0),s.Ib(1,"app-header",1),s.Ib(2,"app-repository-info",2),s.Ib(3,"app-list-issues",3),s.Jb()),2&t&&(s.xb(1),s.Tb("showButtonBack",!0),s.xb(1),s.Tb("repository",o.repository),s.xb(1),s.Tb("issues",o.issues))},directives:[c.a,p,a],styles:[""]}),t})()}];let y=(()=>{class t{}return t.\u0275mod=s.Fb({type:t}),t.\u0275inj=s.Eb({factory:function(o){return new(o||t)},imports:[[i.d.forChild(u)],i.d]}),t})();var f=n("WinS"),_=n("cv/d");let d=(()=>{class t{}return t.\u0275mod=s.Fb({type:t}),t.\u0275inj=s.Eb({factory:function(o){return new(o||t)},imports:[[r.b,y,f.a,i.d,_.a]]}),t})()}}]);
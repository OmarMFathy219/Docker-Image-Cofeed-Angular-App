"use strict";(self.webpackChunkcofeed_social_media_dashboard=self.webpackChunkcofeed_social_media_dashboard||[]).push([[172],{172:(k,p,i)=>{i.r(p),i.d(p,{DashboardModule:()=>y});var a=i(808),m=i(140),e=i(223);let l=(()=>{class t{constructor(){}set(o,n){try{localStorage.setItem(o,JSON.stringify(n))}catch(r){console.error("Error saving to localStorage",r)}}get(o){try{return JSON.parse(localStorage.getItem(o)||"[]")}catch(n){return console.error("Error getting data from localStorage",n),null}}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),c=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["add-story"]],decls:4,vars:0,consts:[[1,"flex","items-center","justify-center","border-2","border-white-blue","rounded-full","relative","w-90","h-90","overflow-hidden"],[1,"overlay","absolute","flex","items-center","justify-center","text-white","font-size-30","cursor-pointer"],[1,"fa-duotone","fa-plus"],["src","/assets/images/persons/person1.jpg","alt","person",1,"w-80","h-80","rounded-full","m-auto"]],template:function(o,n){1&o&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"i",2),e.qZA(),e._UZ(3,"img",3),e.qZA())},styles:[".m-auto[_ngcontent-%COMP%]{margin:0 auto!important}.overlay[_ngcontent-%COMP%]{background-color:#a974ffb3;width:95%;height:95%;left:2px;border-radius:100%}"]}),t})();function d(t,s){if(1&t&&(e.TgZ(0,"div",1)(1,"div",3),e._UZ(2,"img",4),e.qZA()()),2&t){const o=s.$implicit;e.xp6(2),e.s9C("src",o.image,e.LSH),e.s9C("alt",o.image),e.s9C("title",o.image)}}let g=(()=>{class t{constructor(){this.stories=[{name:"name",image:"/assets/images/persons/person2.jpg"},{name:"name",image:"/assets/images/persons/person3.jpg"},{name:"name",image:"/assets/images/persons/person4.jpg"},{name:"name",image:"/assets/images/persons/person5.jpg"},{name:"name",image:"/assets/images/persons/person6.jpg"},{name:"name",image:"/assets/images/persons/person6.jpg"},{name:"name",image:"/assets/images/persons/person6.jpg"},{name:"name",image:"/assets/images/persons/person6.jpg"},{name:"name",image:"/assets/images/persons/person6.jpg"},{name:"name",image:"/assets/images/persons/person6.jpg"},{name:"name",image:"/assets/images/persons/person6.jpg"},{name:"name",image:"/assets/images/persons/person7.jpg"}]}ngOnInit(){}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["stories"]],decls:4,vars:1,consts:[[1,"row","pb-16"],[1,"col-xs-3","col-md-2"],["class","col-xs-3 col-md-2",4,"ngFor","ngForOf"],[1,"flex","items-center","justify-center","border-2","border-primary","rounded-full","w-90","h-90","overflow-hidden"],[1,"w-80","h-80","rounded-full",3,"src","alt","title"]],template:function(o,n){1&o&&(e.TgZ(0,"section",0)(1,"div",1),e._UZ(2,"add-story"),e.qZA(),e.YNc(3,d,3,3,"div",2),e.qZA()),2&o&&(e.xp6(3),e.Q6J("ngForOf",n.stories))},directives:[c,a.sg],styles:[".row[_ngcontent-%COMP%]{flex-wrap:nowrap!important;overflow-x:auto;gap:24px}.row[_ngcontent-%COMP%]::-webkit-scrollbar{height:4px!important}.row[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:#a974ff;border-radius:20px}"]}),t})();const u=function(t){return{"text-red-400":t}};let f=(()=>{class t{constructor(){this.setLikes=new e.vpe,this.likeCount=0,this.commentsCount=0}ngOnInit(){}addLike(o,n){this.likeCount=++n,this.setLikes.emit({postId:o,likesNum:n})}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["post-card"]],inputs:{postId:"postId",postImage:"postImage",posterImage:"posterImage",posterName:"posterName",likeCount:"likeCount",commentsCount:"commentsCount"},outputs:{setLikes:"setLikes"},decls:17,vars:8,consts:[[1,"mb-12"],["alt","poster",1,"img-fluid","border-2","border-white","border-radius-25","h-300",3,"src"],[1,"flex","items-center","justify-space-between"],[1,"flex","items-center","gap-8"],["alt","poster",1,"img-fluid","w-35","h-35","rounded-full",3,"src"],[1,"text-dark-blue","font-size-18","font-weight-500","hover-item"],[1,"flex","items-center","gap-16"],[1,"border-0","flex","items-center","gap-2","bg-none","font-size-18","cursor-pointer","text-white-blue",3,"ngClass","click"],[1,"fa-solid","fa-heart"],[1,"border-0","flex","items-center","gap-2","bg-none","font-size-18","text-white-blue","cursor-pointer"],[1,"fa-solid","fa-comment-dots"]],template:function(o,n){1&o&&(e.TgZ(0,"div")(1,"div",0),e._UZ(2,"img",1),e.qZA(),e.TgZ(3,"div",2)(4,"div",3),e._UZ(5,"img",4),e.TgZ(6,"h6",5),e._uU(7),e.qZA()(),e.TgZ(8,"div",6)(9,"button",7),e.NdJ("click",function(){return n.addLike(n.postId,n.likeCount)}),e._UZ(10,"i",8),e.TgZ(11,"p"),e._uU(12),e.qZA()(),e.TgZ(13,"button",9),e._UZ(14,"i",10),e.TgZ(15,"p"),e._uU(16),e.qZA()()()()()),2&o&&(e.xp6(2),e.s9C("src",n.postImage,e.LSH),e.xp6(3),e.s9C("src",n.posterImage,e.LSH),e.xp6(2),e.Oqu(n.posterName),e.xp6(2),e.Q6J("ngClass",e.VKq(6,u,n.likeCount>0)),e.xp6(3),e.Oqu(n.likeCount),e.xp6(4),e.Oqu(n.commentsCount))},directives:[a.mk],styles:[".text-red-400[_ngcontent-%COMP%]{color:#ff5775!important}"]}),t})(),h=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["settings"]],decls:12,vars:0,consts:[[1,"row","gap-12"],[1,"col-xs-7"],[1,"search","flex","items-center","justify-center","gap-12","h-45","text-white-blue","border-2","border-white-blue","border-radius-24"],[1,"fa-solid","fa-magnifying-glass"],[1,"col-xs-2","flex","justify-center"],[1,"search","flex","items-center","justify-center","gap-12","h-45","w-45","text-white-blue","border-2","border-white-blue","rounded-full"],[1,"fa-solid","fa-bell"],[1,"col-xs-2","flex","justify-start"],[1,"search","flex","items-center","justify-center","gap-12","h-45","w-45","bg-blue-300","shadow-lg","text-white","rounded-full"],[1,"fa-solid","fa-cloud-arrow-up"]],template:function(o,n){1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._UZ(3,"i",3),e.TgZ(4,"p"),e._uU(5,"search"),e.qZA()()(),e.TgZ(6,"div",4)(7,"div",5),e._UZ(8,"i",6),e.qZA()(),e.TgZ(9,"div",7)(10,"div",8),e._UZ(11,"i",9),e.qZA()()())},styles:[""]}),t})();function b(t,s){if(1&t&&(e.TgZ(0,"div",1)(1,"div",2)(2,"div",3),e._UZ(3,"img",4),e.qZA(),e.TgZ(4,"div",5)(5,"h6",6),e._uU(6),e.qZA(),e.TgZ(7,"p",7),e._uU(8),e.qZA()()(),e.TgZ(9,"button",8),e._uU(10,"follow"),e.qZA()()),2&t){const o=s.$implicit;e.xp6(3),e.s9C("src",o.img,e.LSH),e.s9C("alt",o.name),e.xp6(3),e.Oqu(o.name),e.xp6(2),e.Oqu(o.user)}}let Z=(()=>{class t{constructor(){this.profiles=[{img:"/assets/images/persons/person2.jpg",name:"Arthur Shelby",user:"@artshelby"},{img:"/assets/images/persons/person4.jpg",name:"Sarah Tancredi",user:"@michaelsco"},{img:"/assets/images/persons/person6.jpg",name:"Vin Diesel",user:"@vindiesel"}]}ngOnInit(){}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["follow"]],decls:1,vars:1,consts:[["class","flex items-center justify-space-between mb-24",4,"ngFor","ngForOf"],[1,"flex","items-center","justify-space-between","mb-24"],[1,"profile","flex","items-center","gap-12"],[1,"profile-img"],[1,"img-fluid","border-2","border-white","rounded-full","w-50","h-50",3,"src","alt"],[1,"profile-title"],[1,"text-dark-blue","font-size-20","font-weight-500","mb-4"],[1,"text-secondary"],[1,"follow-btn","bg-primary","text-white","border-1","border-primary","border-radius-12","px-32","py-10","font-size-16","font-weight-500"]],template:function(o,n){1&o&&e.YNc(0,b,11,4,"div",0),2&o&&e.Q6J("ngForOf",n.profiles)},directives:[a.sg],styles:[".follow-btn[_ngcontent-%COMP%]{cursor:pointer}.follow-btn[_ngcontent-%COMP%]:hover{background-color:#fff;color:#25396f;border:1px solid rgba(37,57,111,.3);transition:all .3s ease-in-out}@media screen and (max-width: 1400px){.follow-btn[_ngcontent-%COMP%]{padding-right:24px!important;padding-left:24px!important}.profile-title[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font-size:16px!important}.profile-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px!important}}"]}),t})(),_=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["post-activity-card"]],decls:21,vars:0,consts:[[1,"flex","items-center","justify-center","bg-white-gray","flex-col","p-32","border-1","border-white","border-radius-24"],[1,"flex","items-center","gap-16"],["src","/assets/images/card-images/poster6.PNG","alt","poster",1,"poster-img","img-fluid","border-1","border-white","border-radius-24"],[1,"text-dark-blue","font-size-20","font-weight-500","mb-16","poster-title"],[1,"flex","items-center","gap-12","poster-btns"],[1,"flex","items-center","gap-2","text-red-400"],[1,"fa-solid","fa-heart"],[1,"flex","items-center","gap-2","text-white-blue"],[1,"fa-solid","fa-comment-dots"],[1,"fa-solid","fa-bookmark"],[1,"text-primary","font-size-20","font-weight-500","mt-24","see-more-btn"]],template:function(o,n){1&o&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"img",2),e.TgZ(3,"div")(4,"h5",3),e._uU(5,"Minimalist Michael Stairs"),e.qZA(),e.TgZ(6,"div",4)(7,"div",5),e._UZ(8,"i",6),e.TgZ(9,"p"),e._uU(10,"24"),e.qZA()(),e.TgZ(11,"div",7),e._UZ(12,"i",8),e.TgZ(13,"p"),e._uU(14,"12"),e.qZA()(),e.TgZ(15,"div",7),e._UZ(16,"i",9),e.TgZ(17,"p"),e._uU(18,"8"),e.qZA()()()()(),e.TgZ(19,"h5",10),e._uU(20,"See all posts"),e.qZA()())},styles:["@media screen and (max-width: 1400px){.poster-img[_ngcontent-%COMP%]{width:100px!important}.poster-title[_ngcontent-%COMP%]{font-size:16px!important}.poster-btns[_ngcontent-%COMP%], .see-more-btn[_ngcontent-%COMP%]{font-size:14px!important}}"]}),t})(),C=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["footer"]],decls:15,vars:0,consts:[[1,"flex","items-center","justify-space-between","gap-8"],["href","#",1,"text-white-blue"],[1,"w-5","h-5","bg-white-blue","rounded-full"]],template:function(o,n){1&o&&(e.TgZ(0,"div",0)(1,"a",1),e._uU(2,"About"),e.qZA(),e._UZ(3,"div",2),e.TgZ(4,"a",1),e._uU(5,"Help"),e.qZA(),e._UZ(6,"div",2),e.TgZ(7,"a",1),e._uU(8,"Terms"),e.qZA(),e._UZ(9,"div",2),e.TgZ(10,"a",1),e._uU(11,"Popular"),e.qZA(),e._UZ(12,"div",2),e.TgZ(13,"a",1),e._uU(14,"Language"),e.qZA()())},styles:[""]}),t})();function v(t,s){if(1&t){const o=e.EpF();e.TgZ(0,"div",17)(1,"post-card",18),e.NdJ("setLikes",function(r){return e.CHM(o),e.oxw().setLikes(r)}),e.qZA()()}if(2&t){const o=s.$implicit;e.xp6(1),e.Q6J("postId",o.postId)("posterImage",o.posterImage)("postImage",o.postImage)("posterName",o.posterName)("likeCount",o.likeCount)("commentsCount",o.commentsCount)}}const w=[{path:"",component:(()=>{class t{constructor(o){this._saveLikes=o,this.posts=[{postId:1,posterImage:"/assets/images/persons/person3.jpg",postImage:"/assets/images/card-images/poster2.PNG",posterName:"Dean Winchester",likeCount:0,commentsCount:0},{postId:2,posterImage:"/assets/images/persons/person4.jpg",postImage:"/assets/images/card-images/poster3.PNG",posterName:"Jesse Pinkman",likeCount:0,commentsCount:0},{postId:3,posterImage:"/assets/images/persons/person5.jpg",postImage:"/assets/images/card-images/poster4.PNG",posterName:"Theodore Bagwell",likeCount:0,commentsCount:0},{postId:4,posterImage:"/assets/images/persons/person7.jpg",postImage:"../../../../../assets/images/card-images/poster5.PNG",posterName:"Walter White",likeCount:0,commentsCount:0}],this.likes=[]}ngOnInit(){this.getLikes()}getLikes(){this.likes=this._saveLikes.get("likes"),this.likes.length>0&&this.likes.forEach(o=>{this.posts.find(r=>r.postId==o.postId).likeCount=o.likesNum})}setLikes(o){const n=this.likes.find(r=>r.postId==o.postId);n?n.likesNum=o.likesNum:this.likes.push(o),this._saveLikes.set("likes",this.likes)}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(l))},t.\u0275cmp=e.Xpm({type:t,selectors:[["dashboard"]],decls:36,vars:1,consts:[[1,"p-32","row"],[1,"col-xs-12","col-md-8","pr-32"],[1,"border-b-1","border-white-gray","mb-16"],[1,"feeds","flex","items-center","justify-space-between"],[1,"text-dark-blue","font-size-20","font-weight-500"],[1,"flex","items-center","gap-24"],["href","#",1,"text-white-blue","font-size-18","font-weight-500","hover-item"],["href","#",1,"text-primary","font-size-18","font-weight-500","hover-item"],[1,"mt-24","cards-group"],["class","card",4,"ngFor","ngForOf"],[1,"hide","show-md","col-md-4","border-l-1","border-white-gray","px-32"],[1,"mb-32"],[1,"border-b-1","border-white-gray"],[1,"flex","items-center","justify-space-between","mb-24"],[1,"text-primary","font-size-16","font-weight-500"],[1,"mb-64"],[1,"my-24"],[1,"card"],[3,"postId","posterImage","postImage","posterName","likeCount","commentsCount","setLikes"]],template:function(o,n){1&o&&(e.TgZ(0,"section",0)(1,"div",1)(2,"div",2),e._UZ(3,"stories"),e.qZA(),e.TgZ(4,"div")(5,"div",3)(6,"h4",4),e._uU(7,"Feeds"),e.qZA(),e.TgZ(8,"div",5)(9,"a",6),e._uU(10,"All"),e.qZA(),e.TgZ(11,"a",6),e._uU(12,"Following"),e.qZA(),e.TgZ(13,"a",6),e._uU(14,"Newest"),e.qZA(),e.TgZ(15,"a",7),e._uU(16,"Popular"),e.qZA()()(),e.TgZ(17,"div",8),e.YNc(18,v,2,6,"div",9),e.qZA()()(),e.TgZ(19,"div",10)(20,"div",11),e._UZ(21,"settings"),e.qZA(),e.TgZ(22,"div",12)(23,"div",13)(24,"h4",4),e._uU(25,"Suggestions For You"),e.qZA(),e.TgZ(26,"p",14),e._uU(27,"See All"),e.qZA()(),e._UZ(28,"follow"),e.qZA(),e.TgZ(29,"div",15)(30,"div",16)(31,"h4",4),e._uU(32,"Latest Post Activity"),e.qZA()(),e._UZ(33,"post-activity-card"),e.qZA(),e.TgZ(34,"div"),e._UZ(35,"footer"),e.qZA()()()),2&o&&(e.xp6(18),e.Q6J("ngForOf",n.posts))},directives:[g,a.sg,f,h,Z,_,C],styles:[".hover-item[_ngcontent-%COMP%]:hover{color:#a974ff;transition:all .3s ease-in-out}.cards-group[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto;display:grid;grid-gap:24px;grid-template-columns:repeat(auto-fit,minmax(300px,1fr))}@media screen and (max-width: 1018px){.p-32[_ngcontent-%COMP%]{padding:12px!important}.pr-32[_ngcontent-%COMP%]{padding-right:0!important}.feeds[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{gap:12px}}"]}),t})()}];let x=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[m.Bz.forChild(w)],m.Bz]}),t})(),y=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[a.ez,x]]}),t})()}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"2qYH":function(t,s,a){"use strict";a.r(s);var e=a("A6W1"),i=a("BA+P"),o={components:{Author:e.a,PostCard:i.a},metaInfo:{title:"Hello, world!"}},n=a("KHd+"),r=null,c=Object(n.a)(o,(function(){var t=this.$createElement,s=this._self._c||t;return s("Layout",[s("h1",{staticClass:"tag-title text-center space-bottom"},[this._v("\n    # "+this._s(this.$page.tag.title)+"\n  ")]),s("div",{staticClass:"posts"},this._l(this.$page.tag.belongsTo.edges,(function(t){return s("PostCard",{key:t.node.id,attrs:{post:t.node}})})),1)])}),[],!1,null,null,null);"function"==typeof r&&r(c);s.default=c.exports},"7qvl":function(t,s,a){},A6W1:function(t,s,a){"use strict";var e={props:["showTitle"]},i=(a("ArLL"),a("KHd+")),o=a("Kw5r"),n=o.a.config.optionMergeStrategies.computed,r={metadata:{siteName:"Rahkapetteri",siteDescription:"Hyvinvointiblogi koodaavan nörtin lasien läpi. Lue artikkeleita treenistä, ruokailusta ja lisäravinteista."}},c=function(t){var s=t.options;s.__staticData?s.__staticData.data=r:(s.__staticData=o.a.observable({data:r}),s.computed=n({$static:function(){return s.__staticData.data}},s.computed))},A=Object(i.a)(e,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"author"},[e("g-image",{staticClass:"author__image",attrs:{alt:"Author image",src:a("ESAu"),width:"180",height:"180",blur:"5"}}),t.showTitle?e("h1",{staticClass:"author__site-title"},[t._v("\n\t\t"+t._s(t.$static.metadata.siteName)+"\n\t")]):t._e(),e("p",{staticClass:"author__intro"},[t._v("\n\t\t"+t._s(t.$static.metadata.siteDescription)+"\n\t")])],1)}),[],!1,null,null,null);"function"==typeof c&&c(A);s.a=A.exports},AO8t:function(t,s,a){},ArLL:function(t,s,a){"use strict";a("AO8t")},"BA+P":function(t,s,a){"use strict";var e=a("n6yM"),i=a("PpWc"),o={components:{PostMeta:e.a,PostTags:i.a},props:["post"]},n=(a("YDir"),a("KHd+")),r=Object(n.a)(o,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"post-card content-box",class:{"post-card--has-poster":t.post.poster}},[a("div",{staticClass:"post-card__header"},[t.post.cover_image?a("g-image",{staticClass:"post-card__image",attrs:{alt:"Cover image",src:t.post.cover_image}}):t._e()],1),a("div",{staticClass:"post-card__content"},[a("h2",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"post-card__title",domProps:{innerHTML:t._s(t.post.title)}}),a("p",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"post-card__description",domProps:{innerHTML:t._s(t.post.description)}}),a("PostMeta",{staticClass:"post-card__meta",attrs:{post:t.post}}),a("PostTags",{staticClass:"post-card__tags",attrs:{post:t.post}}),a("g-link",{staticClass:"post-card__link",attrs:{to:t.post.path}},[t._v("Link")])],1)])}),[],!1,null,null,null);s.a=r.exports},ESAu:function(t,s){t.exports={type:"image",mimeType:"image/jpeg",src:"/assets/static/author.e6b6009.bff0ff1457a2996f6465bdaef89d0440.jpg",size:{width:180,height:180},sizes:"(max-width: 180px) 100vw, 180px",srcset:["/assets/static/author.e6b6009.bff0ff1457a2996f6465bdaef89d0440.jpg 180w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-e911893122a6a49826e5fdffa0f28a43'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='5'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-e911893122a6a49826e5fdffa0f28a43)' width='180' height='180' xlink:href='data:image/jpeg%3bbase64%2c/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCABAAEADASIAAhEBAxEB/8QAGwAAAgMAAwAAAAAAAAAAAAAAAAUDBAYBAgf/xAAtEAACAQMBBwIHAAMAAAAAAAABAgMABAURBhIhMUFRYRMiBxQzcYGRwTKhsf/EABsBAAAHAQAAAAAAAAAAAAAAAAABAgMEBQcG/8QAJBEAAQMDBAIDAQAAAAAAAAAAAQACAwQRIQUSMaFBUUJhkeH/2gAMAwEAAhEDEQA/AMJRRRWnKuVe7vYbUqJSdW4gAa1UbNQDlHIf0KrSW11mc2tnZxepMW9NFHDgOZJ7UxyGwm0FmN4WQuF727h/9cDXIVmvSRzOjY4AePalMp9zb2UCZm3J9yyL501q/DKkyB4mDKeoqnZbE7Q3YBXHPEp6zME/6daikx19s9mlsr9AjSAH2tqrA8iD96XQ6%2b58wilIN/XIRPpyG7rJpRRRXWKMiiipbZUe5hSQ6IzqGPYE8aJx2i6Aypfh/d29htdkZLsqqGBtHIJ3fcvbvXpKbRYpzoLxAfKsP5S/KYvD2WRtZBGltPeK1goQAB94agnyN3n5qpi9k7mC/hmupoWijbe0XXVtKzmJmlVzZaiqe5jskDGR64Ob/atSaiEtZGAR5%2bu08k2gxUbaNeIT4Vj/ACvM/iVeRXu0eNntphJB6QCnQjQhzrzraZzZe4vMlLc2ssSpKd5lfUaHryrti8Ri7zJAyblzPiE%2bTZGUFN9tHL6d%2bJH4pMsel0kMdTSyOdIbXBIxjPxHnHaF6iVzo5AAPB99rA0Uwz8ENtmbyG2AESSEKB08fg60vrRYZBLG2QcEA/qq3N2kgoooopxEq%2b12Yury2xkM0mrWpYo44N00JPcac67YDLWNxM91tNk8r81C6vA8LkkjQ6jxx0pJnZN%2b93eiKB%2b%2bNLqz3UoojUPbGLC/jv8ASp0b3AAnK1u0GWsIZUvNm8nlTezSF53mcgqNOA88da42Kzl1jjkvRYNLchSXfUkHU%2b7yePWsnTDBybl8F6OpH9pOnwxGdjJRuaTbPXaD5HZcMLRsxZizElidSTzJriiitDUFFFFFGglWVxzzSGaDi5HuXv8AakbKVYqwIYcwa2NQ3FtDcfWjVj36/uqKu0Vs7jJEbE8%2bk6yW2CsmoLMFUEseQFPMVjXikWefgw/xTt5NMLe1ht/oxqp78z%2b6moqHRWwuEkxuRwBx/UHy3wEUUUVfJpf/2Q==' /%3e%3c/svg%3e"}},GsXb:function(t,s,a){"use strict";a("7qvl")},NAO6:function(t,s,a){},PpWc:function(t,s,a){"use strict";var e={props:["post"]},i=(a("GsXb"),a("KHd+")),o=Object(i.a)(e,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"post-tags"},t._l(t.post.tags,(function(s){return a("g-link",{key:s.id,staticClass:"post-tags__link",attrs:{to:s.path}},[a("span",[t._v("#")]),t._v(" "+t._s(s.title)+"\n\t\t")])})),1)}),[],!1,null,null,null);s.a=o.exports},YDir:function(t,s,a){"use strict";a("NAO6")},YIUa:function(t,s,a){"use strict";a("hpwU")},hpwU:function(t,s,a){},n6yM:function(t,s,a){"use strict";var e={props:["post"]},i=(a("YIUa"),a("KHd+")),o=Object(i.a)(e,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"post-meta"},[t._v("\n   Julkaistu: "+t._s(t.post.date)+".\n   "),t.post.timeToRead?[a("strong",[t._v("Lukuaika n. "+t._s(t.post.timeToRead)+" min.")])]:t._e()],2)}),[],!1,null,null,null);s.a=o.exports}}]);
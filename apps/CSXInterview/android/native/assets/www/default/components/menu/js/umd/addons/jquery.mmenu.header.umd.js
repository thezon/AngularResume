
/* JavaScript content from components/menu/js/umd/addons/jquery.mmenu.header.umd.js in folder common */
(function ( factory ) {
    if ( typeof define === 'function' && define.amd )
    {
        // AMD. Register as an anonymous module.
        define( [ 'jquery' ], factory );
    }
    else if ( typeof exports === 'object' )
    {
        // Node/CommonJS
        factory( require( 'jquery' ) );
    }
    else
    {
        // Browser globals
        factory( jQuery );
    }
}( function ( jQuery ) {


/*	
 * jQuery mmenu header addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(e){function t(t){return"boolean"==typeof t&&(t={add:t,update:t}),"object"!=typeof t&&(t={}),!t.add||t.add instanceof Array||(t.add=["prev","title","next"]),t=e.extend(!0,{},e[s].defaults[d],t)}function a(e){return e}function n(){f=!0,r=e[s]._c,i=e[s]._d,h=e[s]._e,r.add("header hasheader prev next close title"),o=e[s].glbl}var s="mmenu",d="header";e[s].prototype["_init_"+d]=function(s){f||n();var i=this.vars[d+"_added"];this.vars[d+"_added"]=!0,i||(this.opts[d]=t(this.opts[d]),this.conf[d]=a(this.conf[d]));var l=this,c=this.opts[d];if(this.conf[d],!i&&c.add){if(c.content)var p=c.content;else for(var p="",u=0,v=c.add.length;v>u;u++)switch(c.add[u]){case"prev":case"next":case"close":p+='<a class="'+r[c.add[u]]+'" href="#"></a>';break;case"title":p+='<span class="'+r.title+'"></span>';break;default:p+=c.add[u]}e('<div class="'+r.header+'" />').prependTo(this.$menu).append(p)}var m=e("div."+r.header,this.$menu);if(m.length){if(this.$menu.addClass(r.hasheader),c.update){var b=m.find("."+r.title),_=m.find("."+r.prev),x=m.find("."+r.next),N=m.find("."+r.close),g=!1;o.$page&&(g="#"+o.$page.attr("id"),N.attr("href",g)),s.each(function(){var t=e(this),a=t.find("."+l.conf.classNames[d].panelHeader),n=t.find("."+l.conf.classNames[d].panelPrev),s=t.find("."+l.conf.classNames[d].panelNext),i=a.html(),o=n.attr("href"),f=s.attr("href"),p=n.html(),u=s.html();i||(i=t.find("."+r.subclose).html()),i||(i=c.title),o||(o=t.find("."+r.subclose).attr("href"));var v=function(){b[i?"show":"hide"](),b.html(i),_[o?"attr":"removeAttr"]("href",o),_[o||p?"show":"hide"](),_.html(p),x[f?"attr":"removeAttr"]("href",f),x[f||u?"show":"hide"](),x.html(u)};t.on(h.open,v),t.hasClass(r.current)&&v()})}"function"==typeof this._init_buttonbars&&this._init_buttonbars(m)}},e[s].addons.push(d),e[s].defaults[d]={add:!1,content:!1,title:"Menu",update:!1},e[s].configuration.classNames[d]={panelHeader:"Header",panelNext:"Next",panelPrev:"Prev"};var r,i,h,o,f=!1}(jQuery);
}));
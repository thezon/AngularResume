
/* JavaScript content from components/menu/js/umd/addons/jquery.mmenu.labels.umd.js in folder common */
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
 * jQuery mmenu labels addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(e){function s(s){return"boolean"==typeof s&&(s={collapse:s}),"object"!=typeof s&&(s={}),s=e.extend(!0,{},e[n].defaults[o],s)}function l(e){return e}function a(){i=!0,t=e[n]._c,p=e[n]._d,c=e[n]._e,t.add("collapsed uncollapsed"),d=e[n].glbl}var n="mmenu",o="labels";e[n].prototype["_init_"+o]=function(n){i||a();var p=this.vars[o+"_added"];this.vars[o+"_added"]=!0,p||(this.opts[o]=s(this.opts[o]),this.conf[o]=l(this.conf[o]));var r=this.opts[o];this.conf[o],r.collapse&&(this.__refactorClass(e("li",this.$menu),this.conf.classNames[o].collapsed,"collapsed"),e("."+t.label,n).each(function(){var s=e(this),l=s.nextUntil("."+t.label,"."+t.collapsed);l.length&&(s.children("."+t.subopen).length||(s.wrapInner("<span />"),s.prepend('<a href="#" class="'+t.subopen+" "+t.fullsubopen+'" />')))}),p||d.$body.on(c.click,"."+t.label+" ."+t.subopen,function(s){s.stopPropagation(),s.preventDefault();var l=e(this).parent(),a=l.nextUntil("."+t.label,"."+t.collapsed);l.toggleClass(t.opened),a[l.hasClass(t.opened)?"addClass":"removeClass"](t.uncollapsed)}))},e[n].addons.push(o),e[n].defaults[o]={collapse:!1},e[n].configuration.classNames[o]={collapsed:"Collapsed"};var t,p,c,d,i=!1}(jQuery);
}));
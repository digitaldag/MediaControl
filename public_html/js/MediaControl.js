/* MediaControl v0.1
 * Fire custom functions on CSS @media stage change
 * 
 * Usage:
 * CSS ----------
 * @media only screen and (min-width: 8192px){
 *      #MediaControl{z-index: 6}
 *      #MediaControl:before{content: 'MonsterScreen';}
 * }
 * JS -------------
 * $('#element').on('onMonsterScreen', function() {
 *      $(this).css({background: '#8800FF', color: '#000000'});
 *      alert('I\'m full of pixels!');
 * })
 * -----------------
 * 
 * Changelog
 * v0.1 (31/07/2014)
 * + Initial release
 * 
 * License: This work is licensed under the Creative Commons Attribution 4.0 International License. To view a copy of this license, visit http://creativecommons.org/licenses/by/4.0/ or send a letter to Creative Commons, 444 Castro Street, Suite 900, Mountain View, California, 94041, USA.
 * Contacts: digitald(at)big-d-web(dot)com
 */
(function($) {
        var options = {
                fireOnStop: true,
                fireAlways: false
        };

        window.enVars = window.enVars || {};
        window.enVars.MediaControl = {index: null, name: null, lastState: {index: null, name: null}};


        var timer;
        $(window).resize(function() {
                if (options.fireOnStop) {
                        clearTimeout(timer);
                        timer = setTimeout(function() {
                                $().MediaControl();
                                if ((!options.fireAlways && window.enVars.MediaControl.index != window.enVars.MediaControl.lastState.index) || options.fireAlways) {
                                        media = window.enVars.MediaControl.name;
                                        console.log(media);
                                        event = 'on' + media;
                                        if (event != 'onunknow') {
                                                $('*').each(function() {
                                                        $(this).triggerHandler(event);
                                                });
                                        }
                                }
                        }, 100);
                }
                else {
                        $().MediaControl();
                        if ((!options.fireAlways && window.enVars.MediaControl.index != window.enVars.MediaControl.lastState.index) || options.fireAlways) {
                                media = window.enVars.MediaControl.name;
                                console.log(media);
                                event = 'on' + media;
                                if (event != 'onunknow') {
                                        $('*').each(function() {
                                                $(this).triggerHandler(event);
                                        });
                                }
                        }
                }
        });

        $.fn.MediaControl = function() {
                if ($('#MediaControl').length == 0) {
                        $('<div id="MediaControl"></div>').prependTo('body');
                }

                $('#MediaControl').each(function() {
                        var mediaIndex = parseInt($('#MediaControl').css('z-index'));
                        var mediaName = window.getComputedStyle(this, ':before').content;
                        window.enVars.MediaControl = {
                                lastState: {index: window.enVars.MediaControl.index, name: window.enVars.MediaControl.name},
                                index: mediaIndex,
                                name: mediaName.replace(/"/g, '')
                        };
                });

                if (arguments.length == 1 && arguments[0] == true) {
                        return window.enVars.MediaControl.name;
                }
                else {
                        return window.enVars.MediaControl.index;
                }
        };

        $(document).ready(function() {
                $().MediaControl();
                media = window.enVars.MediaControl.name;
                console.log(media);
                event = 'on' + media;
                if (event != 'onunknow') {
                        $('*').each(function() {
                                $(this).triggerHandler(event);
                        });
                }
        });
})(jQuery);
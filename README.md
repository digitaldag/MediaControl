MediaControl
============

Use the CSS @media to fire JS functions

Inside the base CSS there are already 4 rules
- 0 to 768
- 768 to 1024
- 1024 to 1367
- 1367 to infinite


Usage:
=========
*CSS*
```
/*Custom dimensions*/
@media only screen and (min-width: 1920px){
    #MediaControl{z-index: 4}
    #MediaControl:before{content: 'BigDesktop';}
}
@media only screen and (min-width: 4096px){
    #MediaControl{z-index: 5}
    #MediaControl:before{content: 'CinemaDesktop';}
}
```
*JS*
```
$('#exp').on('onPhone', function() {
  $(this).css({background: '#0000FF', color: '#000000'});
  alert('Hi, i\'m a little screen!');
}).on('onBigDesktop', function() {
  $(this).css({background: '#F0F0F0', color: '#000000'});
}).on('onCinemaDesktop', function() {
  $(this).css({background: '#000000', color: '#ffffff'});
  alert('I\'m the BigOne!');
});
```

Changelog:
=========
v0.1 (31/07/2014)
+ Initial release

License:
=========
This work is licensed under the Creative Commons Attribution 4.0 International License. To view a copy of this license, visit http://creativecommons.org/licenses/by/4.0/ or send a letter to Creative Commons, 444 Castro Street, Suite 900, Mountain View, California, 94041, USA.

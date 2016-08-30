# aQuery

> jQuery modeled chunk [<=1kb]

# Why??

If the loading of your page, you use some jquery plugins methods to load, validate browser or whatever. You do not want to stop loading the page to get a 30 to 35kb script where you will use some methods.

The aQuery allows you to use the same methods and when the page loads it enables be replaced by jQuery. So do not block the loading of the page. Working as a chunk.

Also: Supports UMD.

## Methods

### .on

```javascript

$('#anyElement').on('click', function(e) {
	// Some Cool Action
})

```

### .show

```javascript
$('#anyElement').show(); // without fadeIn effect

$('#anyElement').show(300); // with fadeIn effect
```

### .hide

```javascript
$('#anyElement').hide(); // without fadeOut effect

$('#anyElement').hide(500); // with fadeOut effect
```

### .addClass

```javascript
$('#nonsense').addClass('className');
```

### .removeClass

```javascript
$('#nonsense').addClass('className');
```

## Credits:

[Raphael Amorim](http://github.com/raphamorim) 2016.

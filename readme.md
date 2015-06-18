# aQuery

> A jQuery-like, client library less than 1kb 

Works like [jQuery](https://github.com/jquery/jquery), however more lighter. Have less methods and selectors than jQuery. 

`Keeping only the essentials.`

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

## Credits:

Project inspired in a gist made by [Paul Irish](https://gist.github.com/paulirish/12fb951a8b893a454b32).
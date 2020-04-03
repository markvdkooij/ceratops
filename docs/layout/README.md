# Layout

## Container

The **container.scss** file sets the styling for the all important container element. You can use the container elements to give structure to your site. Its behavior is very simple, it has a maximum allowed width, preventing your page from becoming to wide on desktop, and centers its self.

Example:

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<title>Container example</title>
	</head>
	<body>
		<div class="container">
			<h1>I'm contained!</h1>
		</div>
	</body>
</html>
```

## Flex

The **flex.scss** file is one of the most crucial components of Ceratops. This can be used to give your site and all of its content some easy-to-adjust structure. It works like many other grid based systems as it's based on a 12 column wide grid.

Using it in its most basic form is very simple:

```html
<div class="flex">
	<div class="column">
		<p>Deserunt do excepteur eu sunt occaecat Lorem proident.</p>
	</div>

	<div class="column">
		<p>Enim labore in magna mollit.</p>
	</div>
</div>
```

If the default behavior is not exactly what you need, you could use a few preset flex modifiers:

```html
<div class="flex flex--padding-4 flex--margin-8">
	<div class="column column--size-4">
		<p>Deserunt do excepteur eu sunt occaecat Lorem proident.</p>
	</div>

	<div class="column column--size-8">
		<p>Enim labore in magna mollit.</p>
	</div>
</div>
```

Sizing modifiers:

| Modifier           | Behavior                                                             | Notes                        |
| ------------------ | -------------------------------------------------------------------- | ---------------------------- |
| `.flex--padding-4` | Determines the gap between columns.                                  | Options go from `0` to `10`. |
| `.flex--margin-4`  | Determines the spacing above and below the `.flex` element,          | Options go from `0` to `10`. |
| `.column--size-4`  | Sets a fixed width to a column based on the `12` grid column layout. | Options go from `1` to `12`. |

Other modifiers:

| Modifier               | Behavior                                                          |
| ---------------------- | ----------------------------------------------------------------- |
| `.flex--valign-top`    | Vertically aligns columns to the `top` of the `.flex` element.    |
| `.flex--valign-center` | Vertically aligns columns to the `center` of the `.flex` element. |
| `.flex--valign-bottom` | Vertically aligns columns to the `bottom` of the `.flex` element. |

| Modifier               | Behavior                                                |
| ---------------------- | ------------------------------------------------------- |
| `.flex--halign-left`   | Horizontally aligns content of columns to the `left`.   |
| `.flex--halign-center` | Horizontally aligns content of columns to the `center`. |
| `.flex--halign-right`  | Horizontally aligns content of columns to the `right`.  |

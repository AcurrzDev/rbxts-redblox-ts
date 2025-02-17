# Collection

Handles instance addition and removal from collections.

This function will call the given callback for each instance with the given tag, both instances that already have the tag, and instances that will be added in the future. It returns a function that can be called to stop the collection.

```ts
const Stop = Collection("Tag", (Instance) => {
	warn("Tag Added");

	// the cleanup function is optional
	return function () {
		warn("Tag Removed");
	};
});

// After 10 seconds calls all cleanup functions and stops the collection
task.wait(10);
Stop();
```

::: danger
Yielding in the `Start` function can cause the instance to never be cleaned up. Do not yield in the `Start` function.
:::

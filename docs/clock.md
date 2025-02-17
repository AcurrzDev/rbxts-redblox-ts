# Clock

Calls a function on consistent intervals.

This function will call the given callback every `Interval` seconds. It returns a function that can be called to stop the clock.

```ts
const Stop = Clock(1, () => {
	warn("Hello!");
});

// Warns "Hello!" every second for 5 seconds
task.wait(5);
Stop();
```

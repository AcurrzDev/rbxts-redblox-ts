# Bin

Manages cleanup for objects that cannot be garbage collected.

This function creates a `Bin`, and returns two functions. The first can be used to add items to the bin, and the second can be used to "empty" the bin, destroying all the items in it.

```ts
const [Add, Empty] = Bin()

// Add returns the item you added
const Part = Add(new Instance("Part"))

Add(Part.Touched.Connect(() => {
    warn("Touched!")
})

Add(() => {
    warn("Emptying bin!")
})

Empty()
```

Instances will be destroyed, connections will be disconnected, and functions will be called when the bin is emptied. Bins can be reused after empty.

::: danger
Do not pass tables to a Bin, it will not call any operation on them.
:::

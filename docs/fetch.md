# Fetch

A Future based HTTP request utility very similar to Javascript's fetch.

```ts
(
	Method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "HEAD" | "OPTIONS" | "CONNECT" | "TRACE";
    Headers?: { [key: string]: string };
    Body?: string | { [key: string]: unknown };
) => Future<{
	Body: string;
    Headers: { [key: string]: string };
    Status: number;
    StatusText: string;
    Ok: boolean;
    Url: string;

    Json(this: Response): [boolean, unknown];
}>
```

Fetch is passed a resource and an optional options table, it returns a future containing a boolean for success and a response.

```ts
const [Success, Response] = Fetch("https://example.com/").Await();

if (Success && Response.Ok) {
	warn(Response.Body);
}
```

The options table can be used to set the request method, headers, and body. By default it will use the `GET` method with no headers or body.

```ts
const [Success, Response] = Fetch("https://example.com/", {
	Method: "POST",
	Headers: {
		"Content-Type": "application/json",
	},
	Body: {
		Hello: "World",
	},
}).Await();
```

::: tip
The `Body` option can be a string or a table. If it is a table it will be encoded as JSON.
:::

The response contains the following fields:

- `Body` - The response body as a string.
- `Headers` - A table of headers.
- `Status` - The response status code.
- `StatusText` - The response status text.
- `Ok` - A boolean indicating if the response was successful.
- `Url` - The final URL of the response.

The response also contains a `Json` method which will decode the response body as JSON.

```ts
const [Success, Response] = Fetch("https://example.com/").Await();

if (Success && Response.Ok) {
	const [Success, Data] = Response.Json();

	if (Success) {
		warn(Data.Hello);
	}
}
```

The `Json` method will return a boolean for the success of decoding the body, and the decoded body.

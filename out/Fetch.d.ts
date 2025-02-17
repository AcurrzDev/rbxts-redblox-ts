// Define the Response type
import { Future } from ".";

type Response = {
    Body: string;
    Headers: { [key: string]: string };
    Status: number;
    StatusText: string;
    Ok: boolean;
    Url: string;

    Json(this: Response): [boolean, unknown];
};

// Define the Options type
type Options = {
    Method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "HEAD" | "OPTIONS" | "CONNECT" | "TRACE";
    Headers?: { [key: string]: string };
    Body?: string | { [key: string]: unknown };
};

// Define the Future type for the returned value (a Future of Response)

// Declare the HttpRequest function (the main function)
declare function Fetch(Resource: string, Options?: Options): Future.Future<[boolean, Response]>;

export = Fetch;

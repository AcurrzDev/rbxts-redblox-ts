type Future<T extends unknown[] | void | unknown> = {
    ValueList?: unknown[];
    AfterList: ((...args: (T extends unknown[] ? T : [T])) => void)[];
    YieldList: thread[]; 

    IsComplete(this: Future<T>): boolean;
    IsPending(this: Future<T>): boolean;

    Expect(this: Future<T>, message: string): T extends unknown[] ? [...T] : [T];
    Unwrap(this: Future<T>): T extends unknown[] ? [...T] : [T];
    UnwrapOr(this: Future<T>, ...defaultValues: T extends unknown[] ? T : [T]): T extends unknown[] ? [...T] : [T];
    UnwrapOrElse(this: Future<T>, elseFn: () => T): T extends unknown[] ? [...T] : [T];

    After(this: Future<T>, callback: (...args: (T extends unknown[] ? T : [T])) => void): void;
    Await(this: Future<T>): T extends unknown[] ? [...T] : [T];
};

declare function New<T extends unknown[] | void | unknown, A extends unknown[]>(
    callback: (...args: A) => T,
    ...args: A
): Future<T>;

declare function Try<T extends unknown[] | void | unknown, A extends unknown[]>(
    callback: (...args: A) => T,
    ...args: A
): Future<[boolean, ...(T extends unknown[] ? T : [T])]>;

export { New, Try };
type Disconnect = () => undefined
declare function Clock<T>(Interval: number, Callback: () => undefined): Disconnect

export = Clock
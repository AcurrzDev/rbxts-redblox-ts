type Check = (Key: string) => boolean;

declare function Ratelimit(Rate: number, Interval: number): Check

export = Ratelimit
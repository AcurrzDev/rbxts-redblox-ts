type BinItem = Instance | RBXScriptConnection | (() => unknown);

type Add = <T extends BinItem>(Item: T) => T;
type Empty = () => undefined;

declare function Bin(): LuaTuple<[Add, Empty]>;

export = Bin
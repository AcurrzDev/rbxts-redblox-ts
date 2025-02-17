// TypeScript Typings for Signal Module

// Represents a node in the signal's linked list of listeners
interface SignalNode<T extends unknown[]> {
  Next: SignalNode<T> | undefined;
  Callback: (...args: T) => void;
}

// Represents the Signal class with various methods like Connect, Wait, Once, etc.
interface SignalType<T extends unknown[]> {
  Root: SignalNode<T> | undefined;

  Connect: (this: SignalType<T>, Callback: (...args: T) => void) => () => void;
  Wait: (this: SignalType<T>) => T;
  Once: (this: SignalType<T>, Callback: (...args: T) => void) => () => void;
  Fire: (this: SignalType<T>, ...args: T) => void;
  DisconnectAll: (this: SignalType<T>) => void;
}

declare function Signal<T extends unknown[]>(): SignalType<T>;

export = Signal;
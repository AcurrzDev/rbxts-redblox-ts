declare function Collection(Tag: string, Start: (Instance: Instance) => unknown | (() => (() => unknown) | undefined)): () => undefined

export = Collection
export abstract class InMemoryRepository<T> {
    private objectMap: Map<string, T>;

    constructor() {
        this.objectMap = new Map<string, T>();
    }

    public add(item: T): void {
        const key = this.getKey(item);
        if (!this.objectMap.has(key)) {
            this.objectMap.set(key, item);
        } else {
            throw new Error('Item with the same key already exists');
        }
    }

    public update(item: T): void {
        const key = this.getKey(item);
        if (this.objectMap.has(key)) {
            this.objectMap.set(key, item);
        } else {
            throw new Error('Unable to update item. It doesn\'t exist');
        }
    }

    public getAll(): IterableIterator<T> {
        return this.objectMap.values();
    }

    public get(key: string): T | undefined {
        return this.objectMap.get(key);
    }

    public delete(key: string): void {
        this.objectMap.delete(key);
    }

    protected abstract getKey(item: T): string;
}

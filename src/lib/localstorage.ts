export class LocalStorageService {
  private isBrowser(): boolean {
    return (
      typeof window !== "undefined" &&
      typeof window.localStorage !== "undefined"
    );
  }

  public setItem<T>(key: string, list: T[]): void {
    if (this.isBrowser()) {
      const valueString: string = JSON.stringify(list);
      localStorage.setItem(key, valueString);
    }
  }

  public getItem<T>(key: string): T[] {
    if (this.isBrowser()) {
      const listString: string | null = localStorage.getItem(key);
      return listString ? JSON.parse(listString) : [];
    }

    return [];
  }

  public removeItem(key: string): void {
    if (this.isBrowser()) {
      localStorage.removeItem(key);
    }
  }

  public clear(): void {
    if (this.isBrowser()) {
      localStorage.clear();
    }
  }
}

import * as ng from 'angular';

export interface ResourceConverter<T, R> {
  serialize(data: T): R | ng.IPromise<R>;

  deSerialize(data: R): T | ng.IPromise<T>;
}

export class IdentityResourceConverter<T> implements ResourceConverter<T, T> {
  constructor() {}

  public serialize(data: T): T {
    return data;
  }

  public deSerialize(data: T): T {
    return data;
  }
}
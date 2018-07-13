import * as ng from 'angular';
import {ResourceConverter} from './rf.client.resource.converter';

export interface Client {
  getData<T>(uri: uri.URI, converter: ResourceConverter<T, any>, config?: ng.IRequestShortcutConfig): ng.IPromise<T>;
}
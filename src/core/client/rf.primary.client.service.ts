import * as  ng from 'angular';
import {Client} from './rf.client';
import {ResourceConverter} from './rf.client.resource.converter';

export class PrimaryClient implements Client {
  public static IID: string = 'rf.primary.client.service';
  public static $inject: string[] = ['$http', '$q'];

  constructor(
      private $http: ng.IHttpService,
      private $q: ng.IQService) {

  }

  public getData<T>(
      requestUri: uri.URI,
      converter: ResourceConverter<T, any>,
      config: ng.IRequestShortcutConfig): ng.IPromise<T> {
    return this.$http.get((<uri.URI>requestUri).toString(), config)
        .then((response: ng.IHttpResponse<T>) => this.responseConverter(
            response,
            converter));
  }

  private responseConverter<T>(response: ng.IHttpResponse<any>, converter: ResourceConverter<T, any>): ng.IPromise<T> {
    return this.$q.when(converter.deSerialize(response.data));
  }
}
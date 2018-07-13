import * as ng from 'angular';
import * as uri from 'urijs';

import {Client, IdentityResourceConverter, PrimaryClient} from '../client/rf.client.module';

export class BlobService {
  public static IID: string = 'rf.blob.service';
  public static $inject: string[] = [
    '$window',
    PrimaryClient.IID
  ];
  private URL: typeof URL;

  constructor(private $window: ng.IWindowService, private client: Client) {
    this.URL = $window.URL || $window.webkitURL;
  }

  public createBlobUrl(url: string): ng.IPromise<string> {
    return this.createBlob(url).then((blob: Blob) => {
      return this.URL.createObjectURL(blob);
    });
  }

  public createBlob(url: string): ng.IPromise<Blob> {
    return this.client.getData(uri(url), new IdentityResourceConverter(), {responseType: 'blob'});
  }
}
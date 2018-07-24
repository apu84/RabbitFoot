import * as ng from 'angular';
import {PrimaryClient} from "../../../src/core/client/rf.client.module";
import {BlobService} from "../../../src/core/blob/rf.blob.module";
import {Client} from "../../../src/core/client/rf.client.module";

describe('BlobService', function () {
  'use strict'

  let blobService: BlobService, $window, client: Client, $q: ng.IQService, $rootScope: ng.IScope;

  beforeEach(ng.mock.module('rf.blob'));

  beforeEach(inject(function ($injector) {
    $window = $injector.get('$window');
    $q = $injector.get('$q');
    $rootScope = $injector.get('$rootScope');
    client = $injector.get(PrimaryClient.IID);
    blobService = new BlobService($window, client);
  }));

  it('- should ne defined', function () {
    expect(blobService).toBeDefined();
  });

  it('- should return blob', function () {
    spyOn(client, 'getData').and.returnValue($q.when(new Blob()));
    let blob = blobService.createBlob("http://www.someurl.com");
    $rootScope.$digest();
    expect(blob).toBeDefined();
  });
});
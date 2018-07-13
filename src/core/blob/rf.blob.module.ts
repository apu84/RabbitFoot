import * as ng from 'angular';

import {BlobService} from './rf.blob.service';

ng.module('rf.blob', ['rf.client'])
    .service(BlobService.IID, BlobService);
export {
  BlobService
}
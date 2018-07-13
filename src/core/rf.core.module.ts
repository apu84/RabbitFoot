import * as ng from 'angular';
import './TestComponent/test.component.module'
import './blob/rf.blob.module'
import './client/rf.client.module'
import './image/rf.image.module'

ng.module('rf.core', [
  'rf.testComponent',
  'rf.client',
  'rf.blob',
  'rf.image'
]);
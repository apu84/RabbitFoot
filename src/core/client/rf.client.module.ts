import * as ng from 'angular';
import {Client} from './rf.client';
import {PrimaryClient} from './rf.primary.client.service';
import {IdentityResourceConverter, ResourceConverter} from './rf.client.resource.converter';

ng.module('rf.client', [])
    .service(PrimaryClient.IID, PrimaryClient);

export {
  Client,
  PrimaryClient,
  ResourceConverter,
  IdentityResourceConverter
}
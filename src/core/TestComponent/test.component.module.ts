import * as ng from 'angular';

import TestController from './test.componet.controller'

ng.module('rf.testComponent', [])
    .controller(TestController.IID, TestController);

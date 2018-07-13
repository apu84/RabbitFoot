import * as ng from 'angular';
import {ImageDirective} from './rf.image.directive';

ng.module('rf.image', ['rf.blob'])
    .directive(ImageDirective.IID, () => new ImageDirective());

export {ImageDirective}
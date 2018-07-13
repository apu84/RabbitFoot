import {BlobService} from '../blob/rf.blob.module';

export class ImageDirective implements ng.IDirective {
  public static IID: string = 'rfImage';
  public scope: any = {
    href: '@'
  };
  public template: string = require('./rf.image.directive.html');
  public controller: any = ImageController;
  public controllerAs: string = 'vm';
  public bindToController: boolean = true;
  public restrict: string = 'E';
}

class ImageController {
  public static $inject: string[] = ['$scope', BlobService.IID];
  public href: string;
  public imageData: string;

  constructor($scope: ng.IScope, blobService: BlobService) {
    $scope.$watch(
        () => this.href,
        (newValue, oldValue) => { console.log(newValue);
          if (newValue) {
            blobService.createBlobUrl(newValue).then(
                (blobUrl: string) => {
                  this.imageData = blobUrl;
                }
            )
          }
        });

  }
}
var tiltedPage = angular.module('TiltedPage', []);
tiltedPage.directive('tiltedPage', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
    			element.tiltedpage_scroll({
    				angle: 50, // You can define the angle of the tilted section here. Change this to false if you want to disable the tilted effect. The default value is 50 degrees.
    				opacity: true, // You can toggle the opacity effect with this option. The default value is true
    				scale: true, // You can toggle the scaling effect here as well. The default value is true.
    				outAnimation: true // In case you do not want the out animation, you can toggle this to false. The defaul value is true.
    			});
        }
    };
});

studentRoster.controller('SignInCtrl', function SignInCtrl($scope, StudentsFactory) {
  $scope.students = StudentsFactory.students;
  $scope.addSignedIn = function(student) {
    student.signedIn = true;
  };
});

signInSheet.factory('StudentsFactory', function StudentsFactory() {
  var factory = {};
  factory.students = [];

  factory.addStudent = function() {
    var student = { name: factory.studentName, signedIn: false };
    factory.students.push(student);
    factory.studentName = null;
  };
  return factory;
});

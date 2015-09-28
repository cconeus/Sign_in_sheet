studentRoster.factory('StudentsFactory', function StudentsFactory() {
  var factory = {};
  factory.students = [];

  factory.addStudent = function() {
    var student = { name: factory.studentName, signedIn: false };
    factory.students.push(student);
    factory.studentName = null;
  };

  factory.deleteStudent = function(student) {
    var index = factory.students.indexOf(student);
    factory.students.splice(index, 1);
  };
  return factory;
});

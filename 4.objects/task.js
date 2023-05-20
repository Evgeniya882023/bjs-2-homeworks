function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];
}
let student1 = new Student("Полина", "женский", 23);
Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName;
}

Student.prototype.addMarks = function(...marks) {
	if (this.marks === undefined) {
		return 0
	} else {
		this.marks.push(...marks);
	}
}

Student.prototype.getAverage = function() {
	if (this.marks == undefined) {
		return 0;
	} else {
		return this.marks.reduce((acc, mark, index, marks) => acc += mark / marks.length, 0);
	}
}

Student.prototype.exclude = function(reason) {
	delete this.subject;
	delete this.marks;
	this.excluded = reason;
}

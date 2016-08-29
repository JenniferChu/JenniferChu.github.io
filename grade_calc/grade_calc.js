field_list = {};

function update() {
	var name = document.getElementById("name");
	var weight = document.getElementById("weight");
	var grade = document.getElementById("grade");
	var output = document.getElementById("output");

	field_list.push({name: name, weight: weight, grade: grade});
	output.innerHTML += "<p>" + list_to_string(field_list) + "</p>";
	output.innerHTML += "<h4>Your final grade is: " + calculate_grade(field_list) + "</h4>";

}

function list_to_string(list) {
	var info_string = " ";
	for (i=0; i < list.length; i++) {
		info_string += list[i].name + ": " + list[i].weight + " of final grade. Current grade for this field: " + list[i].grade; 
		info_string += "\n";
	}
	return info_string;
}

function calculate_grade(list) {
	var final_grade = 0;
	for (i=0; i < list.length; i++) {
		final_grade += list[i].grade * (list[i].weight / 100);
	}
	final_grade = final_grade.toFixed(2);
	return final_grade;
}
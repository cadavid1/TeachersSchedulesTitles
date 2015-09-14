// all teachers in the following format:
//			[ "Teacher's Name", [ A, 1st, 2nd, 3rd, 4th, 5th, 6th] ],

// 0 means prep
// .5 means none
// -1 means gym
// -2 means weight room
// -3 means SMF
// -4 means TOSA
var teacherSchedules = [
	["Mike Ahn", 			[.5,-1,-1,-1,0,-1,-1]],
	["Ben Ballard",			[-2,-1,-1,92,-2,0,.5]],
	["Glen Barker",			[.5,.5,5,-3,-3,-3,-3]],
	["Todd Bauleke",		[9,9,9,9,9,.5,.5,]],
	["Kala Branch",			[.5,14,14,0,11,11,11]],
	["Greg Brown",			[93,93,93,93,93,93,0]],
	["Jon Bruchett",		[.5,36,36,36,0,36,36]],
	["Charles Butterfield",	[.5,10,0,10,10,10,10]],
	["Ben Campopiano",		[.5,32,-4,-4,0,-4,-4]],
	["Willie Carlile",		[.5,0,4,4,4,4,4]],

	["Maria Carrera",[]],
	["Pete Ceresa",[]],
	["Kyle Connors", 		[.5, 91, 91, 0, 91, 91, 91]],
	["Rene Conroy",[]],
	["Brian Corbett",[]],
	["Lee Cyr",[]],
	["Kevin Davis",[]],
	["Leanne DeBella",[]],
	["Johnny Del Bene",[]],
	["Ellen Dill",[]],
	["Al Durazo",[]],
	["Tessa Eckenfekler",[]],
	["Mary Eisner",[]],

	["Felipe Fajardo",[]],
	["Tucker Farrar",[]],
	["Shanti Freedom",[]],
	["Sally Gibbs",[]],
	["Pam Granno",[]],
	["Paul Gundelfinger",[]],
	["Jefrey Haggerstrand",[]],
	["Harris Sandy",[]],
	["Scott Harris",[]],
	["Margaret Honey",[]],
	["Kourtnie Howerton",[]],
	["Karen Jenkins",[]],

	["Sam Kasdin",[]],
	["Patti Kjonaas",[]],
	["Lisa Keremian",[]],
	["Lisa Krnich",[]],
	["Lauren Lahey",[]],
	["Kyon Laundry",[]],
	["Alejandra Ledesma",[]],
	["Ron Lewis",[]],
	["Amber Lineweaver",[]],
	["Jan Lubbe",[]],
	["Thomas Luneburg",[]],
	["Greg Lyons",[]],
	["Monica Maddern",[]],
	
	["Andrea Marek",[]],
	["John McGill",[]],
	["Carolyn Moore",[]],
	["Lawrence Muilenburg",[]],
	["Jeremy Nunes",[]],
	["Kari Reed",[]],
	["Christine Reimer",[]],
	["James Rogers",[]],
	["Misha Safran",[]],
	["Melanie Scott",[]],
	["Robin Spring",[]],
	["Corinne Starr",[]],
	["Kevin Taylor",[]],

	["Mark Tobin",[]],
	["Francisco Tubio",[]],
	["Ellen Weinstock Mehl",[]],
	["David Wood",[]],
	["Jim Wright",[]],
	["Juieta Zuluaga",[]],

];

function setUpTeacherTitles() {
	// cycles through all teachers in teacherSchedules
	for (var i = teacherSchedules.length - 1; i >= 0; i--) {
	
		// all teachers with the targetted name in this cycle of the loop
		var namedTeachers = getAllTeachersWithName(teacherSchedules[i][0]);
		
		// changes the "title" attribute of each of the teachers with the targetted name to their respective schedule
		for (var j = namedTeachers.length - 1; j >= 0; j--) {
			namedTeachers[j].title = convertArrayToTitle(i);
		};

	};
}

function getAllTeachersWithName(name) {
	var all = document.getElementsByClassName("teacher");
	var a = [];
	for (var i = all.length - 1; i >= 0; i--) {
		if(all[i].innerHTML == name) {
			a.push(all[i]);
		}
	};
	return a;
}

function convertArrayToTitle(index) {

	var s = "";

	for (var i = 0; i < teacherSchedules[index][1].length; i++) {
		str = teacherSchedules[index][1][i];
		if(str == 0) {
			str = "PREP";
		} else if(str == .5) {
			str = "NONE";
		} else if(str == -1) {
			str = "GYM";
		} else if(str == -2) {
			str = "WAIT ROOM";
		} else if(str == -3) {
			str = "SMF";
		} else if(str == -4) {
			str = "TOSA";
		}
		if(i > 0) {
			s += "Period " + i + ": " + str;	
		} else {
			s += "Period " + "A" + ": " + str;	
		}
		if(!(i == teacherSchedules[index][1].length-1)) {
			s += "; ";
		}
	};
	return s;
}

function getTeacherSchedule(name) {
	var s = [];

	for (var i = teacherSchedules.length - 1; i >= 0; i--) {
		if(teacherSchedules[i][0] == name) {
			s = teacherSchedules[i];
			console.log(s);
		}
	};

	if(s) {
		return s[1]; // returns array of class numbers
	} else {
		return null;
	}
}

setUpTeacherTitles();
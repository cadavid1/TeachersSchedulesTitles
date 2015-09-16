
// all teachers in the following format:
//			[ "Teacher's Name", [ A, 1st, 2nd, 3rd, 4th, 5th, 6th] ],

// 0 means prep
// .5 means none
// -1 means gym
// -2 means weight room
// -3 means SMF
// -4 means TOSA
// -5 means CAFE
// -6 means TEST
// -7 means LT
var teacherSchedules = [
	["Mike Ahn", 			[.5,-1,-1,-1,0,-1,-1]],
	["Ben Ballard",			[-2,-1,-1,92,-2,0,.5]],
	["Glen Barker",			[.5,.5,5,-3,-3,-3,-3]],
	["Todd Bauleke",		[9,9,9,9,9,.5,.5,]],
	["Karla Branch",		[.5,14,14,0,11,11,11]],
	["Greg Brown",			[93,93,93,93,93,93,0]],
	["Jon Burchett",		[.5,36,36,36,0,36,36]],
	["Charles Butterfield",		[.5,10,0,10,10,10,10]],
	["Ben Campopiano",		[.5,32,-4,-4,0,-4,-4]],
	["Willie Carlile",		[.5,0,4,4,4,4,4]],
	["Maria Carrera",		[.5,-5,0,-5,-5,-5,-5]],
	["Pete Ceresa",			[13,13,13,20,0,13,.5]],
	["Kyle Connors", 		[.5, 91, 91, 0, 91, 91, 91]],
	["Rene Conroy",			[.5,-1,-1,-1,-1,-1,-1]],
	["Brian Corbett",		[.5,31,31,31,31,0,31]],
	["Lee Cyr",			[.5,12,0,12,12,12,12]],
	["Kevin Davis",			[.5,30,30,0,30,30,30]],
	["Leanna DeBella",		[.5,35,0,34,34,34,34]],
	["Johnny Del Bene",		[.5,75,75,75,.5,.5,75]],
	["Ellen Dill",			[.5,.5,0,14,14,14,14]],
	["Al Durazo",			[-1,-2,-1,0,-1,-1,-1]],
	["Tessa Eckenfelder",		[5,5,5,0,2,2,2]],
	["Mary Eisner",			[.5,42,42,41,0,42,42]],
	["Felipe Fajardo",		[54,54,0,54,54,54,.5]],
	["Tucker Farrar",		[.5,23,0,23,23,23,23]],
	["Shanti Freedom",		[.5,75,75,75,75,-6,0]],
	["Julie Fernandez",		[2,2,2,2,0,1,1]],
	["Sally Gibbs",			[.5,56,56,56,0,56,56]],
	["Pam Granno",			[.5,34,34,42,42,0,.5]],
	["Paul Gundelfinger",		[7,7,7,7,7,7,0,.5]],
	["Jeffrey Hagerstrand",		[.5,-7,-7,-7,-7,-7,-7]],
	["Sandy Harris",		[.5,-6,76,76,76,76,0]],
	["Scott Harris",		[.5,0,77,77,77,77,77]],
	["Meg Honey",			[.5,0,32,32,32,.5,.5]],
	["Kourtnie Howerton",		[91,92,92,0,92,92,.5]],
	["Karen Jenkins",		[.5,0,44,44,44,44,44]],
	["Sam Kasdin",			[.5,62,62,62,0,62,62]],
	["Patti Kjonaas",		[.5,0,73,73,72,73,73]],
	["Lisa Keremian",		[.5,40,40,0,40,40,40]],
	["Lisa Krnich",			[.5,61,61,61,61,0,61]],
	["Lauren Lahey",		[.5,0,35,35,35,35,35]],
	["Kyon Landry",			[.5,.5,12,13,13,.5,.5]],
	["Alejandra Ledesma",		[.5,52,52,0,52,52,52]],
	["Ron Lewis",			[.5,41,41,0,41,41,41]],
	["Amber Lineweaver",		[.5,77,0,40,33,33,33]],
	["Jan Lubbe",			[63,63,63,63,0,63,.5]],
	["Thomas Luneburg",		[.5,21,21,21,21,21,0]],
	["Greg Lyons",			[.5,11,11,11,0,64,63]],
	["Monica Maddern",		[90,90,90,90,0,.5,.5]],
	["Andrea Marek",		[.5,51,51,0,51,51,51]],
	["John McGill",			[.5,65,0,65,63,53,53]],
	["Carolyn Moore",		[.5,72,72,72,0,72,72]],
	["Lawrence Muilenburg",		[.5,6,6,0,6,6,6]],
	["Jeremy Nunes",		[.5,0,57,57,57,57,57]],
	["Kari Reed",			[.5,43,43,43,0,43,43]],
	["Christine Reimer",		[5,37,0,37,37,37,37]],
	["James Rogers",		[.5,44|61,61,61,61,61,0]],
	["Misha Safran",		[.5,0,50,50,50,50,50]],
	["Melanie Scott",		[.5,4,0,5,5,5,5]],
	["Robin Spring",		[.5,22,22,0,22,22,22]],
	["Corinne Starr",		[8,8,8,8,0,8,8]],
	["Kevin Taylor",		[1,1,1,1,1,0,.5]],
	["Mark Tobin",			[64,64,64,64,64,0,.5]],
	["Francisco Tubio",		[54,54,54,54,54,0,.5]],
	["Ellen Weinstock-Mehl",	[.5,20,20,0,20,20,20]],
	["David Wood",			[.5,33,33,33,0,.5,.5]],
	["Jim Wright",			[.5,3,3,3,0,3,3]],
	["Julieta Zuluaga",		[.5,53,53,53,53,55,0]],

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
		} else if(str == -5) {
			str = "CAFE";
		} else if(str == -6) {
			str = "TEST";
		} else if(str == -7) {
			str = "LT";
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

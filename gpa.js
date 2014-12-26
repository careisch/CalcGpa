
function onSubmit(){
	window.onload = calcSemester();
}
function onSubmit2(){
	window.onload = calcCumulative();
}

var semesterGpa;
var totalQualityPoints;
var totalCredits;
var currentGpa;
var totalAtemptCredits;
var cumulativeGpa;

function calcSemester(){
					totalQualityPoints=0;
					totalCredits=0;

             		var className = [
             		document.forms[0].class1Name.value,
             		document.forms[0].class2Name.value,
             		document.forms[0].class3Name.value,
             		document.forms[0].class4Name.value,
             		document.forms[0].class5Name.value,
             		document.forms[0].class6Name.value,
             		document.forms[0].class7Name.value,
             		];

             		var classGrade = [
             		document.forms[0].class1Grade.value,
             		document.forms[0].class2Grade.value,
             		document.forms[0].class3Grade.value,
             		document.forms[0].class4Grade.value,
             		document.forms[0].class5Grade.value,
             		document.forms[0].class6Grade.value,
             		document.forms[0].class7Grade.value,
             		];

             		var classCredits = [
					document.forms[0].class1Credits.value,
             		document.forms[0].class2Credits.value,
             		document.forms[0].class3Credits.value,
             		document.forms[0].class4Credits.value,
             		document.forms[0].class5Credits.value,
             		document.forms[0].class6Credits.value,
             		document.forms[0].class7Credits.value,
             		];

             		var qualityPoints = []
             		   
             		
             		for (var i = 0; i < className.length; i++) {
             			if ((gradeConverter(classGrade[i]))*classCredits[i] >= 0) {
             			qualityPoints[i] = (gradeConverter(classGrade[i]))*classCredits[i];
             			totalCredits = parseFloat(classCredits[i], 10) + totalCredits;
             			}
             			else{
             			continue;
                    		}
                    	}

             		for (var q = 0; q < qualityPoints.length; q++) {
             			totalQualityPoints = qualityPoints[q] + totalQualityPoints;
             		}

             		semesterGpa = totalQualityPoints/totalCredits;

             		document.getElementById("semesterGrade").innerHTML = semesterGpa;
             	}
function gradeConverter (grade) {
        switch(grade){
        case "A":
        	grade = 4;
            break;
        case "AB":
        	grade = 3.5;
            break;
       case "B":
        	grade = 3;
            break;
        case "BC":
        	grade = 2.5;
            break;
        case "C":
        	grade = 2;
            break;
        case "CD":
        	grade = 1.5;
            break;
       case "D":
        	grade = 1;
            break;
        case "F":
        	grade = 0;
            break;
        default:
        	grade = "error";
        
    }

        return grade
}
function calcCumulative(){
	currentGpa = parseFloat(document.forms[1].currentGpa.value);
	totalAtemptCredits = parseFloat(document.forms[1].currentCredits.value);

	cumulativeGpa = (((currentGpa * totalAtemptCredits) + (totalQualityPoints))/(totalCredits + totalAtemptCredits));
	document.getElementById("cumulativeGrade").innerHTML = cumulativeGpa;
}
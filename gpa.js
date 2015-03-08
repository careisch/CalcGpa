
function onSubmit(){
	window.onload = calcSemester();
}
function onSubmit2(){
	window.onload = calcCumulative();
}
function onSubmit3(){
    window.onload = numClasses();
}

var globalNum

function numClasses(num){
    
    globalNum = num;

    var box = document.getElementById("select_num_class");
    var classBox = document.getElementById("classBox");
    var heading = document.getElementById("heading");
    
    var classes = [
    document.getElementById("class1"),
    document.getElementById("class2"),
    document.getElementById("class3"),
    document.getElementById("class4"),
    document.getElementById("class5"),
    document.getElementById("class6"),
    document.getElementById("class7"),
    ]
    
     for(var q=0; q < classes.length; q++){
           classes[q].style.display='none'; 
        }
    
    if(num > 0){
        
        for(var i=0; i < num; i++){
            classes[i].style.display='inline';
        }
        
        //changing classBox
        classBox.style.display='inline';
        classBox.style.border='none';
        classBox.style.margin='1.75% 0 0 37%';
        
        heading.style.fontSize='1em';
        heading.style.padding='0 0 6% 0';
        
        box.style.margin='0 0 0 3%';
        
        document.getElementById("page-description").style.display='block';
        document.getElementById("submit").style.display='block';
        document.getElementById("cumlative").style.display='block';
        
    }
    else{
        //reseting classBox back
        classBox.style.display='block';
        classBox.style.border='1px solid #D1D1D1';
        classBox.style.margin='15% 0 0 33%';
        
        heading.style.fontSize='2em';
        heading.style.padding='9%';
        
        box.style.margin='0 0 10% 40%';
        
        
        document.getElementById("page-description").style.display='none';
        document.getElementById("submit").style.display='none';
        document.getElementById("cumlative").style.display='none';
        
    }
    
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
             		   
             		
             		for (var i = 0; i < globalNum; i++) {
             			if ((gradeConverter(classGrade[i]))*classCredits[i] >= 0) {
             			qualityPoints[i] = (gradeConverter(classGrade[i]))*classCredits[i];
             			totalCredits = parseFloat(classCredits[i], 10) + totalCredits;
             			}
             			else{
             			continue;
                    		}
                    	}

             		for (var q = 0; q < globalNum; q++) {
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
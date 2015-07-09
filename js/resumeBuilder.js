"use strict";
//bio date
var bio = {
		"name": "Suya Xu",
		"role": "UX Designer & Front-End Web Developer",
		"contacts": {
			"mobile": "949-419-7182",
			"email": "xusuya@gmail.com",
			"github": "suyax",
			"location": "San Francisco"
		},
		"bioPic": "images/bioimage.jpg",
		"welcomeMsg": "Thank you for visiting my site!",
		"skills": [
			"Graphic Design: Photoshop, Illustrator, InDesign", "Website Design: HTML, CSS", "Front-End Website Development: JavaScript, jQuery"
		]
	};
	//formatted bio data, put in the top of resume page
bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedMobile);
	$("#topContacts").append(formattedEmail);
	$("#topContacts").append(formattedGithub);
	$("#topContacts").append(formattedLocation);

	$("#footerContacts").append(formattedMobile);
	$("#footerContacts").append(formattedEmail);
	$("#footerContacts").append(formattedGithub);
	$("#footerContacts").append(formattedLocation);

	var formattedbiopic = HTMLbioPic.replace("%data%", bio.bioPic);
	var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
	$("#header").append(formattedbiopic);
	$("#header").append(formattedwelcomeMsg);

	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		var formattedSkill0 = HTMLskills.replace("%data%", bio.skills[0]);
		var formattedSkill1 = HTMLskills.replace("%data%", bio.skills[1]);
		var formattedSkill2 = HTMLskills.replace("%data%", bio.skills[2]);
		$("#header").append(formattedSkill0);
		$("#header").append(formattedSkill1);
		$("#header").append(formattedSkill2);
	}
};
bio.display();

//work data
var work = {
	"jobs": [{
		"employer": "BLA Architects",
		"title": "Urban Desinger",
		"location": "Newport Beach, CA",
		"dates": "09/11-03/15",
		"description": "- Experienced Planner: Worked on projects from site-specific land planning to master planned communities, from residential to mixed-us around the world;<br>" +
			"- Skilled Professional: Following planning principals/design standard and local regulations; using professional knowledge & skills doing project research, case studies, site analysis, design concepts, graphic format that work with project and develop other support exhibits. Use hand drawing and other software to help client visualize planning & design intention.<br>" +
			"- Team Player: Work on multiple assignments/deadlines, coordinate with planning team and keep manage the whole process to make sure within the time frame, final deliverable meet client’s expectation.<br>" +
			"- Coordinator: Support management team to prepare proposal, create project schedule, and assign workload. Communicate with clients & consultants; facilitate meetings and presentations to serve both domestic and International (China & Middle East) clients. Coordinate with Architect/ Landscape architect/ Interior Designer/ Renderer/ Modeler to achieve design & planning goal."
	}, {
		"employer": "FORMA Design",
		"title": "Assitant Urban Designer",
		"location": "Costa Mesa, CA",
		"dates": "2010-2011",
		"description": "- Supported senior planer on site analysis, drafting grading plan, site plan, landscape plan, confirm city code, communicate with venders, monitor site construction process for landscape project in Turtle Rock community, Irvine, CA.<br>" +
			"- Conducted marketing research on real estate developers in China. Created promotional flyer and host event for potential clients for Forma Company.<br>" + "- Produced circulation, Land use diagrams, site summaries and additional exhibits to support planning idea for several planning projects in China. Helped coordination and interpretation."
	}]
};

//formatted work data, put in the work Experience section.
work.display = function() {
	for (var i = 0, len = work.jobs.length; i<len; i++) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
		var formattedEmplyerTitle = formattedEmployer + formattedTitle;
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

		$(".work-entry:last").append(formattedEmplyerTitle);
		$(".work-entry:last").append(formattedLocation);
		$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(formattedDescription);
	}
};
work.display();

//button to change names formate
function inName() {
	var name = bio.name.split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
	return name[0] + " " + name[1];
}
$("#main").append(internationalizeButton);

//education data
var education = {
	"schools": [{
		"name": "University of California Irvine",
		"location": "Irvine,CA",
		"degree": "MURP",
		"majors": ["Urban Planning"],
		"dates": "2011",
	}, {
		"name": "Huaiyin Noraml University",
		"location": "Huai'an,China",
		"degree": "BS",
		"majors": ["Urban and Regional Planning"],
		"dates": "2009",
	}],
	"onlineCourses": [{
		"title": "Intro to Computer Science",
		"school": "Udacity",
		"dates": "2015",
		"url": "https://www.udacity.com/course/c-cs101"
	}, {
		"title": "Intro to HTML, CSS",
		"school": "Udacity",
		"dates": "2015",
		"url": "https://www.udacity.com/course/c-ud304/"
	}, {
		"title": "Responsive Web Design Fundamental",
		"school": "Udacity",
		"dates": "2015",
		"url": "https://www.udacity.com/course/c-ud893/"
	}, {
		"title": "Responsive Image",
		"school": "Udacity",
		"dates": "2015",
		"url": "https://www.udacity.com/course/c-ud882/"
	}, {
		"title": "Git & Github",
		"school": "Udacity",
		"dates": "2015",
		"url": "https://www.udacity.com/course/c-ud775/"
	}, {
		"title": "JavaScript Basic",
		"school": "Udacity",
		"dates": "2015",
		"url": "https://www.udacity.com/course/c-ud804/"
	}, {
		"title": "Intro to jQuery",
		"school": "Udacity",
		"dates": "2015",
		"url": "https://www.udacity.com/course/c-ud245/"
	}, ]
};

//formatted eduation data, put in the education section
education.display = function() {
	for (var j = 0, len = education.schools.length; j < len; j++) {
		$("#education").append(HTMLschoolStart);
		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[j].name);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[j].degree);
		var formattedSchoolNameDegree = formattedSchoolName + formattedSchoolDegree;
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[j].location);
		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[j].majors);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[j].dates);
		$(".education-entry:last").append(formattedSchoolNameDegree);
		$(".education-entry:last").append(formattedSchoolDates);
		$(".education-entry:last").append(formattedSchoolLocation);
		$(".education-entry:last").append(formattedSchoolMajor);
	}
	$("#education").append(HTMLonlineClasses);
	for (var i = 0, leng = education.onlineCourses.length; i < leng; i++) {
		$("#education").append(HTMLschoolStart);
		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
		var formattedOnlineTitleSchool = formattedOnlineTitle + formattedOnlineSchool;
		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
		var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
		$(".education-entry:last").append(formattedOnlineTitleSchool);
		$(".education-entry:last").append(formattedOnlineDates);
		$(".education-entry:last").append(formattedOnlineURL);
	}
};
education.display();

//project data
var projects = {
		"project": [{
			"title": "Portfolio Website",
			"dates": "2015",
			"description": "My First Website Design Project",
			"projectPic": ["images/portfolio-1.png", "images/portfolio-2.png"]
		}, {
			"title": "Updated Local News Page",
			"dates": "2015",
			"description": "Golden State Warrior Win the NBA Final",
			"projectPic": ["images/local-news-1.png", "images/local-news-2.png"]
		}]
	};
	//formatted project date for project section
projects.display = function() {
	for (var i = 0, len =projects.project.length; i<len; i++) {
		$("#projects").append(HTMLprojectStart);

		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.project[i].title);
		var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.project[i].dates);
		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.project[i].description);
		var formattedProjectPic0 = HTMLprojectImage.replace("%data%", projects.project[i].projectPic[0]);
		var formattedProjectPic1 = HTMLprojectImage.replace("%data%", projects.project[i].projectPic[1]);
		var formmatedProjectPic0Pic1 = formattedProjectPic0 + formattedProjectPic1;

		$(".project-entry:last").append(formattedProjectTitle);
		$(".project-entry:last").append(formattedProjectDates);
		$(".project-entry:last").append(formattedProjectDescription);
		$(".project-entry:last").append(formmatedProjectPic0Pic1);
	}
};
projects.display();

//change css attributes of img, to make it fit
$(".project-entry > img").css("max-width", "400px");
$(".project-entry > img").css("height", "250px");
$("#header img").css("width", "200px");

//append googlemap to the page
$("#mapDiv").append(googleMap);
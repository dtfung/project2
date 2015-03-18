var bio = {
  "name": "Donald Fung",
  "role": "Web Developer",
  "contacts": {
    "mobile": "2848624",
    "email": "donaldtfung@gmail.com",
    "gitHub": "https://github.com/dtfung",
    "twitter": "https://twitter.com/donaldtfung",
    "location": "Jamaica"
  },
  "welcomeMessage": "My Resume",
  "skills": ["investor", "time traveler", "programmer"],
  "biopic": "images/me.jpg"
};

bio.display = function() {
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  var formattedNameRole = formattedName + formattedRole;
  $("#header").prepend(formattedNameRole);
  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  $("#topContacts").append(formattedMobile);
  $("#footerContacts").append(formattedMobile);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  $("#topContacts").append(formattedEmail);
  $("#footerContacts").append(formattedEmail);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.gitHub);
  $("#topContacts").append(formattedGithub);
  $("#footerContacts").append(formattedGithub);
  var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
  $("#topContacts").append(formattedTwitter);
  $("#footerContacts").append(formattedTwitter);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  $("#topContacts").append(formattedLocation);
  $("#footerContacts").append(formattedLocation);

  var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
  $("#header").append(formattedBioPic);
  var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
  $("#header").append(formattedWelcomeMsg);

  if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
    $("#header").append(formattedSkills);
    var formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);
    $("#header").append(formattedSkills);
    var formattedSkills = HTMLskills.replace("%data%", bio.skills[2]);
    $("#header").append(formattedSkills);
  }
};
bio.display();

var work = {
  "jobs": [{
    "employer": "Apple",
    "title": "Developer",
    "location": "New York",
    "dates": "February 2015 - present",
    "description": "designed websites"
  }, {
    "employer": "Gap",
    "title": "Sales Associate",
    "location": "New York",
    "dates": "January 2011 - January 2015",
    "description": "sold clothes"
  }]
};

work.display = function() {
  for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);
    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    $(".work-entry:last").append(formattedLocation);
    var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDate);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
  }
};
work.display();

var projects = {
  "projects": [{
    "title": "Creativity, Inc.: Overcoming the Unseen Forces That Stand in the Way of True Inspiration by Ed Catmull & Amy Wallace",
    "dates": "February 2015",
    "description": "Creativity, Inc. is a book for managers who want to lead their employees to new heights, a manual for anyone who strives for originality, and the first-ever, all-access trip into the nerve center of Pixar Animation",
    "image": "images/creativity.jpg"
  }, {
    "title": "The Innovators Solution: Creating and Sustaining Successful Growth by Clayton M. Christensen",
    "dates": "January 2015",
    "description": "This book teaches new businesses how to outpace the competition and sustain growth in the market by thinking outside of conventional methods. Examples from successful businesses are cited, and business-making decisions are examined.",
    "image": "images/innovatorsSolution.jpg"
  }]
};

projects.display = function() {
  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);
    var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedProjectTitle);
    var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedProjectDates);
    var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedProjectDescription);
    var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].image);
    $(".project-entry:last").append(formattedProjectImage);
  }
};
projects.display();

var education = {
  "schools": [{
    "name": "Southern Methodist University",
    "location": "Dallas, Texas",
    "degree": "Bachelors of Science",
    "majors": "Economics with Financial Applications",
    "dates": 2010,
    "url": "www.smu.edu"
  }, {
    "name": "Hillel Academy",
    "location": "Kingston, Jamaica",
    "degree": "Associate's degree",
    "majors": "something",
    "dates": 2006,
    "url": "http://www.hilleljm.com/"
  }],
  "onlineCourses": [{
    "title": "Intro to HTML and CSS",
    "school": "Udacity",
    "date": 2015,
    "courseUrl": "www.Udacity.com"
  }, ]
};

education.display = function() {
  for (edu in education.schools) {
    $("#education").append(HTMLschoolStart);
    var formattedName = HTMLschoolName.replace("%data%", education.schools[edu].name);
    var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[edu].degree);
    var formattedNameDegree = formattedName + formattedDegree;
    $(".education-entry:last").append(formattedNameDegree);
    var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[edu].location);
    $(".education-entry:last").append(formattedLocation);
    var formattedDates = HTMLschoolDates.replace("%data%", education.schools[edu].dates);
    $(".education-entry:last").append(formattedDates);
    var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[edu].majors);
    $(".education-entry:last").append(formattedMajors);
  }

  for (edu in education.onlineCourses) {
    $("#education").append(HTMLonlineClasses + HTMLschoolStart);
    var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[edu].title);
    var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[edu].school);
    var formattedTitleSchool = formattedTitle + formattedSchool;
    $(".education-entry:last").append(formattedTitleSchool);
    var formattedDate = HTMLonlineDates.replace("%data%", education.onlineCourses[edu].date);
    $(".education-entry:last").append(formattedDate);
    var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[edu].courseUrl);
    $(".education-entry:last").append(formattedURL);
  }
};
education.display();

$("#mapDiv").append(googleMap);
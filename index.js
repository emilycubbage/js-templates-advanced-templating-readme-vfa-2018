function loadIssue() {
 
  var template = Handlebars.compile(document.getElementById("issue-template").innerHTML);
  var result = template(issue);
  document.getElementsByTagName("main")[0].innerHTML += result;
}

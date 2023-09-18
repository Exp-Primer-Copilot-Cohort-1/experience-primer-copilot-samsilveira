function skillsMember() {
  var member = document.getElementById("member");
  var memberValue = member.options[member.selectedIndex].value;
  var memberText = member.options[member.selectedIndex].text;
  var skills = document.getElementById("skills");
  var skillsValue = skills.options[skills.selectedIndex].value;
  var skillsText = skills.options[skills.selectedIndex].text;
  var skillsMember = document.getElementById("skillsMember");
  var skillsMemberValue = skillsMember.options[skillsMember.selectedIndex].value;
  var skillsMemberText = skillsMember.options[skillsMember.selectedIndex].text;
  var skillsMemberValue = skillsMember.options[skillsMember.selectedIndex].value;
  var skillsMemberText = skillsMember.options[skillsMember.selectedIndex].text;
  var skillsMemberValue = skillsMember.options[skillsMember.selectedIndex].value;
  var skillsMemberText = skillsMember.options[skillsMember.selectedIndex].text;
  var skillsMemberValue = skillsMember.options[skillsMember.selectedIndex].value;
  var skillsMemberText = skillsMember.options[skillsMember.selectedIndex].text;
  var skillsMemberValue = skillsMember.options[skillsMember.selectedIndex].value;
  var skillsMemberText = skillsMember.options[skillsMember.selectedIndex].text;
  var skillsMemberValue = skillsMember.options[skillsMember.selectedIndex].value;
  var skillsMemberText = skillsMember.options[skillsMember.selectedIndex].text;
  var skillsMemberValue = skillsMember.options[skillsMember.selectedIndex].value;
  var skillsMemberText = skillsMember.options[skillsMember.selectedIndex].text;
  var skillsMemberValue = skillsMember.options[skillsMember.selectedIndex].value;
  var skillsMemberText = skillsMember.options[skillsMember.selectedIndex].text;
  if (memberValue == "member") {
    skills.style.display = "none";
    skillsMember.style.display = "none";
  } else if (memberValue == "leader") {
    skills.style.display = "block";
    skillsMember.style.display = "none";
  } else if (memberValue == "member") {
    skills.style.display = "none";
    skillsMember.style.display = "block";
  }
}
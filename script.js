document.getElementById('Resumeform').addEventListener('submit', function (event) {
    event.preventDefault();
    // Form fields se data nikaalna
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Resume ka HTML format
    var resumeHtml = "\n        <h2>Resume</h2>\n        <h3>Personal Information</h3>\n        <p><strong>Name:</strong> <input type=\"text\" value=\"".concat(name, "\" id=\"editableName\" /></p>\n        <p><strong>Email:</strong> <input type=\"email\" value=\"").concat(email, "\" id=\"editableEmail\" /></p>\n        <p><strong>Phone:</strong> <input type=\"tel\" value=\"").concat(phone, "\" id=\"editablePhone\" /></p>\n\n        <h3>Experience</h3>\n        <textarea id=\"editableExperience\">").concat(experience, "</textarea>\n\n        <h3>Skills</h3>\n        <textarea id=\"editableSkills\">").concat(skills, "</textarea>\n\n        <br />\n        <button id=\"saveButton\">Save</button>\n    ");
    // Resume output ko update karna
    document.getElementById('resumeOutput').innerHTML = resumeHtml;
    // Save button ke liye event listener
    document.getElementById('saveButton').addEventListener('click', function () {
        var updatedName = document.getElementById('editableName').value;
        var updatedEmail = document.getElementById('editableEmail').value;
        var updatedPhone = document.getElementById('editablePhone').value;
        var updatedExperience = document.getElementById('editableExperience').value;
        var updatedSkills = document.getElementById('editableSkills').value;
        var updatedResumeHtml = "\n            <h2>Updated Resume</h2>\n            <h3>Personal Information</h3>\n            <p><strong>Name:</strong> ".concat(updatedName, "</p>\n            <p><strong>Email:</strong> ").concat(updatedEmail, "</p>\n            <p><strong>Phone:</strong> ").concat(updatedPhone, "</p>\n\n            <h3>Experience</h3>\n            <p>").concat(updatedExperience, "</p>\n\n            <h3>Skills</h3>\n            <p>").concat(updatedSkills, "</p>\n        ");
        document.getElementById('resumeOutput').innerHTML = updatedResumeHtml;
    });
});

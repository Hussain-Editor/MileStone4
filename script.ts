document.getElementById('Resumeform')!.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    // Form fields se data nikaalna
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

    // Resume ka HTML format
    const resumeHtml = `
        <h2>Resume</h2>
        <h3>Personal Information</h3>
        <p><strong>Name:</strong> <input type="text" value="${name}" id="editableName" /></p>
        <p><strong>Email:</strong> <input type="email" value="${email}" id="editableEmail" /></p>
        <p><strong>Phone:</strong> <input type="tel" value="${phone}" id="editablePhone" /></p>

        <h3>Experience</h3>
        <textarea id="editableExperience">${experience}</textarea>

        <h3>Skills</h3>
        <textarea id="editableSkills">${skills}</textarea>

        <br />
        <button id="saveButton">Save</button>
    `;

    // Resume output ko update karna
    document.getElementById('resumeOutput')!.innerHTML = resumeHtml;

    // Save button ke liye event listener
    document.getElementById('saveButton')!.addEventListener('click', () => {
        const updatedName = (document.getElementById('editableName') as HTMLInputElement).value;
        const updatedEmail = (document.getElementById('editableEmail') as HTMLInputElement).value;
        const updatedPhone = (document.getElementById('editablePhone') as HTMLInputElement).value;
        const updatedExperience = (document.getElementById('editableExperience') as HTMLTextAreaElement).value;
        const updatedSkills = (document.getElementById('editableSkills') as HTMLTextAreaElement).value;

        const updatedResumeHtml = `
            <h2>Updated Resume</h2>
            <h3>Personal Information</h3>
            <p><strong>Name:</strong> ${updatedName}</p>
            <p><strong>Email:</strong> ${updatedEmail}</p>
            <p><strong>Phone:</strong> ${updatedPhone}</p>

            <h3>Experience</h3>
            <p>${updatedExperience}</p>

            <h3>Skills</h3>
            <p>${updatedSkills}</p>
        `;

        document.getElementById('resumeOutput')!.innerHTML = updatedResumeHtml;
    });
});

function updateProfileInfo(profileData) {
    const photo = document.getElementById('profile.photo')
    photo.src = profileData.photo
    photo.alt = profileData.name

    const name = document.getElementById('profile.name')
    name.innerText = profileData.name

    const job = document.getElementById('profile.job')
    job.innerText = profileData.job

    const location = document.getElementById('profile.location')
    location.innerText = profileData.location

    const phone = document.getElementById('profile.phone')
    phone.innerText = profileData.phone
    phone.href = `tel:${profileData.phone}`

    const email = document.getElementById('profile.email')
    email.innerText = profileData.email
    email.href = `mailto:${profileData.email}`

    const linkedin = document.getElementById('profile.linkedin')
    linkedin.innerText = profileData.linkedin
    linkedin.setAttribute("target", "_blank")

    const github = document.getElementById('profile.github')
    github.innerText = profileData.github
    github.setAttribute("target", "_blank")
}

function updateEducation(profileData) {
    const education = document.getElementById('profile.education')
    education.innerHTML = profileData.education.map(education => {
        return `
            <li>
                <h3 class="title">${education.name}</h3>
                <p class="period">${education.period}</p>
            </li>
        `
    }).join('')
}

function updateSoftSkills(profileData) {
    const softSkills = document.getElementById('profile.skills.softSkills')
    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')
}

function updateHardSkills(profileData) {
    const hardSkills = document.getElementById('profile.skills.hardSkills')
    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`).join('')
}

function updateLanguages(profileData) {
    const languages = document.getElementById('profile.languages')
    languages.innerHTML = profileData.languages.map(language => `<li>${language}</li>`).join('')
}

function updatePortfolio(profileData) {
    const portfolio = document.getElementById('profile.portfolio');
    portfolio.innerHTML = profileData.portfolio.map(project => {
        return `
            <li>
                <h3 ${project.github ? 'class="github"' : ''}>${project.name}</h3>
                ${project.site ? `<div><span>Site: </span> <a href="${project.site}" target="_blank">${project.site}</a></div>` : ''}
                <div><span>Código fonte: </span> <a href="${project.url}" target="_blank">${project.url}</a></div>
            </li>
        `;
    }).join('');
}

function updateProfessionalExperience(profileData) {
    const professionalExperience = document.getElementById('profile.professionalExperience')
    professionalExperience.innerHTML = profileData.professionalExperience.map(experience => {
        return `
            <li>
                <h3 class="title">${experience.name}</h3>
                <p class="period">${experience.period}</p>
                <p>${experience.description}</p>
            </li>
        `
    }).join('')
}

function updateCertificates(profileData) {
    const certificates = document.getElementById('profile.certificates');
    certificates.innerHTML += profileData.certificates.map(certificate => {
        return `
            <div class="item title">${certificate.name}</div>
            <div class="item"><a href="${certificate.url}">Certificado</a></div>
        `
    }).join('');
}

(async () => {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
    updateEducation(profileData)
    updateSoftSkills(profileData)
    updateHardSkills(profileData)
    updateLanguages(profileData)
    updatePortfolio(profileData)
    updateProfessionalExperience(profileData)
    updateCertificates(profileData)
})()
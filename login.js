const doctorData = [{
    username: 'CEO',
    name: 'Dr. Abdullah',
    salary: '$150,000',
    qualification: 'MD',
    specialization: 'Cardiology',
    experience: '15 years'
},
{
    username: 'CTO',
    name: 'Dr. Deepakh',
    salary: '$140,000',
    qualification: 'MD',
    specialization: 'Neurology',
    experience: '12 years'
},
{
    username: 'MD',
    name: 'Dr. Venkadesh',
    salary: '$130,000',
    qualification: 'MD',
    specialization: 'Orthopedics',
    experience: '10 years'
}
];

const doctorCredentials = [
{ username: 'CEO', password: 'abdullah' },
{ username: 'CTO', password: 'deepakh' },
{ username: 'MD', password: 'venkadesh' }
];

const adminCredentials = {
username: 'admin',
password: '1234',
};

function displayDoctorsDetails() {
const doctorsListDiv = document.getElementById('doctorsList');
doctorsListDiv.innerHTML = '';

doctorData.forEach((doctor) => {
    const doctorDiv = document.createElement('div');
    doctorDiv.classList.add('doctor-item');

    const doctorNameHeading = document.createElement('h2');
    doctorNameHeading.textContent = doctor.name;
    doctorDiv.appendChild(doctorNameHeading);

    const doctorDetailsList = document.createElement('ul');
    const salaryListItem = document.createElement('li');
    salaryListItem.textContent = `Salary: ${doctor.salary}`;
    doctorDetailsList.appendChild(salaryListItem);

    const qualificationListItem = document.createElement('li');
    qualificationListItem.textContent = `Qualification: ${doctor.qualification}`;
    doctorDetailsList.appendChild(qualificationListItem);

    const specializationListItem = document.createElement('li');
    specializationListItem.textContent = `Specialization: ${doctor.specialization}`;
    doctorDetailsList.appendChild(specializationListItem);

    const experienceListItem = document.createElement('li');
    experienceListItem.textContent = `Experience: ${doctor.experience}`;
    doctorDetailsList.appendChild(experienceListItem);

    doctorDiv.appendChild(doctorDetailsList);
    doctorsListDiv.appendChild(doctorDiv);
});
}

function goBack() {
window.history.back();
}

document.getElementById('loginForm').addEventListener('submit', function(event) {
event.preventDefault();
const username = document.getElementById('username').value;
const password = document.getElementById('password').value;
const role = document.getElementById('role').value;

if (role === 'doctor') {
    doctorLogin(username, password);
} else if (role === 'admin') {
    adminLogin(username, password);
} else {
    alert('Please select a role.');
}
});

function doctorLogin(username, password) {
const doctor = doctorCredentials.find((doc) => doc.username === username && doc.password === password);
if (doctor) {
    alert('Doctor login successful!');
    window.location.href = `doctor.html?username=${username}`;
} else {
    alert('Invalid doctor credentials.');
}
}

function adminLogin(username, password) {
if (username === adminCredentials.username && password === adminCredentials.password) {
    alert('Admin login successful!');
    window.location.href = 'admin.html';
} else {
    alert('Invalid admin credentials.');
}
}

if (window.location.pathname.includes('doctor.html')) {
const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get('username');

const doctorNameHeading = document.querySelector('h1');
doctorNameHeading.textContent = `Doctor Dashboard - Dr. ${username}`;

displayDoctorsDetails();
}

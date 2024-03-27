const doctorData = [
    {
        username: 'CEO',
        name: 'Dr. Abdullah',
        patients: [
            { name: 'Abi', allottedDay: 'Monday', appointmentTime: '10:00 AM' },
            { name: 'Saran', allottedDay: 'Tuesday', appointmentTime: '11:00 AM' }
        ]
    },
    {
        username: 'CTO',
        name: 'Dr. Deepakh',
        patients: [
            { name: 'Sanjay nath', allottedDay: 'Wednesday', appointmentTime: '9:00 AM' },
            { name: 'Sudhakar', allottedDay: 'Thursday', appointmentTime: '2:00 PM' }
        ]
    },
    {
        username: 'MD',
        name: 'Dr. Venkadesh',
        patients: [
            { name: 'Danny', allottedDay: 'Wednesday', appointmentTime: '9:00 AM' },
            { name: 'Bavan', allottedDay: 'Thursday', appointmentTime: '2:00 PM' }
        ]
    }
];

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
    const doctor = doctorData.find((doc) => doc.username === username);
    if (doctor) {
        alert('Doctor login successful!');
        window.location.href = `doctor.html?username=${username}`;
    } else {
        alert('Invalid doctor credentials.');
    }
}

function adminLogin(username, password) {
    if (username === 'admin' && password === '1234') {
        alert('Admin login successful!');
        window.location.href = 'admin.html';
    } else {
        alert('Invalid admin credentials.');
    }
}

if (window.location.pathname.includes('doctor.html')) {
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');

    const doctorNameHeading = document.querySelector('h2');
    doctorNameHeading.textContent = `Doctor Dashboard - Dr. ${username}`;

    displayDoctorsDetails(username);
}

function displayDoctorsDetails(username) {
    const doctor = doctorData.find((doc) => doc.username === username);
    if (doctor) {
        const doctorsListDiv = document.getElementById('doctorsList');
        doctorsListDiv.innerHTML = '';

        const doctorNameHeading = document.createElement('h3');
        doctorNameHeading.textContent = `Doctor: ${doctor.name}`;
        doctorsListDiv.appendChild(doctorNameHeading);

        const patientListUl = document.createElement('ul');
        doctor.patients.forEach((patient) => {
            const patientLi = document.createElement('li');
            patientLi.textContent = `Patient: ${patient.name}, Allotted Day: ${patient.allottedDay}, Appointment Time: ${patient.appointmentTime}`;
            patientListUl.appendChild(patientLi);
        });
        doctorsListDiv.appendChild(patientListUl);
    } else {
        alert('Doctor not found.');
    }
}

// Function to navigate back
function goBack() {
    window.history.back();
}

document.addEventListener('DOMContentLoaded', function() {
    const jobList = document.getElementById('job-list');
    const jobDetails = document.getElementById('job-details');

    // Function to display job details
    function showJobDetails(job) {
        jobDetails.innerHTML = `
            <h2>Job Details</h2>
            <p>Date: ${job.date}</p>
            <p>Company: ${job.company}</p>
            <p>Description: ${job.description}</p>
        `;
    }

    // Function to populate job list
    function populateJobList(jobs) {
        jobList.innerHTML = ''; // Clear previous list
        jobs.forEach(function(job) {
            const listItem = document.createElement('li');
            listItem.textContent = `${job.date} - ${job.company}`;
            listItem.addEventListener('click', function() {
                showJobDetails(job);
            });
            jobList.appendChild(listItem);
        });
    }

    // Fetch job data from JSON file
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            populateJobList(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});

// This code is supposed to maintain the state of the Job Details page even when the browser is refreshed (https://chatgpt.com/c/88782577-c9f4-4d87-8fac-2c0d38f51aab)

document.addEventListener('DOMContentLoaded', function () {
    const jobList = document.getElementById('job-list');
    const jobDetails = document.getElementById('job-details');

    // Function to display job details
    function showJobDetails(event, job) {
        event.preventDefault(); // Prevent the default behavior of navigating to a new page
        
        // Store the job details in sessionStorage
        sessionStorage.setItem('selectedJob', JSON.stringify(job));

         // Navigate to the job-details.html page in the same window
    window.location.href = 'job-details.html';
    }

    // Function to populate job list
    function populateJobList(jobs) {
        jobList.innerHTML = ''; // Clear previous list
        jobs.forEach(function(job) {
            const listItem = document.createElement('li');
            listItem.textContent = `${job.date} - ${job.company}`;
            listItem.addEventListener('click', function(event) {
                showJobDetails(event, job);
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

document.addEventListener('DOMContentLoaded', function() {
    const jobList = document.getElementById('job-list');
    const jobDetails = document.getElementById('job-details');

    // Function to display job details
    function showJobDetails(event, job) {
        event.preventDefault(); // Prevent the default behavior of navigating to a new page
        
        // Store the current location so that we can return to it later
        const currentLocation = window.location.href;

        // Generate HTML content for job details page
        const htmlContent = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Job Details</title>
                <link rel="stylesheet" href="style.css">
            </head>
            <body>
            <section id="details" style="display:block">
                <h1>Job Details</h1>
                <div>
                    <p>Date: ${job.date}</p>
                    <p>Company: ${job.company}</p>
                    <p>Description: ${job.description}</p>
                </div>
                <button onclick="window.location.href='index.html'">Home</button>
            </section>
            </body>
            </html>
        `;

        // Write HTML content to the current window
        document.open();
        document.write(htmlContent);
        document.close();
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

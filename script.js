const jobList = document.getElementById('job-list');

async function fetchData(url) {
    try {
        const response = await fetch(url);
        return response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function showJobDetails(job) {
    const detailsContainer = document.getElementById('job-details');
    if (detailsContainer) {
        detailsContainer.innerHTML = "<h2>Job Details</h2>" +
                                      "<p>Date: " + job.date + "</p>" +
                                      "<p>Company: " + job.company + "</p>" +
                                      "<p>Description: " + job.description + "</p>";
    }
}


document.addEventListener('DOMContentLoaded', () => {
    fetchData('data.json')
        .then(jobs => {
            jobs.forEach(job => {
                const listItem = document.createElement('li');
                listItem.innerHTML = `
                    <a href="#" onclick="showJobDetails(${JSON.stringify(job)}">
                        ${job.date} - ${job.company}
                    </a>
                `;
                jobList.appendChild(listItem);
            });
        });
});
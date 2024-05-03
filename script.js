const jobList = document.getElementById('job-list')

async function fetchData (url) {
  const response = await fetch(url) // Await the fetch call
  return response.json() // Parse the response as JSON
}

function showJobDetails (job) {
  // Modify this function as needed
  const detailsContainer = document.getElementById('job-details')
  if (detailsContainer) {
    detailsContainer.innerHTML = `
      <h2>Job Details</h2>
      <p>Date: ${job.date}</p>
      <p>Company: ${job.company}</p>
      <p>Description: ${job.description}</p>
    `
  }
}

fetchData('data.json')
  .then((jobs) => {
    jobs.forEach((job) => {
      const listItem = document.createElement('li')
      listItem.innerHTML = `
  <a href="#" onclick="event.preventDefault(); showJobDetails(${JSON.stringify(job)})">
    ${job.date} - ${job.company}
  </a>
`

      jobList.appendChild(listItem)
    })
  })
  .catch((error) => console.error('Error fetching data:', error))

  
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Define a route that takes query parameters and returns JSON
app.get('/api/data', (req, res) => {
  ;
  const slack_name = req.query.slack_name;

  // Current day of the week
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDay = daysOfWeek[new Date().getDay()];

  // Current UTC time with validation of +/-2
  const currentUTC = new Date().toISOString();

  // Track (replace 'backend' with the actual track)
  const track = req.query.track;

  // GitHub URL of the file being run
  const githubFileURL = 'https://github.com/username/repo/blob/main/file_name.ext';

  // GitHub URL of the full source code
  const githubRepoURL = 'https://github.com/username/repo';

  // Status Code of Success
  const statusCode = 200;

  // Create a JSON response object
  const response = {
    slack_name: slack_name,
    track: track,
    current_day: currentDay,
    utc_time: currentUTC,
    github_file_url: githubFileURL,
    github_repo_url: githubRepoURL,
    status_code: statusCode
  };

  res.json(response);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

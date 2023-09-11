const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


app.get('/api/data', (req, res) => {
  ;
  const slack_name = req.query.slack_name;


  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDay = daysOfWeek[new Date().getDay()];

  const currentUTC = new Date().toISOString();


  const track = req.query.track;


  const githubFileURL = 'https://github.com/oghuanlan-kingsley/javascript/blob/main/index.js';


  const githubRepoURL = 'https://github.com/oghuanlan-kingsley/javascript';


  const statusCode = 200;


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


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const keys = require('../../config/keys');
module.exports = survey => {
  return `
    <html>
      <div style="text-align: center">
        <h3>I would like your input!</h3>
        <p>Please answer the following</p>
        <p>${survey.body}</p>
        <div>
        <a href="${keys.redirectDomain}/api/surveys/thanks">Yes</a>
        </div>
        <div>
          <a href="${keys.redirectDomain}/api/surveys/thanks">No</a>
        </div>
      </div>
    </html>
  `;
};
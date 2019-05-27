//mongodb://<dbuser>:<dbpassword>@ds135456.mlab.com:35456/play_test
const secrets = {
    dbUri: "mongodb://seba:qwerty123@ds135456.mlab.com:35456/play_test"
  };
  
  const getSecret = key => secrets[key];
  
  module.exports = getSecret;
  
const axios = require('axios');

const payload = {
  email: "itssunnyshrivastava@gmail.com",
  name: "sunny shrivastava",
  rollNo: "a60205222117",
  accessCode: "JpzerQ",
  clientID: "40d35c62-b10c-4313-b824-3cb59e6fd8e2",
  clientSecret: "NUNzGzUWUhCqsskj"
};

axios
  .post('http://20.244.56.144/evaluation-service/auth', payload)
  .then((response) => {
    console.log("✅ Token response:");
    console.log(response.data);
  })
  .catch((error) => {
    console.error("❌ Error fetching token:");
    console.error(error.response ? error.response.data : error.message);
  });

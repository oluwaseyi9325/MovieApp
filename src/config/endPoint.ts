export const environments = {
    demo: {
      api: "https://api.porchplus.com.ng/v1",
      web: "https://porchplus.com.ng/",
      title: "Demo",
    },
    test: {
      api: "https://test-api.porchplus.com.ng/v1",
      web: "https://test.porchplus.com.ng/",
      title: "Test",
    },
    live: {
      api: "https://api.porchplus.com/v1",
      web: "https://porchplus.com/",
      title: "Live",
    },
  };
  
  // Set the active environment
  export const currentEnv = environments.test;
  
  // Export URLs
  export const website_rul = currentEnv.web;
  export const BASE_URL = currentEnv.api;
  
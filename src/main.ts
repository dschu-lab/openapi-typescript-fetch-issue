import { Configuration, HelloWorldApi } from "../.generated";

const fetchHelloWorld = async () => {
  const config = new Configuration();
  const api = new HelloWorldApi(config);

  const response = await api.getHelloRaw({
    params: { count: 10, start: 10 },
  });

  const decodedUrl = decodeURIComponent(response.raw.url);
  console.log(`Fetched from ${decodedUrl}`);

  if (decodedUrl.includes("[object Object]")) {
    console.error("Error: URL contains [object Object]");
  }
};

fetchHelloWorld();

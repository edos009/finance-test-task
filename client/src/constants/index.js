const serverIP = "localhost";
const serverPort = 4000;

const CONSTANTS = {
  BASE_URL: `http://${serverIP}:${serverPort}`,
  SOCKET_EVENTS: {
    START: "start",
    TICKER: "ticker"
  }
};

export default CONSTANTS;

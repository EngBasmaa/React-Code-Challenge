import axios from "axios";

export const fetchSkips = () => {
  return axios.get(
    "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft"
  );
};

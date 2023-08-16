import { useState } from 'react'
import { getCookie } from "cookies-next"

export default function Home() {
  const [emergencyNumbers, setEmergencyNumbers] = useState("");

  let countryCode = getCookie("countryCode");

  if (emergencyNumbers === "") {
    fetch(`https://emergencynumberapi.com/api/country/${countryCode}/`)
      .then(response => response.json())
      .then(data => setEmergencyNumbers(data))
      .catch(error => console.error("boo!", error));
  }

  console.log("wee woo ", emergencyNumbers)

  return (
    <div><h1>Emergency numbers!</h1></div>
  )
}

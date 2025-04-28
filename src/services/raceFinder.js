const username = "q2JH94ArcjFYzXXIbBgKl8IghJCcVvEL";
const password = "AhzLEcrsEgb5XUoHVprHKPv28QQXTaPY";

export async function findRaces(searchTerm) {
  const headers = new Headers();
  headers.set("Authorization", "Basic " + btoa(username + ":" + password));

  const url = `https://runsignup.com/rest/races?events_only=false&format=json&name=${encodeURIComponent(
    searchTerm
  )}`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: headers,
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

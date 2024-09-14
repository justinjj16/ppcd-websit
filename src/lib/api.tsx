export const sendContactForm = async (data) => {
  return fetch("api/contact", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).then((res) => {
    if (!res.ok) throw new Error("Fail to send message");
    return res.json();
  });
};

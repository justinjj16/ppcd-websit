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

export const authenticate = async (data) => {
  return fetch("api/authenticate", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).then((res) => {
    if (!res.ok) throw new Error("Fail to Authenticate");
    return res.json();
  });
};

export const validateToken = async (token) => {
  return fetch("api/authenticate", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    if (!res.ok) throw new Error("Fail to Validate Token");
    return res.json();
  });
};

export const sendWelcomeForm = async (data) => {
  return fetch("api/welcome", {
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

export default function authHeader() {
  let token = localStorage.getItem("jwt");
  if (token) {
    // for Node.js Express back-end
    return { "x-access-token": token };
  } else {
    return {};
  }
}

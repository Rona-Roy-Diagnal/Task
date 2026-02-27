

const LOGIN_URL=import.meta.env.VITE_LOGIN_URL;
const AuthService = async (username: string, password: string) => {
  const credential = `${username}::${password}`;
  const utf8Bytes = new TextEncoder().encode(credential);

  // convert the Uint8Array to binary string where each character is a single byte
  const binaryString = String.fromCharCode(...utf8Bytes);

  // encode the binary string using btoa()
  const encoded = btoa(binaryString);
  const res = await fetch(`${LOGIN_URL}/account/login`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${encoded}`,
       Origin: 'https://task-ten-chi-70.vercel.app/',
      "Content-Type":"application/json"
    },
    body: JSON.stringify({
      platform: "web",
    }),
  });

  if (!res.ok) {
    throw new Error(`${res.status}`);
  }

  const result = await res.json();
  const token = result?.data?.authentication_token;
  if (!token) {
    throw new Error("token not found");
  }
 
  return token;
};

export function SignOut() {
  localStorage.removeItem("auth_token");
}

export default AuthService;

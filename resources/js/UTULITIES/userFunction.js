export function getUsernameInEmail(email) {
  const username = email.split('@')[0] ?? null 
  return username.charAt(0).toUpperCase() + username.slice(1)
}

export const replaceLastFour = (s) => {
    return s.replace(/.{4}$/, "****");
  }
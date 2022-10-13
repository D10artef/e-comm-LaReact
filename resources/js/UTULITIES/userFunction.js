export function getUsernameInEmail(email) {
  const username = email.split('@')[0] ?? null 
  return username.charAt(0).toUpperCase() + username.slice(1)
}
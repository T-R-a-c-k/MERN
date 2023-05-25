export function requestHeaders(tokenInstance) {
  return {
    headers: {
      Authorization: `Bearer ${tokenInstance.token}`,
    },
  };
}

export default function middleware(request) {
  const password = process.env.BASIC_AUTH_PASSWORD;

  if (!password) {
    return;
  }

  const auth = request.headers.get('authorization');

  if (auth) {
    const encoded = auth.replace(/^Basic\s+/i, '');
    const decoded = atob(encoded);
    const idx = decoded.indexOf(':');
    const pwd = idx !== -1 ? decoded.slice(idx + 1) : '';
    if (pwd === password) {
      return;
    }
  }

  return new Response('Authentication required', {
    status: 401,
    headers: { 'WWW-Authenticate': 'Basic realm="Protected"' },
  });
}

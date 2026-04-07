export default function middleware(request) {
  const password = process.env.BASIC_AUTH_PASSWORD;

  if (!password) {
    return;
  }

  const auth = request.headers.get('authorization');

  if (auth) {
    const [scheme, encoded] = auth.split(' ');
    if (scheme === 'Basic') {
      const decoded = atob(encoded);
      const [, pwd] = decoded.split(':');
      if (pwd === password) {
        return;
      }
    }
  }

  return new Response('Authentication required', {
    status: 401,
    headers: { 'WWW-Authenticate': 'Basic realm="Protected"' },
  });
}

import http from 'k6/http';
import { check, sleep } from 'k6';

export default function () {
  const url = 'https://dummyjson.com/products/add';

  const payload = JSON.stringify({
    title: 'Post Product',
    price: 10.99,
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const res = http.post(url, payload, params);

  check(res, {
    'status is 201': (r) => r.status === 201,
  });

  console.log('Response body:', res.body);

  sleep(1);
}

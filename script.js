import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
    thresholds: {
        http_req_duration: ['p(90)<300', 'p(95)<500'],
        http_req_failed: ['rate<0.01']
    },
    vus: 10,
    duration: '1m'
};

export default function() {
    const response = http.get('https://dummyjson.com');
    sleep(1);
    check(response, {
        'is status 200': (r) => r.status === 200
    });
}
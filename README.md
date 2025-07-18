# Script.js

PS C:\Users\matej\OneDrive\Desktop\Praksa\k6\k6-task> k6 run script.js

         /\      Grafana   /‾‾/  
    /\  /  \     |\  __   /  /   
   /  \/    \    | |/ /  /   ‾‾\ 
  /          \   |   (  |  (‾)  |
 / __________ \  |_|\_\  \_____/ 

     execution: local
        script: script.js
        output: -

     scenarios: (100.00%) 1 scenario, 10 max VUs, 1m30s max duration (incl. graceful stop):
              * default: 10 looping VUs for 1m0s (gracefulStop: 30s)



  █ THRESHOLDS

    http_req_duration
    ✓ 'p(90)<300' p(90)=176.33ms
    ✓ 'p(95)<500' p(95)=222.4ms

    http_req_failed
    ✓ 'rate<0.01' rate=0.00%


  █ TOTAL RESULTS

    checks_total.......................: 517     8.456111/ 
    checks_succeeded...................: 100.00% 517 out of 517
    checks_failed......................: 0.00%   0 out of 517

    ✓ is status 200

    HTTP
    http_req_duration.......................................................: avg=171.18ms min=153.07ms med=162.86ms max=421.79ms p(90)=176.33ms p(95)=222.4ms
      { expected_response:true }............................................: avg=171.18ms min=153.07ms med=162.86ms max=421.79ms p(90)=176.33ms p(95)=222.4ms
    http_req_failed.........................................................: 0.00% 0 out of 517
    http_reqs...............................................................: 517   8.456111/s

    EXECUTION
    iteration_duration......................................................: avg=1.17s    min=1.15s    med=1.16s    max=1.43s    p(90)=1.17s    p(95)=1.23s
    iterations..............................................................: 517   8.456111/s
    vus.....................................................................: 7     min=7        max=10
    vus_max.................................................................: 10    min=10       max=10

    NETWORK
    data_received...........................................................: 13 MB 208 kB/s
    data_sent...............................................................: 58 kB 955 B/s



                                                           
running (1m01.1s), 00/10 VUs, 517 complete and 0 interrupted iterations                                               
default ✓ [=================================] 10 VUs  1m0s 




# Spike.js




PS C:\Users\matej\OneDrive\Desktop\Praksa\k6\k6-task> k6 run spike.js 

         /\      Grafana   /‾‾/  
    /\  /  \     |\  __   /  /   
   /  \/    \    | |/ /  /   ‾‾\ 
  /          \   |   (  |  (‾)  |
 / __________ \  |_|\_\  \_____/ 

     execution: local
        script: spike.js
        output: -

     scenarios: (100.00%) 1 scenario, 100 max VUs, 1m40s max duration (incl. graceful stop):
              * default: Up to 100 looping VUs for 1m10s over 3 stages (gracefulRampDown: 30s, gracefulStop: 30s)



  █ THRESHOLDS

    http_req_duration
    ✓ 'p(90)<300' p(90)=171ms
    ✓ 'p(95)<500' p(95)=175.06ms

    http_req_failed
    ✗ 'rate<0.01' rate=1.14%


  █ TOTAL RESULTS

    checks_total.......................: 1918   27.056523/s
    checks_succeeded...................: 98.85% 1896 out of 1918
    checks_failed......................: 1.14%  22 out of 1918

    ✗ is status 200
      ↳  98% — ✓ 1896 / ✗ 22

    HTTP
    http_req_duration.......................................................: avg=164.76ms min=120.3ms  med=161.23ms max=653.8ms p(90)=171ms    p(95)=175.06ms
      { expected_response:true }............................................: avg=165.16ms min=135.95ms med=161.33ms max=653.8ms p(90)=171.02ms p(95)=175.06ms
    http_req_failed.........................................................: 1.14%  22 out of 1918
    http_reqs...............................................................: 1918   27.056523/s

    EXECUTION
    iteration_duration......................................................: avg=1.16s    min=1.12s    med=1.16s    max=1.65s   p(90)=1.17s    p(95)=1.23s
    iterations..............................................................: 1918   27.056523/s
    vus.....................................................................: 7      min=1          max=100
    vus_max.................................................................: 100    min=100        max=100

    NETWORK
    data_received...........................................................: 47 MB  660 kB/s
    data_sent...............................................................: 227 kB 3.2 kB/s



                                                                                                                                            
running (1m10.9s), 000/100 VUs, 1918 complete and 0 interrupted iterations                                                                  
default ✓ [======================================] 000/100 VUs  1m10s                                                                       
ERRO[0071] thresholds on metrics 'http_req_failed' have been crossed




# Post.js



PS C:\Users\matej\OneDrive\Desktop\Praksa\k6\k6-task> k6 run post.js  

         /\      Grafana   /‾‾/  
    /\  /  \     |\  __   /  /   
   /  \/    \    | |/ /  /   ‾‾\ 
  /          \   |   (  |  (‾)  |
 / __________ \  |_|\_\  \_____/ 

     execution: local
        script: post.js
        output: -

     scenarios: (100.00%) 1 scenario, 1 max VUs, 10m30s max duration (incl. graceful stop):
              * default: 1 iterations for each of 1 VUs (maxDuration: 10m0s, gracefulStop: 30s)

INFO[0000] Response body: {"id":195,"title":"Post Product","price":10.99}  source=console


  █ TOTAL RESULTS

    checks_total.......................: 1       0.774722/s
    checks_succeeded...................: 100.00% 1 out of 1
    checks_failed......................: 0.00%   0 out of 1

    ✓ status is 201

    HTTP
    http_req_duration.......................................................: avg=137.68ms min=137.68ms med=137.68ms max=137.68ms p(90)=137.68ms p(95)=137.68ms
      { expected_response:true }............................................: avg=137.68ms min=137.68ms med=137.68ms max=137.68ms p(90)=137.68ms p(95)=137.68ms
    http_req_failed.........................................................: 0.00%  0 out of 1
    http_reqs...............................................................: 1      0.774722/s

    EXECUTION
    iteration_duration......................................................: avg=1.29s    min=1.29s    med=1.29s    max=1.29s    p(90)=1.29s    p(95)=1.29s
    iterations..............................................................: 1      0.774722/s
    vus.....................................................................: 1      min=1      max=1
    vus_max.................................................................: 1      min=1      max=1

    NETWORK
    data_received...........................................................: 3.7 kB 2.9 kB/s
    data_sent...............................................................: 615 B  477 B/s



                                                                                                                                            
running (00m01.3s), 0/1 VUs, 1 complete and 0 interrupted iterations                                                                        
default ✓ [======================================] 1 VUs  00m01.3s/10m0s  1/1 iters, 1 per VU   
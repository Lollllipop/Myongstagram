# Myongstagram-app

# 사용법
1. 깃 클론   
`$ git clone https://github.com/Lollllipop/Myongstagram-app.git`

2. 패키지 설치   
`$ cd client`    
`$ yarn`      
`$ cd server`    
`$ yarn`    

3. db 설정    
`$ psql postgres`    
`> CREATE ROLE dahan WITH LOGIN CREATEDB PASSWORD '950113';`    
  
4. db init     
`$ sequelize db:create`     
`$ sequelize db:migrate`    
`$ sequelize db:seed:all`     
`$ cd..`     
  
5. ip 설정    
`$ code .`    
client/src/config/index.js로 이동    
server: 'http://172.30.1.23:3000'    
를 현재 컴퓨터의 local ip로 변경    
   
6. 데이터 삽입    
Postman 실행    

POST localhost:3000/testUsers     
(user데이터 100개 생성)
   
POST localhost:3000/testPosts    
(post데이터 100개 생성)
   

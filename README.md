## Run Node backend 
npm run dev

## Run React UI
npm start

### Check kafka event 
docker exec -it node-backend-kafka-1 kafka-console-consumer --bootstrap-server localhost:9092 --topic trending --from-beginning
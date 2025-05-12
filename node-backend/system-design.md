# Topic 
    # Auth
        - gmail/facebook/otp(email/phone)

    # Movie
    - add movie
        - Language
        - Country
        - Category
        - Name
        - rating
        - upvote
        - downvote
        - releaseYear
        - releaseMonth
    - Search Movie
        - Name    

tools 
- node backend
- postgres sql db

* connect node backend to postgres sql db table (topic)
* post operation - add to db
* get operation fetch from db

post req (localhost:3000/api/topic/add) -> node backend -> write to topic table (postgres)
get req (localhost:3000/api/topic/get) ->  node -> select from topic table 

install 
node 
postgres
vs code






-------

- rename project to trending 
- add gitignore file and ignore node_modules 
- create github repo
- commit and push


npm init -y
npm install express pg
npm install --save-dev typescript ts-node-dev @types/node @types/express

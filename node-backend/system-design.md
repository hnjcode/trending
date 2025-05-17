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

----

### Tools used
- node backend
- postgres sql
- react ui
- docker compose
- kafka
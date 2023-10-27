1. Install express JS and handlebars
2. Make an architecture - src folder, public folder with css and images and views folder.
3. Make main.hbs and home.hbs
4. Basics in index.js - The starting point
    - Make basic express config to read static files.
    - create router.js which is still empty but later I will move some code inside
5. Mongoose was installed and connections were moved in external file called constants.js
6. Make nav bar visible for logged users and guest users
7. Error message in home page - In case of error, you should display div with class "errorContainer"
8. Add User model
    - simple validation in Schema
    - add method for register
    - create first User record in the db
    - validate password
    - validate email
9. Hash password
    - install bcrypt
    - hash password

10. Generate jsonwebtoker
    - install jsonwebtoken
    - promisify jsonwebtoken
    - generate secret
    - generate token in service login

11. Return token in cookie
    - install cookie parsers
    - config cookie-parser
    - set cookie with the token

12. Implement logout

13. Authentication middleware
    - create middleware directory
    - add auth middleware and import it in express config below cookieParser
    - decode the token
    - handle invalid token
    - provide authorization

14. Electronic model was created.
    - All posts pages were moved in another folder called posts. 
    - Hrefs in main.hbs and in create.hbs were fixed.

15. Create functionality
    - electronicService was made
    - postController was made and fixed
    - Create Electronic was successful.

16. All posts - Catalog
    
# [Animal Crossing DIY Recipe]("")
![](./static/readme/animal-crossing.png) 

This Website focuses solely on the DIY Recipes available in Animal Crossing: New 
Horizons. Search for recipes here and craft it in game. But wait, you discovered a 
recipe?! Feel free to ADD the recipe by yourself here if its not on the site already!

- ## User Stories
   - ### As a New Visiter:
        As a new visitor of the site, I wish to:
        1. Find Recipe that I need.
        2. Browse Recipe without loggin.
        3. Register for an account.

    - ### As a Registered User:
        As a user of the site, I wish to:
        1. Log in to the site.
        2. Edit, Remove and Add recipes.
        3. View recipes that I added. 

    - ### As a Administrative User:
        As a administrative of the site, I wish to:
        1. Delete and edit existing recipes that is innapropriate. 
        2. Delete and edit existing recipes that have wrong information.
        3. Add new Type of recipe.

- ## Design
   - ### Color Theme
      The main colours used are Yellow and a Background Image of Animal Crossing.
   - ### Font
      1. Dela Gothic One as the main heading choices.
      2. Kiwi Maru as the normal font.
      3. Sans Serif will be the fall back font if all fonts don't work.
   - ### Wireframe
      1. [Desktop and Mobile Wireframe](./static/readme/animal-crossing.pdf)
      2. Tablet is the same as Desktop version.

- ## Features and Functionality
   - ### Nav Bar and footer
       Nav bar is fixed at the top for easier navigation and footer is fixed at the bottom
       for social media. On smaller device, the nav bar will be compressed into a side slide
       menu which can be open by clicking on the down arrow button.

    - ### Home Page
        There will be a panel describing what this website is for, what type of game is Animal
        Crossing and what/how do you do with crafting. There is also a button to redirect to 
        the Recipes page.

    - ### DIY Recipe page
        A search bar will be on top of the page for users to search for existing reicpes and also to make
        sure users doesn't add an existing recipe to the site. Below the search bar will be where all the
        recipes card be, users can click on the image to triggers more information to be shown. Only user
        that created the recipe can edit or remove it.

    - ### Log In page
        Registered user can input their username and password info to log in to the site. If either one of the
        info is incorrect, a flash message will appear to inform the user.

    - ### Register page
        Non-user can visit this page to register and unlock more function. They will have to input a valid
        username and password on the form.

    - ### Profile page
        Page will show user's profile with their name and the recipe they added to the site. For conveniency
        user's can also edit or remove their recipe on this page.

    - ### Add DIY Recipe page 
        User can feel free to add recipe they found in game here by filling the form with valid input. If there's
        existing recipe a flash message will appear to warn user. 

    - ### Manage Type page
        Admin only page, it's for admin to add more type choices in the website for user to choose from. Admin can 
        remove and edit the Type here as well.

    - ### Edit Recipe page
        This function can be access in user's profile and DIY Recipe page if that recipe belong to the user. Can change
        or update previous information here.

    - ### Edit Type page
        This function is only available for admin in the manage type page, it's for admin to change the type.

    - ### Remove button
        This function can be access at all recipes card and type. When removing a recipe/type a popup will appear to warn
        user/admin before they want to remove it.

    - ### Custom error 404 page
        An errorhandler code created for a custom 404 page. The page will advise the visitor/user that an error has 
        occured and a link to redirect them back to the homepage.

- ## Technologies Used
   - ### Languages
      1. [HTML](https://en.wikipedia.org/wiki/HTML)
      2. [CSS](https://en.wikipedia.org/wiki/CSS)
      3. [Javascript](https://en.wikipedia.org/wiki/JavaScript)
      4. [Python](https://www.python.org/)

   - ### Frameworks, Libraries & Programs Used
      1. [Materialize v1.0.0](https://materializecss.com/) (Responsiveness and styling of the website.)
      2. [Google Fonts](https://fonts.google.com/)  (Used to obtain my fonts.)
      3. [Font Awesome v5.14.0](https://fontawesome.com/) (Used on all pages to add icon for aesthetic and UX purposes.)
      4. [GitPod](https://www.gitpod.io/) (Used terminal to git commit and git push to GitHub. Also used for version control.)
      5. [GitHub](https://github.com/) (Store projects after being pushed from Gitpod.)
      6. [Balsamiq](https://balsamiq.com/) (Used to design the layout of the website.)
      7. [PicResize](https://picresize.com/) (Used for resizing images that are too large.)
      8. [Flask](https://flask.palletsprojects.com/en/1.1.x/) (A Python framework and used with Jinja2 templating language. This is 
      used for generating HTML templates and accessing/processing data sent from the frontend.)
      9. [jQuery](https://jquery.com/)(A Javascript library that simplifies manipulation of of the HTML DOM.)

- ## Database
    - ### Mongo DB
        MongoDB is the database used to store my collection of data. There are three collections of data - recipes, types and users. 
        Each of the collections have a simple key-value format.
        - ### recipes
            This contains the recipe's name, type, usage, material needed, image link, limited time and created by who. It's all string type.
            Recipes can be edited by the creator of the recipe and no duplicate recipe can be added.
        - ### types
            This contains the types of recipe available for user to choose from and it can only be access by Admin only.
        - ### users
            This contains the user's username and password info and will inform user's when the username is taken.

- ## Deployment
   - ### MongoDB Setup for Cloning or Forking the Project.
        
        1. Sign up to MongoDB.
        2. Select the "Shared Clusters" option.
        3. Select the AWS Cloud Provider.
        4. Select a region, in my case I chose Singapore as it is the closest to me.
        5. Select the M0 Sandbox tier, which is the Free tier.
        6. Name your Cluster in the Cluster Name field.
        7. Select "Create Cluster".
        8. In the menu on the left, select "Database Access" under the "SECURITY" category.
        9. Select "Add New Database User" and create a user for access to the datase.
        10. Select "Clusters" tab.
        11. Click the "Collections" button.
        12. click "Add my own data" - this is where you create the database.
        13. Add three collections called "recipes", "types" and "users".
        14. Go to Clusters and select "Connect"
        15. Select "Connect your application"
        16. Ensure that the Driver is "Python" and Version is "3.6 or later".
        17. Copy and save the URL string that starts with "mongodb+srv://..."
        18. Within your project, the following environment variables will need to be setup:
        ```
        app.config["MONGO_DBNAME"] = "Your own database name"
        app.config["MONGO_URI"] = "The URL string, ensure you replace the password holder with your own user password"
        app.secret_key = "A random string" (Use a random key generator for security)
        ```
        
Assignment Project for Dreadnought

Instructions to check the project.

# When on Main Page.
 
   Main Pages is created to provide an interface between the user and the dashboard.
   The user can login to the dashboard by clicking on the login / signup button.
   At current we are not taking data from the users for entering the data will not cause any effect you can directly click
   stimulate the dashboard.

# When on Dashboard page.

1. Dashboard
    It only cotaines the dummy Top image and some dummy testimonials by the user.

2. Courses -> ALl Courses
    On Cliking courses it autmaticaly redirects to the all courses component.
    It will let you to Subscribe to new courses.
    **Subscribe** button will add the course to the list.
    Added courses will display on **Subscribed Courses** option.

3. Courses -> Subscribed Courses
    The subscribed courses will come here.
    You can remove those courses by clicking remove.
    **Remove** option will remove the courses from subscribed courses.
    **Subscribed** option will will show the details of the course in console.

4. Other options (Earnings, Achievements, Milestones, Assignments, Refer & Earn, Help/Support)
    All the remaining options are dummy options but you can click them.
    Sample text is available in all of them.


# Note
    1. Please wait till the loading animation is completed when you click the **Subscribe** button.
       When it is completed it will show the **Subscribed** message.
       Do not click mulitple courses at the same time.

    2. When you are searching for the courses by typing very fast can sometimes cause lagging but don't worry it will
       automatically resolved after a few times. 
       It happens because when you type it calls the provided api everytime, hence calling the function multiple times will lead to a little delay in the response.

    3. Where ever there is a place for a logo a rectangle of blue background is added to show how logo will be placed.

    4. Routing is not added only for main page to dashboard. All the components are rendered on the same page.
       The components are rendered based on the state of the component.
       If the state is true then the component will be rendered else it will not be rendered.

    5. The project is not responsive. It is only for desktop view with greater width than 1024px.
       Some text will be hidden if the width is because of **alt tag** of the image.

    6. There is no javascript error and warnings in this project, but when you load the courses because the images are not
       available it will show the error in the console. But it will not affect the project.

    7. If the account is already selected then it is appear in green color and says subscribed till the you refresh the page
       or remove the account from the **Subscribed Courses** option.

    8. The data appearing in the courses list is from a random api which return list of companies.
       The data is not stored in the local storage or any other storage.

    9. If there are something you want to ask or want to know more about the project please contact me.
       I will be happy to answer your questions.
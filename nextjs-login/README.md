# Next.js Login Page

**Overview**
This Next.js project implements a simple login page with basic form validation using a mock api endpoint.

**Pages**
* **src/app/components/forms/login-form.tsx:** The main login page component. Handles form submissions.

**Routes**
* **pages/auth/login/:** Defines the route for the login page.
* **pages/dashboard/:** Defines the route for the dashboard page.

**Elements**
* **SubmitButton:** A reusable form component used in the login page.
* **SucessButton** A reusable form component used in the dashboard page.

**Actions**
* **src/app/data/actions** Server-side login request handler action.

**SCSS**
* **src/app/styles/projectPage.module.scss:** Styles the page components.

**Getting Started**

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/MunchyBunchy2203/NextJS-Login.git](https://github.com/MunchyBunchy2203/NextJS-Login.git)
   ```

2. **Navigate to the project directory**
    ```bash
    cd nextjs-login
    ```

3. **Install Project Dependencies**
    ```bash
    npm install
    ```

4. **Set mock api endpoint**
    Navigate to the root of the project where you will see a 'next.config.ts' file.
    Change the value of the 'authEndpoint' environment variable to match the mock endpoint used.

    ***NOTE*** - the following structure of response from the mock api looks as follows:
        {
            "token": "your_mock_token",
            "user": {
                "id": "Fake Object Id",
                "firstname": "Fake First Name",
                "lastname": "Fake Last Name",
                "email": "Fake Email",
                "createdAt": "Fake Date Created",
                "age": "Fake Age",
                "residenceCountry": "Fake Country",
                "residenceCity": "Fake City"
            }
        }

    If you would like to keep the usage of the current endpoint, I have set up a mock endpoint using Mockoon.
    In the next steps I'll guide you through how to set up the exact same mock api endpoint with some fake data.

    * **Install Mockoon**
        ```bash
        sudo snap install mockoon
        ```

    * **Open Mockoon and delete any current environments**
        On the left hand side of the Mockoon interface you might see an environment already set up. If that is the case, delete the environment by clicking on the three dots next to the name then selection 'Close Environment'.

    * **Import Existing Environment**
        Staying at the environment section you will see a 'plus' button. Click on it and select 'Open Local Environment'. Navigate to the root of the 'nextjs-login' project and select the 'mockoonEnv.json' file. By importing this .json you have an exact replica of the endpoint and enviroment that I used to the project. You can now start the server by clicking on the 'play' button at the top next to 'Routes'.

    ***NOTE*** - a response latency has been added of 2000 ms to simulate a real world api call.

5. **Start the project development server**
    ```bash
    npm run dev
    ```

6. **Access the login page**: Open your preferred browser and navigate to
    ```bash
    http://localhost:5050
    ```

**App Usage**

1. **Welcome Page**
    You will first be greeted by a welcome page. By clicking on the 'Go to Log In' button you will be redirected to the 'Login Page'.

2. **Login Page**
    Now you will see the login page with a NextJS Logo and input fields for 'email' and 'password'.
    Fill in these fields with the following details:
    ```bash
    Username: user@example.com
    Password: admin123
    ```

    Before click on the 'Login' Button, open up the developer console and go to the 'Network' tab and clear the network log.

    When you click on the 'Login' button, you will see a 'login' event happen.
    ***NOTE*** - when you click on the button multiple times it will not call the function again. This is to combat multiple submissions.

3. **Dashboard**
    After the login is successful, you will be redirected to the dashboard with some fake data from the mock api endpoint in Mockoon alongside the email you used to log into the system.

4. **Logout**
    You can logout of the system by clicking on the 'Logout' button and you will then be redirected to the 'Login Page'

**Outro**

Thank you for the opportunity to work on this Next.js login page project. I've enjoyed the process of learning and implementing the various concepts involved.

I'm eager to continue working on this project regardless of the outcome and would greatly appreciate any feedback or suggestions you may have. This will help me to further refine the project and deepen my understanding of Next.js and its ecosystem.
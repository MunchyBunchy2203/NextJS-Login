**Project Setup and Instructions**

- **Tech Stack**: Next.js (version 14.2 or later), optional but preferred TypeScript, SCSS, and a caching library of your choice.
- **Objective**: Build a login page that authenticates a user, caches their details, and redirects them to a dashboard that displays their basic information. Look and feel of the project can be to your discretion.
- **Deliverables**: A functional Next.js project with server-side rendering (SSR) and a README that includes setup instructions, run commands, and notes on specific implementation details.
- **Project Timeline**: Estimated time to complete is one week.
- **Special Criteria**: Please make no or minimal use of AI coding assistance. The intent of this test is to determine your ability to implement and learn.

**Requirements**

**Rendering**

- **Server-Side Rendering**:
  - Use server-side rendering wherever feasible for improved performance**.**

**Authentication Form**

- **Login Page:**
  - Create a login form with fields for username and password.
  - Validate form input using either vanilla JavaScript or a validation library.
  - Disable form fields and the submit button while the login request is pending to prevent multiple submissions.

**Authentication Logic**

- **Mock Authentication:**
  - Use a mock API or placeholder endpoint to simulate authentication, returning a token and user data on successful login. (The API can be part of your Next.js app using routes)
  - Upon successful login, redirect the user to a protected dashboard page where their basic information, previously cached, is displayed.

**Caching Logic**

- **Session Caching:**
  - Cache the user's details and login state to keep them logged in for a set duration (e.g., 1 hour).
  - Use either cookies or localStorage to store the session token, ensuring it persists across page reloads.
  - Automatically log the user out and redirect to the login page when the cache expires.

**User Interface**

**Login Page**

- **Design:**
  - Create a simple, responsive layout for the login form.
  - Provide feedback for loading states and any authentication errors, such as incorrect credentials.

**Dashboard Page**

- **Dashboard Design:**
  - Display a "Welcome" message or a basic dashboard view showing the logged-in user's data.
  - Include a "Logout" button that clears the session data and redirects the user to the login page.

**Implementation Criteria**

**Code Quality**

- Write modular, readable code with an emphasis on clarity.
- Use components effectively, especially for reusable form fields and layout elements.

**State and Cache Management**

- Implement caching with cookies or localStorage, including logic to manage cache expiration.
- Ensure session handling prevents unauthorized access to protected routes.

**Routing and Redirects**

- Protect the dashboard route to ensure unauthenticated users are redirected to the login page.
- Redirect authenticated users directly to the dashboard upon successful login.

**Evaluation Criteria**

- **Completeness:** Implementation meets all outlined requirements with a clear and functional codebase.
- **Code Quality:** Code is well-structured, readable, and follows best practices for Next.js and JavaScript.
- **User Experience:** A basic but user-friendly experience is provided for both login and dashboard pages.

**Submission**

- **Code Submission:** Provide a link to the GitHub repository containing your code and a detailed README file.

# Clarity React Redux Challenge

This is a simple app that displays a list of users gathered from an API and a separate component that displays details about those users.
This app is coded using React and Redux (as requested by the coding challenge prompt). The overall structure of the app is quite simple.
The component tree will be kept as short as possible in the interest of conciseness and brevity. 

The top-level App component will have two branches: a component that will display the list of users
and a component that will display a panel containing details about selected users. The two components
will be direct siblings, which will showcase the role that Redux plays in the app's state management.

            App
           /   \
          /     \
        List   Panel
        
Please note that because this app is intended for demonstration purposes, styling will be kept to a minimum, and the 
Redux Toolkit (@reduxjs/toolkit) package will be used to reduce the amount of boilerplate code that usually needs to
be written to configure a Redux app.
# Table of contents
- [Table of contents](#table-of-contents)
- [Installation](#installation)
- [Usage](#usage)

# Installation
[(Back to top)](#table-of-contents)

Navigate to the directory in which you want to install the project, then run the following commands:

```git init```

```git clone https://github.com/kidgray/clarity-react-redux-challenge.git```

To install the project dependencies, navigate to the root directory of the cloned project and use
the following command:

```yarn install```

NOTE: This project uses the following ports:

    Client: Port 8080

Please make sure these ports are available for use prior to executing it.

On the terminal, start the client by using the command:

```yarn run client```

Upon success, the client may be accessed at:

    http://localhost:8080

# Usage
[(Back to top)](#table-of-contents)

### Fetching the User List

To fetch the list of users, click the "Get Users" button. The users will be displayed in a list on the left-hand side of the screen.

### Selecting Users
To select a user, click their tab on the User List. A list of currently selected users will be displayed in a list located directly above the User List.

### Displaying User Details

To display a detailed list of selected users, click the "Display Selected User List" button. This will display a list of collapsible items that
may be expanded in order to see a user's details.

### Adding Fields to a User

To add a field to a user, first select the user and click the "Display Selected User List" button to add them to the Selected User Detail List 
on the right-hand side of the screen. Expand the desired user's tab by clicking on it, then enter the name of the field and its desired value into 
the form located at the bottom of the expanded tab.

### Resetting the User List

To reset the user list, first remove all users from your selected user list by clicking on their corresponding tab in the User List on the left-hand side
of the screen. Once all users have been deselected, click the "Display Selected User Details" list to dismiss the Selected User Details List on the right-hand
side of the screen. Then, click the "Get Users" button. 
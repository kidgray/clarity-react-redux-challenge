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
        
Please note that styling will be kept to a minimum, as this app is intended to be for demonstration purposes.

# Table of contents
- [Project Title](#project-title)
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

# Usage
[(Back to top)](#table-of-contents)

NOTE: This project uses the following ports:

    Client: Port 8080

Please make sure these ports are available for use prior to executing it.

On the terminal, start the client by using the command:

```yarn run client```

Upon success, the client may be accessed at:

    http://localhost:8080

# RSVP Form Application

## What

This is a complete full-stack application featuring an RSVP form. To access the form, users must be logged in. Once logged in, users can enter their name and phone number. They are then presented with options to RSVP by clicking "Yes" or "No." Each button click generates a corresponding message on the user interface, indicating whether the user is going or not.
<img width="1436" alt="Screenshot 2023-11-12 at 7 36 30 PM" src="https://github.com/codedbycass/RSVP-Auth/assets/122684139/4f5980b2-6b70-4bac-bc50-2fe57a5395a1">

<img width="1437" alt="Screenshot 2023-11-12 at 7 36 42 PM" src="https://github.com/codedbycass/RSVP-Auth/assets/122684139/fa449efd-b54d-4e4c-8969-064dd507061d">

## How It's Made

The RSVP Form Application is built using the following technologies:

- **Node.js**: Utilized for server-side development.
- **JavaScript (JS)**: Employed for both client and server-side functionality.
- **APIs**: Integrated to enhance the application's features.
- **MongoDB**: Used as the database to store user RSVP data.

The core functionality is implemented on the server side using CRUD (Create, Read, Update, Delete) operations, enabling the handling of user RSVP data. On the client side, event listeners are employed. Users initiate CRUD functions by clicking buttons on the interface.

Key Packages Used:

- **mongoose**: Facilitates interaction with MongoDB.
- **passport**: Handles user authentication.
- **express**: Provides a framework for building the web application.

The dynamic nature of this website allows users, after submitting the form, to interact with the server for both read and update operations. The user interface updates in real-time, displaying RSVP status. Users can modify their response by clicking "Yes," "No," or even delete their entry directly.

## What I've Learned

Developing the RSVP Form Application has provided valuable insights:

- **Code Organization**: Breaking down the code into manageable chunks is crucial, especially in larger and complex files.
- **Node.js Modularity**: Understanding how Node.js and its files work modularly is essential.
- **Foundational JavaScript Knowledge**: Despite the complexity, the development process remains relatively straightforward with a solid foundation in JavaScript.
- **Real-time Dynamic Web Development**: Building a dynamic website with real-time updates requires a careful balance of client-server communication and conditional logic.

Taking a methodical approach and understanding the modular nature of Node.js files have proven effective in navigating the intricacies of this full-stack application.

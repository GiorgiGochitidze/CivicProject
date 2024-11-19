const express = require("express");
const route = express.Router(); // Use express.Router() for modular routing
const UserData = require("../models/UserData"); // Import the UserData model

// Route to handle posting user data
route.post("/SendUserData", async (req, res) => {
    const { userName, userSecondName, agreeOrNot, userClass, isPrivacyAccepted } = req.body;

    // Create a new instance of the UserData model
    const newUser = new UserData({
        userName,
        userSecondName,
        userClass,
        agreeOrDisagree: agreeOrNot, // Mapping from agreeOrNot to agreeOrDisagree
        policyChecked: isPrivacyAccepted, // Mapping from isPrivacyAccepted to policyChecked
    });

    try {
        // Save the user data to the database
        await newUser.save();

        // Send a success response
        res.status(201).json({
            message: "User data saved successfully!",
            user: newUser,
        });
    } catch (error) {
        // Handle errors if the saving fails
        console.error("Error saving user data:", error);
        res.status(500).json({
            message: "Failed to save user data",
            error: error.message,
        });
    }
});

module.exports = route; // Export the route to be used in the main app

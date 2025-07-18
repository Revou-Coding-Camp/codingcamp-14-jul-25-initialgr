# Project: Vacatio Travel Landing Page

This repository contains the front-end code for "Vacatio," a modern and responsive travel landing page. It showcases various sections typical for a travel booking website, including a hero section, popular destinations, services offered, and an interactive booking form. This project is likely part of a coding camp module focusing on building dynamic and visually appealing web interfaces.

## 🚀 Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You only need a modern web browser (like Google Chrome, Mozilla Firefox, Microsoft Edge, etc.) to view this project. No special server setup is required for basic viewing, as it's a static web application.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/Revou-Coding-Camp/codingcamp-14-jul-25-initialgr.git](https://github.com/Revou-Coding-Camp/codingcamp-14-jul-25-initialgr.git)
    ```
2.  **Navigate into the project directory:**
    ```bash
    cd codingcamp-14-jul-25-initialgr
    ```
3.  **Open the `index.html` file:**
    Simply open the `index.html` file in your preferred web browser. You can usually do this by double-clicking the file in your file explorer, or by dragging it into an open browser window.

    For a better development experience (e.g., live reloading), consider using a local development server like the "Live Server" extension for VS Code.

## ✨ Features

This project includes the following key features:

* **Responsive Design:** Adapts seamlessly to various screen sizes (mobile, tablet, desktop) using Tailwind CSS.

* **Dynamic Hero Section:** Features a welcoming message that can be personalized via a modal, a catchy headline, and a prominent search/filter bar for travel details (Location, Persons, Date).

* **Popular Destinations Carousel:** A horizontally scrollable section showcasing popular travel destinations with details like ratings and pricing, navigable via left/right arrows.

* **Our Services Section:** Highlights the travel services offered, such as Tour Guide, Private Transport Rental, Holiday Packages, and Hotel Recommendations, presented with a clean layout and illustrative images.

* **Hidden Paradise Spotlight:** A dedicated section to feature a specific destination (e.g., Cappadocia) with captivating images and descriptive text.

* **Interactive Booking Form (Multi-step):** A comprehensive three-step form for booking a vacation:

    1.  **Destination:** Select country, departure, and return dates.

    2.  **Traveler:** Input full name, email address, and phone number.

    3.  **Payment:** Enter card number, expiry date, and CVV.

    * Includes basic validation (checking for empty required fields).

* **Modals:**

    * **Welcome Modal:** Prompts the user for their name upon first visit to personalize the hero message.

    * **Booking Success Modal:** Displays a summary of booking details upon successful form submission.

    * **Auto-Dismiss Alert:** A temporary notification system for form validation messages.

* **Footer:** Provides company information, navigation links, information links, and social media integration.

## 🛠️ Technologies Used

This project is built using fundamental web technologies and popular libraries for modern front-end development:

* **HTML5:** For the core structure and content.

* **CSS3:** For styling and visual presentation.

    * **Tailwind CSS:** A utility-first CSS framework for rapid UI development and responsive design.

    * **Custom CSS (`css/style.css`):** For specific styling, including background images and scrollbar hiding.

* **JavaScript (`js/script.js`):** For all interactive elements, dynamic content updates, form handling, and modal logic.

* **Font Awesome:** For scalable vector icons used throughout the interface.

* **Google Fonts (Inter):** For modern and legible typography.

## 💡 Usage

Once the `index.html` file is open in your browser:

1.  **Welcome Modal:** Enter your name in the pop-up modal and click "Continue" to personalize the greeting.

2.  **Hero Section:** Use the search/filter bar to select a location, number of persons, and dates (note: these are currently static placeholders in the UI, but the form below is interactive). Click "Explore Trip" to navigate to the "Popular Destinations" section.

3.  **Popular Destinations:** Scroll horizontally through the destination cards using the navigation arrows or by dragging.

4.  **Booking Form:**

    * Navigate through the "Destination," "Traveler," and "Payment" tabs.

    * Fill in all required fields in each tab.

    * Click the "NEXT" button to proceed to the next step.

    * Upon reaching the "Payment" tab and clicking "NEXT" (assuming all fields are filled), a "Booking Successful!" modal will appear with a summary of your entered data.

    * If any required fields are left empty, an "Harap di isi!" alert will appear.

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project

2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)

3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)

4.  Push to the Branch (`git push origin feature/AmazingFeature`)

5.  Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📧 Contact

* **Gilang Ramadhan** 

* **Project Link:** <https://github.com/Revou-Coding-Camp/codingcamp-14-jul-25-initialgr>

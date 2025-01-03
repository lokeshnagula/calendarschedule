# React based Calendar Application
## Objective
This application helps organizations track communications with other companies, ensuring timely and consistent follow-ups. Built using React, it provides a centralized platform for logging past interactions, scheduling future communications, and managing engagement frequency.
## Built with :
1.	React 
2.	Node.js
3.	Express.js
4.	Tail wind CSS
5.	MySql
## Admin Module
####  Company Management:  
Add, edit, and delete companies with fields like name, location, LinkedIn profile, emails, phone numbers, comments, and communication periodicity.
#### Communication Method Management: 
Define communication methods with fields like name, description, sequence, and mandatory flag. Default methods include LinkedIn Post, LinkedIn Message, Email, Phone Call, and Other.
## User Module
#### Dashboard: 
Displays company data with columns for name, last five communications, and next scheduled communication. Color-coded highlights for overdue (red) and due-today (yellow) communications.
#### Notifications: 
View overdue and due communications with a badge counter.
#### Calendar View:
Visualize past and upcoming communications.
# Setup Instructions
## Prerequisites
1. Node.js (>= 14.x)
2. Npm
## Installation
1. Install react and node.js.
2. Install dependencies:
   -npm install
3. Start the development server:
   -npm start
4. Build the server
   -npm run build
## Deployment
•	Deploy using platforms like Netlify. Ensure all necessary environment variables and configurations are set.
## Sample Data
•	Mock data for companies, communication methods, and schedules is included in the /data folder for demonstration purposes.
## Testing
•	Run tests to ensure functionality:
-npm test

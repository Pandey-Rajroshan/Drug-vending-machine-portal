# Drug-vending-machine-portal


<img width="1536" height="1024" alt="VEND9" src="https://github.com/user-attachments/assets/633d8933-36c7-4df9-b39f-89d7845ff486" />

💊 Automatic Drug Vending Machine – Web Portal 💡
🏥✨ Bridging the gap between technology and healthcare
💻🧠 Smart. Secure. Scalable.
🚀 24/7 access to essential medications – Anytime. Anywhere.

🧬 Project Overview
Welcome to the Automatic Drug Vending Machine website interface! This is not just a UI – it’s a full-stack platform that acts as the brain behind an automated drug dispenser, ensuring users can access medication with ease, accuracy, and security.

From landing page to login, from doctor-patient registration to smart inventory handling – every component is dynamically managed via MongoDB-powered backend APIs.

🌐 Built for modern devices with a mobile-first approach, lightning-fast React + Vite frontend, and a secure Node.js + MongoDB backend.

📸 Screens at a Glance
🏠 Landing Page – Interactive, informative, and mobile-friendly

🧑‍⚕️ Doctor / Patient Registration – Role-based sign-up with form validation

🔐 Login – Secure role-based login with error handling

💊 Medicine Dashboard – Browse, dispense, and monitor stock

📦 Inventory Management – Admin-only controls for adding/removing items

🛠 Fully Dynamic – Every page connected to backend endpoints in real-time

🎯 Key Features
📱 Responsive UI – Built with React & Vite for super-fast mobile views

🧾 Role-Based Auth – Separate flows for Doctors and Patients

🔗 API-Connected – Every action (login, register, fetch medicine) triggers a real backend call

🧠 Smart Inventory Handling – Automatic tracking and dispensing

🧪 Tested with Postman – All API routes verified and documented

🧠 Tech Stack
Layer	Technology	Description
🎨 Frontend	HTML, CSS, JS, React, Vite	Fast, modern, mobile-friendly UI
🔙 Backend	Node.js, Express.js	REST APIs to handle all dynamic content
💾 Database	MongoDB	Stores users, roles, medicine data, logs
🧪 API Testing	Postman	Used to test authentication, CRUD, and logic routes
🚀 Deployment	(Optional) Vercel / Netlify / MongoDB Atlas	For hosting and remote access

🧪 API Testing with Postman
🔍 All critical backend functionality (like authentication, user management, medicine records) has been thoroughly tested using Postman.

✅ Sample tests include:

POST /register – Register as patient or doctor

POST /login – Auth with role-based flow

GET /medicines – View available stock

POST /addMedicine – Admin-only medicine control

DELETE /removeMedicine/:id – Remove items

🗂️ (Optional: Add your Postman collection to a /postman/ folder in the repo)

📦 Application Use Cases
🔹 Remote Villages – Where no pharmacies exist
🔹 Urban Hospitals – Reduce pressure on pharmacy counters
🔹 Hostels / Colleges – Self-serve for common meds
🔹 Emergency Use – Access essentials 24/7

✅ Pros
⚡ Blazing-fast UI with Vite & React

📱 Mobile-first design for real-world users

🔐 Secure, role-based login with dynamic flows

🛠️ API-first approach – ideal for hardware extension

🌐 Scalable – Can be expanded to cloud deployment or IoT integration

⚠️ Limitations / Cons
🔌 Hardware not yet integrated (e.g., servo motors, biometrics)

🌐 Internet dependency

📜 No OCR or prescription validation yet

🛡️ Auth system can be improved with JWT/OAuth2

🌟 Future Enhancements
🚧 Roadmap:

🛠 Hardware integration with servo/motor dispensing

🔐 OTP or biometric-based login for high security

📷 OCR-based prescription upload & validation

🌍 Multi-language support

🌐 Offline support with caching / PWA tech

🤝 Contributing
PRs welcome! 🙌
Whether you want to improve UI, backend logic, or docs – feel free to fork and contribute.

bash
Copy
Edit
# Clone the repo
git clone https://github.com/your-username/drug-vending-machine.git

# Install dependencies
cd frontend && npm install
cd ../backend && npm install

# Start servers
npm run dev   # Vite
npm run server   # Backend
📜 License
MIT License – Free to use, modify, and improve.
Please give credit if you use parts of this in your own project 🌱

💬 Feedback & Questions?
Open an issue or drop me a message – I’d love to hear your thoughts 💬


Deep Dungeon Reloaded (DDR)
===========================

Web application – a modern take on dungeon-raiding in the world of Final Fantasy XIV

🎮 Overview
------------
Deep Dungeon Reloaded (DDR) is a web-based application built with Vue and TypeScript that enhances the raiding experience for FFXIV players. Whether you're gearing up for a deep dungeon or planning strategy with friends, DDR provides intuitive workflows and real-time coordination tools.

🚀 Features
------------
- Responsive frontend built with Vue + TypeScript
- Clean UI for organizing raids, tracking progress, and coordinating roles
- Real-time updates for party collaboration
- Modular, open design that can be customized
- Fully open source under the GPL-3.0 license

🧩 Tech Stack
--------------
Frontend: Vue (≈77%), TypeScript (≈21%), CSS (≈1%)  
Tooling: Makefile for streamlined build tasks  
Data: JSON/YAML templates for dungeon data  
Deployment: Static hosting or custom API backend

📁 Repository Structure
------------------------
/
├── data/         -> Raid templates and configuration  
├── web/          -> Vue application source code  
├── Makefile      -> Build and deployment automation  
├── LICENSE       -> GPL-3.0 license  
└── README.txt    -> This file  

🧠 Getting Started
-------------------
Requirements:
- Node.js v16+
- npm or yarn
- Git

Installation:
1. Clone the repo  
   git clone https://github.com/JacobDev474/ddr.git
2. Enter the web directory  
   cd ddr/web
3. Install dependencies  
   npm install
4. Run the development server  
   npm run dev

Build for production:
   cd ddr/web
   npm run build
   # Deploy the contents of /dist to your server or static host

🛠 Customization
-----------------
- Edit templates in /data to define new dungeons or raids
- Modify Vue components in /web/src for UI or behavior changes
- Update /web/src/config for backend or API connections

🔍 Example Usage
-----------------
1. Create a new dungeon run template (e.g., "Deep Palace Level 60")
2. Assign party roles (Tank / DPS / Healer)
3. Track progress, time checks, and loot

✅ Why Use DDR?
----------------
- Central place for planning FFXIV dungeon runs
- Lightweight and flexible architecture
- Great for Free Companies or small teams
- 100% open source

👥 Contributing
----------------
Contributions are welcome!

1. Fork the repository
2. Create a new branch: feature/your-idea or bugfix/issue-number
3. Commit with a clear message
4. Submit a Pull Request

📜 License
-----------
This project is licensed under the GNU GPL v3.0.  
See LICENSE for full details.

📫 Contact / Support
---------------------
For issues or ideas, open an Issue on GitHub:
https://github.com/JacobDev474/ddr/issues

Happy raiding! 🐉

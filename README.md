# DDR - Final Fantasy XIV Raiding Companion

## Project Overview

DDR (Dynamic Data for Raiding) is a comprehensive application designed to empower Final Fantasy XIV (FFXIV) players in their raiding endeavors. It aims to streamline raid progression tracking, facilitate static group management, and provide valuable insights to optimize performance and coordination.

**Key Features:**
*   **Raid Progression Tracking:** Monitor your static's progress through current and past raid tiers.
*   **Static Management:** Tools for organizing static members, roles, and attendance.
*   **Performance Analytics (Planned):** Integrate with combat logs or FFXIV APIs (where available and permissible) to provide performance breakdowns.
*   **Communication Hub (Planned):** A centralized place for raid-related discussions and planning.

## Getting Started

To get the DDR project up and running on your local machine, follow these general steps. Please refer to specific sub-project READMEs for detailed instructions.

### Prerequisites

*   **Git:** For cloning the repository.
*   **Node.js & npm (or yarn):** For the `web` frontend and potentially backend services.
*   **Docker & Docker Compose (Recommended):** For easily setting up database and other backend services.

### Installation

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/your-username/ddr.git
    cd ddr
    ```

2.  **Backend Setup (if applicable):**
    If the project includes a backend or database services managed by Docker Compose:
    ```bash
    # Example: Start database and any other backend services
    docker-compose up -d
    ```
    *Refer to the `backend/README.md` or similar if it exists for more detailed backend setup.*

3.  **Frontend Setup:**
    Navigate to the `web` directory for detailed instructions on setting up and running the frontend application.
    ```bash
    cd web
    # Follow instructions in web/README.md
    ```

## Project Structure

The DDR project is organized into several key directories:

*   `.github/`: GitHub-specific configuration (e.g., CI/CD workflows, issue templates).
*   `web/`: Contains the frontend application, typically built with a modern JavaScript framework. Refer to `web/README.md` for specifics.
*   `backend/` (Placeholder): Expected to contain server-side logic, API definitions, and database interactions.
*   `docs/` (Placeholder): Additional documentation, design decisions, or architectural diagrams.
*   `config/` (Placeholder): Global configuration files.

## Usage

Once the backend and frontend components are running, you can access the application through your web browser, typically at `http://localhost:3000` (or as specified in the `web/README.md`).

*   **Login/Register:** Create an account or log in to access personalized features.
*   **Manage Statics:** Set up your raiding static, invite members, and define roles.
*   **Track Progression:** Input and view your static's raid boss kill progression.

## Contributing

We welcome contributions to the DDR project! If you're interested in helping out, please read our [Contributing Guidelines](CONTRIBUTING.md) (link to be created) for details on our code of conduct, development process, and how to submit pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For questions or feedback, please open an issue on the [GitHub repository](https://github.com/your-username/ddr/issues).

---

## Sub-Projects

For detailed information regarding specific components of the DDR project, please refer to their respective README files:

*   **Web Application:** For frontend setup, development, and usage: [web/README.md](web/README.md)
*   **Backend Services:** (If applicable, link to `backend/README.md` once created)
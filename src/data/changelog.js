import { formatDateTime } from "../utils/formatDateTime";

export const changelogData = [
    {
        period: "Janeiro de 2026",
        entries: [
            {
                date: formatDateTime(),
                title: "Initial Release",
                description: "We are excited to announce the initial release of our application. This version includes the core features and functionalities to get you started.",
                items: [
                    "User authentication and profile management",
                    "Basic dashboard with analytics",
                ]
            },
            {
                date: formatDateTime(),
                title: "Version 1.1.0 - New Features",
                description: "In this update, we have added several new features based on user feedback to enhance your experience.",
                items: [
                    "Added dark mode support",
                    "Introduced new analytics widgets",
                ],
            },
        ],
    },
];
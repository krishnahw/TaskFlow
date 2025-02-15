const employees = [
  
    {
      id: 1,
      firstName: "Amit",
      email: "e@e.com",
      password: "123",
      tasks: [
        {
          title: "Complete project report",
          description:
            "Prepare and submit the project report before the deadline.",
          date: "2025-02-15",
          category: "Work",
          active: true,
          newTask: false,
          completed: false,
        },
        {
          title: "Attend team meeting",
          description: "Discuss project updates with the team.",
          date: "2025-02-16",
          category: "Meetings",
          active: true,
          newTask: true,
          completed: false,
        },
        {
          title: "Update client on progress",
          description: "Send an email with project updates to the client.",
          date: "2025-02-17",
          category: "Communication",
          active: false,
          newTask: false,
          completed: true,
        },
      ],
      taskCount: 3,
      taskTypes: { active: 2, newTask: 1, completed: 1 },
      failCount: 0,
    },
    {
      id: 2,
      firstName: "Priya",
      email: "employee2@example.com",
      password: "123",
      tasks: [
        {
          title: "Design UI for dashboard",
          description: "Create a responsive UI design for the new dashboard.",
          date: "2025-02-18",
          category: "Design",
          active: true,
          newTask: true,
          completed: false,
        },
        {
          title: "Fix login authentication bug",
          description: "Resolve the authentication issue in the login system.",
          date: "2025-02-19",
          category: "Development",
          active: true,
          newTask: false,
          completed: false,
        },
        {
          title: "Write test cases",
          description:
            "Ensure all API endpoints are covered with proper tests.",
          date: "2025-02-20",
          category: "Testing",
          active: false,
          newTask: false,
          completed: true,
        },
        {
          title: "Deploy new feature",
          description: "Deploy the latest feature update to production.",
          date: "2025-02-21",
          category: "Deployment",
          active: true,
          newTask: false,
          completed: false,
        },
      ],
      taskCount: 4,
      taskTypes: { active: 3, newTask: 1, completed: 1 },
      failCount: 0,
    },
    {
      id: 3,
      firstName: "Rajesh",
      email: "employee3@example.com",
      password: "123",
      tasks: [
        {
          title: "Conduct code review",
          description: "Review and approve the latest code changes.",
          date: "2025-02-22",
          category: "Code Review",
          active: false,
          newTask: false,
          completed: true,
        },
        {
          title: "Prepare training materials",
          description: "Create training materials for new employees.",
          date: "2025-02-23",
          category: "Training",
          active: true,
          newTask: true,
          completed: false,
        },
        {
          title: "Optimize database queries",
          description: "Improve query performance for better efficiency.",
          date: "2025-02-24",
          category: "Database",
          active: true,
          newTask: false,
          completed: false,
        },
        {
          title: "Schedule team outing",
          description: "Plan a team-building outing for next month.",
          date: "2025-02-25",
          category: "HR",
          active: false,
          newTask: true,
          completed: false,
        },
        {
          title: "Update company blog",
          description: "Write and publish a new article on the company blog.",
          date: "2025-02-26",
          category: "Marketing",
          active: true,
          newTask: false,
          completed: false,
        },
      ],
      taskCount: 5,
      taskTypes: { active: 3, newTask: 2, completed: 1 },
      failCount: 0,
    },
  
];

const admin = [
  {
    id: 101,
    firstName: "Suresh",
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  return { employees, admin };
};

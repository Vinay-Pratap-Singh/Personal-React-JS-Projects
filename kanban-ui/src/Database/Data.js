import { v4 as uuid } from "uuid";

const Data = {
  themes: [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "halloween",
    "garden",
    "forest",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "autumn",
    "business",
    "night",
    "coffee",
    "winter",
  ],
  label: [
    {
      id: uuid(),
      colorCode: "red",
      name: "High Priority",
    },
    {
      id: uuid(),
      colorCode: "brown",
      name: "Medium Priority",
    },
    {
      id: uuid(),
      colorCode: "green",
      name: "Low Priority",
    },
  ],
  assignee: [
    {
      id: uuid(),
      name: "Harvi",
      avatar: "https://avatars.githubusercontent.com/u/85826727?v=4",
    },
    {
      id: uuid(),
      name: "Mang",
      avatar: "https://avatars.githubusercontent.com/u/85826727?v=4",
    },
    {
      id: uuid(),
      name: "Vinay",
      avatar: "https://avatars.githubusercontent.com/u/85826727?v=4",
    },
  ],
  boards: [
    {
      id: uuid(),
      name: "Default Board",
      todos: [
        {
          id: uuid(),
          label: {
            id: uuid(),
            colorCode: "green",
            name: "Low Priority",
          },
          title: "Sample content",
          description: "This is a sample content assigned to test the app",
          date: "Sep 21, 2023, 03:36:07 PM",
          assignee: {
            id: uuid(),
            name: "Harvi",
            avatar: "https://avatars.githubusercontent.com/u/85826727?v=4",
          },
        },
        {
          id: uuid(),
          label: {
            id: uuid(),
            colorCode: "green",
            name: "Low Priority",
          },
          title: "Sample content",
          description: "This is a sample content assigned to test the app",
          date: "Sep 21, 2023, 03:36:07 PM",
          assignee: {
            id: uuid(),
            name: "Harvi",
            avatar: "https://avatars.githubusercontent.com/u/85826727?v=4",
          },
        },
      ],
      progress: [
        {
          id: uuid(),
          label: {
            id: uuid(),
            colorCode: "red",
            name: "High Priority",
          },
          title: "Sample content",
          description: "This is a sample content assigned to test the app",
          date: "Sep 21, 2023, 03:36:07 PM",
          assignee: {
            id: uuid(),
            name: "Harvi",
            avatar: "https://avatars.githubusercontent.com/u/85826727?v=4",
          },
        },
      ],
      review: [
        {
          id: uuid(),
          label: {
            id: uuid(),
            colorCode: "brown",
            name: "Medium Priority",
          },
          title: "Sample content",
          description: "This is a sample content assigned to test the app",
          date: "Sep 21, 2023, 03:36:07 PM",
          assignee: {
            id: uuid(),
            name: "Harvi",
            avatar: "https://avatars.githubusercontent.com/u/85826727?v=4",
          },
        },
      ],
      done: [
        {
          id: uuid(),
          label: {
            id: uuid(),
            colorCode: "red",
            name: "High Priority",
          },
          title: "Sample content",
          description: "This is a sample content assigned to test the app",
          date: "Sep 21, 2023, 03:36:07 PM",
          assignee: {
            id: uuid(),
            name: "Harvi",
            avatar: "https://avatars.githubusercontent.com/u/85826727?v=4",
          },
        },
      ],
    },
    {
      name: "Default Board 2",
      todos: [
        {
          id: uuid(),
          label: {
            id: uuid(),
            colorCode: "green",
            name: "Low Priority",
          },
          content: "Sample content",
          date: "Sep 21, 2023, 03:36:07 PM",
          assignee: {
            id: uuid(),
            name: "Harvi",
            avatar: "https://avatars.githubusercontent.com/u/85826727?v=4",
          },
        },
      ],
      progress: [
        {
          id: uuid(),
          label: {
            id: uuid(),
            colorCode: "red",
            name: "High Priority",
          },
          content: "Sample content",
          date: "Sep 21, 2023, 03:36:07 PM",
          assignee: {
            id: uuid(),
            name: "Harvi",
            avatar: "https://avatars.githubusercontent.com/u/85826727?v=4",
          },
        },
      ],
      review: [
        {
          id: uuid(),
          label: {
            id: uuid(),
            colorCode: "brown",
            name: "Medium Priority",
          },
          content: "Sample content",
          date: "Sep 21, 2023, 03:36:07 PM",
          assignee: {
            id: uuid(),
            name: "Harvi",
            avatar: "https://avatars.githubusercontent.com/u/85826727?v=4",
          },
        },
      ],
      done: [
        {
          id: uuid(),
          label: {
            id: uuid(),
            colorCode: "red",
            name: "High Priority",
          },
          content: "Sample content",
          date: "Sep 21, 2023, 03:36:07 PM",
          assignee: {
            id: uuid(),
            name: "Harvi",
            avatar: "https://avatars.githubusercontent.com/u/85826727?v=4",
          },
        },
      ],
    },
    {
      name: "Default Board 3",
      todos: [
        {
          id: uuid(),
          label: {
            id: uuid(),
            colorCode: "green",
            name: "Low Priority",
          },
          content: "Sample content",
          date: "Sep 21, 2023, 03:36:07 PM",
          assignee: {
            id: uuid(),
            name: "Harvi",
            avatar: "https://avatars.githubusercontent.com/u/85826727?v=4",
          },
        },
      ],
      progress: [
        {
          id: uuid(),
          label: {
            id: uuid(),
            colorCode: "red",
            name: "High Priority",
          },
          content: "Sample content",
          date: "Sep 21, 2023, 03:36:07 PM",
          assignee: {
            id: uuid(),
            name: "Harvi",
            avatar: "https://avatars.githubusercontent.com/u/85826727?v=4",
          },
        },
      ],
      review: [
        {
          id: uuid(),
          label: {
            id: uuid(),
            colorCode: "brown",
            name: "Medium Priority",
          },
          content: "Sample content",
          date: "Sep 21, 2023, 03:36:07 PM",
          assignee: {
            id: uuid(),
            name: "Harvi",
            avatar: "https://avatars.githubusercontent.com/u/85826727?v=4",
          },
        },
      ],
      done: [
        {
          id: uuid(),
          label: {
            id: uuid(),
            colorCode: "red",
            name: "High Priority",
          },
          content: "Sample content",
          date: "Sep 21, 2023, 03:36:07 PM",
          assignee: {
            id: uuid(),
            name: "Harvi",
            avatar: "https://avatars.githubusercontent.com/u/85826727?v=4",
          },
        },
      ],
    },
  ],
};

export default Data;

import { v4 as uuid } from "uuid";

const Data = {
  theme: "light",
  label: [
    {
      id: uuid(),
      colorCode: "red",
      name: "High Priority",
    },
    {
      id: uuid(),
      colorCode: "yellow",
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
  board: [
    {
      name: "Default Board",
      todo: [
        {
          id: uuid(),
          label: {
            colorCode: "green",
            name: "Low Priority",
          },
          content: "Sample content",
          date: Date.now(),
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
            colorCode: "green",
            name: "Low Priority",
          },
          content: "Sample content",
          date: Date.now(),
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
            colorCode: "green",
            name: "Low Priority",
          },
          content: "Sample content",
          date: Date.now(),
          assignee: {
            id: uuid(),
            name: "Harvi",
            avatar: "https://avatars.githubusercontent.com/u/85826727?v=4",
          },
        },
      ],
    },
    {
      name: "Default Board",
      todo: [
        {
          id: uuid(),
          label: {
            colorCode: "green",
            name: "Low Priority",
          },
          content: "Sample content",
          date: Date.now(),
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
            colorCode: "green",
            name: "Low Priority",
          },
          content: "Sample content",
          date: Date.now(),
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
            colorCode: "green",
            name: "Low Priority",
          },
          content: "Sample content",
          date: Date.now(),
          assignee: {
            id: uuid(),
            name: "Harvi",
            avatar: "https://avatars.githubusercontent.com/u/85826727?v=4",
          },
        },
      ],
    },
    {
      name: "Default Board",
      todo: [
        {
          id: uuid(),
          label: {
            colorCode: "green",
            name: "Low Priority",
          },
          content: "Sample content",
          date: Date.now(),
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
            colorCode: "green",
            name: "Low Priority",
          },
          content: "Sample content",
          date: Date.now(),
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
            colorCode: "green",
            name: "Low Priority",
          },
          content: "Sample content",
          date: Date.now(),
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

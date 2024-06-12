import { Article, Description, Group, PersonAdd } from "@mui/icons-material";

let steps = [
  {
    title: "Trial Details",
    icon: <Description />,
    route: "/details",
  },
  {
    title: "Jury Selection",
    icon: <PersonAdd />,
    route: "/jury-selection",
  },
  {
    title: "Jury Placement",
    icon: <Group />,
    route: "/jury-placement",
  },
  {
    title: "Evidence",
    icon: <Article />,
    route: "/evidence",
  },
];

export { steps };

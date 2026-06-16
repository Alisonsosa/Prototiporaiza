import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { Curriculum } from "./components/Curriculum";
import { Modalities } from "./components/Modalities";
import { Resources } from "./components/Resources";
import { Certification } from "./components/Certification";
import { Enrollment } from "./components/Enrollment";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "curriculum", Component: Curriculum },
      { path: "modalities", Component: Modalities },
      { path: "resources", Component: Resources },
      { path: "certification", Component: Certification },
      { path: "enrollment", Component: Enrollment },
    ],
  },
]);

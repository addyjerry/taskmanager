import Collaboration from "@/components/tools/collaboration";
import Dashboard from "@/components/tools/dashboard";
import Help from "@/components/tools/help";
import Tasks from "@/components/tools/Tasks";
import Teams from "@/components/tools/Teams";
import Setting from "@/components/tools/settings";
import Date from "@/components/tools/calendar";
import Messages from "@/components/tools/inbox";

import {
  Calendar,
  Handshake,
  HelpCircle,
  Inbox,
  LayoutDashboard,
  NotepadTextIcon,
  Settings,
  Video,
} from "lucide-react";

export const Toolpanel = [
  {
    id: 1,
    name: "Dashboard",
    icon: <LayoutDashboard />,
    content: <Dashboard />,
  },
  {
    id: 2,
    name: "Collaboration",
    icon: <Video />,
    content: <Collaboration />,
  },
  {
    id: 3,
    name: "Inbox",
    icon: <Inbox />,
    content: <Messages />,
  },
  {
    id: 4,
    name: "Calendar",
    icon: <Calendar />,
    content: <Date />,
  },
  {
    id: 5,
    name: "Tasks",
    icon: <NotepadTextIcon />,
    content: <Tasks />,
  },
  {
    id: 6,
    name: "Teams",
    icon: <Handshake />,
    content: <Teams />,
  },
  {
    id: 7,
    name: "Settings",
    icon: <Settings />,
    content: <Setting />,
  },
  {
    id: 8,
    name: "help",
    icon: <HelpCircle />,
    content: <Help />,
  },
];

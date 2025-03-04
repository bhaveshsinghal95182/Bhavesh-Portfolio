"use client";

import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import CodeIcon from "@mui/icons-material/Code";
import WebIcon from "@mui/icons-material/Web";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import SchoolIcon from "@mui/icons-material/School";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import HeartBrokenIcon from "@mui/icons-material/HeartBroken";

const timelineItems = [
  {
    time: "March 2025",
    title: "CTF competition",
    description:
      "Participated in a CTF competition for the first time",
    icon: <LaptopMacIcon />,
    color: "primary",
  },
  {
    time: "January 2025",
    title: "X-Boost",
    description:
      "An AI powered X automation tool. Built with Next.js, TailwindCSS, Node.js, and GeminiAPI, a hackathon wining project",
    icon: <AutoFixHighIcon />,
    color: "primary",
  },
  {
    time: "January 2025",
    title: "AI Visual Teacher",
    description:
      "A visual teacher which takes question in image/text in real time and gives answer in text/audio, a bounty asked by some influencer",
    icon: <SchoolIcon />,
    color: "primary",
  },
  {
    time: "November 2024",
    title: "Prompt-Archive",
    description:
      "A project to make it easy to find writing prompts with multi-model support, just created this to make my life easier",
    icon: <CodeIcon />,
    color: "primary",
  },
  {
    time: "November 2024",
    title: "Sticky Notes TODO app",
    description:
      "A Todo app with AI integration, dynamic colorful notes, and autosave functionality. ",
    icon: <NoteAltIcon />,
    color: "primary",
  },
  {
    time: "October 2024",
    title: "JARVIS",
    description:
      "A python AI application running on streamlit with local data privacy using Ollama created this because I was too lazy to do some tasks",
    icon: <WebIcon />,
    color: "primary",
  },
  {
    time: "March 2024",
    title: "Breakup",
    description:
      "Had a really nasty breakup with my ex, motivated me to build a lot of projects",
    icon: <HeartBrokenIcon />,
    color: "primary",
  },
];

export default function CustomizedTimeline() {
  return (
    <Timeline position="alternate">
      {/* <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          9:30 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <FastfoodIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Eat
          </Typography>
          <Typography>Because you need strength</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          10:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Code
          </Typography>
          <Typography>Because it&apos;s awesome!</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <HotelIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Sleep
          </Typography>
          <Typography>Because you need rest</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          <TimelineDot color="secondary">
            <RepeatIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Repeat
          </Typography>
          <Typography>Because this is the life you love!</Typography>
        </TimelineContent>
      </TimelineItem> */}
      {timelineItems.map((item, index) => (
        <TimelineItem key={index}>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            {item.time}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color={item.color as any}>{item.icon}</TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              {item.title}
            </Typography>
            <Typography>{item.description}</Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}

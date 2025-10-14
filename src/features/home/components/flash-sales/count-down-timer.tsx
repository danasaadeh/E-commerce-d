import Countdown from "react-countdown";
import { Box, Typography } from "@mui/material";

interface CountdownTimerProps {
  targetDate: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const renderer = ({
    days,
    hours,
    minutes,
    seconds,
  }: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }) => (
    <Box display="flex" gap={2}>
      {[
        { label: "Hours", value: hours },
        { label: "Days", value: days },
        { label: "Minutes", value: minutes },
        { label: "Seconds", value: seconds },
      ].map((item) => (
        <Box
          key={item.label}
          sx={{
            width: 70,
            height: 70,
            borderRadius: "50%",
            backgroundColor: "#fff",
            color: "#000",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            fontWeight: 700,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              fontSize: { xs: "1rem", md: "1.25rem" },
              lineHeight: 1.1,
            }}
          >
            {String(item.value).padStart(2, "0")}
          </Typography>
          <Typography
            variant="caption"
            sx={{
              fontSize: "0.75rem",
              textTransform: "capitalize",
              color: "#000",
              opacity: 0.7,
            }}
          >
            {item.label}
          </Typography>
        </Box>
      ))}
    </Box>
  );

  return <Countdown date={targetDate} renderer={renderer} />;
};

export default CountdownTimer;

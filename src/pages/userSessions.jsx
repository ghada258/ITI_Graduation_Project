// src/pages/UserProfile.jsx
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Button,
  Menu,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
} from "@mui/material";
import { useState } from "react";
import FilterListIcon from "@mui/icons-material/FilterList";
import UserProfileCard from "../components/UserProfileCard";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
const sessions = [
  { date: "16-7-2025", day: "Sunday", time: "8AM-11AM", assistant: "Sara Emad", type: "Full Day", status: "Pending" },
  { date: "16-7-2025", day: "Sunday", time: "8AM-11AM", assistant: "Sara Emad", type: "Overnight", status: "Pending" },
  { date: "16-7-2025", day: "Sunday", time: "8AM-11AM", assistant: "Sara Emad", type: "Overnight", status: "Pending" },
  { date: "16-7-2025", day: "Sunday", time: "8AM-11AM", assistant: "Sara Emad", type: "Overnight", status: "Pending" },
  { date: "16-7-2025", day: "Sunday", time: "8AM-11AM", assistant: "Sara Emad", type: "Overnight", status: "Pending" },
  { date: "16-7-2025", day: "Sunday", time: "8AM-11AM", assistant: "Sara Emad", type: "Overnight", status: "Pending" },
  { date: "16-7-2025", day: "Sunday", time: "8AM-11AM", assistant: "Sara Emad", type: "Overnight", status: "Pending" },
  { date: "16-7-2025", day: "Sunday", time: "8AM-11AM", assistant: "Sara Emad", type: "Overnight", status: "Pending" },

];

const statusColors = {
  Completed: "success",
  Cancelled: "error",
  Pending: "warning",
};

const UserSession = () => {
  const [tabIndex, setTabIndex] = useState(1);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleFilterClick = (e) => setAnchorEl(e.currentTarget);
  const handleFilterClose = () => setAnchorEl(null);

  return (
    <Box sx={{ display: "flex", gap: 1.5, p: 3 }}>
      <UserProfileCard />

      <Box
        sx={{
          flex: 1,
          backgroundColor: "#fff",
          borderRadius: 3,
          border: "1px solid #ccc",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          p: 3,
          overflow: "hidden", // ✅ ضروري عشان الزوايا تبان مظبوطة
        }}
      >
          <Tabs
          value={tabIndex}
          onChange={(e, val) => setTabIndex(val)}
          textColor="primary"
          indicatorColor="primary"
          sx={{
            backgroundColor: "#fff",
            borderBottom: "1px solid #ddd",
          }}
        >
<Tab
  icon={<AccessTimeIcon sx={{ mr: 1, fontSize: 18 }} />} // تصغير الأيقونة كمان لو حابة
  iconPosition="start"
  label="Sessions"
  sx={{
    mr: 0.5,
    borderTopLeftRadius: "16px",
    borderTopRightRadius: "16px",
    backgroundColor: tabIndex === 0 ? "#EBF7F4" : "#fff",
    textTransform: "none",
    px: 5,
    minHeight: 36, // 👈 يقلل الارتفاع
    fontWeight: "bold",
    border: "1px solid #ddd",
    borderBottom: "none",
  }}
/>


         
<Tab
  icon={<PendingActionsIcon sx={{ mr: 1, fontSize: 20 }} />}
  iconPosition="start"
  label="Pending Sessions"
  sx={{
    borderTopLeftRadius: "16px",
    borderTopRightRadius: "16px",
    backgroundColor: tabIndex === 1 ? "#EBF7F4" : "#fff",
    textTransform: "none",
    px: 3,
    minHeight: 50, // تقليل الارتفاع لو حابة
    fontWeight: "bold",
    borderBottom: "none",
  }}
/>

        </Tabs>


        <Box mt={3}>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
            <Box>
              <Typography variant="h6" fontWeight="bold" mb={0.5}>
                History Sessions
              </Typography>
              <Typography variant="body2">
                Total Pending Sessions: {sessions.length}
              </Typography>
            </Box>

            <Button
              variant="outlined"
              endIcon={<FilterListIcon />}
              onClick={handleFilterClick}
              sx={{ borderRadius: 5, textTransform: "none" }}
            >
              Filter by: Status
            </Button>
          </Box>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleFilterClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            transformOrigin={{ vertical: "top", horizontal: "center" }}
            PaperProps={{
              sx: {
                minWidth: 130,
                borderRadius: 2,
                mt: 0.25,
              },
            }}
          >
            <MenuItem>All</MenuItem>
            <MenuItem>Completed</MenuItem>
            <MenuItem>Pending</MenuItem>
            <MenuItem>Cancelled</MenuItem>
          </Menu>

          {/* Table داخل نفس البوكس وبياخد الزوايا */}
          <Box
          sx={{
            border: "1px solid #ddd",
            borderBottomLeftRadius: "16px",
            borderBottomRightRadius: "16px",
            borderTopLeftRadius: "16px",
            borderTopRightRadius: "16px",
            overflow: "hidden",
          }}
        >
          <Table sx={{ borderCollapse: "separate", borderSpacing: 0 }}>
            <TableHead>
              <TableRow sx={{ backgroundColor: "#EBF7F4" }}>
                <TableCell
                  sx={{
                    borderTopLeftRadius: "16px",
                    fontWeight: "bold",
                    textAlign: "center",
                    backgroundColor: "#EBF7F4",
                  }}
                >
                  Date
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", textAlign: "center" }}>Day</TableCell>
                <TableCell sx={{ fontWeight: "bold", textAlign: "center" }}>Time Slot</TableCell>
                <TableCell sx={{ fontWeight: "bold", textAlign: "center" }}>Assistant</TableCell>
                <TableCell sx={{ fontWeight: "bold", textAlign: "center" }}>Session Type</TableCell>
                <TableCell sx={{ fontWeight: "bold", textAlign: "center" }}>Status</TableCell>
                <TableCell
                  sx={{
                    borderTopRightRadius: "16px",
                    fontWeight: "bold",
                    textAlign: "center",
                    backgroundColor: "#EBF7F4",
                  }}
                >
                  Cancel Session
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {sessions.map((session, index) => (
                <TableRow key={index}>
                  <TableCell align="center">{session.date}</TableCell>
                  <TableCell align="center">{session.day}</TableCell>
                  <TableCell align="center">{session.time}</TableCell>
                  <TableCell align="center">{session.assistant}</TableCell>
                  <TableCell align="center">{session.type}</TableCell>
                  <TableCell align="center">
                    <Chip
                      label={session.status}
                      color={statusColors[session.status]}
                      size="small"
                      sx={{
                        minWidth: "100px",
                        justifyContent: "center",
                      }}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <Box
                      sx={{
                        backgroundColor: "#fff",
                        border: "1px solid",
                        borderColor: "#D32F2F",
                        color: "#D32F2F",
                        fontWeight: "bold",
                        px: 2,
                        py: 0.5,
                        borderRadius: 1,
                        fontSize: 13,
                        width: "fit-content",
                        margin: "0 auto",
                        cursor: "pointer",
                      }}
                    >
                      Cancel
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </Box>
    </Box>
    
    </Box>

  );
};

export default UserSession;

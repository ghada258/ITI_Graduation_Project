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
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
} from "@mui/material";
import { useState } from "react";
import FilterListIcon from "@mui/icons-material/FilterList";
import CloseIcon from "@mui/icons-material/Close";
import UserProfileCard from "../components/UserProfileCard";
import EditProfileForm from "../components/EditProfileForm"; // تأكدي أنه موجود
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PendingActionsIcon from '@mui/icons-material/PendingActions';

const sessions = [
  { date: "16-7-2025", day: "Sunday", time: "8AM-11AM", assistant: "Sara Emad", type: "Full Day", status: "Completed" },
  { date: "16-7-2025", day: "Sunday", time: "8AM-11AM", assistant: "Sara Emad", type: "Overnight", status: "Cancelled" },
  { date: "16-7-2025", day: "Sunday", time: "8AM-11AM", assistant: "Sara Emad", type: "Full Day", status: "Pending" },
  { date: "16-7-2025", day: "Sunday", time: "8AM-11AM", assistant: "Sara Emad", type: "Full Day", status: "Completed" },
  { date: "16-7-2025", day: "Sunday", time: "8AM-11AM", assistant: "Sara Emad", type: "Overnight", status: "Cancelled" },
  { date: "16-7-2025", day: "Sunday", time: "8AM-11AM", assistant: "Sara Emad", type: "Overnight", status: "Cancelled" },
  { date: "16-7-2025", day: "Sunday", time: "8AM-11AM", assistant: "Sara Emad", type: "Overnight", status: "Completed" },
  { date: "16-7-2025", day: "Sunday", time: "8AM-11AM", assistant: "Sara Emad", type: "Overnight", status: "Pending" },
];

const statusColors = {
  Completed: "success",
  Cancelled: "error",
  Pending: "warning",
};

const UserProfile = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDialog, setOpenDialog] = useState(false); // 💡 Dialog state

  const handleFilterClick = (e) => setAnchorEl(e.currentTarget);
  const handleFilterClose = () => setAnchorEl(null);

  return (
    <Box sx={{ display: "flex", gap: 1.5, p: 3 }}>
      <UserProfileCard onEditClick={() => setOpenDialog(true)} />

      <Box
        sx={{
          flex: 1,
          backgroundColor: "#fff",
          borderRadius: 3,
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          p: 3,
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
  icon={<AccessTimeIcon sx={{ mr: 1, fontSize: 18 }} />} 
  iconPosition="start"
  label="Sessions"
  sx={{
    mr: 0.5,
    borderTopLeftRadius: "16px",
    borderTopRightRadius: "16px",
    backgroundColor: tabIndex === 0 ? "#EBF7F4" : "#fff",
    textTransform: "none",
    px: 5,
    minHeight: 36, 
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
    minHeight: 50, 
    fontWeight: "bold",
    borderBottom: "none",
  }}
/>

        </Tabs>

        {/* Filter Section */}
        <Box mt={3}>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
            <Box>
              <Typography variant="h6" fontWeight="bold" mb={0.5}>
                History Sessions
              </Typography>
              <Typography variant="body2">Total Sessions: {sessions.length}</Typography>
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
            PaperProps={{ sx: { minWidth: 130, borderRadius: 2, mt: 0.25 } }}
          >
            <MenuItem>All</MenuItem>
            <MenuItem>Completed</MenuItem>
            <MenuItem>Pending</MenuItem>
            <MenuItem>Cancelled</MenuItem>
          </Menu>
        </Box>

        {/* Table */}
        <Box
          sx={{
            border: "1px solid #ddd",
            borderRadius: "16px",
            overflow: "hidden",
          }}
        >
          <Table sx={{ backgroundColor: "#fff" }}>
            <TableHead>
              <TableRow sx={{ backgroundColor: "#EBF7F4" }}>
                {["Date", "Day", "Time Slot", "Assistant", "Session Type", "Status"].map((col, idx) => (
                  <TableCell
                    key={idx}
                    sx={{
                      fontWeight: "bold",
                      width: "16.66%",
                      whiteSpace: "nowrap",
                      textAlign: "center",
                    }}
                  >
                    {col}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {sessions.map((session, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ textAlign: "center" }}>{session.date}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{session.day}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{session.time}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{session.assistant}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{session.type}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    <Chip
                      label={session.status}
                      color={statusColors[session.status]}
                      size="small"
                      sx={{ minWidth: "100px", justifyContent: "center" }}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </Box>

      {/* Dialog for Edit Profile */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)} fullWidth maxWidth="sm">
        <DialogTitle sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          Edit Profile
          <IconButton onClick={() => setOpenDialog(false)}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <EditProfileForm />
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default UserProfile;

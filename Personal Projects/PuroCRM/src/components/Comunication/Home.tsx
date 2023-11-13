import React from "react";
import Button from "@mui/material/Button";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import PrivacyTipOutlinedIcon from "@mui/icons-material/PrivacyTipOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Modal from "@mui/material/Modal";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import DraftsIcon from "@mui/icons-material/DraftsOutlined"; // Use the DraftsOutlined icon
import PersonalIcon from "@mui/icons-material/PersonOutline"; // Use the PersonOutline icon
import JunkIcon from "@mui/icons-material/ReportOutlined"; // Use the ReportOutlined icon
import SendIcon from "@mui/icons-material/SendOutlined"; // Use the SendOutlined icon
import DeleteIcon from "@mui/icons-material/DeleteOutline"; // Use the DeleteOutline icon
import ArchiveIcon from "@mui/icons-material/ArchiveOutlined"; // Use the ArchiveOutlined icon
import NoteIcon from "@mui/icons-material/NoteOutlined"; // Use the NoteOutlined icon
import ConversationIcon from "@mui/icons-material/ChatOutlined"; // Use the ChatOutlined icon
import InboxIcon from "@mui/icons-material/InboxOutlined"; // Include the InboxOutlined icon
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import { styled } from "@mui/material/styles";
import Checkbox, { CheckboxProps } from "@mui/material/Checkbox";
import TuneIcon from "@mui/icons-material/Tune";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { Avatar, Divider } from "@mui/material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import RedoOutlinedIcon from "@mui/icons-material/RedoOutlined";
import ReplyIcon from "@mui/icons-material/Reply";
import ReplyAllIcon from "@mui/icons-material/ReplyAll";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { alpha } from "@mui/material/styles";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ForwardIcon from "@mui/icons-material/Forward";
import MarkUnreadIcon from "@mui/icons-material/Markunread";
import ReportIcon from "@mui/icons-material/Report";
import BlockIcon from "@mui/icons-material/Block";
import DownloadIcon from "@mui/icons-material/Download";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ViewIcon from "@mui/icons-material/Visibility";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import inboxIcon from "../../../public/assets/ib.svg";
import junk from "../../../public/assets/junk.svg";
import sentItem from "../../../public/assets/send.svg";
import trash from "../../../public/assets/del.svg";
import notes from "../../../public/assets/notes.svg";
import conversation from "../../../public/assets/conversation.svg";
import draftIcon from "../../../public/assets/draft.svg";
import archive from "../../../public/assets/archive.svg";
import Image from "next/image";

const BpIcon = styled("span")(({ theme }) => ({
  borderRadius: "50%",
  width: 25,
  height: 25,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "1px solid #333399",
  boxShadow:
    theme.palette.mode === "dark"
      ? "0 0 0 1px rgb(16 22 26 / 40%)"
      : "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
  backgroundColor: theme.palette.mode === "dark" ? "#394b59" : "#f5f8fa",
  ".Mui-focusVisible &": {
    outline: "2px auto #333399",
    outlineOffset: 2,
  },
  "input:hover ~ &": {
    backgroundColor: theme.palette.mode === "dark" ? "#30404d" : "#ebf1f5",
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: "#333399",

  "input:hover ~ &": {
    backgroundColor: "#333399",
  },
});

// Inspired by blueprintjs
function BpCheckbox(props: CheckboxProps) {
  return (
    <Checkbox
      sx={{
        "&:hover": { bgcolor: "transparent" },
      }}
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      inputProps={{ "aria-label": "Checkbox demo" }}
      {...props}
    />
  );
}

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80vw",
  height: "85vh",
  bgcolor: "background.paper",
  border: "none",
  borderRadius: "8px",
  boxShadow: 12,

  overflowY: "scroll",
  "&::-webkit-scrollbar": {
    width: 10,
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#333399",
    borderRadius: "100px",
    transform: "rotate(0deg)",
  },
  "&::-webkit-scrollbar-track": {
    height: 120,
    backgroundColor: "transparent",
  },
};

function Home() {
  interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }
  interface Email {
    id: number;
    name: string;
    email: string;
    text: string;
    subText: string;
    date: string;
  }

  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  function a11yProps(index: number) {
    return {
      id: `vertical-tab-${index}`,
      "aria-controls": `vertical-tabpanel-${index}`,
    };
  }

  const [openFavourites, setOpenFavourites] = React.useState(false);
  const [openFolders, setOpenFolders] = React.useState(true);
  const [openCategories, setOpenCategories] = React.useState(false);
  const [value, setValue] = React.useState(0);
  const [renderEmails, setRenderEmails] = React.useState("inbox");
  const [sendReply, setSendReply] = React.useState(false);
  const [email, setEmail] = React.useState<Email>({
    id: 1,
    name: "Leo Ekstrom Bothman",
    email: "leo@example.com",
    text: "Lorem Ipsum is simply dummy text...",
    subText: "Neque porro quisquam est, qui dolorem...",
    date: "15-Jan",
  });
  const [openModal, setOpenModal] = React.useState(false);
  const handleOpen = () => setOpenModal(true);
  const modalClose = () => setOpenModal(false);

  //   radio input
  const [radioValue, setRadioValue] = React.useState("female");

  const handleRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRadioValue((event.target as HTMLInputElement).value);
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    console.log("target value ", event.currentTarget);
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleFavouritesClick = () => {
    setOpenFavourites(!openFavourites);
  };

  const handleFoldersClick = () => {
    setOpenFolders(!openFolders);
  };

  const handleCategoriesClick = () => {
    setOpenCategories(!openCategories);
  };

  const renderInbox = () => {
    const renderEmails = [
      {
        id: 1,
        name: "Leo Ekstrom Bothman",
        email: "leo@example.com",
        text: "Lorem Ipsum is simply dummy text...",
        subText: "Neque porro quisquam est, qui dolorem...",
        date: "15-Jan",
      },
      {
        id: 2,
        name: "John Doe",
        email: "john@example.com",
        text: "Lorem Ipsum is simply dummy text...",
        subText: "Neque porro quisquam est, qui dolorem...",
        date: "15-Jan",
      },
      {
        id: 3,
        name: "Jane Smith",
        email: "jane@example.com",
        text: "Lorem Ipsum is simply dummy text...",
        subText: "Neque porro quisquam est, qui dolorem...",
        date: "15-Jan",
      },
      {
        id: 4,
        name: "Alice Johnson",
        email: "alice@example.com",
        text: "Lorem Ipsum is simply dummy text...",
        subText: "Neque porro quisquam est, qui dolorem...",
        date: "15-Jan",
      },
      {
        id: 5,
        name: "Bob Brown",
        email: "bob@example.com",
        text: "Lorem Ipsum is simply dummy text...",
        subText: "Neque porro quisquam est, qui dolorem...",
        date: "15-Jan",
      },
      {
        id: 6,
        name: "Eve White",
        email: "eve@example.com",
        text: "Lorem Ipsum is simply dummy text...",
        subText: "Neque porro quisquam est, qui dolorem...",
        date: "15-Jan",
      },
      {
        id: 7,
        name: "Chris Green",
        email: "chris@example.com",
        text: "Lorem Ipsum is simply dummy text...",
        subText: "Neque porro quisquam est, qui dolorem...",
        date: "15-Jan",
      },
      {
        id: 8,
        name: "David Wilson",
        email: "david@example.com",
        text: "Lorem Ipsum is simply dummy text...",
        subText: "Neque porro quisquam est, qui dolorem...",
        date: "15-Jan",
      },
      {
        id: 9,
        name: "Grace Harris",
        email: "grace@example.com",
        text: "Lorem Ipsum is simply dummy text...",
        subText: "Neque porro quisquam est, qui dolorem...",
        date: "15-Jan",
      },
      {
        id: 10,
        name: "Frank Lee",
        email: "frank@example.com",
        text: "Lorem Ipsum is simply dummy text...",
        subText: "Neque porro quisquam est, qui dolorem...",
        date: "15-Jan",
      },
      {
        id: 11,
        name: "Sarah Miller",
        email: "sarah@example.com",
        text: "Lorem Ipsum is simply dummy text...",
        subText: "Neque porro quisquam est, qui dolorem...",
        date: "15-Jan",
      },
      {
        id: 12,
        name: "Michael Taylor",
        email: "michael@example.com",
        text: "Lorem Ipsum is simply dummy text...",
        subText: "Neque porro quisquam est, qui dolorem...",
        date: "15-Jan",
      },
    ];

    return (
      <>
        <div className="renderEmailTemplate">
          <div className="templateHeader">
            <div className="left">
              <BpCheckbox />
              Inbox
            </div>
            <div className="right">
              <TuneIcon sx={{ transform: "rotate(90deg)", color: "#23272E" }} />
              <SearchRoundedIcon sx={{ color: "#23272E" }} />
            </div>
          </div>
          {renderEmails.map((email) => {
            return (
              <>
                <List
                  onClick={() => {
                    setEmail(email), setSendReply(false);
                  }}
                  sx={{
                    width: "100%",
                    cursor: "pointer",
                    "&:hover": { backgroundColor: "#F7F7FC" },
                  }}
                  key={email.id}
                >
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <BpCheckbox defaultChecked />
                    </ListItemAvatar>
                    <ListItemText
                      primary={`${email.name}`}
                      sx={{
                        color: "#23272E",
                        fontSize: "14px",
                        fontWeight: "600",
                      }}
                      secondary={
                        <>
                          <Typography
                            sx={{ display: "inline", fontSize: "12px" }}
                            component="span"
                            variant="body2"
                            color="#2C3E50"
                          >
                            {email.date}
                          </Typography>
                        </>
                      }
                    />
                  </ListItem>
                  <ListItem
                    sx={{
                      display: "block",
                      marginLeft: "12px",
                      marginTop: "-20px",
                    }}
                  >
                    <div className="inbox-text">{email.text}...</div>
                    <div className="inbox-subText">{email.subText}...</div>
                  </ListItem>
                </List>
              </>
            );
          })}
        </div>
      </>
    );
  };

  const rednerSentBox = () => {
    const renderEmails = [
      {
        id: 1,
        name: "Muhammad Ali",
        email: "ali@example.com",
        text: "Lorem Ipsum is simply dummy text...",
        subText: "Neque porro quisquam est, qui dolorem...",
        date: "15-Jan",
      },
      {
        id: 2,
        name: "Ayesha Khan",
        email: "ayesha@example.com",
        text: "Sample text 1...",
        subText: "Sample subtext 1...",
        date: "15-Jan",
      },
      {
        id: 3,
        name: "Ahmed Raza",
        email: "ahmed@example.com",
        text: "Sample text 2...",
        subText: "Sample subtext 2...",
        date: "15-Jan",
      },
      {
        id: 4,
        name: "Sarah Ahmed",
        email: "sarah@example.com",
        text: "Sample text 3...",
        subText: "Sample subtext 3...",
        date: "15-Jan",
      },
      {
        id: 5,
        name: "Saima Ali",
        email: "saima@example.com",
        text: "Sample text 4...",
        subText: "Sample subtext 4...",
        date: "15-Jan",
      },
      {
        id: 6,
        name: "Kamran Khan",
        email: "kamran@example.com",
        text: "Sample text 5...",
        subText: "Sample subtext 5...",
        date: "15-Jan",
      },
      {
        id: 7,
        name: "Hina Raza",
        email: "hina@example.com",
        text: "Sample text 6...",
        subText: "Sample subtext 6...",
        date: "15-Jan",
      },
      {
        id: 8,
        name: "Usman Ahmed",
        email: "usman@example.com",
        text: "Sample text 7...",
        subText: "Sample subtext 7...",
        date: "15-Jan",
      },
      {
        id: 9,
        name: "Ali Khan",
        email: "ali@example.com",
        text: "Sample text 8...",
        subText: "Sample subtext 8...",
        date: "15-Jan",
      },
      {
        id: 10,
        name: "Sara Khan",
        email: "sara@example.com",
        text: "Sample text 9...",
        subText: "Sample subtext 9...",
        date: "15-Jan",
      },
      {
        id: 11,
        name: "Michael Taylor",
        email: "michael@example.com",
        text: "Sample text 10...",
        subText: "Sample subtext 10...",
        date: "15-Jan",
      },
      {
        id: 12,
        name: "Zain Ahmed",
        email: "zain@example.com",
        text: "Sample text 11...",
        subText: "Sample subtext 11...",
        date: "15-Jan",
      },
    ];

    return (
      <>
        <div className="renderEmailTemplate">
          <div className="templateHeader">
            <div className="left">
              <BpCheckbox />
              Inbox
            </div>
            <div className="right">
              <TuneIcon sx={{ transform: "rotate(90deg)", color: "#23272E" }} />
              <SearchRoundedIcon sx={{ color: "#23272E" }} />
            </div>
          </div>
          {renderEmails.map((email) => {
            return (
              <>
                <List
                  onClick={() => {
                    setEmail(email), setSendReply(false);
                  }}
                  sx={{
                    width: "100%",
                    cursor: "pointer",
                    "&:hover": { backgroundColor: "#F7F7FC" },
                  }}
                  key={email.id}
                >
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <BpCheckbox defaultChecked />
                    </ListItemAvatar>
                    <ListItemText
                      primary={`${email.name}`}
                      sx={{
                        color: "#23272E",
                        fontSize: "14px",
                        fontWeight: "600",
                      }}
                      secondary={
                        <>
                          <Typography
                            sx={{ display: "inline", fontSize: "12px" }}
                            component="span"
                            variant="body2"
                            color="#2C3E50"
                          >
                            {email.date}
                          </Typography>
                        </>
                      }
                    />
                  </ListItem>
                  <ListItem
                    sx={{
                      display: "block",
                      marginLeft: "12px",
                      marginTop: "-20px",
                    }}
                  >
                    <div className="inbox-text">{email.text}...</div>
                    <div className="inbox-subText">{email.subText}...</div>
                  </ListItem>
                </List>
              </>
            );
          })}
        </div>
      </>
    );
  };

  const renderEmailsTemplate = (emailType: string) => {
    switch (emailType) {
      case "inbox":
        return renderInbox();
        break;
      case "sent":
        return rednerSentBox();
        break;
      case "draft":
        return renderInbox();
        break;
      // Add other cases here for different email views if needed
      default:
        return rednerSentBox();
    }
  };
  const OpenEmails = (email: Email) => {
    return (
      <div className="email-section">
        <div className="head">
          <div className="text">
            {email?.email} invited you to join their family
          </div>
          <div className="icons">
            <AddCircleOutlineOutlinedIcon sx={{ color: "#2C3E50" }} />
            <KeyboardArrowDownOutlinedIcon sx={{ color: "#2C3E50" }} />
          </div>
        </div>
        <Divider />
        <div className="profile">
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar />
            </ListItemAvatar>
            <ListItemText
              primary={`Lorem Ipsum <${email?.email}>`}
              sx={{ color: "#23272E", fontSize: "14px", fontWeight: "600" }}
              secondary={
                <>
                  <Typography
                    sx={{ display: "inline", fontSize: "12px" }}
                    component="span"
                    variant="body2"
                    color="#2C3E50"
                  >
                    To:{email?.name} Nov, 19 2023 | 15:20 PM
                  </Typography>
                </>
              }
            />
          </ListItem>
          <div className="icons">
            <RedoOutlinedIcon sx={{ color: "#333399" }} />{" "}
            <ReplyIcon sx={{ color: "#333399" }} />
            <ReplyAllIcon sx={{ color: "#333399" }} />
            <MoreHorizIcon
              sx={{ color: "#333399", cursor: "pointer" }}
              onClick={(e: any) => handleClick(e)}
            />
            <StyledMenu
              id="demo-customized-menu"
              MenuListProps={{
                "aria-labelledby": "demo-customized-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <MenuItem
                onClick={handleClose}
                disableRipple
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  color: "#2C3E50",
                }}
              >
                Reply
                <ReplyIcon color="inherit" />
              </MenuItem>
              <MenuItem
                onClick={handleClose}
                disableRipple
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  color: "#2C3E50",
                }}
              >
                Reply All
                <ReplyAllIcon color="inherit" />
              </MenuItem>
              <MenuItem
                onClick={handleClose}
                disableRipple
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  color: "#2C3E50",
                }}
              >
                Forward
                <ForwardIcon color="inherit" />
              </MenuItem>
              <MenuItem
                onClick={handleClose}
                disableRipple
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  color: "#2C3E50",
                }}
              >
                Delete
                <DeleteIcon color="inherit" />
              </MenuItem>
              <MenuItem
                onClick={handleClose}
                disableRipple
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  color: "#2C3E50",
                }}
              >
                Mark as Unread
                <MarkUnreadIcon color="inherit" />
              </MenuItem>
              <MenuItem
                onClick={handleClose}
                disableRipple
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  color: "#2C3E50",
                }}
              >
                Report
                <ReportIcon color="inherit" />
              </MenuItem>
              <MenuItem
                onClick={handleClose}
                disableRipple
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  color: "#2C3E50",
                }}
              >
                Block
                <BlockIcon color="inherit" />
              </MenuItem>
              <MenuItem
                onClick={handleClose}
                disableRipple
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  color: "#2C3E50",
                }}
              >
                Download
                <DownloadIcon color="inherit" />
              </MenuItem>
              <MenuItem
                onClick={handleClose}
                disableRipple
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  color: "#2C3E50",
                }}
              >
                View
                <ViewIcon color="inherit" />
              </MenuItem>
            </StyledMenu>
          </div>
        </div>
        <Divider />

        <div className="content">
          <div className="subject">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </div>
          <div className="text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </div>
          <div className="text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </div>
        </div>

        <footer>
          <Button
            variant="outlined"
            sx={{
              color: "#333399",
              borderColor: "#333399",
              borderRadius: "8px",
              background: "transparent",
            }}
            startIcon={<RedoOutlinedIcon sx={{ color: "#333399" }} />}
          >
            Forward
          </Button>
          <Button
            onClick={() => setSendReply(true)}
            variant="outlined"
            sx={{
              color: "#333399",
              backgroundColor: "#F7F7FC",
              outline: "none",
              border: "none",
              borderRadius: "8px",
            }}
            startIcon={<ReplyIcon sx={{ color: "#333399" }} />}
          >
            Reply
          </Button>
          <Button
            variant="contained"
            startIcon={<ReplyAllIcon sx={{ color: "white" }} />}
            sx={{ background: "#333399", borderRadius: "8px" }}
          >
            Reply All
          </Button>
        </footer>
      </div>
    );
  };

  const sendEmail = () => {
    return (
      <div className="email-section">
        <div className="head">
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <Button
              variant="contained"
              startIcon={<SendIcon sx={{ transform: "rotate(-45deg)",marginTop:'-5px' }} />}
              sx={{ background: "#333399", borderRadius: "8px",padding:'8px 16px' }}
            >
              send
            </Button>
            <div
              style={{
                background: "#333399",
                borderRadius: "8px",
                display: "flex",
                alignContent: "center",
                padding: "9px",
                cursor: "pointer",
              }}
            >
              <KeyboardArrowDownOutlinedIcon sx={{ color: "white" }} />
            </div>
          </div>
          <div className="right-icons">
            <div className="icons">
              <AddCircleOutlineOutlinedIcon
                sx={{ color: "#2C3E50", cursor: "pointer" }}
              />
              <KeyboardArrowDownOutlinedIcon sx={{ color: "#2C3E50" }} />
            </div>
            <OpenInNewOutlinedIcon
              sx={{ color: "#2C3E50", cursor: "pointer" }}
            />
            <DeleteIcon sx={{ color: "#D80027", cursor: "pointer" }} />
          </div>
        </div>
        <Divider />
        <div className="profile">
          <Button
            variant="outlined"
            sx={{
              color: "#333399",
              borderColor: "#333399",
              borderRadius: "8px",
              padding: "6px 15px",
              background: "transparent",
            }}
          >
            To
          </Button>
          <div className="cc">
            <h3>CC</h3>
            <h3>BCC</h3>
          </div>
        </div>
        <Divider />
        <input type="text" placeholder="Add Subject" className="email-input" />

        <Divider />
        <textarea
          name="text"
          placeholder="Typing...."
          id="text"
          cols={90}
          rows={18}
          className="email-textarea"
        ></textarea>
      </div>
    );
  };

  return (
    <div className="home-section">
      <div className="header">
        <Button
          variant="contained"
          startIcon={<EditOutlinedIcon />}
          sx={{ background: "#333399", borderRadius: "8px" }}
          onClick={handleOpen}
        >
          Compose
        </Button>
        <Button
          variant="outlined"
          sx={{
            color: "#333399",
            borderColor: "#333399",
            borderRadius: "8px",
            background: "transparent",
          }}
          startIcon={<CalendarMonthIcon />}
        >
          Create Event
        </Button>
        <div className="icon">
          <Inventory2OutlinedIcon sx={{ color: "#23272E", fontSize: "20px" }} />{" "}
          <KeyboardArrowDownOutlinedIcon sx={{ color: "#A9AEB6" }} />
        </div>
        <div className="icon">
          <DeleteOutlinedIcon sx={{ color: "#D80027", fontSize: "20px" }} />{" "}
          <KeyboardArrowDownOutlinedIcon sx={{ color: "#A9AEB6" }} />
        </div>
        <div className="icon">
          <PrivacyTipOutlinedIcon sx={{ color: "#23272E", fontSize: "20px" }} />{" "}
          <KeyboardArrowDownOutlinedIcon sx={{ color: "#A9AEB6" }} />
        </div>
        <div className="icon">
          <LocalOfferOutlinedIcon sx={{ color: "#23272E", fontSize: "20px" }} />{" "}
          <KeyboardArrowDownOutlinedIcon sx={{ color: "#A9AEB6" }} />
        </div>
      </div>
      <div className="main">
        <div className="listItems">
          <List sx={{ width: "100%" }} component="nav">
            <ListItemButton onClick={handleFavouritesClick}>
              <ListItemIcon>
                {openFavourites ? <ExpandLess /> : <ExpandMore />}
              </ListItemIcon>
              <ListItemText
                primary="Favourites"
                sx={{ color: "black", fontWeight: "bold" }}
              />{" "}
              {/* Set the text color */}
              <AddBoxOutlinedIcon sx={{ color: "#23272E" }} />
            </ListItemButton>

            <Collapse in={openFavourites} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton
                  sx={{ pl: 4 }}
                  onClick={() => setRenderEmails("inbox")}
                >
                  <ListItemIcon>
                    <Image
                      src={inboxIcon}
                      alt="thrads photo"
                      style={{
                        color: "#23272E",
                        width: "25px",
                        height: "25px",
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText primary="Inbox" sx={{ color: "#23272E" }} />{" "}
                  {/* Set the text color */}
                </ListItemButton>
                <ListItemButton
                  sx={{ pl: 4 }}
                  onClick={() => setRenderEmails("draft")}
                >
                  <ListItemIcon>
                    <Image
                      src={draftIcon}
                      alt="thrads photo"
                      style={{
                        color: "#23272E",
                        width: "25px",
                        height: "25px",
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText primary="Drafts" sx={{ color: "#23272E" }} />{" "}
                  {/* Set the text color */}
                </ListItemButton>
                <ListItemButton
                  sx={{ pl: 4 }}
                  onClick={() => setRenderEmails("sent")}
                >
                  <ListItemIcon>
                    <Image
                      src={sentItem}
                      alt="thrads photo"
                      style={{
                        color: "#23272E",
                        width: "25px",
                        height: "25px",
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Sent Items"
                    sx={{ color: "#23272E" }}
                  />{" "}
                  {/* Set the text color */}
                </ListItemButton>
              </List>
            </Collapse>
          </List>

          <List sx={{ width: "100%" }} component="nav">
            <ListItemButton onClick={handleFoldersClick}>
              <ListItemIcon>
                {openFolders ? <ExpandLess /> : <ExpandMore />}
              </ListItemIcon>
              <ListItemText
                primary="Folders"
                sx={{ color: "black", fontWeight: "bold" }}
              />
              <AddBoxOutlinedIcon sx={{ color: "#23272E" }} />
            </ListItemButton>
            <Collapse in={openFolders} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton
                  sx={{ pl: 4 }}
                  onClick={() => setRenderEmails("inbox")}
                >
                  <ListItemIcon>
                    <Image
                      src={inboxIcon}
                      alt="thrads photo"
                      style={{
                        color: "#23272E",
                        width: "25px",
                        height: "25px",
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText primary="Inbox" />
                </ListItemButton>
                <ListItemButton
                  sx={{ pl: 4 }}
                  onClick={() => setRenderEmails("junk")}
                >
                  <ListItemIcon>
                    <Image
                      src={junk}
                      alt="thrads photo"
                      style={{
                        color: "#23272E",
                        width: "25px",
                        height: "25px",
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText primary="Junk Emails" />
                </ListItemButton>
                <ListItemButton
                  sx={{ pl: 4 }}
                  onClick={() => setRenderEmails("draft")}
                >
                  <ListItemIcon>
                    <Image
                      src={draftIcon}
                      alt="thrads photo"
                      style={{
                        color: "#23272E",
                        width: "25px",
                        height: "25px",
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText primary="Drafts" />
                </ListItemButton>
                <ListItemButton
                  sx={{ pl: 4 }}
                  onClick={() => setRenderEmails("sent")}
                >
                  <ListItemIcon>
                    <Image
                      src={sentItem}
                      alt="thrads photo"
                      style={{
                        color: "#23272E",
                        width: "25px",
                        height: "25px",
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText primary="Sent Items" />
                </ListItemButton>
                <ListItemButton
                  sx={{ pl: 4 }}
                  onClick={() => setRenderEmails("delete")}
                >
                  <ListItemIcon>
                    <Image
                      src={trash}
                      alt="thrads photo"
                      style={{
                        color: "#23272E",
                        width: "25px",
                        height: "25px",
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText primary="Delete Items" />
                </ListItemButton>
                <ListItemButton
                  sx={{ pl: 4 }}
                  onClick={() => setRenderEmails("archive")}
                >
                  <ListItemIcon>
                    <Image
                      src={archive}
                      alt="thrads photo"
                      style={{
                        color: "#23272E",
                        width: "25px",
                        height: "25px",
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText primary="Archive" />
                </ListItemButton>
                <ListItemButton
                  sx={{ pl: 4 }}
                  onClick={() => setRenderEmails("notes")}
                >
                  <ListItemIcon>
                    <Image
                      src={notes}
                      alt="thrads photo"
                      style={{
                        color: "#23272E",
                        width: "25px",
                        height: "25px",
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText primary="Notes" />
                </ListItemButton>
                <ListItemButton
                  sx={{ pl: 4 }}
                  onClick={() => setRenderEmails("conversation")}
                >
                  <ListItemIcon>
                    <Image
                      src={conversation}
                      alt="thrads photo"
                      style={{
                        color: "#23272E",
                        width: "25px",
                        height: "25px",
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText primary="Conversation" />
                </ListItemButton>
              </List>
            </Collapse>
          </List>

          <List sx={{ width: "100%" }} component="nav">
            <ListItemButton onClick={handleCategoriesClick}>
              <ListItemIcon>
                {openCategories ? <ExpandLess /> : <ExpandMore />}
              </ListItemIcon>
              <ListItemText
                primary="Categories"
                sx={{ color: "black", fontWeight: "bold" }}
              />{" "}
              {/* Set the text color */}
              <AddBoxOutlinedIcon sx={{ color: "#23272E" }} />
            </ListItemButton>
            <Collapse in={openCategories} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton
                  sx={{ pl: 4 }}
                  onClick={() => setRenderEmails("personal")}
                >
                  <ListItemIcon>
                    <LocalOfferOutlinedIcon style={{ color: "yellow" }} />
                  </ListItemIcon>
                  <ListItemText primary="Personal" sx={{ color: "#23272E" }} />{" "}
                  {/* Set the text color */}
                </ListItemButton>
                {/* Add similar sx={{ color: '#23272E' }} to other ListItemText components */}
              </List>
            </Collapse>
          </List>
        </div>
        <Box
          sx={{
            // flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            height: "auto",
            // overflowY: "scroll",
          }}
        >
          {renderEmailsTemplate(renderEmails)}
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            height: "auto",
          }}
        >
          {sendReply ? sendEmail() : OpenEmails(email)}
        </Box>
      </div>

      <Modal
        open={openModal}
        onClose={modalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="modal-header">
            <div className="heading">Compose and Reply</div>
            <CancelOutlinedIcon
              sx={{ cursor: "pointer", color: "#23272E" }}
              onClick={modalClose}
            />
          </div>
          <Divider />
          <div className="modal">
            <div className="general-heading">Email Signature</div>
            <div className="subHeading">
              Email and choose signatures that will be automatically added to
              your email message.
            </div>
          </div>
          <Divider />
          <div className="modal" style={{ display: "block" }}>
            <div className="general-heading" style={{ marginBottom: "12px" }}>
              Create and Edit Signatures
            </div>
            <Button
              variant="contained"
              startIcon={<AddBoxOutlinedIcon />}
              sx={{
                background: "#333399",
                borderRadius: "8px",
                marginBottom: "12px",
                padding:'8px 16px'
              }}
            >
              New Signature
            </Button>
          </div>
          <Divider />
          <div className="modal">
            <TextField
              id="outlined-basic"
              label="Add Signature Name"
              variant="outlined"
              sx={{ width: "100%",borderColor:'#F4F4F4',outlineColor:'#F4F4F4' }}
            />
            <div>rich text editor </div>
          </div>
          <Divider />
          <div className="modal">
            <div className="general-heading">Select Default Signature</div>
            <div className="signature-type">
              For New Messages:{" "}
              <select className="select" name="signature" id="cars" >
                <option value="signature 1">signature 1</option>
                <option value="signature 2">signature 2</option>
              </select>
            </div>
            <div className="signature-type">
              For Replies/Forwards:{" "}
              <select className="select" name="signature" id="signature">
                <option value="signature 1">signature 1</option>
                <option value="signature 2">signature 2</option>
              </select>
            </div>
          </div>
          <Divider />
          <div className="modal">
            <div className="general-heading">Message format</div>
            <div className="subHeading">
              Choose whether to display the From the Bcc lines when you’re
              composing a message.
            </div>
            <div className="check">
              <Checkbox defaultChecked /> Always show Bcc
            </div>
            <div className="check">
              <Checkbox defaultChecked /> Always show From
            </div>
            <div className="select-title">
              Compose message in:{" "}
              <select className="select" name="format" id="format">
                <option value="HTML">HTML</option>
                <option value="HTML For">HTML Form</option>
              </select>
            </div>
            <div>rich text edit</div>
            <div className="subHeading">
              Messages you write will look like this by default.
            </div>
            <div className="subHeading">
              You can also change the format of your messages in the new message
              window.
            </div>
          </div>
          <Divider />

          <div className="modal">
            <div className="general-heading">Reply or Reply all</div>
            <div className="subHeading">
              Choose your default response when you reply from the reading pane.
            </div>
            <div className="radiobtn">
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  value={radioValue}
                  onChange={handleRadio}
                >
                  <FormControlLabel
                    value="Reply"
                    control={<Radio />}
                    label="Reply"
                  />
                  <FormControlLabel
                    value="ReplyAll"
                    control={<Radio />}
                    label="Reply All"
                  />
                </RadioGroup>
              </FormControl>
            </div>
          </div>
          <Divider />
          <div className="modal">
            <div className="general-heading">Link Preview</div>
            <div className="subHeading">
              When you open a message that contains a hyperlink or add a link to
              a message, Outlook inserts a preview of the website. If you don’t
              want to see previews, clear the tick box below.
            </div>
            <div className="check">
              <Checkbox defaultChecked />
              Preview links in email
            </div>
          </div>
          <Divider />
          <div className="modal">
            <div className="general-heading">Undo Send</div>
            <div className="subHeading">
              You can cancel an email message after you've selected Send. To
              cancel, select the Undo button that appears at the bottom of your
              screen.
            </div>
            <div className="subBold">
              Messages can be cancelled for up to ten seconds. You can choose
              how long Outlook will wait to send your messages.
            </div>
            <div>

            <select className="select" name="format" id="format" style={{maxWidth:'80px'}}>
                <option value="HTML">0</option>
                <option value="HTML For">1</option>
                <option value="HTML For">2</option>
              </select>
            </div>
          </div>
          <Divider />
          <div className="modal">
            <div className="general-heading">Joyful Animations</div>
            <div className="subHeading">
              PUROCoach automatically shows a celebratory burst of colourful
              shapes in the reading pane when you open a message that includes
              words such as Happy Birthday and Congratulations. To turn off
              these animations, clear the tick box below.
            </div>
            <div className="check">
              <Checkbox defaultChecked />
              Show joyful animations in the reading pane
            </div>
          </div>
          <Divider />
          <div className="modal">
            <div className="general-heading">Quick suggestions</div>
            <div className="subHeading">
              As you type a message, Outlook can highlight keywords in the text
              and suggest helpful information, like restaurants near you, flight
              information, or schedules for your favorite sports teams. When you
              click a keyword, suggestions appear that you can insert in your
              message.
            </div>
            <div className="check">
              <Checkbox defaultChecked />
              Offer suggestions based on keywords in my messages
            </div>
            <div className="check">
              <Checkbox />
              Use my browser location to find places near me
            </div>
          </div>
          <Divider />
          <div className="modal">
            <div className="general-heading">Autofill</div>
            <div className="subHeading">
              PUROCoach can make flight information in your inbox/mailbox
              available directly in browser to help speed up your check in later
            </div>
            <div className="subBold">
              Make flight information from Outlook available in browser
            </div>
          </div>
          <Divider />
          <div className="modal">
            <div className="general-heading">Suggested Replies</div>
            <div className="subHeading">
              When you open a message, <b>PUROCoach</b> might suggest replies below the
              message. If you select a reply, you can edit the reply before
              sending it.
            </div>
            <div className="check">
              <Checkbox defaultChecked />
              Show Suggested Replies
            </div>
          </div>
          <div style={{display:'flex',alignItems:'center',justifyContent:'end',padding:'25px',width:'100%',gap:'12px'}}>
          <Button
          variant="contained"
          startIcon={<EditOutlinedIcon />}
          sx={{ background: "#333399", borderRadius: "8px",width:'100px' }}
        >
          Save
        </Button>
        <Button
          variant="outlined"
          sx={{
            color: "#333399",
            borderColor: "#333399",
            borderRadius: "8px",
            background: "transparent",
            width:'115px'
          }}
          startIcon={<CalendarMonthIcon />}
        >
          Discard
        </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default Home;

import React from "react";
import Button from "@mui/material/Button";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import MoveToInboxOutlinedIcon from "@mui/icons-material/MoveToInboxOutlined";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import DraftsOutlinedIcon from "@mui/icons-material/DraftsOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import StarIcon from "@mui/icons-material/Star";
import {
  Avatar,
  Divider,
  ListItem,
  ListItemAvatar,
  dividerClasses,
} from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import AttachmentOutlinedIcon from "@mui/icons-material/AttachmentOutlined";
import SentimentSatisfiedAltOutlinedIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import KeyboardVoiceOutlinedIcon from "@mui/icons-material/KeyboardVoiceOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import BookmarksOutlinedIcon from "@mui/icons-material/BookmarksOutlined";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import framer from "../../../public/assets/threads.svg";
import draft from "../../../public/assets/draft.svg";
import dm from "../../../public/assets/dm.svg";
import at from "../../../public/assets/mention.svg";
import saved from "../../../public/assets/saved.svg";
import Image from "next/image";

function Message() {
  const [openFolders, setOpenFolders] = React.useState(true);
  const [openCategories, setOpenCategories] = React.useState(false);
  const [showMessageMenu, setShowMessageMenu] = React.useState(false);
  const [openFavourites, setOpenFavourites] = React.useState(false);
  const [renderMessage, setRenderMessage] = React.useState("inbox");

  const handleFavouritesClick = () => {
    setOpenFavourites(!openFavourites);
  };

  const handleFoldersClick = () => {
    setOpenFolders(!openFolders);
  };

  const handleCategoriesClick = () => {
    setOpenCategories(!openCategories);
  };

  const handleMessageClick = () => {
    setShowMessageMenu(!showMessageMenu);
  };

  const renderMessageTemplate = (messageType: string) => {
    switch (messageType) {
      case "inbox":
        return renderInbox(messageType);
        break;
      case "sent":
        return renderInbox(messageType);
        break;
      case "draft":
        return renderInbox(messageType);
        break;
      // Add other cases here for different email views if needed
      default:
        return renderInbox(messageType);
    }
  };

  // render inbox

  const renderInbox = (messageType: string) => {
    return (
      <div className="messages">
        <header>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Shanze Gillani"
              secondary={
                <span>
                  {" "}
                  <span style={{ color: "#14B8A6" }}>Online</span> | Local time:
                  01:00 PM EST - April 19, 2023
                </span>
              }
            />
          </ListItem>
          <div className="icons">
            <div className="icon">
              <LocalPhoneOutlinedIcon sx={{ color: "#2C3E50" }} />
            </div>
            <div className="icon">
              <VideocamOutlinedIcon sx={{ color: "#2C3E50" }} />
            </div>
            <div className="icon">
              <MoreVertOutlinedIcon sx={{ color: "#2C3E50" }} />
            </div>
          </div>
        </header>
        <div className="chat-screen">
          <div className="message-content">
            <div className="chat">
              <div className="image">
                <Avatar sx={{ fontSize: "40px" }}>
                  <ImageIcon />
                </Avatar>
              </div>
              <div className="person-message">
                <div className="personName">
                  shanzegillani <span>8PM EST</span>
                </div>
                <div className="person-text">
                  <div className="text">
                    Hey Johnny, I wanted to send an inquiry at your end.
                  </div>
                  <div className="text">
                    Need to work hard and make things work.
                  </div>
                </div>
              </div>
            </div>
            <div className="icon">
              <MoreVertOutlinedIcon
                sx={{ color: "#2C3E50", cursor: "pointer" }}
              />
            </div>
          </div>

          <div className="message-content">
            <div className="chat">
              <div className="image">
                <Avatar sx={{ fontSize: "40px" }}>
                  <ImageIcon />
                </Avatar>
              </div>
              <div className="person-message">
                <div className="personName">
                  johnny dorvillien <span>8PM EST</span>
                </div>
                <div className="person-text">
                  <div className="text">
                    Hey Johnny, I wanted to send an inquiry at your end. And the
                    best way to learn is yes
                  </div>
                  <div className="text">
                    Need to work hard and make things work.
                  </div>
                </div>
              </div>
            </div>
            <div className="icon">
              <MoreVertOutlinedIcon
                sx={{ color: "#2C3E50", cursor: "pointer" }}
              />
            </div>
          </div>

          <div className="message-content">
            <div className="chat">
              <div className="image">
                <Avatar sx={{ fontSize: "40px" }}>
                  <ImageIcon />
                </Avatar>
              </div>
              <div className="person-message">
                <div className="personName">
                  shanzegillani <span>8PM EST</span>
                </div>
                <div className="person-text">
                  <div className="text">
                    Hey Johnny, I wanted to send an inquiry at your end.
                  </div>
                  <div className="text">
                    Need to work hard and make things work.
                  </div>
                </div>
              </div>
            </div>
            <div className="icon">
              <MoreVertOutlinedIcon
                sx={{ color: "#2C3E50", cursor: "pointer" }}
              />
            </div>
          </div>

          <div className="message-content">
            <div className="chat">
              <div className="image">
                <Avatar sx={{ fontSize: "40px" }}>
                  <ImageIcon />
                </Avatar>
              </div>
              <div className="person-message">
                <div className="personName">
                  johnny dorvillien <span>8PM EST</span>
                </div>
                <div className="person-text">
                  <div className="text">
                    Hey Johnny, I wanted to send an inquiry at your end. And the
                    best way to learn is yes
                  </div>
                </div>
              </div>
            </div>
            <div className="icon">
              <MoreVertOutlinedIcon
                sx={{ color: "#2C3E50", cursor: "pointer" }}
              />
            </div>
          </div>

          <div className="message-content">
            <div className="chat">
              <div className="image">
                <Avatar sx={{ fontSize: "40px" }}>
                  <ImageIcon />
                </Avatar>
              </div>
              <div className="person-message">
                <div className="personName">
                  shanzegillani <span>8PM EST</span>
                </div>
                <div className="person-text">
                  <div className="text">
                    Hey Johnny, I wanted to send an inquiry at your end.
                  </div>
                  <div className="text">
                    Need to work hard and make things work.
                  </div>
                </div>
              </div>
            </div>
            <div className="icon">
              <MoreVertOutlinedIcon
                sx={{ color: "#2C3E50", cursor: "pointer" }}
              />
            </div>
          </div>
          <div className="reply-section">
            <div className="reply">
              <input type="text" placeholder="Write message ...." />
              <div className="btns">
                <AttachmentOutlinedIcon sx={{ color: "#8F95B2" }} />
                <SentimentSatisfiedAltOutlinedIcon sx={{ color: "#8F95B2" }} />
                <KeyboardVoiceOutlinedIcon sx={{ color: "#8F95B2" }} />
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    padding: "12px",
                    background: "#333399",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <SendOutlinedIcon
                    sx={{ color: "#8F95B2", transform: "rotate(-45deg)" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const handleItemClick = (item: string) => {
    // Handle item click here
    setRenderMessage(item);
    console.log(`Clicked: ${item}`);
  };
  return (
    <div className="message-section">
      <div className="main">
        <div className="listItems">
          <List sx={{ width: "100%" }} component="nav">
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={() => handleItemClick("Threads")}
            >
              <ListItemIcon>
                <Image
                  src={framer}
                  alt="thrads photo"
                  style={{ color: "#23272E", width: "25px", height: "25px" }}
                />
              </ListItemIcon>
              <ListItemText primary="Threads" />
            </ListItemButton>

            <ListItemButton
              sx={{ pl: 4 }}
              onClick={() => handleItemClick("All DMs")}
            >
              <ListItemIcon>
                <Image
                  src={dm}
                  alt="dm photo"
                  style={{ color: "#23272E", width: "25px", height: "25px" }}
                />
              </ListItemIcon>
              <ListItemText primary="All DMs" />
            </ListItemButton>

            <ListItemButton
              sx={{ pl: 4 }}
              onClick={() => handleItemClick("Drafts")}
            >
              <ListItemIcon>
                <Image
                  src={draft}
                  alt="draft photo"
                  style={{ color: "#23272E", width: "25px", height: "25px" }}
                />
              </ListItemIcon>
              <ListItemText primary="Drafts" />
            </ListItemButton>

            <ListItemButton
              sx={{ pl: 4 }}
              onClick={() => handleItemClick("Mentions & Reactions")}
            >
              <ListItemIcon>
                <Image
                  src={at}
                  alt="dm photo"
                  style={{ color: "#23272E", width: "25px", height: "25px" }}
                />
              </ListItemIcon>
              <ListItemText primary="Mentions & Reactions" />
            </ListItemButton>

            <ListItemButton
              sx={{ pl: 4 }}
              onClick={() => handleItemClick("Saved Items")}
            >
              <ListItemIcon>
                <Image
                  src={saved}
                  alt="dm photo"
                  style={{ color: "#23272E", width: "25px", height: "25px" }}
                />
              </ListItemIcon>
              <ListItemText primary="Saved Items" />
            </ListItemButton>

            <ListItemButton
              sx={{ pl: 4 }}
              onClick={() => handleItemClick("More")}
            >
              <ListItemIcon>
                <MoreVertOutlinedIcon sx={{ color: "#23272E" }} />
              </ListItemIcon>
              <ListItemText primary="More" />
            </ListItemButton>
          </List>

          <List sx={{ width: "100%" }} component="nav">
            <ListItemButton onClick={handleFoldersClick}>
              <StarIcon sx={{ color: "yellow" }} />
              <ListItemText
                primary="Starred"
                sx={{ color: "black", fontWeight: "bold" }}
              />
              <ListItemIcon>
                {openFolders ? <ExpandLess /> : <ExpandMore />}
              </ListItemIcon>
            </ListItemButton>
            <Collapse in={openFolders} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton
                  sx={{ pl: 4 }}
                  onClick={() => setRenderMessage("inbox")}
                >
                  <ListItemText primary="# design-team" />
                </ListItemButton>
                <ListItemButton
                  sx={{ pl: 4 }}
                  onClick={() => setRenderMessage("inbox")}
                >
                  <ListItemText primary="# dev-team" />
                </ListItemButton>
                <ListItemButton
                  sx={{ pl: 4 }}
                  onClick={() => setRenderMessage("inbox")}
                >
                  <ListItemText primary="# team-marketing" />
                </ListItemButton>
              </List>
            </Collapse>
          </List>

          <List sx={{ width: "100%" }} component="nav">
            <ListItemButton onClick={handleCategoriesClick}>
              <ListItemText
                primary="Channels"
                sx={{ color: "black", fontWeight: "bold" }}
              />
              <ListItemIcon>
                {openCategories ? <ExpandLess /> : <ExpandMore />}
              </ListItemIcon>
            </ListItemButton>
            <Collapse in={openCategories} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton
                  sx={{ pl: 4 }}
                  onClick={() => setRenderMessage("inbox")}
                >
                  <ListItemText primary="# announcements" />
                </ListItemButton>
                <ListItemButton
                  sx={{ pl: 4 }}
                  onClick={() => setRenderMessage("inbox")}
                >
                  <ListItemText primary="# hr" />
                </ListItemButton>
                <ListItemButton
                  sx={{ pl: 4 }}
                  onClick={() => setRenderMessage("inbox")}
                >
                  <AddBoxOutlinedIcon
                    sx={{ color: "gray", marginRight: "8px" }}
                  />
                  <ListItemText primary="Add Channel" />
                </ListItemButton>
              </List>
            </Collapse>
          </List>
          <List sx={{ width: "100%" }} component="nav">
            <ListItemButton onClick={handleMessageClick}>
              <ListItemText
                primary="Direct Message"
                sx={{ color: "black", fontWeight: "bold" }}
              />
              <ListItemIcon>
                {showMessageMenu ? <ExpandLess /> : <ExpandMore />}
              </ListItemIcon>
            </ListItemButton>
            <Collapse in={showMessageMenu} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton
                  sx={{ pl: 4 }}
                  onClick={() => setRenderMessage("inbox")}
                >
                  <ListItemText primary="Joseph" />
                </ListItemButton>
                <ListItemButton
                  sx={{ pl: 4 }}
                  onClick={() => setRenderMessage("inbox")}
                >
                  <ListItemText primary="Smith" />
                </ListItemButton>
                <ListItemButton
                  sx={{ pl: 4 }}
                  onClick={() => setRenderMessage("inbox")}
                >
                  <AddBoxOutlinedIcon
                    sx={{ color: "gray", marginRight: "8px" }}
                  />
                  <ListItemText primary="Add Teammates" />
                </ListItemButton>
              </List>
            </Collapse>
          </List>
          <List sx={{ width: "100%" }} component="nav">
            <ListItemButton onClick={handleFavouritesClick}>
              <ListItemText
                primary="Apps"
                sx={{ color: "black", fontWeight: "bold" }}
              />
              <ListItemIcon>
                {openFavourites ? <ExpandLess /> : <ExpandMore />}
              </ListItemIcon>
            </ListItemButton>
            <Collapse in={openFavourites} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton
                  sx={{ pl: 4 }}
                  onClick={() => setRenderMessage("inbox")}
                >
                  <ListItemText primary="# zoomcar" />
                </ListItemButton>
                <ListItemButton
                  sx={{ pl: 4 }}
                  onClick={() => setRenderMessage("inbox")}
                >
                  <ListItemText primary="# zomato" />
                </ListItemButton>
              </List>
            </Collapse>
          </List>
        </div>
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            height: "auto",
            // overflowY: "scroll",
          }}
        >
          {renderMessageTemplate(renderMessage)}
        </Box>
      </div>
    </div>
  );
}

export default Message;

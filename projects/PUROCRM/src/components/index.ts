//common
export {
  OtpInput,
  Stepper,
  ThemeMenu,
  StatusMenu,
  UserMenu,
  LoadingSpinner,
} from "./common";

//auth route
export { default as Authenticated } from "./Authenticated/Authenticated";

//admin headermenu
export {
  AdminFilterMenu,
  AdminProfileMenu,
  AdminRegionMenu,
  AdminStatusMenu,
  AdminThemeMenu,
  AdminUserMenu,
  AdminInboxBar,
  AdminMessageBar,
  AdminNotificationsBar,
  AdminFavoritesBar,
  AdminInboxBarOptions,
  AdminInboxItem,
  AdminNotificationItem,
  AdminMessageBarChat,
  AdminMessageItem,
  AdminMessageTopOptions,
  AdminMessageBarOptions,
  AdminEmailItem,
  AdminChatMessage,
  AdminChatOptions,
} from "./AdminPortal/HeaderComps";

//coach headermenu
export {
  CoachFilterMenu,
  CoachProfileMenu,
  CoachRegionMenu,
  CoachStatusMenu,
  CoachThemeMenu,
  CoachUserMenu,
  CoachInboxBar,
  CoachMessageBar,
  CoachNotificationsBar,
  CoachFavoritesBar,
  CoachInboxBarOptions,
  CoachInboxItem,
  CoachNotificationItem,
  CoachMessageBarChat,
  CoachMessageItem,
  CoachMessageTopOptions,
  CoachMessageBarOptions,
  CoachEmailItem,
  CoachChatMessage,
  CoachChatOptions,
} from "./CoachPortal/HeaderComps";

//client headermenu
export {
  ClientFilterMenu,
  ClientProfileMenu,
  ClientInboxBar,
  ClientMessageBar,
  ClientNotificationsBar,
  ClientFavoritesBar,
  ClientInboxBarOptions,
  ClientInboxItem,
  ClientNotificationItem,
  ClientMessageBarChat,
  ClientMessageItem,
  ClientMessageTopOptions,
  ClientMessageBarOptions,
  ClientEmailItem,
  ClientChatMessage,
  ClientChatOptions,
} from "./ClientPortal/HeaderComps";

//coach onboarding page
export {
  CoachStartCheckModal,
  CoachOnboardingStep,
  CoachFlowContainer,
  CoachStepper,
} from "./CoachPortal/OnboardingPage";

//coach onboarding page
export { ClientOnboardingStep } from "./ClientPortal/OnboardingPage";

//login page
export {
  ClientRegistrationModal1,
  ClientRegistrationModal2,
  ClientRegistrationModal3,
  CoachSignupModal1,
  CoachSignupModal2,
  CoachSignupModal3,
  CoachSignupModal4,
  CreateAccountModal,
  ForgotPasswordModal,
  RegistrationSuccessModal,
  SignupSuccessModal,
  Chip,
} from "./LoginPage";

//resetpasswordpage
export { ResetPasswordSuccessModal } from "./ResetPasswordPage";

//twofa
export {
  Screen1Modal,
  Screen2Modal,
  Screen3Modal,
  Screen4Modal,
  Screen5Modal,
  Screen6Modal,
  Option,
  SuccessModal,
} from "./TwoFA";

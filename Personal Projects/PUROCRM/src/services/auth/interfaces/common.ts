export interface BackendError {
  error: {
    message: string;
    errors?: {
      message: string;
    }[];
  };
}

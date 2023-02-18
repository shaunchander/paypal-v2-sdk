import APIError from "@Errors/APIError.js";

class TrackerUpdateOrCancelError extends APIError {
  declare data: unknown;
  constructor(message: string, data: unknown) {
    super(message, data);
  }
}

export default TrackerUpdateOrCancelError;
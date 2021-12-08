export type ErrorMessage = string;

export type SuccessResponse<T> = {
  status: 'success';
  data: T;
  [key: string]: unknown;
};

export type FailureResponse = {
  status: 'fail' | 'error';
  message: ErrorMessage;
};

export type ServerResponse<T> = SuccessResponse<T> | FailureResponse;

export type ServerDocsType<T> = {
  docs: T;
};

export type ServerDocType<T> = {
  doc: T;
};

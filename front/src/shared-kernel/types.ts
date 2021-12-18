export type ErrorMessage = string;

export type SuccessResponse<T> = {
  status: 'success';
  data: ServerDocsType<T> | ServerDocType<T> | T;
  [key: string]: unknown;
};

export type FailureResponse = {
  status: 'fail' | 'error';
  message: ErrorMessage;
  [key: string]: unknown;
};

export type ServerResponse<T> = SuccessResponse<T> | FailureResponse;

export type ServerDocsType<T> = {
  docs: T;
};

export type ServerDocType<T> = {
  doc: T;
};

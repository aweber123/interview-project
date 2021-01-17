export const startAction = (type, meta = {}, options = {}) => ({
  type,
  meta,
  options,
});

export const successAction = (type, json, meta = {}, options = {}) => ({
  type,
  payload: json,
  meta: {
    ...meta,
    lastFetch: Date.now(),
  },
  options: {
    ...options,
  },
});

export const errorAction = (type, error, meta = {}, options = {}) => ({
  type,
  payload: error,
  error: true,
  meta: {
    ...meta,
    lastError: Date.now(),
  },
  options: {
    ...options,
  },
});

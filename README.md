# Uncommon Node.js Server Error: ECONNRESET due to Open Connection

This repository demonstrates an uncommon but potentially problematic error in Node.js server development.  The issue stems from failing to properly close the HTTP response, leading to an open connection and eventual `ECONNRESET` errors.

## Bug Description

The `bug.js` file contains a simple HTTP server that intentionally keeps the connection open indefinitely. This can cause issues under load or with certain clients.  After a period of inactivity the client will close the connection resulting in the ECONNRESET error.

## Bug Solution

The `bugSolution.js` file provides a corrected version of the server that properly closes the connection using `res.end()`.  This ensures that resources are released and prevents the `ECONNRESET` error.

## How to Reproduce

1. Clone the repository.
2. Navigate to the directory.
3. Run `node bug.js`.
4. Attempt a request to `http://localhost:3000` using a client like `curl` or a browser. Observe the behavior after a period of time.
5. Repeat the process with `node bugSolution.js`. Observe the corrected behavior.

This example highlights the importance of properly managing connections in Node.js servers to prevent resource leaks and unexpected errors.
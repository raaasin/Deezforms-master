# DeezForms Backend

This repository contains the backend code for the DeezForms application. DeezForms is an application that leverages the RoBERTa model for natural language processing to provide custom responses to user-defined queries. This Flask-based backend serves as the core of the DeezForms application.

## Table of Contents

- [Getting Started](#getting-started)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)

## Getting Started

To get started with the DeezForms backend, follow these steps:

1. Clone this repository to your local machine:

```shell
git clone https://github.com/raaasin/deezforms-backend
```

2. Install the required dependencies:

```shell
pip install -r requirements.txt
```

3. Run the Flask application:

```shell
python app.py
```

The backend server will start on `http://0.0.0.0:5000/`.

## Usage

The DeezForms backend provides an API for custom queries. You can use this API to send JSON data with query keys and receive responses from the RoBERTa model. The responses are generated based on the provided queries.

## API Endpoints

### 1. `GET /`

- Description: A simple endpoint to check if the backend is running.
- Response: JSON response with a message.

### 2. `POST /api/custom`

- Description: Send a JSON payload with custom queries to get responses.
- Request:
  - Method: POST
  - Headers: `Content-Type: application/json`
  - Body: JSON data with query keys.

Example JSON Request:

```json
{
  "Name": "",
  "Why do you want this job": ""
}
```

- Response: JSON response with responses to the provided queries.

Example JSON Response:

```json
{
  "Name": "Nisar Ahmed",
  "Why do you want this job": "I am talented"
}
```

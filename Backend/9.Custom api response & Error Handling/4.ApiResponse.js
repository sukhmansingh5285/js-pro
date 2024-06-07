class ApiResponse{
  constructor(statusCode, data, message="Success"){
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;
    this.success = statusCode<400;
  }
}















// A little talk about the statusCode

// 1. Informational Responses (100-199)
// 2. Successful Responses (200-299)
// 3. Redirection Messages (300-399)
// 4. Client Error Responses (400-499)
// 5. Server Error Responses (500-599)
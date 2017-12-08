import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ServerService {
  constructor (private http: HttpClient) { }

  /**
   * Method: POST
   * Endpoint /api/login
   * Inputs:
   *   Type   Location   Description
   *   json   body       Data is passed in a JSON format in the body of the
   *                     request. The JSON fields include `username`, which is
   *                     the string username, and `password`, which is the
   *                     string password.
   * Response:
   *   Status: 200
   *   Type: text
   *   Description: The JWT token used to identify the user on future requests.
   */
  public login (username: string, password: string) {
  }
}

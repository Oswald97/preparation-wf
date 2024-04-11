/**
 * 
 * @param a first number we do want to sum
 * @param b second number we do want to sum
 * @returns the sum  of both numbers. If any of them is not a number, it will return NaN
 */

import { redirect } from "react-router-dom";
import { LS_TOKEN_KEY } from "./_constants";


export function sum(a:number, b:number) {
    return a+b;
}

export function getAccessToken() {
  
  let tokens = localStorage.getItem(LS_TOKEN_KEY)
  if(tokens){
        return JSON.parse(tokens)?.access_token
    }
    return null
}

export function checkAuth() {
    const token = getAccessToken()
    if(!token) {
        return redirect('/auth/login');
    }
    return null;
}

export function logoutAction() {
  localStorage.removeItem(LS_TOKEN_KEY)
  return redirect('/auth/login');
}
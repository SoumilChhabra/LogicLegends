import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SignupWrapper = styled.div`
  text-align: center;
  padding: 50px 20px;
`;

const SignupSection = styled.section`
  margin-top: 50px;
`;

const SignupForm = styled.form`
  max-width: 400px;
  margin: 0 auto;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Label = styled.label`
  flex: 0 0 30%;
  text-align: right;
  margin-right: 10px;
  font-weight: bold;
  color: #333;
`;

const Input = styled.input`
  flex: 0 0 70%;
  padding: 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const SignupButton = styled.button`
  width: 100%;
  padding: 12px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const LoginLink = styled(Link)`
  display: block;
  margin-top: 20px;
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

function Signup() {
  return (
    <div className="text-center py-20 px-4 sm:px-6 lg:px-8">
      <header>
        <h1 className="text-4xl font-bold text-tropical-blue-800 mb-4">Welcome to Event Ticketing</h1>
        <p className="text-lg text-gray-600 mb-8">Discover amazing things</p>
      </header>
      <main className="max-w-md mx-auto bg-gray-50 rounded-lg shadow-2xl p-8">
        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="fullName" className="block text-left text-tropical-blue font-bold mb-2">Full Name:</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Enter your full name"
                className="w-full px-4 py-3 text-base border border-solid border-gray-300 rounded transition duration-300 focus:outline-none focus:border-tropical-blue"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-left text-tropical-blue font-bold mb-2">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 text-base border border-solid border-gray-300 rounded transition duration-300 focus:outline-none focus:border-tropical-blue"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-left text-tropical-blue font-bold mb-2">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                className="w-full px-4 py-3 text-base border border-solid border-gray-300 rounded transition duration-300 focus:outline-none focus:border-tropical-blue"
                required
              />
            </div>
            <Link to="/event-list">
              <button
                type="submit"
                className="w-full px-4 py-3 text-base bg-tropical-blue-500 text-white rounded cursor-pointer transition duration-300 hover:bg-blue-600"
              >
                Sign Up
              </button>
            </Link>
            <p className="text-gray-700 mt-4">Already have an account? <Link to="/" className="text-tropical-blue-500">Log in here</Link></p>
          </form>
        </section>
      </main>
    </div>
  );
}
export default Signup;
#!/bin/bash

# Simple Interest Calculator Script in Bash
# Formula: Simple Interest = (Principal * Rate * Time) / 100

echo "---------------------------------------------"
echo "         Simple Interest Calculator          "
echo "---------------------------------------------"

# Input Principal Amount
read -p "Enter the Principal Amount (P): " principal

# Input Rate of Interest
read -p "Enter the Annual Rate of Interest in % (R): " rate

# Input Time Period in Years
read -p "Enter the Time Period in Years (T): " time

# Calculate Simple Interest and Total Amount using 'bc' for floating-point arithmetic
interest=$(echo "scale=2; ($principal * $rate * $time) / 100" | bc)
total=$(echo "scale=2; $principal + $interest" | bc)

echo "---------------------------------------------"
echo "Results:"
echo "Principal Amount : $principal"
echo "Interest Rate    : $rate%"
echo "Time Period      : $time years"
echo "Simple Interest  : $interest"
echo "Total Amount     : $total"
echo "---------------------------------------------"

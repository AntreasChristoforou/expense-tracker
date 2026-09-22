# Expense Tracker

A simple expense tracker built with React and Vite. Add expenses
with a name, amount, and category, delete them, and filter by
category. The total updates to match the filter.

## Features
- Add expenses with validation for empty or invalid amounts
- Delete expenses
- Filter by category, with a total that follows the filter

## Built with
- React (useState, props, component composition)
- Vite

## Components
- `ExpenseForm` handles inputs, validation, and its own state
- `FilterBar` shows the category buttons
- `ExpenseList` / `ExpenseItem` render the expenses
- `App` owns the expense list and the selected filter

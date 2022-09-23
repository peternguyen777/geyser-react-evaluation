# Evaluations

This directory contains a few alternative evaluation options. They all consist of implementing a view based on a provided design.

## Options

1. 💸 [Implement an Invoice View](invoice/README.md)

## Evaluation Criteria

- [ ] UI: the design was implemented with good **fidelity**
- [ ] UX: the implementation is **functional** and **fluid**
- [ ] Code: the code is **structured** and **readable**
- [ ] **Bonus** UI: the design was modified to offer an improved version

## Extra Mile

At Geyser, we appreciate team members that take ownership and go the extra mile. Don't feel constrained by the evaluations' task description. Feel free to edit the boiler plate app in any way you see fit.

Make sure to report on any modifications you implement. Describe your motivation and reasoning for every change you make.

## My comments

Evaluation Completed 23/9/2022

UI:

- Required: Implemented Payment screen as per Figma file/Screenshots.
- Required: Invoice is copied when QR Code or "Copy Address Button" is clicked. Mock payment success with a 5second setTimeout after QR is copied.

UX:

- Required: Implemented Fund, Confirm and Success stages.

Code Structure:

- Code is organized into components (see /src/components folder), including Icons and ProjectLayout folders containing menus, project description and fund/confirm/success.
- Global styles set in theme.ts. Consistent styling applied to text, inputs etc.
- State management organised by Redux slices (UI, Funding Info, Payment Stage, Current User )
- Used only ChakraUI CSS props.

Bonus:

- Added a responsive menu: pop-up sidebar for smaller mobile screens.
- API call current BTC price to show up-to-date Sat to USD conversion.
- User info, Reward Data, Funding Info, Payment Stage managed with Redux Toolkit.

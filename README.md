# Payment Aggregator API

This project is a Node.js API for retrieving the payment aggregator with the minimum transaction charges based on the card type. It takes a card number as input, detects the card type, and returns a sorted list of payment aggregators with their transaction charges in ascending order.

## Features

- Detects the card type based on the card number provided.
- Filters payment aggregators based on supported card types.
- Sorts the list of available payment aggregators by transaction charges in ascending order.
- Loads payment aggregator data from an external JSON file (`paymentAggregators.json`), making it easy to update the list of aggregators and their charges.

## Prerequisites

- Node.js (version 12 or higher)

## Installation


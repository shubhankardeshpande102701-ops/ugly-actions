# Architecture

## Current V1

The project is a Next.js app with local product data.

- `src/app` contains routes.
- `src/components` contains reusable UI.
- `src/data/products.ts` holds the first product catalog.
- `src/lib/shopify` is reserved for the future Shopify Storefront API integration.
- `src/lib/analytics` is reserved for future privacy-conscious analytics helpers.

## Data Flow

For v1, pages import products from `src/data/products.ts`. Product detail routes use the product slug to find a matching product.

Later, this local product shape can be replaced or mapped to Shopify product data.

## Why This Setup

This keeps the project simple enough to learn while still using a structure that can grow into a real storefront.

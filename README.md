# ACLED Dashboard

A risk intelligence dashboard application for monitoring conflict zones and security incidents.

## Project Structure

```
acled/
├── components/           # Reusable UI components
├── lib/                  # Utility functions and data
├── ui/                   # Page-specific UI components
│   └── dashboard/        # Dashboard-related components
│       └── Risk.tsx      # Risk intelligence component
├── public/               # Static assets
├── Dockerfile            # Docker configuration
├── compose.yml           # Docker Compose configuration
├── package.json          # Project dependencies and scripts
└── README.md             # Project documentation
```

## Features

- Risk assessment tools for conflict zones
- Real-time alerts for security incidents
- Data visualization with charts and graphs
- Filtering by region and timeframe
- Detailed risk analysis by region

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Recharts for data visualization
- Docker for containerization

## Getting Started

### Prerequisites

- Node.js 20 or higher
- npm, yarn, or pnpm
- Docker and Docker Compose (for containerized deployment)

### Local Development

1. Clone the repository:

```bash
git clone <repository-url>
cd acled
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
# or
yarn build
# or
pnpm build
```

### Running with Docker Compose

1. Build and start the containers:

```bash
docker compose up
```

2. Access the application at [http://localhost:3100](http://localhost:3100).

3. To stop the containers:

```bash
docker compose down
```

## License

[Include your license information here]

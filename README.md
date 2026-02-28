# 🚀 CI/CD Pipeline Demo

Complete CI/CD pipeline with GitHub Actions, Docker, and automated testing.

## 🏗️ Architecture
┌─────────────────┐     ┌──────────────────┐     ┌─────────────────┐
│   Git Push      │────▶│  GitHub Actions  │────▶│  Docker Build   │
│                 │     │  - Run Tests     │     │  - Push Image   │
│                 │     │  - Build Image   │     │  - Deploy       │
└─────────────────┘     └──────────────────┘     └─────────────────┘


## 🚀 Quick Start

### Local Development

```bash
npm install
npm test
npm start

Docker
docker build -t cicd-demo-app .
docker run -d -p 3000:3000 cicd-demo-app
curl http://localhost:3000/health

📁 Project Structure
cicd-pipeline-demo/
├── .github/workflows/ci.yml
├── server.js
├── server.test.js
├── package.json
├── Dockerfile
└── README.md

🧪 Testing
npm test

🔄 CI/CD Pipeline
| Stage      | Description           |
| ---------- | --------------------- |
| **Test**   | Run Jest tests        |
| **Build**  | Build Docker image    |
| **Verify** | Test container health |

🛠️ Tech Stack
| Stage      | Description           |
| ---------- | --------------------- |
| **Test**   | Run Jest tests        |
| **Build**  | Build Docker image    |
| **Verify** | Test container health |

📊 Endpoints
| Endpoint  | Description   |
| --------- | ------------- |
| `/`       | Hello message |
| `/health` | Health check  |


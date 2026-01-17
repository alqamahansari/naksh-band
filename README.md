# Naksh Band — Authentic Banarasi Fabric House

Naksh Band is a heritage Banarasi handloom platform rooted in Varanasi, dedicated to preserving authentic Banarasi weaving through ethical production, transparent provenance, and contemporary restraint.  
The platform combines cultural preservation with modern engineering: AI advisory, image-backed provenance, and a production-ready DevOps pipeline.

## ✨ Highlights

- **Authentic Heritage**: Handloom-only Banarasi borders, sarees, and fabrics woven in Varanasi  
- **Trust & Provenance**: Visual proof with Varanasi HQ and authenticity certificate images  
- **AI Fabric Advisor**: Ethical LLM guiding designers and buyers to the right weave, zari, and motif  
- **Scalable Engineering**: Dockerized app with GitHub Actions CI


## 🏛️ Philosophy

**NAKSH BAND™** is a heritage Banarasi handloom house rooted in Banaras, dedicated to preserving authentic Banarasi weaving through ethical production, transparent provenance, and contemporary restraint.

Owned and produced by **Ansari Fabric Pvt Ltd**, a community-rooted textile manufacturing company based in Varanasi, Uttar Pradesh, India.


## 🧭 Site Structure

- **Home** — Heritage authority, trust anchors (HQ & Certificate)  
- **Collections** — Sarees · Borders · Fabrics  
- **Borders (Products)** — Image-backed catalogue with filters  
- **Product Detail** — Craft, availability, export info, enquiry  
- **About** — Craft Protocol & Heritage Timeline  
- **Advisor** — AI-powered Banarasi Fabric Advisor  
- **Contact** — Enquiry & WhatsApp


## 🧠 AI Advisor (Ethical LLM)

- Product-aware recommendations  
- Heritage-aligned system prompt  
- Ready for RAG with Banarasi knowledge corpus  

> Next: Multimodal RAG (image captions + embeddings) for motif understanding


## 🧱 Tech Stack

- **Frontend**: React + Vite + Tailwind CSS  
- **Animation**: Framer Motion  
- **AI**: OpenAI SDK (ready)  
- **DevOps**: Docker, Docker Compose, GitHub Actions CI  
- **Security**: (Planned) Trivy vulnerability scanning  


## 🚀 Getting Started

### Local (Node)
```bash
npm install
npm run dev
```

### Local(Docker)
```bash
docker compose up --build
# Open http://localhost:8080
```

## 🐳 Docker
Dockerfile builds a production image (Node build → Nginx serve).<br>
docker-compose.yml exposes the site on `:8080`.

## 🔁 CI/CD (GitHub Actions)
- Install deps
- Lint (if present)
- Build
- Build Docker image

## 📁 Assets
```bash
 src/assets/
  about/        # varanasi-hq.jpg, certificate.jpg
  borders/      # product images
```

## ➕ Add a New Product
1. Add image to src/assets/borders/
2. Import it in src/data/products.js
3. Add a product entry (id, name, motif, zari, width, image, stores, exportInfo)
The product appears automatically across the site and AI advisor.

## 🛡️ Roadmap
- Trivy security scanning (DevSecOps)
- Multimodal RAG for motif understanding
- Provenance QR verification system
- Weaver digital registry & fair pricing AI
- Research preprint:
- Ethical LLMs for Cultural Heritage Preservation: A Banarasi Case Study

## 🤝 Contributing
Contributions are welcome — especially in:
- Ethical AI
- Cultural heritage preservation
- Security & DevSecOps
- MLOps / LLMOps

## 📜 License
MIT — Use with respect for cultural heritage.

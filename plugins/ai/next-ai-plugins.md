# Next.js AI Plugin Registry

This is the planning registry for AI tooling that may belong in the Ugly Actions app later.

## Installed Now

| Plugin | Purpose | Status |
| --- | --- | --- |
| Impeccable | Design audit and AI design workflow support | Installed as dev dependency |
| UI/UX Pro Max | UI/UX skill set and design intelligence references | Installed as dev dependency plus vendored skill files |
| Framer Motion | React animation library | Installed as app dependency |

## Strong Candidates For Later

| Plugin | Package | Use Case |
| --- | --- | --- |
| Vercel AI SDK | `ai`, `@ai-sdk/react` | Streaming chat, AI route handlers, generative UI |
| OpenAI SDK | `openai` | Product copy generation, style assistant, future admin tools |
| Browser AI / Transformers.js | `@huggingface/transformers` or browser-focused wrappers | Local browser inference experiments |
| LangChain | `langchain` | Workflow chains and retrieval experiments |
| LlamaIndex | `llamaindex` | RAG over brand docs and product data |
| Zod | `zod` | Validate AI inputs/outputs and tool schemas |

## Not Installing Yet

These are intentionally not installed yet because the storefront does not currently include an AI feature. Adding every AI package now would slow installs, increase audit noise, and make the project harder to learn.

When we add the first real AI feature, start with:

```bash
npm install ai @ai-sdk/react openai zod
```

Then create:

```txt
src/app/api/ai/
src/components/ai/
src/lib/ai/
```

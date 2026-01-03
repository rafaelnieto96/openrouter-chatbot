// Model configuration constants for available AI models on OpenRouter

// Available AI models with their OpenRouter IDs and display labels
// All models are free tier options
export const MODELS = [
    { id: 'mistralai/devstral-2512:free', label: 'Devstral 2', shortLabel: 'Devstral 2' },
    { id: 'nex-agi/deepseek-v3.1-nex-n1:free', label: 'DeepSeek V3.1 Nex N1', shortLabel: 'DeepSeek V3.1' },
    { id: 'amazon/nova-2-lite-v1:free', label: 'Amazon Nova 2 Lite', shortLabel: 'Nova 2 Lite' },
    { id: 'arcee-ai/trinity-mini:free', label: 'Arcee Trinity Mini', shortLabel: 'Trinity Mini' },
    { id: 'tngtech/tng-r1t-chimera:free', label: 'TNG R1T Chimera', shortLabel: 'R1T Chimera' },
    { id: 'allenai/olmo-3-32b-think:free', label: 'Olmo 3 32B Think', shortLabel: 'Olmo 3 Think' },
    { id: 'kwaipilot/kat-coder-pro:free', label: 'KAT-Coder-Pro V1', shortLabel: 'KAT-Coder-Pro' },
    { id: 'nvidia/nemotron-nano-12b-v2-vl:free', label: 'Nemotron Nano 12B 2 VL', shortLabel: 'Nemotron 12B VL' },
    { id: 'alibaba/tongyi-deepresearch-30b-a3b:free', label: 'Tongyi DeepResearch 30B', shortLabel: 'DeepResearch 30B' },
]

// Set of model IDs that support vision/image analysis capabilities
export const VISION_MODEL_IDS = new Set([
    'amazon/nova-2-lite-v1:free',
    'nvidia/nemotron-nano-12b-v2-vl:free',
])

// Model ID for Nova that supports file attachments
export const NOVA_FILE_MODEL_ID = 'amazon/nova-2-lite-v1:free'
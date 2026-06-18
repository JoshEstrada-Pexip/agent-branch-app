// ───────────────────────────────────────────────────────────────────────────────
// File: masterVariables.example.ts
// Copy this file to masterVariables.ts and fill in your environment values.
// ───────────────────────────────────────────────────────────────────────────────

export const MasterVariables = {
  // Pexip API (Client/Conference Node) used to initiate sessions and make API calls
  pexip: {
    nodeUrl: "https://your-pexip-node.example.com",
  },

  // where the conference dials first (SIP, audio-only)
  dialPlan: {
    contactCenterAlias: "+18005551234@your-region.byoc.pure.cloud",
    role: "HOST" as const,
    protocol: "sip" as const,
    callType: "audio" as const,
  },

  // Genesys Cloud environment where the widget is hosted
  genesys: {
    cloudRegion: "your-region.pure.cloud",
    clientId: "your-genesys-client-id",

    // External Contacts filters
    filterExternalContacts: true,
    externalOrganizationName: "Your Organization Name",

    // Optional source filter (off by default)
    applySourceFilter: false,
    externalSourceId: "your-external-source-id",

    // (Outbound contact list -- may not be used)
    outboundContactListId: undefined,
    outboundWorkColumn: "WORK",
    outboundNameColumn: "NAME",
  },

  // OPTIONAL: manual static fallback choices
  staticDialAliases: [
    // "room-01@example.com",
  ],

  ui: {
    brand: {
      accent: "#FF4F1F",
      bg: "#0B0B0D",
      fg: "#F4F6F8",
      muted: "#9AA0A6",
      card: "#141518",
      ring: "#2A2D33",
      textPrimary: "#F4F6F8",
      textSecondary: "#9AA0A6",
      textOnAccent: "#0B0B0D",
      errorText: "#FFB3A6",
    },
    // simple feature toggles for visibility of form sections
    toggles: {
      showPexipServer: false,
      showManualAlias: true,
      showSessionAlias: false,
    },
    /** Display name used for the External Device (Leg 3) dial-out */
    externalDeviceDisplayName: "Genesys Widget",
  },

  // name of the hosting folder for the compiled app
  basePath: "/telecom/agent-branch/",

  conference: {
    aliasPrefix: "genesys-pex-",
    randomAlias: () => `genesys-pex-${Math.random().toString(36).slice(2, 8)}`,
    pin: "",
  },
};

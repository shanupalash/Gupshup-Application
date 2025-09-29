import { create } from "zustand";

export const useZustandStore = create((set) => ({
  selectedConversation: null,
  messages: [],
  setSelectedConversation: (selectedConversation) =>
    set({ selectedConversation }),
  setMessages: (messages) => set({ messages }),
}));

"use client";

import React, { useState } from "react";
import { X, MessageCircle } from "lucide-react";

export default function FeedbackButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop button – vertical text */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed right-0 top-1/2 -translate-y-1/2 z-40 bg-gray-800 text-white py-3 px-3 rounded-l-sm shadow-sm hover:bg-gray-900 transition-all duration-200 hidden md:flex items-center justify-center"
      >
        <span className="[writing-mode:vertical-rl] text-sm font-medium whitespace-nowrap">
          Feedback
        </span>
      </button>

      {/* Mobile button – small circular icon */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 z-40 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-900 transition-all duration-200 flex md:hidden items-center justify-center"
      >
        <MessageCircle className="w-5 h-5" />
      </button>

      {/* Modal (unchanged) */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-card rounded-xl shadow-2xl w-full max-w-md p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition"
            >
              <X className="w-5 h-5" />
            </button>
            <h2 className="text-2xl font-bold mb-4">We value your feedback</h2>
            <p className="text-muted-foreground mb-6">
              Help us improve your experience. Share your thoughts or report an issue.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const feedback = formData.get("feedback");
                console.log("Feedback submitted:", feedback);
                setIsOpen(false);
              }}
              className="space-y-4"
            >
              <textarea
                name="feedback"
                rows={4}
                placeholder="Tell us what you think..."
                className="w-full p-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                required
              />
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 rounded-lg border border-border hover:bg-muted transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition"
                >
                  Send feedback
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
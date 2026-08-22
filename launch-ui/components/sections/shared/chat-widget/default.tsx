"use client";
import { useState } from "react";
import { MessageCircle } from "lucide-react";
import Script from "next/script";

export default function OptimizedChat() {
  const [loadChat, setLoadChat] = useState(false);

  return (
    <>
      {/* Show a static button (loads instantly) */}
      {!loadChat && (
        <button
          onClick={() => setLoadChat(true)}
          className="fixed bottom-4 right-4 z-50 bg-primary text-white p-3 rounded-full shadow-lg hover:scale-105 transition"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {/* Load the heavy chat script only after button click */}
      {loadChat && (
        <Script
          id="crisp-lazy"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              window.$crisp = [];
              window.CRISP_WEBSITE_ID = "5d6e105e-530c-49f3-becd-43257d601c33";
              (function() {
                var d = document;
                var s = d.createElement("script");
                s.src = "https://client.crisp.chat/l.js";
                s.async = true;
                d.getElementsByTagName("head")[0].appendChild(s);
              })();
            `,
          }}
        />
      )}
    </>
  );
}
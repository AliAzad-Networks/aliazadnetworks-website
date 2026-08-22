"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

export default function ContactHero({ className }: { className?: string }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Section className={cn("py-16 md:py-24", className)}>
      <div className="max-w-container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Side - Text Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 mb-6">
              <div className="flex items-center -space-x-2">
                <img 
                  className="w-6 h-6 rounded-full border border-green-500" 
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=50" 
                  alt="user"
                />
                <img 
                  className="w-6 h-6 rounded-full border border-green-500" 
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=50" 
                  alt="user"
                />
                <img 
                  className="w-6 h-6 rounded-full border border-orange-500" 
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=50" 
                  alt="user"
                />
              </div>
              <span className="text-xs text-orange-400">Join 100+ founders</span>
            </div>
            
            {/* Heading */}
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-4">
              Ready to Transform Your{" "}
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Technology Experience?
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-black text-lg mb-8 max-w-md mx-auto lg:mx-0">
              Let our design team craft a website that elevates your brand. Book a free session today.
            </p>
          </div>
          
          {/* Right Side - Form */}
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Eden Johnson" 
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                />
              </div>
  
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Eden@example.com" 
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                />
              </div>
  
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea 
                  placeholder="Write your message here..." 
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition resize-none"
                />
              </div>
  
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <p className="text-xs text-muted-foreground text-center sm:text-left">
                  By submitting, you agree to our{" "}
                  <a href="/terms" className="text-primary hover:underline">Terms</a> and{" "}
                  <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>.
                </p>
                <Button type="submit" size="lg" className="w-full sm:w-auto">
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
}